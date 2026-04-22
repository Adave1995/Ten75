"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { Envelope, MapPin } from "@phosphor-icons/react";

interface FormState {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  challenge: string;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  challenge?: string;
}

const initialForm: FormState = {
  name: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  challenge: "",
  message: "",
};

const roleOptions = [
  "Business Owner / President",
  "Operations Manager",
  "Dispatch Manager",
  "Customer Service Manager",
  "Sales Manager",
  "Controller / CFO",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.company.trim()) newErrors.company = "Company name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.challenge.trim())
      newErrors.challenge = "Please describe your biggest challenge.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // TODO: Connect to form handling / CRM (e.g., HubSpot, Formspree, custom API route)
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 800)); // Simulated delay
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="min-h-[100dvh] bg-white flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-lg space-y-5">
            <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center">
              <span className="text-amber-600 font-bold text-lg">&#10003;</span>
            </div>
            <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">
              Message received.
            </h1>
            <p className="text-base text-zinc-500 leading-relaxed">
              We'll review your information and respond within one business
              day. The assessment is free — we just need to understand your
              operation first.
            </p>
            <Button href="/" variant="secondary" showArrow>
              Back to home
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20">
            {/* Left — context */}
            <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              <div className="space-y-4">
                <SectionLabel>Get Started</SectionLabel>
                <h1 className="display-md text-zinc-900">
                  Book your free
                  <br />
                  operational assessment.
                </h1>
                <p className="body-base max-w-[40ch]">
                  Fill out the form and we'll reach out within one business
                  day to schedule a discovery call. The assessment takes about
                  two weeks and gives you a complete picture of the AI
                  opportunity in your business — at no cost.
                </p>
              </div>

              {/* What to expect */}
              <div className="space-y-3 border-t border-zinc-100 pt-7">
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-zinc-400">
                  What happens next
                </p>
                {[
                  "We review your submission within one business day",
                  "We schedule a 30-minute discovery call",
                  "We conduct the operational assessment (1–2 weeks)",
                  "You receive a full findings and recommendations report",
                  "You decide whether to move forward — zero pressure",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-xs font-bold text-amber-500 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-zinc-600 leading-snug">{step}</p>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="space-y-3 border-t border-zinc-100 pt-7">
                <div className="flex items-center gap-3">
                  <Envelope
                    weight="duotone"
                    className="w-4 h-4 text-zinc-400 flex-shrink-0"
                  />
                  <a
                    href="mailto:hello@ten75.ai"
                    className="text-sm text-zinc-600 hover:text-amber-600 transition-colors"
                  >
                    hello@ten75.ai
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin
                    weight="duotone"
                    className="w-4 h-4 text-zinc-400 flex-shrink-0"
                  />
                  <p className="text-sm text-zinc-500">
                    Remote-first. Serving propane companies nationwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
                aria-label="Contact form"
              >
                {/* Name + Company row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-zinc-700"
                    >
                      Full Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={`w-full px-4 py-3 text-sm text-zinc-900 bg-zinc-50 border rounded-xl outline-none transition-colors duration-150 placeholder:text-zinc-300 focus:bg-white focus:border-zinc-400 focus:ring-2 focus:ring-amber-500/10 ${
                        errors.name
                          ? "border-red-400"
                          : "border-zinc-200"
                      }`}
                      placeholder="Your full name"
                      aria-required="true"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="text-xs text-red-500"
                        role="alert"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-zinc-700"
                    >
                      Company <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      className={`w-full px-4 py-3 text-sm text-zinc-900 bg-zinc-50 border rounded-xl outline-none transition-colors duration-150 placeholder:text-zinc-300 focus:bg-white focus:border-zinc-400 focus:ring-2 focus:ring-amber-500/10 ${
                        errors.company ? "border-red-400" : "border-zinc-200"
                      }`}
                      placeholder="Your company name"
                      aria-required="true"
                      aria-describedby={
                        errors.company ? "company-error" : undefined
                      }
                    />
                    {errors.company && (
                      <p
                        id="company-error"
                        className="text-xs text-red-500"
                        role="alert"
                      >
                        {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                {/* Role */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="role"
                    className="text-sm font-medium text-zinc-700"
                  >
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-xl outline-none transition-colors duration-150 focus:bg-white focus:border-zinc-400 focus:ring-2 focus:ring-amber-500/10 appearance-none cursor-pointer"
                  >
                    <option value="">Select your role (optional)</option>
                    {roleOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-zinc-700"
                    >
                      Email Address <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={`w-full px-4 py-3 text-sm text-zinc-900 bg-zinc-50 border rounded-xl outline-none transition-colors duration-150 placeholder:text-zinc-300 focus:bg-white focus:border-zinc-400 focus:ring-2 focus:ring-amber-500/10 ${
                        errors.email ? "border-red-400" : "border-zinc-200"
                      }`}
                      placeholder="you@company.com"
                      aria-required="true"
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-xs text-red-500"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-zinc-700"
                    >
                      Phone{" "}
                      <span className="text-zinc-400 font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className="w-full px-4 py-3 text-sm text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-xl outline-none transition-colors duration-150 placeholder:text-zinc-300 focus:bg-white focus:border-zinc-400 focus:ring-2 focus:ring-amber-500/10"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Biggest challenge */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="challenge"
                    className="text-sm font-medium text-zinc-700"
                  >
                    Biggest operational challenge{" "}
                    <span className="text-amber-500">*</span>
                  </label>
                  <p className="text-xs text-zinc-400">
                    Be specific. This helps us prepare for the assessment.
                  </p>
                  <textarea
                    id="challenge"
                    name="challenge"
                    rows={4}
                    value={form.challenge}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm text-zinc-900 bg-zinc-50 border rounded-xl outline-none transition-colors duration-150 placeholder:text-zinc-300 focus:bg-white focus:border-zinc-400 focus:ring-2 focus:ring-amber-500/10 resize-none ${
                      errors.challenge ? "border-red-400" : "border-zinc-200"
                    }`}
                    placeholder="e.g. We lose too many after-hours calls, our dispatchers spend too much time on manual routing, or we have no way to capture institutional knowledge when drivers retire..."
                    aria-required="true"
                    aria-describedby={
                      errors.challenge ? "challenge-error" : undefined
                    }
                  />
                  {errors.challenge && (
                    <p
                      id="challenge-error"
                      className="text-xs text-red-500"
                      role="alert"
                    >
                      {errors.challenge}
                    </p>
                  )}
                </div>

                {/* Additional message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-zinc-700"
                  >
                    Anything else?{" "}
                    <span className="text-zinc-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-xl outline-none transition-colors duration-150 placeholder:text-zinc-300 focus:bg-white focus:border-zinc-400 focus:ring-2 focus:ring-amber-500/10 resize-none"
                    placeholder="Company size, number of trucks, current software stack — anything useful."
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    showArrow={!submitting}
                    className="w-full sm:w-auto justify-center"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="mt-3 text-xs text-zinc-400">
                    We respond within one business day. Your information is
                    never shared.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
