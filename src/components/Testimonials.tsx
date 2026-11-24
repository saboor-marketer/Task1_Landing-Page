import { TESTIMONIALS } from "../data/siteData";
import { useReveal } from "../hooks/useReveal";
import { StarIcon } from "./Icons";

export function Testimonials() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="cv-section border-b border-[#E5E5E0] bg-[#FAFAF9] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#065F46] uppercase">
            Client Reviews
          </p>
          <h2
            id="testimonials-heading"
            className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#111113] sm:text-4xl"
          >
            Trusted by founders &amp; heads of e-commerce.
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-[#4B5563]">
            Long-term partnerships built on transparent margin reporting, clean
            frontend engineering, and compounding conversion gains.
          </p>
        </div>

        <div
          ref={revealRef}
          className="reveal mt-10 grid gap-6 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.id}
              className="flex h-full flex-col justify-between rounded-2xl border border-[#E5E5E0] bg-white p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div
                    className="flex items-center gap-0.5 text-[#B45309]"
                    role="img"
                    aria-label="Rated 5 out of 5 stars"
                  >
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                  </div>
                  <span className="rounded-full bg-[#ECFDF5] px-2.5 py-1 text-xs font-semibold text-[#065F46]">
                    {item.resultBadge}
                  </span>
                </div>

                <blockquote className="mt-5 text-sm leading-relaxed text-[#27272A]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-[#F0F0EC] pt-4">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111113] text-xs font-bold text-white"
                >
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111113]">
                    {item.author}
                  </p>
                  <p className="text-xs text-[#52525B]">
                    {item.role}, {item.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
