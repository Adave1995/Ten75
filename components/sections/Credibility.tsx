import SectionLabel from "@/components/ui/SectionLabel";

export default function Credibility() {
  return (
    <section
      id="credibility"
      className="bg-white section-padding"
      aria-label="Credibility and industry expertise"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Main credibility statement */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-start">
          <div className="space-y-8">
            <SectionLabel>Why Ten75</SectionLabel>

            <h2 className="display-md text-zinc-900">
              We know propane.
              <br />
              <span className="text-zinc-400">We don&apos;t just know AI.</span>
            </h2>

            <div className="space-y-5 max-w-[50ch]">
              <p className="body-lg">
                Generic AI agencies produce generic results. They apply the
                same templates to every industry and move on. Propane
                operations are specific — your systems, your customer base,
                your regulatory requirements, your seasonal dynamics.
              </p>
              <p className="body-base">
                Ten75.ai works exclusively with propane distributors and fuel
                companies. That specialization means faster implementation,
                fewer wrong turns, and solutions that reflect how the industry
                actually operates — not how a consultant thinks it does.
              </p>
              <p className="body-base">
                We are not consultants who recommend and walk away. We build,
                implement, and stay as your AI partner — accountable to
                measurable outcomes.
              </p>
            </div>
          </div>

          {/* Right — proof points placeholder */}
          <div className="space-y-6">
            {/* Industry focus callout */}
            <div className="border border-zinc-200 rounded-2xl p-6 space-y-3">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-zinc-400">
                Industry Focus
              </p>
              <p className="text-2xl font-bold text-zinc-900 tracking-tight">
                100% Propane & Fuel
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Not a generalist. Not a pivot. Built for this industry from
                day one.
              </p>
            </div>

            {/* Logos placeholder */}
            <div className="border border-dashed border-zinc-200 rounded-2xl p-6 space-y-3">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-zinc-400">
                Trusted By
              </p>
              {/* TODO: Replace with actual client logos */}
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 bg-zinc-100 rounded-lg animate-pulse"
                    aria-label="Client logo placeholder"
                  />
                ))}
              </div>
              <p className="text-xs text-zinc-300">
                Client logos — coming soon
              </p>
            </div>

            {/* Testimonial placeholder */}
            <div className="border border-dashed border-zinc-200 rounded-2xl p-6 space-y-3">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-zinc-400">
                What Operators Say
              </p>
              {/* TODO: Replace with real testimonials */}
              <blockquote className="text-sm text-zinc-300 italic leading-relaxed">
                &ldquo;Client testimonial coming soon.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-100" />
                <div className="space-y-1">
                  <div className="w-24 h-2.5 bg-zinc-100 rounded" />
                  <div className="w-16 h-2 bg-zinc-100 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
