import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Terms of Service — Ten75.ai",
  description:
    "Ten75.ai Terms of Service. The terms governing use of our website, free assessment, and communications.",
  alternates: {
    canonical: "https://ten75.ai/terms",
  },
};

const tocItems = [
  { href: "#acceptance", label: "Acceptance" },
  { href: "#services", label: "About Our Services" },
  { href: "#website-use", label: "Website Use" },
  { href: "#free-assessment", label: "Free Assessment" },
  { href: "#disclaimers", label: "Outcome Disclaimers" },
  { href: "#intellectual-property", label: "Intellectual Property" },
  { href: "#confidentiality", label: "Confidentiality" },
  { href: "#third-party", label: "Third-Party Services" },
  { href: "#warranty-disclaimer", label: "Disclaimer of Warranties" },
  { href: "#liability", label: "Limitation of Liability" },
  { href: "#indemnification", label: "Indemnification" },
  { href: "#governing-law", label: "Governing Law" },
  { href: "#changes", label: "Changes to These Terms" },
];

export default function TermsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-20 border-b border-zinc-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl space-y-4">
            <SectionLabel>Legal</SectionLabel>
            <h1 className="display-md text-zinc-900">Terms of Service</h1>
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
            <nav className="lg:sticky lg:top-28 lg:self-start" aria-label="Terms of service sections">
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

              {/* Acceptance */}
              <div id="acceptance" className="pb-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Acceptance of Terms</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    By accessing or using the website at ten75.ai (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use this Site.
                  </p>
                  <p>
                    These Terms apply to all visitors, users, and anyone who accesses or uses the Site. These Terms govern your use of the Site itself. They do not constitute a service agreement, engagement letter, or contract for AI implementation services. Actual service engagements are governed by a separate written agreement executed between Ten75.ai and the client.
                  </p>
                  <p>
                    If you are using the Site on behalf of a company or other organization, you represent that you have authority to bind that organization to these Terms.
                  </p>
                </div>
              </div>

              {/* About Our Services */}
              <div id="services" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">About Our Services</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    Ten75.ai provides AI implementation services exclusively for propane distributors and fuel companies. Our model is that of a fractional Chief AI Officer — we design, build, deploy, and maintain AI systems tailored to the specific operational context of propane and fuel businesses.
                  </p>
                  <p>
                    Information presented on this Site — including service descriptions, capability lists, and outcome estimates — is for informational purposes only. It does not constitute a binding offer, quote, or guarantee of performance.
                  </p>
                  <p>
                    Ten75.ai reserves the right to modify, suspend, or discontinue any service offering at any time without prior notice.
                  </p>
                </div>
              </div>

              {/* Website Use */}
              <div id="website-use" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Website Use</h2>
                <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    You agree to use this Site only for lawful purposes and in a manner consistent with these Terms and all applicable laws and regulations. You agree not to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Use the Site in any way that violates applicable local, state, national, or international law or regulation",
                      "Attempt to gain unauthorized access to any portion of the Site or any systems connected to it",
                      "Interfere with or disrupt the integrity or performance of the Site or its underlying infrastructure",
                      "Transmit any material that is unlawful, harmful, fraudulent, or otherwise objectionable",
                      "Use automated tools, scrapers, bots, or spiders to collect data from the Site without prior written permission from Ten75.ai",
                      "Impersonate any person or entity, or misrepresent your affiliation with any person or entity",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p>
                    Ten75.ai reserves the right to terminate access to the Site for any user who violates these Terms, at our sole discretion and without notice.
                  </p>
                </div>
              </div>

              {/* Free Assessment */}
              <div id="free-assessment" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Free Operational Assessment</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    Ten75.ai offers a complimentary operational assessment to qualified propane and fuel companies. The following terms govern participation in the free assessment:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "The assessment is informational in nature. It is intended to identify areas where AI implementation may deliver value in your specific operation.",
                      "Participation in the free assessment does not create a service contract, consulting relationship, or any binding obligation on either party.",
                      "The assessment does not constitute legal, financial, regulatory, or professional advice.",
                      "Ten75.ai retains the right to decline assessment requests at its sole discretion, including based on industry fit, company size, or operational readiness.",
                      "Findings and recommendations provided in the assessment report remain the intellectual property of Ten75.ai. You may use them to inform internal decisions but may not share, distribute, or commercialize them without our written consent.",
                      "Neither party is obligated to enter into a service agreement following the assessment.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Outcome Disclaimers */}
              <div id="disclaimers" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Outcome Disclaimers</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    Certain pages on this Site reference outcome ranges — for example, estimated hours reclaimed per week, percentages of inquiries handled without human intervention, cost reductions, or changes in conversion rates. These figures are illustrative estimates derived from general industry trends and operational patterns. They are not guarantees, warranties, or representations of the results you will achieve.
                  </p>
                  <p>
                    Actual results from AI implementation will vary significantly based on factors including but not limited to: the current state of your existing systems and data, the quality and completeness of your operational data, staff adoption and training, integration complexity with your specific software stack, seasonal demand patterns in your geography, and the scope of deployment.
                  </p>
                  <p>
                    Nothing on this Site should be construed as a promise of specific financial, operational, or business outcomes. Ten75.ai makes no guarantee that any particular AI system will perform as described in general terms for your specific operation. Performance-based pricing, where applicable, is defined and measured according to the terms of your executed service agreement.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div id="intellectual-property" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Intellectual Property</h2>
                <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-800 mb-2">Ten75.ai property</h3>
                    <p>
                      All content on this Site — including text, graphics, design, layout, code, service descriptions, implementation methodologies, frameworks, and brand elements — is the property of Ten75.ai or its licensors and is protected by applicable copyright, trademark, and intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content from this Site without the prior written consent of Ten75.ai, except as may be incidental to ordinary browsing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-800 mb-2">Client property</h3>
                    <p>
                      Any operational data, business information, proprietary processes, customer data, or other materials you share with Ten75.ai during an inquiry, assessment, or engagement remain your property. Ten75.ai claims no ownership of client data. Use of client data is governed by your service agreement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-800 mb-2">Feedback</h3>
                    <p>
                      If you provide Ten75.ai with feedback, suggestions, or ideas about our services or Site, you grant us a non-exclusive, royalty-free, perpetual license to use and incorporate that feedback without restriction or compensation to you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Confidentiality */}
              <div id="confidentiality" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Confidentiality</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    Information you share with Ten75.ai through the contact form, during the assessment process, or in direct communications is treated as confidential. We will not disclose your operational information, business details, challenges, or competitive intelligence to third parties except as required by law or with your explicit consent.
                  </p>
                  <p>
                    Ten75.ai expects the same discretion from you regarding any proprietary methodologies, tools, approaches, or implementation frameworks we share during the assessment or engagement process.
                  </p>
                  <p>
                    For formal engagements, a mutual non-disclosure agreement is executed as part of the client agreement process. The protections in these Terms apply specifically to information shared through the Site and pre-engagement communications.
                  </p>
                </div>
              </div>

              {/* Third-Party Services */}
              <div id="third-party" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Third-Party Services and Links</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    The Site may reference third-party platforms, software tools, or services (such as dispatch software, CRM platforms, or AI providers) for illustrative or informational purposes. Ten75.ai does not endorse, control, or assume responsibility for the content, privacy practices, terms of service, or availability of any third-party service.
                  </p>
                  <p>
                    Any links to third-party websites are provided for convenience only. Accessing third-party sites through links on our Site is at your own risk. We encourage you to review the privacy policies and terms of service of any third-party site you visit.
                  </p>
                </div>
              </div>

              {/* Disclaimer of Warranties */}
              <div id="warranty-disclaimer" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Disclaimer of Warranties</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p className="uppercase text-xs tracking-wide text-zinc-500 font-medium">
                    This site and all content and information provided on it are offered on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied. Ten75.ai expressly disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
                  </p>
                  <p>
                    Ten75.ai does not warrant that the Site will be available at all times, that access will be uninterrupted or error-free, that defects will be corrected, that the Site is free of viruses or other harmful components, or that the content on the Site is accurate, complete, or current. We reserve the right to modify or remove content from the Site at any time without notice.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div id="liability" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Limitation of Liability</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p className="uppercase text-xs tracking-wide text-zinc-500 font-medium">
                    To the maximum extent permitted by applicable law, Ten75.ai and its principals, employees, contractors, and agents shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages — including but not limited to loss of profits, loss of data, loss of goodwill, business interruption, or cost of substitute services — arising from or related to your use of or inability to use the Site or its content, even if Ten75.ai has been advised of the possibility of such damages.
                  </p>
                  <p>
                    In no event shall Ten75.ai&apos;s total aggregate liability for any claims arising out of or related to these Terms or your use of the Site exceed one hundred U.S. dollars ($100.00). This limitation applies regardless of the form of the claim, whether in contract, tort, strict liability, or otherwise.
                  </p>
                  <p>
                    Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, Ten75.ai&apos;s liability is limited to the fullest extent permitted by law.
                  </p>
                </div>
              </div>

              {/* Indemnification */}
              <div id="indemnification" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Indemnification</h2>
                <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    You agree to indemnify, defend, and hold harmless Ten75.ai and its principals, employees, contractors, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Your use of or access to the Site",
                      "Your violation of these Terms",
                      "Your violation of any applicable law or regulation",
                      "Your violation of any third-party right, including without limitation any intellectual property right or privacy right",
                      "Any information or content you submit through the Site that is false, misleading, or causes harm to a third party",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p>
                    Ten75.ai reserves the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you. In such cases, you agree to cooperate with our defense of those claims.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div id="governing-law" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Governing Law and Dispute Resolution</h2>
                <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    These Terms are governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. You consent to the personal jurisdiction of the courts located in the State of Delaware for any disputes that proceed to court.
                  </p>
                  <div className="border border-zinc-200 rounded-xl p-5 space-y-2">
                    <h3 className="text-sm font-semibold text-zinc-800">Dispute Resolution</h3>
                    <p>
                      Before initiating formal proceedings, both parties agree to attempt to resolve any dispute arising out of or relating to these Terms through good-faith negotiation. Either party may initiate this process by providing written notice to the other describing the dispute and the relief sought.
                    </p>
                    <p>
                      If the dispute is not resolved within 30 days of written notice (or such longer period as the parties may agree in writing), either party may submit the dispute to binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules, with proceedings conducted in English. The arbitration award shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.
                    </p>
                    <p>
                      Notwithstanding the above, either party may seek injunctive or equitable relief in any court of competent jurisdiction to protect its intellectual property rights or confidential information.
                    </p>
                  </div>
                  <p>
                    You agree that any dispute resolution proceedings will be conducted on an individual basis and not in a class, consolidated, or representative action.
                  </p>
                </div>
              </div>

              {/* Changes */}
              <div id="changes" className="py-10">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">Changes to These Terms</h2>
                <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    Ten75.ai reserves the right to modify these Terms at any time. When we make changes, we will update the effective date at the top of this page. We may also provide additional notice (such as an email notification) for material changes.
                  </p>
                  <p>
                    Your continued use of the Site after any changes to these Terms constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, you should discontinue use of the Site.
                  </p>
                  <p>
                    We recommend reviewing these Terms periodically to stay informed of any updates.
                  </p>
                  <div className="border border-zinc-200 rounded-xl p-5 space-y-2 mt-4">
                    <p className="font-semibold text-zinc-900">Questions about these Terms?</p>
                    <p>
                      Contact us at{" "}
                      <a href="mailto:hello@ten75.ai" className="text-zinc-900 underline underline-offset-2 hover:text-amber-600 transition-colors">
                        hello@ten75.ai
                      </a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
