import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "../data/siteData";
import { ArrowRightIcon, BrandMark, CloseIcon, MenuIcon } from "./Icons";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  // Zero-reflow scroll detection via IntersectionObserver instead of window scroll listener
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setElevated(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape and restore focus to trigger button
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#065F46] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* 1px sentinel at page top drives sticky shadow without reading scrollY */}
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-px w-full"
      />

      <header
        className={`sticky top-0 z-40 w-full transition-shadow duration-200 ${
          elevated
            ? "border-b border-[#E5E5E0] bg-[#FAFAF9]/95 shadow-xs backdrop-blur-md"
            : "border-b border-transparent bg-[#FAFAF9]/90"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            className="inline-flex items-center gap-2.5 rounded-lg py-1 text-[#111113]"
            aria-label="Meridian Commerce home"
          >
            <BrandMark className="h-8 w-8 shrink-0" />
            <span className="font-[var(--font-display)] text-lg font-bold tracking-tight">
              Meridian
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-1 py-1 text-sm font-medium text-[#3F3F46] transition-colors hover:text-[#065F46]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#065F46] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#064E3B]"
            >
              Book Free Audit
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5E5E0] bg-white text-[#111113] transition-colors hover:bg-[#F4F4F0] md:hidden"
          >
            {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-[#E5E5E0] bg-white px-4 pt-3 pb-5 shadow-md md:hidden"
          >
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-[#111113] transition-colors hover:bg-[#F4F4F0] hover:text-[#065F46]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-[#E5E5E0] pt-4">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#065F46] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#064E3B]"
              >
                Book Free Growth Audit
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
