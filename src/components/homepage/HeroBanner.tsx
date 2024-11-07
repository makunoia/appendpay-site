import Image from "next/image";
import Stack from "@/components/molecules/Stack";
import RiveComponent from "@/components/RiveComponent";
import { Alignment, Fit } from "@rive-app/canvas";

const HeroBanner = () => {
  return (
    <div className="relative h-[80vh] md:h-[90vh] lg:h-[550px] flex justify-end w-full rounded-ds-16 mt-6 overflow-clip">
      <RiveComponent
        className="absolute -z-10 top-20 lg:top-0 right-0 left-0 w-full h-full"
        src="/rive/hero_banner.riv"
        stateMachines="HERO_BANNER"
        layout={{ fit: Fit.FitWidth, alignment: Alignment.Center }}
        autoplay={true}
      />

      <Image
        className="absolute scale-75 md:scale-100 bottom-[-60%] md:bottom-[-70%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[10%] lg:top-[5%]"
        src="/hero_image.png"
        width={350}
        height={200}
        alt="App Store Badge"
      />

      {/* Brand blurs */}
      <div className="w-[250px] h-[250px] opacity-20 bg-brand -z-10 blur-3xl absolute top-0 left-0" />
      <div className="w-[150px] h-[150px] opacity-20 bg-brand -z-10 blur-3xl absolute bottom-0 left-[20%]" />

      <Stack
        gap={32}
        className="absolute items-center lg:items-start z-10 w-10/12 top-[10%] lg:max-w-lg h-fit lg:top-[100px] left-[10%] lg:left-auto lg:right-[3%] xl:right-[5%]"
      >
        <h1 className="brandedText text-center lg:text-left font-bold text-brand leading-[2.8rem] text-[2.5rem] md:leading-[4rem] md:text-[4rem] lg:leading-[4.5rem] lg:text-[4.5rem]">
          Micro-loans para sa mga mamamayang Pilipino
        </h1>

        <Stack horizontal gap={8}>
          <Image
            src="/app_store_badge.png"
            width={170}
            height={70}
            alt="App Store Badge"
          />
          <Image
            src="/google_play_badge.png"
            width={190}
            height={70}
            alt="App Store Badge"
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default HeroBanner;
