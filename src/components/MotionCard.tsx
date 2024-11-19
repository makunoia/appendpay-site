import Text from "./molecules/Text";
import Stack from "./molecules/Stack";
import { cn } from "@/utilities";
import { ReactElement } from "react";

const MotionCard = ({
  icon,
  title,
  desc,
  className,
  riveComponent,
  invertStack,
  ...props
}: {
  icon?: ReactElement;
  title: string;
  desc: string;
  className?: string;
  invertStack?: boolean;
  riveComponent: ReactElement;
}) => {
  return (
    <Stack
      gap={16}
      distribute="between"
      className={cn(
        "w-full h-fit outline outline-1 outline-subtle rounded-ds-16 overflow-clip",
        className
      )}
      {...props}
    >
      <Stack
        gap={4}
        className={`px-ds-24 ${
          invertStack ? "order-2 pb-ds-24" : "order-1 pt-ds-32"
        } `}
      >
        <Stack horizontal gap={4}>
          {icon && <div className="aspect-square w-[18px]">{icon}</div>}
          <Text size="body" weight="medium" className="text">
            {title}
          </Text>
        </Stack>
        <Text size="caption" className="text-subtle">
          {desc}
        </Text>
      </Stack>

      <div
        className={`riveContainer w-full ${
          invertStack ? "order-1" : "order-2"
        }`}
      >
        {riveComponent}
      </div>
    </Stack>
  );
};

export default MotionCard;
