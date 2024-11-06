"use client";
import Text from "@/components/molecules/Text";
import Stack from "@/components/molecules/Stack";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";
import Button from "@/components/Button";
// import { useEffect, useState } from "react";

const MFISection = () => {
  const layout = new Layout({ fit: Fit.Contain, alignment: Alignment.Center });
  const autoplay = false;
  const src = "/rive/appendpay_motion.riv";

  const { rive: PartnersGridRive, RiveComponent: PartnersGrid } = useRive({
    src,
    artboard: "PartnersGrid",
    stateMachines: "Default",
    layout,
    autoplay,
  });

  useEffect(() => {
    PartnersGridRive?.play();
  }, [PartnersGridRive]);

  return (
    <Stack horizontal distribute="between" as="section" gap={24}>
      <Stack gap={8} className="w-1/6 md:w-3/6">
        <Text as="h2" size="display" weight="bold" className="brandedText">
          Partners
        </Text>
        <Text as="p" size="body-large" lineHeight="relaxed" className="text">
          Lorem ipsum dolor sit amet consectetur. Egestas lorem enim egestas leo
          diam eget. Egestas scelerisque tincidunt sit fames hac dictum.
        </Text>
        <Button intent="primary" size="large" className="mt-ds-8">
          Join as Partner
        </Button>
      </Stack>

      <div className="w-fit aspect-square h-[400px]">
        <PartnersGrid />
      </div>
    </Stack>
  );
};

export default MFISection;
