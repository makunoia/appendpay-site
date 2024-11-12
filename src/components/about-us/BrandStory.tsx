import Text from "@/components/molecules/Text";
import Stack from "@/components/molecules/Stack";
import BrandStoryCard from "./BrandStoryCard";
import RiveComponent from "@/components/RiveComponent";
import { Alignment, Fit } from "@rive-app/canvas";

const BrandStory = () => {
  return (
    <Stack justify="center" gap={60}>
      <Stack gap={8} className="relative">
        <Stack gap={8} className="w-11/12 lg:w-5/12 mx-auto">
          <h1 className="brandedText text-center font-bold text-brand leading-[2.8rem] text-[2.5rem]">
            Our Brand Story
          </h1>

          <Text size="body" lineHeight="relaxed" className="text-center">
            Founded in 2019, AppendPay was created to empower over 11 million
            economically underprivileged micro-entrepreneurs and their
            communities served by microfinance institutions (MFIs) by providing
            access to essential financial services through innovative digital
            solutions.
          </Text>
        </Stack>

        <RiveComponent
          className="w-full h-[450px] absolute -z-10 -top-8"
          src="/rive/banners.riv"
          stateMachines="DEFAULT"
          artboard="OurStoryBanner"
          layout={{ fit: Fit.Cover, alignment: Alignment.Center }}
          autoplay={true}
        />
      </Stack>

      <Stack
        gap={24}
        align="center"
        className="bg bg-surface drop-shadow pb-ds-40 px-ds-60 rounded-b-[50px] w-7/12 mx-auto"
      >
        <h2 className="text-display text-brand w-fit -mt-4">
          Founded by people on a mission
        </h2>
        <Text size="body" lineHeight="relaxed" className="text text-center">
          The AppendPay founders and stockholders have been at the forefront of
          providing microfinance and associated socio-economic products and
          services to the low-income population.
        </Text>
      </Stack>

      <div className="grid grid-cols-11 align items-center">
        <div className="spacer col-span-5 min-h-[200px]" />
        <div className="time w-full h-full col-span-1 " />
        <BrandStoryCard
          className="col-span-4"
          title="2010"
          align="start"
          copy="Vision to create a digital payment platform for the entire micro-enterprise sector"
        />

        <BrandStoryCard
          className="col-span-5 ml-24"
          title="2019"
          align="end"
          copy="Approval of the Append Inc. Board to establish the AppendPay Corporation and partnership with Multisys Technologies Corporation to develop the AppendPay mobile app"
        />
        <div className="time w-full h-full col-span-1" />
        <div className="spacer col-span-5 min-h-[200px] relative">
          <RiveComponent
            className="w-[400px] h-[250px] absolute -z-10 -left-32 -top-24"
            src="/rive/banners.riv"
            stateMachines="DEFAULT"
            artboard="Path1"
            layout={{ fit: Fit.FitWidth, alignment: Alignment.Center }}
            autoplay={true}
          />
        </div>

        <div className="spacer col-span-5 min-h-[200px] relative">
          <RiveComponent
            className="w-[400px] h-[250px] absolute -z-10 -right-28 -top-24"
            src="/rive/banners.riv"
            stateMachines="DEFAULT"
            artboard="Path2"
            layout={{ fit: Fit.FitWidth, alignment: Alignment.Center }}
            autoplay={true}
          />
        </div>
        <div className="time w-full h-full col-span-1" />

        <BrandStoryCard
          className="col-span-5 mr-24"
          title="2020"
          align="start"
          copy="SEC Registration as stock corporation owned by microfinance NGOs - TSKI, KMBI and CARD Inc., APPEND Inc., Foundation for Sustainable Society Inc. (FSSI) and social enterprises."
        />

        <BrandStoryCard
          className="col-span-5 ml-24"
          title="2024"
          align="end"
          copy="Launch of the all-inclusive AppendPay mobile app version 3 in collaboration with Multisys Technologies Corporation and Union Bank's UBX Corporation"
        />
        <div className="time w-full h-full col-span-1" />
        <div className="spacer col-span-5 min-h-[200px] relative">
          <RiveComponent
            className="w-[400px] h-[250px] absolute -z-10 -left-32 -top-24"
            src="/rive/banners.riv"
            stateMachines="DEFAULT"
            artboard="Path3"
            layout={{ fit: Fit.FitWidth, alignment: Alignment.Center }}
            autoplay={true}
          />
        </div>
      </div>
    </Stack>
  );
};

export default BrandStory;
