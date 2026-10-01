import { useEffect } from "react";

export function usePortfolioEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--mx", `${event.clientX}px`);
      root.style.setProperty("--my", `${event.clientY}px`);
    };

    const supportsPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (supportsPointer) window.addEventListener("pointermove", onPointerMove, { passive: true });

    const items = document.querySelectorAll<HTMLElement>(".card, section h2, section .sub");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("visible"));
      return () => {
        if (supportsPointer) window.removeEventListener("pointermove", onPointerMove);
      };
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -4% 0px" });

    items.forEach((item) => {
      item.classList.add("reveal");
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
      if (supportsPointer) window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);
}
