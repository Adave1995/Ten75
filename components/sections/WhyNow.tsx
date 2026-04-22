import SectionLabel from "@/components/ui/SectionLabel";

const pressures = [
  {
    number: "01",
    title: "Labor is not coming back",
    body: "Experienced dispatchers retire. Drivers are harder to find. The tribal knowledge that kept your operation running is walking out the door — and there is no pipeline to replace it.",
  },
  {
    number: "02",
    title: "Margins are tighter every year",
    body: "Fuel, insurance, equipment, compliance costs — all rising. The only lever you have left is operational efficiency. AI is that lever.",
  },
  {
    number: "03",
    title: "Customer expectations have shifted",
    body: "Customers now expect instant answers, online account access, and same-day response — the same experience they get from Amazon. Traditional propane operations were not built for that.",
  },
  {
    number: "04",
    title: "Your systems do not talk to each other",
    body: "Route software, customer records, billing, call logs, delivery history — all siloed. Your team spends hours bridging the gaps manually. That overhead compounds every single day.",
  },
  {
    number: "05",
    title: "Knowledge lives in people, not systems",
    body: "Your best dispatcher knows which roads to avoid in February and which customers need a call before delivery. When they leave, that knowledge leaves with them.",
  },
  {
    number: "06",
    title: "Your competitors are already moving",
    body: "Larger distributors and regional operators are quietly piloting AI in dispatch, customer service, and operations. The window to lead this shift is now.",
  },
];

export default function WhyNow() {
  return (
    <section
      id="why-now"
      className="bg-zinc-950 section-padding"
      aria-label="Industry pressures"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-end">
          <div className="space-y-5">
            <SectionLabel light>The Pressure Is Already Here</SectionLabel>
            <h2 className="display-md text-white">
              Propane companies that wait
              <br />
              <span className="text-zinc-500">are paying for it.</span>
            </h2>
          </div>
          <div className="lg:max-w-md lg:ml-auto lg:text-right">
            <p className="text-base text-zinc-500 leading-relaxed">
              These are not future problems. They are the pressures your
              operations team is managing right now — and they compound.
            </p>
          </div>
        </div>

        {/* Pressure grid — asymmetric 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800">
          {pressures.map((item, i) => (
            <div
              key={item.number}
              className="bg-zinc-950 p-8 md:p-10 hover:bg-zinc-900 transition-colors duration-200 group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-4xl font-bold text-zinc-800 tabular-nums leading-none group-hover:text-amber-700 transition-colors duration-300">
                    {item.number}
                  </span>
                  <div className="w-5 h-px mt-4 bg-amber-600 flex-shrink-0" />
                </div>
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
