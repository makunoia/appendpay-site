import Text from "@/components/molecules/Text";
import Stack from "@/components/molecules/Stack";
import { cn } from "@/utilities";

const BrandStoryCard = ({
  title,
  copy,
  align,
  className,
}: {
  title: string;
  copy: string;
  align?: "start" | "end";
  className?: string;
}) => {
  return (
    <Stack
      gap={10}
      align={!align ? "center" : align}
      className={cn(
        "bg bg-surface drop-shadow pb-ds-24 px-ds-24 rounded-ds-16 w-fit h-fit mx-auto",
        className
      )}
    >
      <h2 className="text-display text-brand w-fit -mt-4">
        {title ?? "Give Title"}
      </h2>
      <Text
        size="body"
        lineHeight="tight"
        className={`text ${
          !align
            ? "text-center"
            : align === "start"
            ? "text-left"
            : "text-right"
        }`}
      >
        {copy ?? "Provide copy"}
      </Text>
    </Stack>
  );
};

export default BrandStoryCard;
