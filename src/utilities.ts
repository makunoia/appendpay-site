// import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx";

import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  override: {
    classGroups: {
      "font-size": [
        "text-caption",
        "text-caption-tight",
        "text-caption-relaxed",
        "text-caption-loose",
        "text-body",
        "text-body-tight",
        "text-body-relaxed",
        "text-body-loose",
        "text-body-large",
        "text-body-large-tight",
        "text-body-large-relaxed",
        "text-body-large-loose",
        "text-lead",
        "text-subheading",
        "text-heading",
        "text-title",
        "text-display",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
