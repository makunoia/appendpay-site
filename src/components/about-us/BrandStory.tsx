"use client";
import Text from "@/components/molecules/Text";
import Stack from "@/components/molecules/Stack";
import BrandStoryCard from "./BrandStoryCard";
import RiveComponent from "@/components/RiveComponent";
import { Alignment, Fit, Layout } from "@rive-app/canvas";
import { animate, easeOut, inView } from "framer-motion";
import { useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";

const BrandStory = () => {
  const layout = new Layout({ fit: Fit.Contain, alignment: Alignment.Center });
  const stateMachines = "DEFAULT";
  const autoplay = false;

  const { RiveComponent: Path1Component, rive: Path1Rive } = useRive({
    src: "/rive/banners.riv",
    artboard: "Path1",
    stateMachines,
    layout,
    autoplay,
  });

  const { RiveComponent: Path2Component, rive: Path2Rive } = useRive({
    src: "/rive/banners.riv",
    artboard: "Path2",
    stateMachines,
    layout,
    autoplay,
  });

  const { RiveComponent: Path3Component, rive: Path3Rive } = useRive({
    src: "/rive/banners.riv",
    artboard: "Path3",
    stateMachines,
    layout,
    autoplay,
  });

  const animationOrchestration = () => {
    // Helper function to create a promise-based delay
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const animateTimeline = async () => {
      animate("#firstCard", { opacity: 1, y: 0 });
      Path1Rive?.play();

      await delay(700); // 1.3s delay

      animate("#secondCard", { opacity: 1, y: 0 });
      Path2Rive?.play();

      await delay(700); // Additional 0.7s delay (2.0s total)

      animate("#thirdCard", { opacity: 1, y: 0 });
      Path3Rive?.play();

      await delay(700); // Additional 1s delay (3.0s total)

      animate("#fourthCard", { opacity: 1, y: 0 });
    };

    animateTimeline();
  };

  useEffect(() => {
    const timeline = document.getElementById("timeline");
    inView(timeline ? timeline : "#timeline", () => {
      animationOrchestration();
    });
  });

  return (
    <Stack justify="center" gap={60}>
      <Stack gap={8} className="relative overflow-visible">
        <Stack
          motion
          initial={{ y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: easeOut }}
          viewport={{ once: true }}
          gap={8}
          className="opacity-0 w-8/12 lg:w-6/12 mx-auto"
        >
          <h1 className="brandedText text-center font-bold text-brand leading-[2.8rem] text-[2.5rem]">
            Our Brand Story
          </h1>

          <Text size="body" lineHeight="relaxed" className="text-center text">
            Founded in 2019, AppendPay was created to empower over 11 million
            economically underprivileged micro-entrepreneurs and their
            communities served by microfinance institutions (MFIs) by providing
            access to essential financial services through innovative digital
            solutions.
          </Text>
        </Stack>

        <RiveComponent
          className="w-full h-[450px] absolute -z-10 -top-16"
          src="/rive/banners.riv"
          stateMachines="DEFAULT"
          artboard="OurStoryBanner"
          layout={{ fit: Fit.Fill, alignment: Alignment.TopCenter }}
          autoplay={true}
        />
      </Stack>

      <Stack
        motion
        initial={{ y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: easeOut }}
        viewport={{ once: true }}
        gap={24}
        className="bg opacity-0 bg-surface drop-shadow pb-ds-40 px-ds-40 lg:px-ds-60 rounded-b-[50px] w-11/12 lg:w-7/12 mx-auto"
      >
        <h2 className="text-title lg:text-display text-brand text-center w-full -mt-4">
          Founded by people on a mission
        </h2>
        <Text size="body" lineHeight="relaxed" className="text text-center">
          The AppendPay founders and stockholders have been at the forefront of
          providing microfinance and associated socio-economic products and
          services to the low-income population.
        </Text>
      </Stack>

      <div
        className="append-timeline grid grid-cols-11 gap-y-ds-32 md:gap-y-[0] align items-center"
        id="timeline"
      >
        {/* 2010 CARD - FIRST CARD */}
        <div className="spacer hidden md:block md:col-span-5 min-h-[200px]" />
        <div className="time w-full h-full col-span-1" />
        <BrandStoryCard
          id="firstCard"
          className="col-start-2 col-end-11 w-full md:col-span-4 opacity-0"
          title="2010"
          copy="Vision to create a digital payment platform for the entire micro-enterprise sector"
        />
        {/* END 2010 CARD */}

        {/* 2019 CARD - SECOND CARD */}
        <div className="time block md:hidden w-full h-full col-span-1" />
        <BrandStoryCard
          id="secondCard"
          className="col-start-2 col-end-11 md:col-span-5 md:ml-24 md:text-right opacity-0 "
          title="2019"
          copy="Approval of the Append Inc. Board to establish the AppendPay Corporation and partnership with Multisys Technologies Corporation to develop the AppendPay mobile app"
        />
        <div className="time hidden md:block w-full h-full col-span-1" />
        <div className="spacer hidden md:block col-span-5 min-h-[200px] relative">
          <Path1Component className="w-[400px] h-[250px] absolute -z-10 -left-40 -top-16" />
        </div>
        {/* END 2019 CARD */}

        {/* 2020 CARD - THIRD CARD */}
        <div className="spacer hidden md:block col-span-5 min-h-[200px] relative">
          <Path2Component className="w-[400px] h-[250px] absolute -z-10 -right-40 -top-16" />
        </div>
        <div className="time w-full h-full col-span-1 " />

        <BrandStoryCard
          id="thirdCard"
          className="col-start-2 col-end-11 md:col-span-5 md:mr-24 opacity-0 "
          title="2020"
          copy="SEC Registration as stock corporation owned by microfinance NGOs - TSKI, KMBI and CARD Inc., APPEND Inc., Foundation for Sustainable Society Inc. (FSSI) and social enterprises."
        />
        {/* END 2020 CARD */}

        {/* 2024 CARD - FOURTH CARD */}
        <div className="time block md:hidden w-full h-full col-span-1 opacity-0" />
        <BrandStoryCard
          id="fourthCard"
          className="col-start-2 col-end-11 md:col-span-5 md:ml-24 lg:text-right opacity-0"
          title="2024"
          copy="Launch of the all-inclusive AppendPay mobile app version 3 in collaboration with Multisys Technologies Corporation and Union Bank's UBX Corporation"
        />
        <div className="time hidden md:block w-full h-full col-span-1" />
        <div className="spacer hidden md:block col-span-5 min-h-[200px] relative">
          <Path3Component className="w-[400px] h-[250px] absolute -z-10 -left-40 -top-16" />
        </div>
        {/* 2024 CARD */}
      </div>
    </Stack>
  );
};

export default BrandStory;
