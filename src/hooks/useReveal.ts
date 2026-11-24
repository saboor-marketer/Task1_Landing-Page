import { useEffect, useRef } from "react";

type ObserverCallback = () => void;

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, ObserverCallback>();

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cb = callbacks.get(entry.target);
            if (cb) {
              cb();
              callbacks.delete(entry.target);
            }
            sharedObserver?.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: "0px 0px -48px 0px",
        threshold: 0.08,
      }
    );
  }

  return sharedObserver;
}

/**
 * Lightweight, zero-re-render scroll reveal hook.
 * Toggles `.is-visible` directly on the DOM node once via a shared IntersectionObserver,
 * avoiding React state updates and avoiding Framer Motion runtime overhead.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    const observer = getSharedObserver();
    if (!observer) {
      el.classList.add("is-visible");
      return;
    }

    callbacks.set(el, () => {
      el.classList.add("is-visible");
    });
    observer.observe(el);

    return () => {
      callbacks.delete(el);
      observer.unobserve(el);
    };
  }, []);

  return ref;
}
