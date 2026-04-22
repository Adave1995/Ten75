import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section
      id="get-started"
      className="bg-zinc-950 section-padding"
      aria-label="Get started"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <div className="space-y-7">
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500">
                The window is now
              </p>
            </div>

            <h2 className="display-md text-white leading-[1.05]">
              Your competitors are exploring AI.
              <br />
              <span className="text-zinc-500">
                The question is whether you lead or catch up.
              </span>
            </h2>

            <p className="text-base text-zinc-500 leading-relaxed max-w-[48ch]">
              The free operational assessment gives you a concrete picture of
              where AI can help your business — with specific recommendations,
              expected timelines, and projected ROI. No commitment required.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" size="lg" showArrow>
                Book Your Free Assessment
              </Button>
              <Button href="/services" variant="ghost" size="lg">
                <span className="text-zinc-400 hover:text-white transition-colors">
                  View all services
                </span>
              </Button>
            </div>

            <p className="text-xs text-zinc-600">
              We respond within one business day. No sales pressure.
            </p>
          </div>

          {/* Right — visual metric card */}
          <div className="hidden lg:block">
            <div className="border border-zinc-800 rounded-[2rem] p-10 space-y-6 bg-zinc-900/50">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-600">
                What the Assessment Covers
              </p>
              <ul className="space-y-4">
                {[
                  "Current workflow audit across dispatch, service, and sales",
                  "AI opportunity scoring by impact and feasibility",
                  "System integration map — what you have, what connects",
                  "Recommended implementation sequence",
                  "Projected ROI by initiative",
                  "90-day action plan",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1.5 text-amber-500 font-bold text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-zinc-400 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-zinc-800">
                <p className="text-sm font-semibold text-white">
                  Free. No commitment.{" "}
                  <span className="text-amber-500">Yours to keep.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
