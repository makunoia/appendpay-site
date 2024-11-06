"use client";

import Stack from "@/components/molecules/Stack";
import HeroBanner from "@/components/homepage/HeroBanner";
import LoanSection from "@/components/homepage/LoanSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import MFISection from "@/components/homepage/MFISection";

export default function Home() {
  return (
    <Stack className="gap-[100px]">
      <HeroBanner />
      <LoanSection />
      <FeaturesSection />
      <MFISection />
    </Stack>
  );
}
