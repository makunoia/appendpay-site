"use client";

import Stack from "@/components/molecules/Stack";
import HeroBanner from "@/components/about-us/HeroBanner";
import MissionVision from "@/components/about-us/MissionVision";
import BrandStory from "@/components/about-us/BrandStory";

const About = () => {
  return (
    <Stack className="gap-[120px]">
      <HeroBanner />
      <MissionVision />
      <BrandStory />
    </Stack>
  );
};

export default About;
