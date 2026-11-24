import { NAV_LINKS } from "../data/siteData";
import { BrandMark } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E0] bg-[#111113] text-[#D4D4D8]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 rounded-lg text-white"
              aria-label="Meridian Commerce home"
            >
              <BrandMark className="h-8 w-8 shrink-0" />
              <span className="font-[var(--font-display)] text-lg font-bold tracking-tight">
                Meridian Commerce
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A1A1AA]">
              Performance-engineered e-commerce marketing, CRO, and storefront
              speed optimization for high-growth DTC and Shopify Plus brands.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7"
          >
            <div>
              <h2 className="text-xs font-semibold tracking-wider text-white uppercase">
                Explore
              </h2>
              <ul className="mt-3.5 space-y-2.5 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="rounded-sm text-[#D4D4D8] transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold tracking-wider text-white uppercase">
                Specialties
              </h2>
              <ul className="mt-3.5 space-y-2.5 text-sm text-[#D4D4D8]">
                <li>
                  <a href="#services" className="transition-colors hover:text-white">
                    Shopify Plus CRO
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:text-white">
                    Core Web Vitals
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:text-white">
                    Paid Social Scaling
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:text-white">
                    Klaviyo Retention
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-xs font-semibold tracking-wider text-white uppercase">
                Studio
              </h2>
              <address className="mt-3.5 space-y-2 text-sm not-italic text-[#D4D4D8]">
                <p>New York &amp; Copenhagen</p>
                <p>
                  <a
                    href="mailto:hello@meridiancommerce.example"
                    className="transition-colors hover:text-white"
                  >
                    hello@meridiancommerce.example
                  </a>
                </p>
                <p className="text-xs text-[#A1A1AA]">Mon – Fri · 9am – 6pm EST</p>
              </address>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#27272A] pt-6 text-xs text-[#A1A1AA] sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Meridian Commerce Studio. All rights reserved.</p>
          <p>Built for sub-second speed &amp; WCAG AAA accessibility.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
