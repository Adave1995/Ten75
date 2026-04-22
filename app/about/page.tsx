import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About — Ten75.ai",
  description:
    "Ten75.ai is a specialized AI implementation firm built exclusively for propane distributors and fuel companies. Learn about our approach, model, and why industry specialization matters.",
  alternates: {
    canonical: "https://ten75.ai/about",
  },
};

const values = [
  {
    title: "Implementation over advice",
    body: "We build, deploy, and maintain AI systems. We don't write reports and hand them over. If an AI system isn't working, it's our problem to fix.",
  },
  {
    title: "Propane-specific by design",
    body: "We don't serve every industry. We serve propane and fuel. That focus means faster ramp time, fewer mistakes, and solutions that reflect the real operational context.",
  },
  {
    title: "Aligned incentives",
    body: "We're not a vendor you pay and forget. We're embedded in your operation, and our reputation is built entirely on what actually changes in your business.",
  },
  {
    title: "No unnecessary complexity",
    body: "We build what solves the problem — not the most technically impressive thing we can build. Simple, well-implemented AI beats complex AI that no one uses.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-end">
            <div className="space-y-5">
              <SectionLabel>About Ten75.ai</SectionLabel>
              <h1 className="display-lg text-zinc-900">
                Built for propane.
                <br />
                <span className="text-zinc-400">Not adapted for it.</span>
              </h1>
            </div>
            <div className="space-y-4 lg:pb-2">
              <p className="text-lg text-zinc-500 leading-relaxed">
                Most AI agencies work across dozens of industries. They apply
                the same frameworks everywhere and call it specialization.
              </p>
              <p className="text-base text-zinc-500 leading-relaxed">
                Ten75.ai works exclusively with propane distributors and fuel
                companies. That is the only thing we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Model Section */}
      <section className="bg-zinc-50 py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start">
            <div className="space-y-6">
              <SectionLabel>The Model</SectionLabel>
              <h2 className="display-md text-zinc-900">
                Dedicated AI Partner
                <br />
                <span className="text-zinc-400">for propane companies.</span>
              </h2>
              <div className="space-y-4 max-w-[52ch]">
                <p className="body-lg">
                  Most propane companies don't need a full-time AI team. They
                  need someone who understands AI, understands propane
                  operations, and can implement systems that actually work
                  within their business.
                </p>
                <p className="body-base">
                  That's what Ten75.ai provides. An embedded AI partner who
                  comes in, maps your operation, identifies where AI can deliver
                  measurable value, builds it, and stays to optimize results.
                </p>
                <p className="body-base">
                  What you get is a dedicated partner with deep domain
                  expertise — not a generalist with a template. The engagement
                  is structured to deliver compounding value, and the
                  investment reflects the kind of edge it creates.
                </p>
              </div>
            </div>

            {/* Right — model breakdown */}
            <div className="space-y-4">
              {[
                {
                  label: "What you get",
                  points: [
                    "Dedicated AI implementation partner",
                    "Propane-specific domain knowledge",
                    "System design, build, and deployment",
                    "Ongoing optimization and support",
                    "Direct line — not a support ticket",
                  ],
                },
                {
                  label: "What you won't deal with",
                  points: [
                    "Generalist consultants learning your industry",
                    "Unnecessary complexity for its own sake",
                    "Bloated implementation teams",
                    "Generic AI platforms that need customization",
                    "Work that doesn't produce measurable results",
                  ],
                },
              ].map((group) => (
                <div
                  key={group.label}
                  className="border border-zinc-200 rounded-2xl p-6 bg-white"
                >
                  <p className="text-xs font-semibold tracking-[0.12em] uppercase text-zinc-400 mb-4">
                    {group.label}
                  </p>
                  <ul className="space-y-2.5">
                    {group.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-zinc-700"
                      >
                        <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-amber-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-12">
            <SectionLabel className="mb-4">How We Operate</SectionLabel>
            <h2 className="display-md text-zinc-900 max-w-lg">
              The principles behind every engagement.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-8 md:p-10 space-y-3">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {value.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-[44ch]">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500">
              Work With Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to find out what AI can do for your operation?
            </h2>
            <p className="text-base text-zinc-500 leading-relaxed">
              Start with the free assessment. No commitment. No pressure. Just
              a clear picture of the opportunity in your specific business.
            </p>
            <Button href="/contact" size="lg" showArrow>
              Book the Free Assessment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
