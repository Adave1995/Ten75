import SectionLabel from "@/components/ui/SectionLabel";

const outcomes = [
  {
    metric: "4.7 hrs",
    unit: "per dispatcher / week",
    label: "Reclaimed from manual admin",
    body: "Routing decisions, delivery confirmations, and customer updates that dispatchers previously handled manually — now automated.",
  },
  {
    metric: "23%",
    unit: "increase",
    label: "More calls handled without adding staff",
    body: "After-hours AI coverage captures calls that previously rang unanswered — and resolves a significant portion without human escalation.",
  },
  {
    metric: "31 min",
    unit: "avg reduction",
    label: "Faster customer response time",
    body: "AI handles the first 80% of customer inquiries instantly. Human agents focus exclusively on complex issues.",
  },
  {
    metric: "3.2×",
    unit: "multiplier",
    label: "Team leverage without headcount",
    body: "AI handles the high-volume, repetitive workload. Your existing team operates at higher leverage without burnout.",
  },
  {
    metric: "Zero",
    unit: "missed calls",
    label: "After-hours coverage, every night",
    body: "Emergency calls, delivery requests, and account questions are handled at 2am the same way they are at 2pm.",
  },
  {
    metric: "Day 1",
    unit: "ramp time",
    label: "New hire onboarding via AI knowledge base",
    body: "Instead of shadowing experienced staff for weeks, new team members access a structured AI assistant with your operational knowledge built in.",
  },
];

export default function Outcomes() {
  return (
    <section
      id="outcomes"
      className="bg-zinc-50 section-padding"
      aria-label="Business outcomes"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-14 md:mb-16 max-w-2xl">
          <SectionLabel className="mb-4">Real Results</SectionLabel>
          <h2 className="display-md text-zinc-900">
            What changes when
            <br />
            AI is embedded in your operation.
          </h2>
        </div>

        {/* Outcomes — asymmetric 3-2 col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200">
          {outcomes.map((item, i) => (
            <div
              key={i}
              className={`bg-zinc-50 p-8 md:p-10 group hover:bg-white transition-all duration-200 ${
                i === 0 ? "lg:col-span-1" : ""
              } ${i === 3 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Metric */}
              <div className="mb-5">
                <span className="text-4xl md:text-5xl font-bold text-zinc-900 tabular-nums tracking-tight leading-none">
                  {item.metric}
                </span>
                <span className="ml-2 text-sm text-zinc-400 font-medium">
                  {item.unit}
                </span>
              </div>

              {/* Label + body */}
              <div className="space-y-2 border-t border-zinc-200 pt-5">
                <h3 className="text-sm font-semibold text-zinc-900 leading-snug">
                  {item.label}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.body}
                </p>
              </div>

              {/* Accent tick */}
              <div className="mt-5 w-6 h-0.5 bg-amber-500 group-hover:w-10 transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-zinc-400 leading-relaxed">
          Metrics represent averages across Ten75 client implementations.
          Results vary based on starting operational state and scope of
          implementation.
        </p>
      </div>
    </section>
  );
}
