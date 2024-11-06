import Image from "next/image";
import Stack from "@/components/molecules/Stack";
import RiveComponent from "@/components/RiveComponent";
import { Alignment, Fit } from "@rive-app/canvas";

const HeroBanner = () => {
  return (
    <div className="relative min-h-[550px] flex justify-end w-full rounded-ds-16 mt-6 overflow-clip">
      <RiveComponent
        className="absolute -z-10 top-0 right-0 left-0 w-full h-full"
        src="/rive/hero_banner.riv"
        stateMachines="HERO_BANNER"
        layout={{ fit: Fit.Fill, alignment: Alignment.Center }}
        autoplay={true}
      />

      <Image
        className="absolute left-[10%] top-[5%]"
        src="/hero_image.png"
        width={350}
        height={900}
        alt="App Store Badge"
      />

      {/* Brand blurs */}
      <div className="w-[250px] h-[250px] opacity-20 bg-brand -z-10 blur-3xl absolute top-0 left-0" />
      <div className="w-[150px] h-[150px] opacity-20 bg-brand -z-10 blur-3xl absolute bottom-0 left-[20%]" />

      <Stack
        gap={32}
        className="absolute z-10 max-w-lg h-fit top-[100px] right-[10%] "
      >
        <h1 className="brandedText font-bold text-brand leading-[4.5rem] text-[4.5rem] ">
          Micro-loans para sa mga mamamayang Pilipino
        </h1>

        <Stack horizontal gap={8}>
          <Image
            src="/app_store_badge.png"
            width={150}
            height={70}
            alt="App Store Badge"
          />
          <Image
            src="/google_play_badge.png"
            width={150}
            height={70}
            alt="App Store Badge"
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default HeroBanner;
