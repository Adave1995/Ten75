import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import {
  Gear,
  Headset,
  Phone,
  Truck,
  CurrencyDollar,
  BookOpen,
  ChartLineUp,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Services — AI Implementation for Propane Companies",
  description:
    "Ten75.ai builds AI systems for propane distributors — dispatch automation, customer service AI, call handling, sales workflows, knowledge management, and demand forecasting.",
  alternates: {
    canonical: "https://ten75.ai/services",
  },
};

const services = [
  {
    id: "workflow",
    icon: Gear,
    tag: "Operations",
    title: "AI Workflow Automation",
    description:
      "Automate the high-volume, repetitive operational tasks that drain your team's time and create errors.",
    capabilities: [
      "Automated delivery confirmation and customer notification workflows",
      "Billing trigger automation tied to delivery events",
      "Compliance checklist generation and routing",
      "Internal ticket routing based on type and urgency",
      "Cross-system data synchronization between dispatch, CRM, and billing",
    ],
    outcome:
      "Operations teams report 3–5 hours per week reclaimed per person in roles with high administrative overlap.",
  },
  {
    id: "customer-service",
    icon: Headset,
    tag: "Customer Service",
    title: "AI Customer Service Assistant",
    description:
      "Deploy a 24/7 AI assistant that handles the full first tier of customer inquiries — without putting customers on hold.",
    capabilities: [
      "Account balance and delivery history inquiries",
      "Automatic delivery scheduling and rescheduling",
      "Service request intake and routing",
      "Payment method updates and billing questions",
      "Propane usage questions and safety information",
      "Human escalation with full context handoff",
    ],
    outcome:
      "Handles 60–75% of inbound customer inquiries without human intervention, reducing average handle time on complex issues.",
  },
  {
    id: "call-handling",
    icon: Phone,
    tag: "Call Coverage",
    title: "AI Call Handling & After-Hours Response",
    description:
      "Stop losing calls and opportunities after business hours. AI answers every call with the same capability as your best CSR.",
    capabilities: [
      "24/7 inbound call coverage — nights, weekends, holidays",
      "Emergency gas leak and safety call escalation protocols",
      "New customer intake and qualifying",
      "Delivery scheduling and account lookups",
      "Call transcription and CRM logging",
      "Overflow coverage during peak periods",
    ],
    outcome:
      "Companies typically see 20–30% increase in captured after-hours inquiries that previously went unanswered.",
  },
  {
    id: "dispatch",
    icon: Truck,
    tag: "Dispatch & Routing",
    title: "AI Dispatch & Routing Support",
    description:
      "Give your dispatch team an intelligent assistant that handles the cognitive load of route optimization and real-time adjustments.",
    capabilities: [
      "Intelligent delivery sequence optimization",
      "Dynamic re-routing based on weather, traffic, and tank level data",
      "Driver communication automation",
      "Tank monitor integration and predictive delivery scheduling",
      "Fleet utilization reporting and analysis",
      "Historical route performance tracking",
    ],
    outcome:
      "Dispatch teams report 4–6 hours per week in reclaimed decision-making time, with measurable improvement in fuel efficiency.",
  },
  {
    id: "sales",
    icon: CurrencyDollar,
    tag: "Sales",
    title: "AI Sales & Quoting Workflows",
    description:
      "Accelerate your sales cycle with AI that handles quote generation, lead follow-up, and CRM maintenance automatically.",
    capabilities: [
      "Automated propane pricing quote generation based on customer profile",
      "Lead scoring and prioritization from inbound inquiries",
      "Multi-touch follow-up sequences for unconverted leads",
      "Win/loss analysis and conversion reporting",
      "CRM data enrichment and pipeline hygiene",
      "Budget season outreach automation",
    ],
    outcome:
      "Sales teams close faster by eliminating manual quoting and follow-up work, with full pipeline visibility in real time.",
  },
  {
    id: "knowledge",
    icon: BookOpen,
    tag: "Knowledge Management",
    title: "AI Internal Knowledge Assistant",
    description:
      "Capture what your most experienced operators know and make it accessible to your entire team — new hires included.",
    capabilities: [
      "Operational knowledge base built from your SOPs, notes, and historical data",
      "AI Q&A assistant for internal team use",
      "Onboarding acceleration for new drivers, dispatchers, and CSRs",
      "Safety and compliance procedure repository",
      "Customer history and account context lookup",
      "Continuous knowledge base updates as operations evolve",
    ],
    outcome:
      "New hire onboarding timelines cut by 30–50%. Experienced staff spend significantly less time answering internal questions.",
  },
  {
    id: "forecasting",
    icon: ChartLineUp,
    tag: "Forecasting",
    title: "AI Demand Forecasting",
    description:
      "Stop reacting to demand spikes. AI analyzes your historical data and external signals to predict what's coming before it arrives.",
    capabilities: [
      "Propane consumption forecasting by customer segment and geography",
      "Weather-adjusted delivery demand modeling",
      "Fleet and staffing load forecasting for peak seasons",
      "Inventory and supply planning support",
      "Usage anomaly detection for customer service triggers",
      "Annual budget forecasting support",
    ],
    outcome:
      "Operations teams are better prepared for peak demand periods, with fewer emergency deliveries and less overtime.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl space-y-5">
            <SectionLabel>What We Build</SectionLabel>
            <h1 className="display-lg text-zinc-900">
              AI services built
              <br />
              for propane operations.
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-[50ch]">
              Every service below is designed and implemented specifically for
              propane distributors and fuel companies. Not adapted from generic
              AI playbooks — built for the way your business actually operates.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="space-y-0 divide-y divide-zinc-100">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="py-14 md:py-16 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16"
                >
                  {/* Left — label + icon */}
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                      <Icon weight="duotone" className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-600 mb-1">
                        {service.tag}
                      </p>
                      <h2 className="text-xl font-bold text-zinc-900 leading-snug">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Right — content */}
                  <div className="space-y-7">
                    <p className="text-base text-zinc-600 leading-relaxed max-w-[58ch]">
                      {service.description}
                    </p>

                    {/* Capabilities */}
                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] uppercase text-zinc-400 mb-3">
                        Capabilities
                      </p>
                      <ul className="space-y-2.5">
                        {service.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-start gap-3 text-sm text-zinc-600"
                          >
                            <span className="flex-shrink-0 mt-2 w-1 h-1 rounded-full bg-amber-500" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-4">
                      <p className="text-xs font-semibold tracking-[0.12em] uppercase text-zinc-400 mb-1.5">
                        Typical Outcome
                      </p>
                      <p className="text-sm text-zinc-700 leading-relaxed">
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-zinc-950 py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500 mb-4">
            Start Here
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
            Not sure where to start?
          </h2>
          <p className="text-base text-zinc-500 mb-8 max-w-[44ch] mx-auto">
            The free assessment identifies which of these services will deliver
            the most value for your specific operation — and in what order.
          </p>
          <Button href="/contact" size="lg" showArrow>
            Book the Free Assessment
          </Button>
        </div>
      </section>
    </>
  );
}
