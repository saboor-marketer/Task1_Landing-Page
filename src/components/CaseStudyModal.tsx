import { useEffect, useRef } from "react";
import type { CaseStudy } from "../data/siteData";
import { ArrowRightIcon, CheckIcon, CloseIcon } from "./Icons";

interface CaseStudyModalProps {
  study: CaseStudy;
  onClose: () => void;
}

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111113]/65 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#E5E5E0] bg-white shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#E5E5E0] bg-white/95 px-6 py-4 backdrop-blur-xs">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#065F46] uppercase">
              {study.category}
            </p>
            <h3
              id="case-modal-title"
              className="text-lg font-bold text-[#111113]"
            >
              {study.client}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study details"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E0] text-[#111113] transition-colors hover:bg-[#F4F4F0]"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="overflow-hidden rounded-xl border border-[#E5E5E0] bg-[#ECEAE4]">
            <img
              src={study.image}
              width={640}
              height={420}
              alt={study.imageAlt}
              className="aspect-[640/420] h-auto w-full object-cover"
            />
          </div>

          <p className="mt-5 font-[var(--font-display)] text-xl font-bold text-[#111113]">
            {study.headline}
          </p>

          <dl className="mt-5 grid grid-cols-2 gap-3 rounded-xl border border-[#E5E5E0] bg-[#FAFAF9] p-4">
            <div>
              <dt className="text-xs font-medium text-[#52525B]">
                {study.primaryStatLabel}
              </dt>
              <dd className="mt-1 font-[var(--font-display)] text-2xl font-extrabold text-[#065F46]">
                {study.primaryStat}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-[#52525B]">
                {study.secondaryStatLabel}
              </dt>
              <dd className="mt-1 font-[var(--font-display)] text-2xl font-extrabold text-[#111113]">
                {study.secondaryStat}
              </dd>
            </div>
          </dl>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#4B5563]">
            <div>
              <h4 className="font-semibold text-[#111113]">The Challenge</h4>
              <p className="mt-1">{study.challenge}</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#111113]">Our Approach</h4>
              <p className="mt-1">{study.solution}</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#111113]">Verified Impact</h4>
              <ul className="mt-2 space-y-2">
                {study.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#27272A]">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 border-t border-[#E5E5E0] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#52525B]">
              Want similar gains on your storefront?
            </p>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#065F46] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#064E3B]"
            >
              Request Your Audit
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
