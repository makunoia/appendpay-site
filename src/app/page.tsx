"use client";

import Stack from "@/components/molecules/Stack";
import HeroBanner from "@/components/homepage/HeroBanner";
import LoanSection from "@/components/homepage/LoanSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import MFISection from "@/components/homepage/MFISection";
import WhyAppendSection from "@/components/homepage/WhyAppendSection";

export default function Home() {
  return (
    <>
      <Stack className="gap-[100px] mx-[5%]">
        <HeroBanner />
        <LoanSection />
        <FeaturesSection />
        <MFISection />
      </Stack>
      <WhyAppendSection />
    </>
  );
}
