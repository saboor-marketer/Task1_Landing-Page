export interface ServiceItem {
  id: string;
  icon: "cro" | "paid" | "speed" | "retention" | "creative" | "analytics";
  title: string;
  metric: string;
  description: string;
  deliverables: string[];
}

export type CaseStudyCategory =
  | "All Work"
  | "Beauty & Skincare"
  | "Apparel & Fashion"
  | "Home & Wellness";

export interface CaseStudy {
  id: string;
  client: string;
  category: Exclude<CaseStudyCategory, "All Work">;
  headline: string;
  summary: string;
  image: string;
  imageAlt: string;
  primaryStat: string;
  primaryStatLabel: string;
  secondaryStat: string;
  secondaryStatLabel: string;
  challenge: string;
  solution: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  resultBadge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Case Studies" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const HERO_STATS = [
  { value: "$184M+", label: "Attributed client revenue" },
  { value: "+41%", label: "Avg. checkout CVR lift" },
  { value: "4.9/5", label: "Verified partner rating" },
] as const;

export const CLIENT_BRANDS = [
  "SOLIS BOTANICALS",
  "KESTREL ATELIER",
  "NORDEN LIVING",
  "AURELIA ACTIVE",
  "VERDANT GOODS",
  "MONOFORM STUDIO",
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: "cro",
    icon: "cro",
    title: "Conversion Rate Optimization",
    metric: "+34% avg. CVR lift",
    description:
      "Hypothesis-driven A/B testing across product pages, cart drawers, and checkout flows to turn existing traffic into higher-margin orders.",
    deliverables: [
      "Full funnel UX & drop-off audit",
      "High-velocity PDP & cart experiments",
      "Bundle & AOV architecture",
    ],
  },
  {
    id: "paid",
    icon: "paid",
    title: "Paid Social & Search Scaling",
    metric: "4.2x blended ROAS",
    description:
      "Profit-focused Meta, Google Shopping, and TikTok acquisition engineered around contribution margin and new-customer payback windows.",
    deliverables: [
      "Contribution-margin bid strategy",
      "Structured creative testing sprints",
      "Landing page message-match",
    ],
  },
  {
    id: "speed",
    icon: "speed",
    title: "Storefront Speed & Core Web Vitals",
    metric: "Sub-1.5s mobile LCP",
    description:
      "We eliminate render-blocking apps, bloated scripts, and layout shifts on Shopify Plus and custom storefronts to boost conversion and organic rank.",
    deliverables: [
      "JavaScript & third-party app pruning",
      "Responsive WebP/AVIF media pipeline",
      "Lighthouse 90+ performance tuning",
    ],
  },
  {
    id: "retention",
    icon: "retention",
    title: "Lifecycle Email & SMS Retention",
    metric: "38% of total revenue",
    description:
      "Behavior-triggered Klaviyo flows and editorial campaigns that increase second-order velocity and lifetime value without discount fatigue.",
    deliverables: [
      "Automated welcome & post-purchase flows",
      "Replenishment & VIP win-back tracks",
      "Deliverability & cohort reporting",
    ],
  },
  {
    id: "creative",
    icon: "creative",
    title: "Performance Creative Studio",
    metric: "-29% customer CAC",
    description:
      "Editorial product photography, modular UGC hooks, and high-converting static ads produced specifically to fight ad fatigue at scale.",
    deliverables: [
      "Monthly net-new ad concept sprints",
      "Founder & creator script direction",
      "Hook & thumb-stop rate iteration",
    ],
  },
  {
    id: "analytics",
    icon: "analytics",
    title: "Attribution & Merchandising",
    metric: "100% margin clarity",
    description:
      "Clean server-side tracking, SKU-level profitability dashboards, and merchandising rules so every marketing dollar is accountable.",
    deliverables: [
      "GA4, Meta CAPI & MER diagnostics",
      "Cohort LTV & payback modeling",
      "Collection sorting & upsell rules",
    ],
  },
];

export const CASE_STUDY_CATEGORIES: CaseStudyCategory[] = [
  "All Work",
  "Beauty & Skincare",
  "Apparel & Fashion",
  "Home & Wellness",
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "solis-botanicals",
    client: "Solis Botanicals",
    category: "Beauty & Skincare",
    headline: "Scaling a clean skincare routine builder to $1.1M monthly DTC revenue",
    summary:
      "Rebuilt mobile product pages, introduced tiered routine bundles, and cut storefront LCP from 4.8s to 1.2s ahead of Q4 peak.",
    image: "/images/case-solis.webp",
    imageAlt:
      "Solis Botanicals minimalist frosted glass botanical serum bottle and skincare cream jar on warm sunlit limestone",
    primaryStat: "+148%",
    primaryStatLabel: "YoY DTC Revenue",
    secondaryStat: "3.9%",
    secondaryStatLabel: "Mobile Store CVR",
    challenge:
      "High paid-social CPCs and a slow, script-heavy Shopify theme caused 61% of mobile shoppers to bounce before viewing shade or regimen details.",
    solution:
      "We stripped 14 redundant storefront scripts, redesigned the above-the-fold PDP hierarchy with instant regimen bundling, and aligned Meta creative to a quiz-free fast landing page.",
    highlights: [
      "Reduced mobile LCP from 4.8s to 1.2s with zero visual compromises",
      "Increased average order value from $68 to $94 via 3-step routine tiers",
      "Generated 41% of total monthly revenue from automated Klaviyo flows",
    ],
  },
  {
    id: "kestrel-atelier",
    client: "Kestrel Atelier",
    category: "Apparel & Fashion",
    headline: "Cutting checkout friction and lifting blended ROAS to 4.6x across outerwear",
    summary:
      "Streamlined size guidance, simplified slide-out cart cross-sells, and restructured Google Shopping feeds by real-time inventory margin.",
    image: "/images/case-kestrel.webp",
    imageAlt:
      "Kestrel Atelier tailored wool outerwear coat draped on a minimalist oak clothing rack in a bright architectural studio",
    primaryStat: "4.6x",
    primaryStatLabel: "Blended ROAS",
    secondaryStat: "-38%",
    secondaryStatLabel: "Cart Drop-Off",
    challenge:
      "High return rates and unclear fit details suppressed cold-traffic conversion on $320+ outerwear SKUs while broad ad sets overspent on low-stock sizes.",
    solution:
      "Introduced inline fit confidence prompts directly next to the size selector, built an inventory-aware Performance Max feed, and launched editorial video hooks showcasing fabric weight.",
    highlights: [
      "Lifted add-to-cart rate by 29% on flagship tailored coats",
      "Cut size-related returns by 22% through clearer garment measurements",
      "Scaled profitable non-brand search spend by 2.4x in 90 days",
    ],
  },
  {
    id: "norden-living",
    client: "Norden Living",
    category: "Home & Wellness",
    headline: "Turning one-time homeware buyers into multi-order collectors",
    summary:
      "Designed cohesive collection lookbooks and segmented post-purchase email journeys that lifted 90-day repeat purchase rates by 82%.",
    image: "/images/case-norden.webp",
    imageAlt:
      "Norden Living minimalist Scandinavian ceramic coffee carafe and matte stoneware mugs arranged on a warm oak tabletop",
    primaryStat: "+82%",
    primaryStatLabel: "Repeat Purchase Rate",
    secondaryStat: "+$2.4M",
    secondaryStatLabel: "Lifecycle Revenue",
    challenge:
      "Norden acquired customers efficiently during gift seasons but struggled to convert single-item stoneware buyers into full dining set collectors.",
    solution:
      "We built SKU-aware post-purchase pairing sequences, upgraded collection filtering speed, and introduced a curated set-completion offer at day 28.",
    highlights: [
      "Added $2.4M in incremental 12-month retention revenue without sitewide sales",
      "Lifted collection page scroll-to-click engagement by 47%",
      "Achieved 54% average email open rate across segmented VIP drops",
    ],
  },
  {
    id: "aurelia-active",
    client: "Aurelia Active",
    category: "Apparel & Fashion",
    headline: "Re-engineering mobile speed and conversion for a fast-growing activewear label",
    summary:
      "Replaced heavy animation bundles with lightweight native interactions and launched high-intent landing pages for paid social traffic.",
    image: "/images/case-aurelia.webp",
    imageAlt:
      "Aurelia Active eucalyptus green minimalist athletic wear flatlay and matte insulated bottle on a warm architectural concrete plinth",
    primaryStat: "+112%",
    primaryStatLabel: "Mobile Conversion",
    secondaryStat: "0.9s",
    secondaryStatLabel: "Mobile LCP Speed",
    challenge:
      "An animation-heavy storefront redesign caused mobile Lighthouse scores to drop below 40, driving up paid acquisition costs by 34% overnight.",
    solution:
      "We refactored the frontend bundle, converted product media to responsive WebP with explicit aspect ratios, and deployed dedicated collection landers tailored to top Meta ads.",
    highlights: [
      "Improved mobile Lighthouse Performance score from 38 to 96",
      "Cut mobile JavaScript payload by 68% while preserving all brand visuals",
      "Reduced blended customer acquisition cost by 31% within six weeks",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Meridian is the rare e-commerce partner that understands both creative storytelling and frontend speed. Cutting our mobile load time in half immediately lifted ROAS across every paid channel.",
    author: "Elena Rostova",
    role: "Co-Founder & CEO",
    company: "Solis Botanicals",
    initials: "ER",
    resultBadge: "+148% YoY Revenue",
  },
  {
    id: "t2",
    quote:
      "Within 60 days they uncovered three checkout leaks our previous agency missed for a year. Every recommendation came backed by clean cohort data and shipped cleanly without bloating our theme.",
    author: "Marcus Lindholm",
    role: "VP of E-Commerce",
    company: "Kestrel Atelier",
    initials: "ML",
    resultBadge: "4.6x Blended ROAS",
  },
  {
    id: "t3",
    quote:
      "Our retention program used to rely on constant 20% off blasts. Meridian rebuilt our lifecycle flows around genuine product education and turned email into our highest-margin revenue channel.",
    author: "Hannah Takahashi",
    role: "Head of Growth",
    company: "Norden Living",
    initials: "HT",
    resultBadge: "+82% Repeat Rate",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Which e-commerce platforms do you specialize in?",
    answer:
      "We work primarily with Shopify, Shopify Plus, and headless React/Next.js or Vite-powered DTC storefronts. Our paid acquisition, CRO, and Klaviyo retention systems also integrate smoothly with WooCommerce and BigCommerce stores.",
  },
  {
    id: "faq-2",
    question: "How quickly can we expect measurable conversion and speed improvements?",
    answer:
      "Technical performance wins—such as image optimization, script pruning, and Core Web Vitals fixes—typically ship in the first 14 to 21 days. Structured CRO testing and paid creative sprints begin compounding measurable revenue gains within the first 30 to 45 days.",
  },
  {
    id: "faq-3",
    question: "Will optimizing storefront speed require sacrificing our brand design?",
    answer:
      "Never. We preserve your exact visual identity, typography, and interactive polish while removing hidden bottlenecks like unused JavaScript, render-blocking stylesheets, oversized media, and layout-thrashing animations.",
  },
  {
    id: "faq-4",
    question: "What monthly revenue or ad spend size is the best fit?",
    answer:
      "Most partners generate between $50K and $2M+ in monthly online revenue and spend at least $15K/month across Meta or Google. That traffic volume allows statistically valid A/B experiments and rapid creative iteration.",
  },
  {
    id: "faq-5",
    question: "Do you require long-term annual contracts?",
    answer:
      "No. We start with a 90-day growth sprint so you have clear milestones, transparent attribution reporting, and proven ROI—followed by flexible month-to-month partnerships.",
  },
  {
    id: "faq-6",
    question: "What is included in the free storefront growth audit?",
    answer:
      "You receive a recorded 12-minute teardown of your mobile funnel, Core Web Vitals bottlenecks, PDP conversion opportunities, and a prioritized 90-day roadmap you can implement with our team or internally.",
  },
];
