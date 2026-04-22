"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight, ChartLineUp, Phone, Truck } from "@phosphor-icons/react";

const stats = [
  {
    icon: Phone,
    metric: "23%",
    label: "more calls handled after hours",
    sub: "AI call coverage",
  },
  {
    icon: Truck,
    metric: "4.7 hrs",
    label: "saved per dispatcher per week",
    sub: "AI routing support",
  },
  {
    icon: ChartLineUp,
    metric: "31 min",
    label: "avg faster customer response",
    sub: "AI service assistant",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.classList.add("opacity-100");
  }, []);

  return (
    <section
      className="relative min-h-[100dvh] bg-white flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, rgba(217,119,6,0.04) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(24,24,27,0.03) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-24 pb-16 md:pt-32 md:pb-24">
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center opacity-0 transition-opacity duration-700"
        >
          {/* Left — Content */}
          <div className="space-y-8">
            <div className="animate-fade-up stagger-1">
              <SectionLabel>Propane AI Implementation</SectionLabel>
            </div>

            <div className="animate-fade-up stagger-2">
              <h1 className="display-xl text-zinc-900">
                AI That Actually Understands{" "}
                <span className="relative inline-block">
                  Propane.
                  <span
                    className="absolute bottom-1 left-0 w-full h-[3px] bg-amber-500 rounded-full"
                    style={{ transform: "scaleX(1)", transformOrigin: "left" }}
                  />
                </span>
              </h1>
            </div>

            <div className="animate-fade-up stagger-3">
              <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-[52ch]">
                Ten75.ai is the dedicated AI implementation partner for propane
                distributors and fuel companies — embedding practical AI into
                dispatch, customer service, quoting, and operations. Without
                the buzzwords.
              </p>
            </div>

            <div className="animate-fade-up stagger-4 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg" showArrow>
                Book a Free Assessment
              </Button>
              <Button href="#how-we-work" variant="ghost" size="lg">
                <span className="flex items-center gap-1.5">
                  See how it works
                  <ArrowUpRight weight="bold" className="w-4 h-4 text-amber-600" />
                </span>
              </Button>
            </div>

            {/* Trust signal */}
            <div className="animate-fade-up stagger-5">
              <p className="text-sm text-zinc-400 tracking-tight">
                Propane-specific expertise. Embedded implementation.{" "}
                <span className="text-zinc-600 font-medium">
                  An edge that compounds.
                </span>
              </p>
            </div>
          </div>

          {/* Right — Stats Dashboard Visual */}
          <div className="hidden lg:block animate-fade-in stagger-3">
            <div className="relative">
              {/* Main card */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[2rem] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-400 mb-1">
                      Operations Overview
                    </p>
                    <p className="text-sm font-medium text-zinc-700">
                      Live AI Activity
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">Live</span>
                  </div>
                </div>

                {/* Stat rows */}
                <div className="space-y-4">
                  {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl border border-zinc-100 hover:border-zinc-200 transition-colors duration-200"
                        style={{ animationDelay: `${(i + 4) * 80}ms` }}
                      >
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center">
                          <Icon
                            weight="duotone"
                            className="w-4.5 h-4.5 text-amber-600"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-zinc-400 truncate">
                            {stat.label}
                          </p>
                          <p className="text-[10px] text-zinc-300 truncate">
                            {stat.sub}
                          </p>
                        </div>
                        <span className="text-xl font-bold text-zinc-900 tabular-nums tracking-tight flex-shrink-0">
                          {stat.metric}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Footer bar */}
                <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
                  <p className="text-xs text-zinc-400">Based on Ten75 client averages</p>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full bg-amber-400"
                        style={{ height: `${[12, 20, 16, 24, 18][i]}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent tag */}
              <div className="absolute -top-4 -right-4 bg-zinc-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                Propane-Specific AI
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in stagger-8">
        <span className="text-xs text-zinc-400 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-300 to-transparent" />
      </div>
    </section>
  );
}
