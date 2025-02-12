import Text from "@/components/molecules/Text";
import Stack from "@/components/molecules/Stack";
import { cn } from "@/utilities";

const BrandStoryCard = ({
  title,
  copy,
  className,
  id,
}: {
  title: string;
  copy: string;
  className?: string;
  id?: string;
}) => {
  return (
    <Stack
      id={id}
      gap={10}
      className={cn(
        "bg bg-surface drop-shadow pb-mds-24 px-mds-24 rounded-mds-16 w-fit h-fit mx-auto",
        className
      )}
    >
      <h2 className="text-display text-brand w-full -mt-4">
        {title ?? "Give Title"}
      </h2>
      <Text size="body" lineHeight="tight">
        {copy ?? "Provide copy"}
      </Text>
    </Stack>
  );
};

export default BrandStoryCard;
