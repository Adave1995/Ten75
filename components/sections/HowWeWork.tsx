import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import {
  MagnifyingGlass,
  FunnelSimple,
  Wrench,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";

const steps = [
  {
    number: "01",
    icon: MagnifyingGlass,
    title: "Assess",
    body: "I come in and conduct a deep operational audit — mapping your current workflows, systems, team structure, and data. The goal is to find where AI can move the needle most.",
    detail: "Typically 1–2 weeks. No commitment required.",
  },
  {
    number: "02",
    icon: FunnelSimple,
    title: "Prioritize",
    body: "We rank opportunities by impact and feasibility — focusing on the 2–3 implementations that will deliver the strongest ROI before moving to the next layer.",
    detail: "You see the full roadmap before we build anything.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Implement",
    body: "I build and deploy the AI systems — connecting to your existing tools and workflows wherever possible. No rip-and-replace. No six-month rollouts.",
    detail: "First implementations typically go live within 30 days.",
  },
  {
    number: "04",
    icon: TrendUp,
    title: "Optimize",
    body: "AI is not a one-time project. I stay on as your embedded AI partner — measuring results, tuning performance, and identifying the next layer of implementation.",
    detail: "Ongoing. Your AI stack compounds in value with every layer we add.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="bg-white section-padding"
      aria-label="How we work"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-end">
          <div className="space-y-4">
            <SectionLabel>The Process</SectionLabel>
            <h2 className="display-md text-zinc-900">
              Clear process.
              <br />
              <span className="text-zinc-400">No guesswork.</span>
            </h2>
          </div>
          <div className="lg:ml-auto lg:max-w-sm">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 space-y-1">
              <p className="text-sm font-semibold text-amber-800">
                The Ten75 Engagement Model
              </p>
              <p className="text-sm text-amber-700 leading-relaxed">
                We work as an embedded AI partner — not a one-time vendor.
                Our engagements are built to compound value month over month
                as your operation grows and matures.
              </p>
            </div>
          </div>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 rounded-[2rem] overflow-hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white p-8 lg:p-10 space-y-5 group hover:bg-zinc-950 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                {/* Step number + icon */}
                <div className="flex items-start justify-between">
                  <span className="text-5xl font-bold text-zinc-100 tabular-nums leading-none group-hover:text-zinc-800 transition-colors duration-300">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-50 group-hover:bg-amber-600 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <Icon
                      weight="bold"
                      className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Body */}
                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 leading-relaxed transition-colors duration-300">
                  {step.body}
                </p>

                {/* Detail */}
                <p className="text-xs text-zinc-300 group-hover:text-zinc-600 font-medium transition-colors duration-300">
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA nudge */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <p className="text-base text-zinc-500 max-w-[50ch]">
            The assessment is free. It gives you a complete picture of where AI
            can help — with no obligation to continue.
          </p>
          <Button href="/contact" showArrow>
            Start with an Assessment
          </Button>
        </div>
      </div>
    </section>
  );
}
