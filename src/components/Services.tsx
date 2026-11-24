import { memo } from "react";
import { SERVICES, type ServiceItem } from "../data/siteData";
import { useReveal } from "../hooks/useReveal";
import { CheckIcon, ServiceIcon } from "./Icons";

const ServiceCard = memo(function ServiceCard({
  service,
}: {
  service: ServiceItem;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#E5E5E0] bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#C7C7BF]">
      <div className="flex items-start justify-between gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#065F46]">
          <ServiceIcon name={service.icon} className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-[#F4F4F0] px-3 py-1 text-xs font-semibold text-[#111113]">
          {service.metric}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold tracking-tight text-[#111113]">
        {service.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
        {service.description}
      </p>

      <ul className="mt-5 space-y-2 border-t border-[#F0F0EC] pt-4">
        {service.deliverables.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xs font-medium text-[#3F3F46]"
          >
            <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#065F46]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
});

export function Services() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="cv-section border-b border-[#E5E5E0] bg-[#FAFAF9] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#065F46] uppercase">
            Capabilities
          </p>
          <h2
            id="services-heading"
            className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#111113] sm:text-4xl"
          >
            Full-funnel e-commerce growth, engineered without bloat.
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-[#4B5563]">
            Every discipline under one roof—connecting acquisition creative,
            storefront Core Web Vitals, conversion testing, and lifecycle
            retention.
          </p>
        </div>

        <div
          ref={revealRef}
          className="reveal mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
