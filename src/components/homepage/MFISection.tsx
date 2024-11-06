"use client";
import Text from "@/components/molecules/Text";
import Stack from "@/components/molecules/Stack";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";
import Button from "@/components/Button";

const MFISection = () => {
  const layout = new Layout({ fit: Fit.Cover, alignment: Alignment.Center });
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
    <Stack
      className="flex flex-col md:flex-row gap-ds-60 lg:gap-ds-24"
      distribute="between"
      as="section"
      gap={24}
    >
      <Stack gap={8} className="w-full lg:w-3/6 order-2 md:order-1">
        <Text as="h2" size="display" weight="bold" className="brandedText">
          Microfinance Institutions partners
        </Text>

        <Text as="p" size="body-large" lineHeight="relaxed" className="text">
          Streamlined processes for client acquisition, onboarding new and
          existing clients, disbursement, payment and recording
        </Text>
        <Button intent="primary" size="large" className="mt-ds-8">
          Join as Partner
        </Button>
      </Stack>

      <div className="w-fit mx-auto aspect-square h-[300px] lg:h-[400px] order-1 md:order-2">
        <PartnersGrid />
      </div>
    </Stack>
  );
};

export default MFISection;
