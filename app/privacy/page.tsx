import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Privacy Policy — Ten75.ai",
  description:
    "Ten75.ai Privacy Policy. Learn how we collect, use, and protect information submitted through our website.",
  alternates: {
    canonical: "https://ten75.ai/privacy",
  },
};

const tocItems = [
  { href: "#overview", label: "Overview" },
  { href: "#information-we-collect", label: "Information We Collect" },
  { href: "#how-we-use", label: "How We Use It" },
  { href: "#sharing", label: "Information Sharing" },
  { href: "#retention", label: "Data Retention" },
  { href: "#cookies", label: "Cookies & Analytics" },
  { href: "#your-rights", label: "Your Rights" },
  { href: "#security", label: "Data Security" },
  { href: "#childrens-privacy", label: "Children's Privacy" },
  { href: "#contact", label: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-20 border-b border-zinc-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl space-y-4">
            <SectionLabel>Legal</SectionLabel>
            <h1 className="display-md text-zinc-900">Privacy Policy</h1>
            <p className="text-sm text-zinc-400">
              Effective date: April 22, 2026 &nbsp;&middot;&nbsp; Last updated: April 22, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-20 items-start pt-12 md:pt-16">

            {/* Sticky TOC */}
            <nav className="lg:sticky lg:top-28 lg:self-start" aria-label="Privacy policy sections">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-400 mb-4">
                On This Page
              </p>
              <ul className="space-y-0.5">
                {tocItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block text-sm text-zinc-400 hover:text-zinc-900 transition-colors duration-150 py-1.5"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Content */}
            <div className="divide-y divide-zinc-100">

              {/* Overview */}
              <div id="overview" className="pb-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Overview</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    Ten75.ai (&ldquo;Ten75.ai,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website located at ten75.ai (the &ldquo;Site&rdquo;). This Privacy Policy describes how we collect, use, and protect information when you visit our Site or submit information through our contact form.
                  </p>
                  <p>
                    We are a business-to-business AI implementation firm. We do not sell personal information. We do not use your data for advertising. We collect only what is needed to respond to your inquiry and evaluate whether we can help your operation.
                  </p>
                  <p>
                    By using this Site, you agree to the practices described in this policy. If you do not agree, please do not use the Site.
                  </p>
                </div>
              </div>

              {/* Information We Collect */}
              <div id="information-we-collect" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Information We Collect</h2>
                <div className="space-y-5 text-sm text-zinc-600 leading-relaxed">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-800 mb-2">Information you provide directly</h3>
                    <p className="mb-3">
                      When you submit our contact form, we collect the information you enter, which may include:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Full name",
                        "Company name",
                        "Your role or title",
                        "Email address",
                        "Phone number (optional)",
                        "Description of your operational challenges",
                        "Any additional context you choose to share",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-amber-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3">
                      We also retain any email correspondence you initiate with us directly.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-800 mb-2">Automatically collected information</h3>
                    <p>
                      Our hosting provider (Vercel) automatically collects standard server log data when you visit the Site. This includes your IP address, browser type and version, operating system, referring URLs, pages you visit, and timestamps. This data is used for security monitoring, performance optimization, and abuse prevention. We do not link server log data to your identity unless required for fraud or security investigation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-800 mb-2">Information shared during engagements</h3>
                    <p>
                      If you proceed beyond the initial inquiry to an operational assessment or client engagement, you may share operational data, business information, and other proprietary details with us. That information is governed by the terms of your client agreement with Ten75.ai, not this Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use It */}
              <div id="how-we-use" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">How We Use Your Information</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p>We use the information you provide to:</p>
                  <ul className="space-y-2">
                    {[
                      "Respond to your inquiry and schedule the free operational assessment",
                      "Evaluate whether your business is a fit for our services",
                      "Communicate with you about our services, the assessment process, and next steps",
                      "Improve our website content and user experience",
                      "Comply with applicable legal obligations",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="pt-1">
                    We do not use your information for targeted advertising. We do not profile you for the purpose of selling to third parties. We do not make automated decisions about you using your personal information.
                  </p>
                </div>
              </div>

              {/* Information Sharing */}
              <div id="sharing" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Information Sharing</h2>
                <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    We do not sell, rent, or trade your personal information. We share information only in the following limited circumstances:
                  </p>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-800 mb-2">Service providers</h3>
                    <p>
                      We use third-party vendors to operate the Site and handle communications, including our hosting provider (Vercel), email service providers, and form processing tools. These vendors process data on our behalf and are contractually required to protect it and use it only for the purpose of providing services to us.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-800 mb-2">Legal requirements</h3>
                    <p>
                      We may disclose your information if required by law, court order, or subpoena, or if we believe disclosure is necessary to protect the rights, property, or safety of Ten75.ai, our clients, or others.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-800 mb-2">Business transfers</h3>
                    <p>
                      If Ten75.ai is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you by email and/or prominent notice on the Site before your information becomes subject to a different privacy policy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Retention */}
              <div id="retention" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Data Retention</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    We retain contact form submissions and related email correspondence for up to 24 months after your last interaction with us, or for as long as is necessary to manage our business relationship with you, whichever is longer.
                  </p>
                  <p>
                    If no engagement results from your inquiry, we will delete your information at your request. If an engagement does result, we retain information as governed by the client agreement.
                  </p>
                  <p>
                    Server log data is retained by our hosting provider in accordance with their standard data retention policies, typically 30–90 days.
                  </p>
                </div>
              </div>

              {/* Cookies & Analytics */}
              <div id="cookies" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Cookies &amp; Analytics</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    This Site may use cookies and similar tracking technologies for basic functionality (such as remembering preferences) and for measuring site performance. We do not use third-party advertising cookies or cross-site tracking technologies.
                  </p>
                  <p>
                    If we add analytics tools in the future, we will update this policy to describe them. Any analytics we implement will be configured to respect user privacy and will not be used to build advertising profiles.
                  </p>
                  <p>
                    You can configure your browser to refuse cookies or alert you when cookies are being sent. Some features of the Site may not function properly if cookies are disabled.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div id="your-rights" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Your Rights</h2>
                <div className="space-y-5 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    Depending on your location, you may have the following rights with respect to your personal information:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Access: request a copy of the personal information we hold about you",
                      "Correction: request that we correct inaccurate or incomplete information",
                      "Deletion: request that we delete your personal information",
                      "Portability: request your information in a structured, machine-readable format",
                      "Opt-out: opt out of marketing communications at any time",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="border border-zinc-200 rounded-xl p-5 space-y-2">
                    <h3 className="text-sm font-semibold text-zinc-800">California Residents (CCPA / CPRA)</h3>
                    <p>
                      If you are a California resident, you have additional rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act. These include the right to know what personal information we have collected, sold, or disclosed in the prior 12 months; the right to delete your personal information; the right to correct inaccurate personal information; and the right to opt out of the sale or sharing of your personal information.
                    </p>
                    <p>
                      We do not sell or share personal information. To exercise any of your rights, contact us at{" "}
                      <a href="mailto:hello@ten75.ai" className="text-zinc-900 underline underline-offset-2 hover:text-amber-600 transition-colors">
                        hello@ten75.ai
                      </a>
                      . We will respond within 45 days as required by law.
                    </p>
                  </div>
                  <div className="border border-zinc-200 rounded-xl p-5 space-y-2">
                    <h3 className="text-sm font-semibold text-zinc-800">European Residents (GDPR)</h3>
                    <p>
                      If you are located in the European Economic Area, United Kingdom, or Switzerland, you have rights under the General Data Protection Regulation (or equivalent legislation). Our legal basis for processing your information is legitimate interest in responding to your business inquiry. You have the right to object, withdraw consent where applicable, and lodge a complaint with your local supervisory authority.
                    </p>
                  </div>
                  <p>
                    To exercise any of these rights, contact us at{" "}
                    <a href="mailto:hello@ten75.ai" className="text-zinc-900 underline underline-offset-2 hover:text-amber-600 transition-colors">
                      hello@ten75.ai
                    </a>
                    . We will respond within 30 days for general requests.
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div id="security" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Data Security</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    We implement commercially reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include HTTPS encryption for all data in transit, access controls limiting who can view submitted information, and secure storage through vetted service providers.
                  </p>
                  <p>
                    No method of transmission over the internet or method of electronic storage is completely secure. While we strive to protect your information, we cannot guarantee its absolute security. If you become aware of any security vulnerability or unauthorized use of information you submitted to us, please contact us immediately at{" "}
                    <a href="mailto:hello@ten75.ai" className="text-zinc-900 underline underline-offset-2 hover:text-amber-600 transition-colors">
                      hello@ten75.ai
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div id="childrens-privacy" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Children&apos;s Privacy</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    Our Site and services are directed exclusively at business professionals in the propane and fuel industry. We do not knowingly collect personal information from individuals under the age of 13. If you believe we have inadvertently collected information from a child under 13, please contact us at{" "}
                    <a href="mailto:hello@ten75.ai" className="text-zinc-900 underline underline-offset-2 hover:text-amber-600 transition-colors">
                      hello@ten75.ai
                    </a>{" "}
                    and we will delete that information promptly.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div id="contact" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Contact Us</h2>
                <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    If you have questions about this Privacy Policy, want to exercise your rights, or need to report a privacy concern, contact us:
                  </p>
                  <div className="border border-zinc-200 rounded-xl p-5 space-y-2">
                    <p className="font-semibold text-zinc-900">Ten75.ai</p>
                    <p>
                      Email:{" "}
                      <a href="mailto:hello@ten75.ai" className="text-zinc-900 underline underline-offset-2 hover:text-amber-600 transition-colors">
                        hello@ten75.ai
                      </a>
                    </p>
                    <p className="text-zinc-400 text-xs pt-1">
                      We will respond to privacy requests within 30 days.
                    </p>
                  </div>
                  <p>
                    We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. Your continued use of the Site after any update constitutes your acceptance of the revised policy.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
