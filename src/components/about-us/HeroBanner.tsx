"use client";
import Stack from "@/components/molecules/Stack";
import Text from "@/components/molecules/Text";
import RiveComponent from "@/components/RiveComponent";
import { Alignment, Fit } from "@rive-app/canvas";
import { easeOut } from "framer-motion";

const HeroBanner = () => {
  return (
    <div className="relative mx-[5%] h-[80vw] md:h-[50vw] lg:max-h-[450px] flex justify-end w-auto rounded-ds-16 mt-6 overflow-clip">
      <RiveComponent
        className="absolute -z-10  lg:top-0 right-0 left-0 w-full h-full"
        src="/rive/banners.riv"
        stateMachines="DEFAULT"
        artboard="AboutUs"
        layout={{ fit: Fit.Cover, alignment: Alignment.Center }}
        autoplay={true}
      />

      {/* Brand blurs */}
      <div className="w-[250px] h-[250px] opacity-20 bg-brand -z-10 blur-3xl absolute top-0 left-0" />
      <div className="w-[150px] h-[150px] opacity-20 bg-brand -z-10 blur-3xl absolute bottom-0 left-[20%]" />

      <Stack
        motion
        gap={32}
        initial={{ opacity: 0, y: "-20%" }}
        animate={{ opacity: 1, y: "-50%" }}
        transition={{ ease: easeOut }}
        className="absolute items-center z-10 w-full h-fit top-[50%]"
      >
        <h1 className="brandedText text-center lg:text-left font-bold text-brand leading-[2.8rem] text-[2rem] md:text-[2.5rem] lg:leading-[3rem] lg:text-[3rem]">
          About AppendPay
        </h1>

        <Text
          size="body"
          lineHeight="relaxed"
          className="text text-center w-8/12 lg:w-7/12"
        >
          AppendPay is pioneering digital financial inclusion in the Philippines
          with a payment system specifically designed for microfinance
          institutions (MFs), cooperatives, and micro, small, and medium
          enterprises (MSMEs). Registered with the Securities and Exchange
          Commission and recognized by the Bangko Sentral ng Pilipinas (BSP) as
          an Operator of Payment System, AppendPay aims to accelerate poverty
          alleviation and enhance financial inclusion.
        </Text>
      </Stack>
    </div>
  );
};

export default HeroBanner;
