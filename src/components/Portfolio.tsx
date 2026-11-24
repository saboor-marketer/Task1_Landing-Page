import { lazy, memo, Suspense, useCallback, useMemo, useState } from "react";
import {
  CASE_STUDIES,
  CASE_STUDY_CATEGORIES,
  type CaseStudy,
  type CaseStudyCategory,
} from "../data/siteData";
import { useReveal } from "../hooks/useReveal";
import { ArrowUpRightIcon } from "./Icons";

const CaseStudyModal = lazy(() => import("./CaseStudyModal"));

const CaseStudyCard = memo(function CaseStudyCard({
  study,
  onSelect,
}: {
  study: CaseStudy;
  onSelect: (study: CaseStudy) => void;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5E5E0] bg-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#C7C7BF]">
      <div className="overflow-hidden bg-[#ECEAE4]">
        <img
          src={study.image}
          width={640}
          height={420}
          loading="lazy"
          decoding="async"
          alt={study.imageAlt}
          className="aspect-[640/420] h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold tracking-wider text-[#065F46] uppercase">
            {study.category}
          </span>
          <span className="text-xs font-medium text-[#52525B]">
            {study.client}
          </span>
        </div>

        <h3 className="mt-2.5 text-xl font-bold tracking-tight text-[#111113]">
          {study.headline}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
          {study.summary}
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-[#FAFAF9] p-3.5">
          <div>
            <dt className="text-xs font-medium text-[#52525B]">
              {study.primaryStatLabel}
            </dt>
            <dd className="mt-0.5 font-[var(--font-display)] text-xl font-extrabold text-[#065F46]">
              {study.primaryStat}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-[#52525B]">
              {study.secondaryStatLabel}
            </dt>
            <dd className="mt-0.5 font-[var(--font-display)] text-xl font-extrabold text-[#111113]">
              {study.secondaryStat}
            </dd>
          </div>
        </dl>

        <div className="mt-5 pt-1">
          <button
            type="button"
            onClick={() => onSelect(study)}
            className="inline-flex items-center gap-1.5 rounded-lg py-1 text-sm font-semibold text-[#065F46] transition-colors hover:text-[#064E3B]"
          >
            Read full breakdown
            <ArrowUpRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
});

export function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<CaseStudyCategory>("All Work");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const revealRef = useReveal<HTMLDivElement>();

  const filteredStudies = useMemo(() => {
    if (activeCategory === "All Work") return CASE_STUDIES;
    return CASE_STUDIES.filter((study) => study.category === activeCategory);
  }, [activeCategory]);

  const handleClose = useCallback(() => setSelectedStudy(null), []);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="cv-section border-b border-[#E5E5E0] bg-white py-16 sm:py-22"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#065F46] uppercase">
              Selected Case Studies
            </p>
            <h2
              id="portfolio-heading"
              className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#111113] sm:text-4xl"
            >
              Proven storefront outcomes across high-growth verticals.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter case studies by industry"
            className="flex flex-wrap gap-2"
          >
            {CASE_STUDY_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    isSelected
                      ? "bg-[#111113] text-white"
                      : "border border-[#E5E5E0] bg-[#FAFAF9] text-[#3F3F46] hover:border-[#111113] hover:text-[#111113]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div
          ref={revealRef}
          className="reveal mt-10 grid gap-6 md:grid-cols-2"
        >
          {filteredStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              onSelect={setSelectedStudy}
            />
          ))}
        </div>
      </div>

      {selectedStudy && (
        <Suspense fallback={null}>
          <CaseStudyModal study={selectedStudy} onClose={handleClose} />
        </Suspense>
      )}
    </section>
  );
}

export default Portfolio;
