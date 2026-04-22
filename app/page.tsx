import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import BobtailShowcase from "@/components/sections/BobtailShowcase";
import WhyNow from "@/components/sections/WhyNow";
import UseCases from "@/components/sections/UseCases";
import HowWeWork from "@/components/sections/HowWeWork";
import Outcomes from "@/components/sections/Outcomes";
import Credibility from "@/components/sections/Credibility";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Ten75.ai — AI Built for Propane Companies",
  description:
    "Ten75.ai is the fractional Chief AI Officer for propane distributors and fuel companies. Practical AI implementation for dispatch, customer service, quoting, and operations.",
  alternates: {
    canonical: "https://ten75.ai",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BobtailShowcase />
      <div className="-mt-[130vh] relative z-10">
        <WhyNow />
      </div>
      <UseCases />
      <HowWeWork />
      <Outcomes />
      <Credibility />
      <FinalCTA />
    </>
  );
}
