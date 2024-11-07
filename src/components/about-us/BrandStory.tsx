import Text from "@/components/molecules/Text";
import Stack from "@/components/molecules/Stack";
import BrandStoryCard from "./BrandStoryCard";

const BrandStory = () => {
  return (
    <Stack justify="center" gap={60}>
      <Stack gap={8} className="w-11/12 lg:w-7/12 mx-auto">
        <h1 className="brandedText text-center font-bold text-brand leading-[2.8rem] text-[2.5rem]">
          Our Brand Story
        </h1>

        <Text size="body" lineHeight="relaxed" className="text-center">
          Founded in 2019, AppendPay was created to empower over 11 million
          economically underprivileged micro-entrepreneurs and their communities
          served by microfinance institutions (MFIs) by providing access to
          essential financial services through innovative digital solutions.
        </Text>
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

      <BrandStoryCard
        title="2010"
        copy="Vision to create a digital payment platform for the entire micro-enterprise sector"
      />

      <BrandStoryCard
        title="2019"
        copy="Approval of the Append Inc. Board to establish the AppendPay Corporation and partnership with Multisys Technologies Corporation to develop the AppendPay mobile app"
      />

      <BrandStoryCard
        title="2020"
        copy="SEC Registration as stock corporation owned by microfinance NGOs - TSKI, KMBI and CARD Inc., APPEND Inc., Foundation for Sustainable Society Inc. (FSSI) and social enterprises."
      />
    </Stack>
  );
};

export default BrandStory;
