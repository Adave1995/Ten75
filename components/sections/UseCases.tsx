import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const useCases = [
  {
    id: "workflow",
    tag: "Operations",
    title: "AI Workflow Automation",
    body: "Automate the repetitive back-office work that drains your team — ticket routing, billing triggers, delivery confirmations, compliance checklists. Build workflows once; run them at scale.",
    size: "large",
  },
  {
    id: "customer-service",
    tag: "Customer Service",
    title: "AI Customer Service Assistant",
    body: "24/7 customer-facing AI that handles account inquiries, balance checks, service requests, and delivery scheduling — without waiting for a human agent.",
    size: "small",
  },
  {
    id: "call-handling",
    tag: "Call Coverage",
    title: "AI Call Handling & After-Hours Response",
    body: "Stop missing calls at 9pm in February. AI answers, qualifies, routes, and logs every after-hours call. Emergency escalation built in.",
    size: "small",
  },
  {
    id: "dispatch",
    tag: "Dispatch",
    title: "AI Dispatch & Routing Support",
    body: "Intelligent delivery sequencing, route optimization suggestions, and dynamic re-routing when conditions change. Give your dispatchers better tools, not more work.",
    size: "large",
  },
  {
    id: "sales",
    tag: "Sales",
    title: "AI Sales & Quoting Workflows",
    body: "Automated quote generation, lead scoring, follow-up sequencing, and CRM logging. Your sales team focuses on closing — AI handles the pipeline maintenance.",
    size: "medium",
  },
  {
    id: "knowledge",
    tag: "Knowledge",
    title: "AI Internal Knowledge Assistant",
    body: "Capture your most experienced operators' knowledge in a searchable AI system. New hires ramp faster. Veterans spend less time answering the same questions.",
    size: "medium",
  },
  {
    id: "forecasting",
    tag: "Forecasting",
    title: "AI Demand Forecasting",
    body: "Analyze historical usage patterns, weather data, and customer behavior to anticipate demand spikes before they strain your fleet and staffing.",
    size: "large",
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="bg-zinc-50 section-padding"
      aria-label="AI use cases for propane companies"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header row */}
        <div className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="display-md text-zinc-900 max-w-[18ch]">
              Concrete AI for
              <br />
              real propane problems.
            </h2>
          </div>
          <p className="text-base text-zinc-500 leading-relaxed max-w-[42ch] md:text-right">
            Every implementation is specific to your systems, your workflows,
            and your customers. No off-the-shelf templates.
          </p>
        </div>

        {/* Use cases — divide-y list approach (taste-skill: no 3-col equal cards) */}
        <div className="divide-y divide-zinc-200">
          {useCases.map((item, i) => (
            <div
              key={item.id}
              id={item.id}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-4 md:gap-8 py-7 md:py-8 items-start hover:bg-white -mx-6 md:-mx-12 px-6 md:px-12 transition-colors duration-200 rounded-none first:-mt-px"
            >
              {/* Tag */}
              <div className="flex items-center gap-2 md:pt-0.5">
                <span className="text-xs font-semibold tracking-[0.12em] uppercase text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-zinc-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-[58ch]">
                  {item.body}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-end pt-1">
                <ArrowRight
                  weight="bold"
                  className="w-4 h-4 text-zinc-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all duration-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
