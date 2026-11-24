import { CLIENT_BRANDS, HERO_STATS } from "../data/siteData";
import { ArrowRightIcon, CheckIcon } from "./Icons";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-x-clip border-b border-[#E5E5E0] bg-[#FAFAF9] pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left editorial copy — rendered immediately with zero opacity delay */}
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#D1FAE5] bg-[#ECFDF5] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#065F46]">
              <span
                className="h-2 w-2 rounded-full bg-[#059669]"
                aria-hidden="true"
              />
              E-Commerce Growth Studio · Shopify Plus &amp; DTC
            </p>

            <h1
              id="hero-heading"
              className="mt-5 text-4xl font-extrabold tracking-tight text-[#111113] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
            >
              Turn Storefront Traffic Into Predictable Revenue.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4B5563] sm:text-lg">
              We partner with ambitious direct-to-consumer brands to scale paid
              acquisition, eliminate storefront speed bottlenecks, and turn
              first-time shoppers into high-LTV repeat customers.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#065F46] px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#064E3B]"
              >
                Request Free Growth Audit
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-[#D4D4CE] bg-white px-6 py-3.5 text-sm font-semibold text-[#111113] transition-colors hover:border-[#111113] hover:bg-[#F4F4F0]"
              >
                Explore Case Studies
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#4B5563]">
              <li className="inline-flex items-center gap-1.5">
                <CheckIcon className="h-4 w-4 text-[#065F46]" />
                No annual lock-in
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckIcon className="h-4 w-4 text-[#065F46]" />
                Senior CRO &amp; speed engineers
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckIcon className="h-4 w-4 text-[#065F46]" />
                Contribution-margin reporting
              </li>
            </ul>

            <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-[#E5E5E0] pt-7">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs font-medium text-[#52525B]">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-[var(--font-display)] text-2xl font-bold tracking-tight text-[#111113] sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right LCP Hero Visual — responsive WebP, explicit dimensions, high fetch priority */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-[#E5E5E0] bg-[#ECEAE4] shadow-sm">
                <img
                  src="/images/hero-commerce-800.webp"
                  srcSet="/images/hero-commerce-480.webp 480w, /images/hero-commerce-800.webp 800w"
                  sizes="(max-width: 768px) 92vw, 560px"
                  width={800}
                  height={600}
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  alt="Minimalist sunlit luxury skincare serum bottles and folded organic linen textiles arranged on a warm travertine stone pedestal for a high-converting DTC storefront"
                  className="aspect-[4/3] h-auto w-full object-cover"
                />
              </div>

              {/* Clean static proof card — zero layout shift, zero infinite animation loop */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:absolute sm:right-4 sm:bottom-4 sm:left-4 sm:mt-0">
                <div className="rounded-xl border border-[#E5E5E0] bg-white/95 px-4 py-3 shadow-sm backdrop-blur-xs">
                  <p className="text-xs font-medium text-[#52525B]">
                    Mobile Storefront LCP
                  </p>
                  <p className="mt-0.5 font-[var(--font-display)] text-lg font-bold text-[#065F46]">
                    1.1s avg. load
                  </p>
                </div>
                <div className="rounded-xl border border-[#E5E5E0] bg-white/95 px-4 py-3 shadow-sm backdrop-blur-xs">
                  <p className="text-xs font-medium text-[#52525B]">
                    Checkout Conversion
                  </p>
                  <p className="mt-0.5 font-[var(--font-display)] text-lg font-bold text-[#111113]">
                    +41% median lift
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean static client brand strip (zero network images, zero marquee loops) */}
        <div className="mt-14 border-t border-[#E5E5E0] pt-8">
          <p className="text-center text-xs font-semibold tracking-[0.14em] text-[#52525B] uppercase">
            Trusted by category-leading DTC &amp; retail brands
          </p>
          <ul
            aria-label="Featured client brands"
            className="mt-5 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-6"
          >
            {CLIENT_BRANDS.map((brand) => (
              <li
                key={brand}
                className="font-[var(--font-display)] text-xs font-bold tracking-[0.12em] text-[#3F3F46]"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
