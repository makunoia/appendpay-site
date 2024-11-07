import Stack from "@/components/molecules/Stack";
import Text from "@/components/molecules/Text";
import RiveComponent from "@/components/RiveComponent";
import { Alignment, Fit } from "@rive-app/canvas";

const HeroBanner = () => {
  return (
    <div className="relative h-[80vh] md:h-[90vh] lg:h-[450px] flex justify-end w-full rounded-ds-16 mt-6 overflow-clip">
      <RiveComponent
        className="absolute -z-10 top-20 lg:top-0 right-0 left-0 w-full h-full"
        src="/rive/hero_banner.riv"
        stateMachines="HERO_BANNER"
        layout={{ fit: Fit.FitWidth, alignment: Alignment.Center }}
        autoplay={true}
      />

      {/* Brand blurs */}
      <div className="w-[250px] h-[250px] opacity-20 bg-brand -z-10 blur-3xl absolute top-0 left-0" />
      <div className="w-[150px] h-[150px] opacity-20 bg-brand -z-10 blur-3xl absolute bottom-0 left-[20%]" />

      <Stack
        gap={32}
        className="absolute items-center z-10 w-full h-fit top-[50%] -translate-y-[50%]"
      >
        <h1 className="brandedText text-center lg:text-left font-bold text-brand leading-[2.8rem] text-[2.5rem] lg:leading-[3rem] lg:text-[3rem]">
          About AppendPay
        </h1>

        <Text
          size="body"
          lineHeight="relaxed"
          className="text text-center w-7/12"
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
