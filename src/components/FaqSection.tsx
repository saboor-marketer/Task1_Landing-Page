import { useState } from "react";
import { FAQ_ITEMS } from "../data/siteData";
import { useReveal } from "../hooks/useReveal";
import { ChevronDownIcon } from "./Icons";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="cv-section border-b border-[#E5E5E0] bg-white py-16 sm:py-22"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#065F46] uppercase">
              Questions &amp; Answers
            </p>
            <h2
              id="faq-heading"
              className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#111113] sm:text-4xl"
            >
              Everything you need to know before starting.
            </h2>
            <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563]">
              Have a specific storefront migration, platform question, or custom
              attribution setup? Reach out below and a senior strategist will
              reply within one business day.
            </p>
          </div>

          <div ref={revealRef} className="reveal lg:col-span-8">
            <div className="divide-y divide-[#E5E5E0] rounded-2xl border border-[#E5E5E0] bg-[#FAFAF9]">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                const panelId = `${item.id}-panel`;
                const buttonId = `${item.id}-button`;

                return (
                  <div key={item.id} className="px-5 sm:px-6">
                    <h3 className="m-0">
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() =>
                          setOpenId((prev) =>
                            prev === item.id ? null : item.id
                          )
                        }
                        className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-[#111113] transition-colors hover:text-[#065F46]"
                      >
                        <span>{item.question}</span>
                        <ChevronDownIcon
                          className={`h-5 w-5 shrink-0 text-[#52525B] transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#065F46]" : ""
                          }`}
                        />
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      data-open={isOpen}
                      className="accordion-panel"
                    >
                      <div className="accordion-inner">
                        <p className="pb-5 text-sm leading-relaxed text-[#4B5563]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
