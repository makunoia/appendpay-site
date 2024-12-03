"use client";

import { type ReactNode } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import {
  AnimationProps,
  motion as FramerMotion,
  HTMLMotionProps,
  MotionAdvancedProps,
} from "framer-motion";
import { cn } from "../../utilities";

type NonNullableProps<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

const StackStyles = cva("flex", {
  variants: {
    width: {
      auto: "w-auto",
      full: "w-full",
      fit: "w-fit",
    },
    height: {
      auto: "h-auto",
      full: "h-full",
      fit: "h-fit",
    },
    horizontal: {
      true: "flex-row",
      false: "flex-col",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
    },
    align: {
      start: "content-start items-start",
      center: "content-center items-center",
      end: "content-end items-end",
      baseline: "items-baseline",
    },
    distribute: {
      between: "justify-between content-between",
      around: "justify-around content-around",
      evenly: "justify-evenly content-evenly",
      stretch: "*:flex-grow justify-stretch content-stretch",
    },
    gap: {
      2: "gap-ds-2",
      4: "gap-ds-4",
      6: "gap-ds-6",
      8: "gap-ds-8",
      10: "gap-ds-10",
      12: "gap-ds-12",
      14: "gap-ds-14",
      16: "gap-ds-16",
      18: "gap-ds-18",
      20: "gap-ds-20",
      24: "gap-ds-24",
      28: "gap-ds-28",
      32: "gap-ds-32",
      40: "gap-ds-40",
      60: "gap-ds-60",
    },
  },
});

type StackCVAProps = NonNullableProps<VariantProps<typeof StackStyles>>;

interface BaseStackProps extends StackCVAProps {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav" | "main";
  horizontal?: boolean;
  key?: string;
}

type StaticStackProps = {
  motion?: false;
};

type MotionStackProps = {
  motion: true;
  as?: never;
} & ((AnimationProps | MotionAdvancedProps) &
  Omit<HTMLMotionProps<"div">, keyof BaseStackProps>);

type StackProps = BaseStackProps & (StaticStackProps | MotionStackProps);

const Stack = ({
  as: Component = "div",
  horizontal = false, //default direction is vertical
  width = "auto",
  height,
  justify,
  align,
  gap,
  distribute,
  children,
  className,
  id,
  motion,
  key,
  ...props
}: StackProps) => {
  const styles = cn(
    StackStyles({
      horizontal,
      width,
      height,
      justify,
      align,
      gap,
      distribute,
    }),
    className
  );

  const motionProps = props as Omit<
    HTMLMotionProps<"div">,
    keyof BaseStackProps
  >;

  const staticProps = props as Omit<StaticStackProps, keyof BaseStackProps>;

  return motion ? (
    <FramerMotion.div key={key} id={id} className={styles} {...motionProps}>
      {children}
    </FramerMotion.div>
  ) : (
    <Component key={key} id={id} className={styles} {...staticProps}>
      {children}
    </Component>
  );
};

export default Stack;
