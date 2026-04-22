"use client";

import { useRef, useEffect } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function BobtailShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const progressBar = progressBarRef.current;
    if (!section || !video || !progressBar) return;

    let rafId = 0;

    function syncVideo() {
      const rect = section!.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      const scrollable = section!.offsetHeight;
      // Raw progress 0→1 over the full 200vh scroll range.
      // The section "lands" (fully in viewport) at progress=0.5, so we
      // double the rate so the assembly completes right as it settles.
      const raw = Math.min(Math.max(scrolled / scrollable, 0), 1);
      const videoProgress = Math.min(raw * 2, 1);
      progressBar!.style.width = `${videoProgress * 100}%`;
      if (video!.duration) {
        video!.currentTime = videoProgress * video!.duration;
      }
      rafId = 0;
    }

    function handleScroll() {
      if (!rafId) {
        rafId = requestAnimationFrame(syncVideo);
      }
    }

    video.addEventListener("loadedmetadata", syncVideo);
    window.addEventListener("scroll", handleScroll, { passive: true });
    syncVideo();

    return () => {
      video.removeEventListener("loadedmetadata", syncVideo);
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="bg-white overflow-hidden"
      aria-label="Bobtail assembly showcase"
    >
      <div className="relative" style={{ height: "250vh" }}>
        <div className="sticky top-0 min-h-[100dvh] flex items-center py-16 px-6 md:px-12">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-4 items-center w-full max-w-7xl mx-auto">

            {/* Copy — left side */}
            <div className="space-y-6 lg:pr-8">
              <SectionLabel>The Metaphor</SectionLabel>

              <h2 className="display-md text-zinc-900">
                Many moving parts.{" "}
                <span className="text-zinc-400">One system.</span>
              </h2>

              <p className="body-base max-w-[48ch]">
                A propane bobtail truck is a marvel of coordinated systems —
                pump, tank, meter, regulator, chassis, all working in concert.
                Your operation is no different. AI brings dispatch, customer
                service, scheduling, and tribal knowledge together into one
                connected operation.
              </p>

              <div className="flex flex-col gap-y-3 pt-1">
                {[
                  "Fragmented systems become connected workflows",
                  "Siloed knowledge becomes accessible intelligence",
                  "Reactive operations become proactive systems",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <p className="text-sm text-zinc-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Video — right side, blended into white */}
            <div className="relative w-full aspect-[4/3]">
              <video
                ref={videoRef}
                src="/bobtail.mp4"
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
                className="w-full h-full object-cover"
              />

              {/* Gradient overlays — blend all edges into white */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Left edge (toward text) — widest fade */}
                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent" />
                {/* Top edge */}
                <div className="absolute inset-x-0 top-0 h-[15%] bg-gradient-to-b from-white to-transparent" />
                {/* Bottom edge */}
                <div className="absolute inset-x-0 bottom-0 h-[15%] bg-gradient-to-t from-white to-transparent" />
                {/* Right edge */}
                <div className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-white to-transparent" />
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5">
                <div
                  ref={progressBarRef}
                  className="h-full bg-amber-400"
                  style={{ width: "0%" }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
