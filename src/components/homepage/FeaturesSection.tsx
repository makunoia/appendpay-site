"use client";
import Text from "@/components/molecules/Text";
import Stack from "@/components/molecules/Stack";
import MotionCard from "@/components/MotionCard";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

const FeaturesSection = () => {
  const layout = new Layout({ fit: Fit.Cover, alignment: Alignment.Center });
  const autoplay = false;
  const src = "/rive/appendpay_motion.riv";

  const { rive: BankTransferRive, RiveComponent: BankTransfer } = useRive({
    src,
    artboard: "BankTransfer",
    stateMachines: "Default",
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    autoplay,
  });

  const { rive: FastTransferRive, RiveComponent: FastTransfer } = useRive({
    src,
    artboard: "FastTransfer",
    stateMachines: "Default",
    layout,
    autoplay,
  });

  const { rive: MessageRive, RiveComponent: Message } = useRive({
    src,
    artboard: "Message",
    stateMachines: "Default",
    layout,
    autoplay,
  });

  const { rive: PayBillsRive, RiveComponent: PayBills } = useRive({
    src,
    artboard: "PayBills",
    stateMachines: "Default",
    layout,
    autoplay,
  });

  const { rive: MFIRive, RiveComponent: MFI } = useRive({
    src,
    artboard: "MFI",
    stateMachines: "Default",
    layout,
    autoplay,
  });

  BankTransferRive?.play();

  setTimeout(() => {
    FastTransferRive?.play();

    setTimeout(() => {
      MessageRive?.play();

      setTimeout(() => {
        PayBillsRive?.play();
        MFIRive?.play();
      }, 4000);
    }, 2000);
  }, 2000);

  return (
    <Stack id="features" as="section" gap={24}>
      <Stack gap={8} className="w-full md:w-4/6">
        <Text as="h2" size="display" weight="bold" className="brandedText">
          Our Products and Services
        </Text>
        <Text as="p" size="body-large" lineHeight="relaxed" className="text">
          The AppendPay mobile app facilitates a wide range of microfinance and
          e-commerce services.
        </Text>
      </Stack>

      <div className="w-full h-fit grid grid-rows-2 grid-cols-10 gap-ds-24">
        <MotionCard
          title="Bank Transfer"
          desc="Magpadala ng pera sa ibang bangko"
          className="row-span-2 col-span-10 md:col-span-5 lg:col-span-3 h-[350px] md:h-[100%]"
          riveComponent={<BankTransfer />}
        />

        <MotionCard
          title="Send and Receive funds"
          desc="Convenient transactions sa iyong account"
          className="row-span-1 col-span-10 md:col-span-5 lg:col-span-4 h-[200px]"
          invertStack
          riveComponent={<FastTransfer />}
        />

        <MotionCard
          title="Load Mobile"
          desc="Iwasang maubusan ng data"
          className="row-span-1 col-span-5 lg:col-span-3 h-[200px]"
          invertStack
          riveComponent={<Message />}
        />

        <MotionCard
          title="Bills Payment"
          desc="Bayaran ang iyong bills"
          className="row-span-1 col-span-5 lg:col-span-3 h-[200px]"
          invertStack
          riveComponent={<PayBills />}
        />

        <MotionCard
          title="Micropay"
          desc="Bayaran ang loans sa mga MFI"
          className="row-span-1 col-span-10 md:col-span-5 lg:col-span-4 h-[200px]"
          invertStack
          riveComponent={<MFI />}
        />
      </div>
    </Stack>
  );
};

export default FeaturesSection;
