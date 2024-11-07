import Text from "@/components/molecules/Text";
import Stack from "@/components/molecules/Stack";

const BrandStoryCard = ({ title, copy }: { title: string; copy: string }) => {
  return (
    <Stack
      gap={24}
      align="center"
      className="bg bg-surface drop-shadow pb-ds-40 px-ds-60 rounded-ds-24 w-fit mx-auto"
    >
      <h2 className="text-display text-brand w-fit -mt-4">
        {title ?? "Give Title"}
      </h2>
      <Text size="body" lineHeight="relaxed" className="text text-center">
        {copy ?? "Provide copy"}
      </Text>
    </Stack>
  );
};

export default BrandStoryCard;
