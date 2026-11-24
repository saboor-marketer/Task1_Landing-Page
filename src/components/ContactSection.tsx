import { useState, type FormEvent } from "react";
import { useReveal } from "../hooks/useReveal";
import { ArrowRightIcon, CheckIcon } from "./Icons";

interface FormValues {
  name: string;
  email: string;
  storeUrl: string;
  revenue: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  storeUrl: "",
  revenue: "$50K – $250K / mo",
  message: "",
};

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid work email address.";
  }

  const rawUrl = values.storeUrl.trim();
  if (!rawUrl || !/^(https?:\/\/)?[\w-]+(\.[\w-]+)+([/?#].*)?$/i.test(rawUrl)) {
    errors.storeUrl = "Please enter your storefront URL (e.g., yourbrand.com).";
  }

  if (values.message.trim().length < 15) {
    errors.message =
      "Please share at least 15 characters about your growth goals.";
  }

  return errors;
}

export function ContactSection() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const revealRef = useReveal<HTMLDivElement>();

  function handleChange<K extends keyof FormValues>(
    field: K,
    value: FormValues[K]
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(`contact-${firstErrorField}`);
      el?.focus();
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  function handleReset() {
    setValues(INITIAL_VALUES);
    setErrors({});
    setSubmitted(false);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="cv-section bg-[#FAFAF9] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={revealRef}
          className="reveal grid gap-10 rounded-3xl border border-[#E5E5E0] bg-white p-6 shadow-xs sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12"
        >
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#065F46] uppercase">
              Free Storefront Audit
            </p>
            <h2
              id="contact-heading"
              className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#111113] sm:text-4xl"
            >
              Get a tailored 90-day growth &amp; speed roadmap.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4B5563]">
              Share your store URL and primary revenue bottleneck. A senior CRO
              strategist and frontend performance engineer will review your
              funnel and send a custom teardown—zero sales fluff.
            </p>

            <ul className="mt-7 space-y-3.5 border-t border-[#E5E5E0] pt-6 text-sm text-[#27272A]">
              <li className="flex items-start gap-2.5">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" />
                <span>
                  Mobile Core Web Vitals &amp; script payload teardown
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" />
                <span>
                  Top 3 high-impact PDP &amp; cart conversion opportunities
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" />
                <span>
                  Delivered within 24 business hours via private video link
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="flex h-full flex-col justify-center rounded-2xl border border-[#A7F3D0] bg-[#ECFDF5] p-6 sm:p-8"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#065F46] text-white">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#111113]">
                  Audit request received for {values.storeUrl}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#27272A]">
                  Thank you, {values.name}. This demonstration form has
                  validated your inquiry locally—in a live deployment, our team
                  would send your recorded storefront audit to{" "}
                  <strong className="font-semibold">{values.email}</strong>{" "}
                  within one business day.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center rounded-full border border-[#065F46] bg-white px-5 py-2.5 text-sm font-semibold text-[#065F46] transition-colors hover:bg-[#065F46] hover:text-white"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Request a free storefront growth audit"
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-[#111113]"
                    >
                      Full name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={values.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                      placeholder="Alex Rivera"
                      className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#111113] placeholder:text-[#71717A] ${
                        errors.name
                          ? "border-[#B91C1C]"
                          : "border-[#D4D4CE] hover:border-[#A1A1AA]"
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-[#B91C1C]"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-[#111113]"
                    >
                      Work email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={values.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      placeholder="alex@yourbrand.com"
                      className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#111113] placeholder:text-[#71717A] ${
                        errors.email
                          ? "border-[#B91C1C]"
                          : "border-[#D4D4CE] hover:border-[#A1A1AA]"
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-[#B91C1C]"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-storeUrl"
                      className="block text-sm font-semibold text-[#111113]"
                    >
                      Storefront URL <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-storeUrl"
                      name="storeUrl"
                      type="url"
                      autoComplete="url"
                      required
                      value={values.storeUrl}
                      onChange={(e) => handleChange("storeUrl", e.target.value)}
                      aria-invalid={Boolean(errors.storeUrl)}
                      aria-describedby={
                        errors.storeUrl ? "contact-storeUrl-error" : undefined
                      }
                      placeholder="yourbrand.com"
                      className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#111113] placeholder:text-[#71717A] ${
                        errors.storeUrl
                          ? "border-[#B91C1C]"
                          : "border-[#D4D4CE] hover:border-[#A1A1AA]"
                      }`}
                    />
                    {errors.storeUrl && (
                      <p
                        id="contact-storeUrl-error"
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-[#B91C1C]"
                      >
                        {errors.storeUrl}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-revenue"
                      className="block text-sm font-semibold text-[#111113]"
                    >
                      Monthly store revenue
                    </label>
                    <select
                      id="contact-revenue"
                      name="revenue"
                      value={values.revenue}
                      onChange={(e) => handleChange("revenue", e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-[#D4D4CE] bg-white px-3.5 py-2.5 text-sm text-[#111113] hover:border-[#A1A1AA]"
                    >
                      <option value="Under $50K / mo">Under $50K / mo</option>
                      <option value="$50K – $250K / mo">
                        $50K – $250K / mo
                      </option>
                      <option value="$250K – $1M / mo">$250K – $1M / mo</option>
                      <option value="$1M+ / mo">$1M+ / mo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-[#111113]"
                  >
                    Primary growth or performance goal{" "}
                    <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={values.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    placeholder="Tell us about your current conversion rate, mobile speed challenges, or acquisition goals..."
                    className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#111113] placeholder:text-[#71717A] ${
                      errors.message
                        ? "border-[#B91C1C]"
                        : "border-[#D4D4CE] hover:border-[#A1A1AA]"
                    }`}
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      role="alert"
                      className="mt-1.5 text-xs font-medium text-[#B91C1C]"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#065F46] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#064E3B] sm:w-auto"
                  >
                    Request Free Growth Audit
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                  <p className="mt-2.5 text-xs text-[#52525B]">
                    Frontend demonstration form — validated locally with no
                    external data transmission.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
