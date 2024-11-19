"use client";
import Text from "@/components/molecules/Text";
import Stack from "@/components/molecules/Stack";
import BrandStoryCard from "./BrandStoryCard";
import RiveComponent from "@/components/RiveComponent";
import { Alignment, Fit } from "@rive-app/canvas";
import { easeOut } from "framer-motion";

const BrandStory = () => {
  return (
    <Stack justify="center" gap={60}>
      <Stack gap={8} className="relative overflow-visible">
        <Stack
          motion
          initial={{ y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: easeOut, delay: 0.8 }}
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
        transition={{ ease: easeOut, delay: 1.2 }}
        viewport={{ once: true }}
        gap={24}
        align="center"
        className="bg opacity-0 bg-surface drop-shadow pb-ds-40 px-ds-40 lg:px-ds-60 rounded-b-[50px] w-11/12 lg:w-7/12 mx-auto"
      >
        <h2 className="text-title lg:text-display text-brand text-center w-full lg:w-fit -mt-4">
          Founded by people on a mission
        </h2>
        <Text size="body" lineHeight="relaxed" className="text text-center">
          The AppendPay founders and stockholders have been at the forefront of
          providing microfinance and associated socio-economic products and
          services to the low-income population.
        </Text>
      </Stack>

      <div className="grid grid-cols-11 gap-y-ds-32 align items-center">
        {/* 2010 CARD */}
        <div className="spacer hidden md:block md:col-span-5 min-h-[200px]" />
        <div className="time w-full h-full col-span-1" />
        <BrandStoryCard
          className="col-start-2 col-end-11 w-full md:col-span-4"
          title="2010"
          align="start"
          copy="Vision to create a digital payment platform for the entire micro-enterprise sector"
        />
        {/* END 2010 CARD */}

        {/* 2019 CARD */}
        <div className="time block md:hidden w-full h-full col-span-1" />
        <BrandStoryCard
          className="col-start-2 col-end-11 md:col-span-5 md:ml-24 md:text-right"
          title="2019"
          align="end"
          copy="Approval of the Append Inc. Board to establish the AppendPay Corporation and partnership with Multisys Technologies Corporation to develop the AppendPay mobile app"
        />
        <div className="time hidden md:block w-full h-full col-span-1" />
        <div className="spacer hidden md:block col-span-5 min-h-[200px] relative">
          <RiveComponent
            className="w-[400px] h-[250px] absolute -z-10 -left-32 -top-24"
            src="/rive/banners.riv"
            stateMachines="DEFAULT"
            artboard="Path1"
            layout={{ fit: Fit.FitWidth, alignment: Alignment.Center }}
            autoplay={true}
          />
        </div>
        {/* END 2019 CARD */}

        {/* 2020 CARD */}
        <div className="spacer hidden md:block col-span-5 min-h-[200px] relative">
          <RiveComponent
            className="w-[400px] h-[250px] absolute -z-10 -right-28 -top-24"
            src="/rive/banners.riv"
            stateMachines="DEFAULT"
            artboard="Path2"
            layout={{ fit: Fit.FitWidth, alignment: Alignment.Center }}
            autoplay={true}
          />
        </div>
        <div className="time w-full h-full col-span-1 " />

        <BrandStoryCard
          className="col-start-2 col-end-11 md:col-span-5 md:mr-24"
          title="2020"
          align="start"
          copy="SEC Registration as stock corporation owned by microfinance NGOs - TSKI, KMBI and CARD Inc., APPEND Inc., Foundation for Sustainable Society Inc. (FSSI) and social enterprises."
        />
        {/* END 2020 CARD */}

        {/* 2024 CARD */}
        <div className="time block md:hidden w-full h-full col-span-1" />
        <BrandStoryCard
          className="col-start-2 col-end-11 md:col-span-5 md:ml-24 lg:text-right"
          title="2024"
          align="end"
          copy="Launch of the all-inclusive AppendPay mobile app version 3 in collaboration with Multisys Technologies Corporation and Union Bank's UBX Corporation"
        />
        <div className="time hidden md:block w-full h-full col-span-1" />
        <div className="spacer hidden md:block col-span-5 min-h-[200px] relative">
          <RiveComponent
            className="w-[400px] h-[250px] absolute -z-10 -left-32 -top-24"
            src="/rive/banners.riv"
            stateMachines="DEFAULT"
            artboard="Path3"
            layout={{ fit: Fit.FitWidth, alignment: Alignment.Center }}
            autoplay={true}
          />
        </div>
        {/* 2024 CARD */}
      </div>
    </Stack>
  );
};

export default BrandStory;
