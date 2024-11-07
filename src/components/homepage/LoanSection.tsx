"use client";
import Text from "@/components/molecules/Text";
import Stack from "@/components/molecules/Stack";
import MotionCard from "@/components/MotionCard";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

const LoanSection = () => {
  const layout = new Layout({
    fit: Fit.Cover,
    alignment: Alignment.Center,
  });
  const autoplay = false;
  const src = "/rive/appendpay_motion.riv";

  const { rive: DownloadAppRive, RiveComponent: DownloadApp } = useRive({
    src,
    artboard: "DownloadApp",
    stateMachines: "Default",
    layout,
    autoplay,
  });

  const { rive: SignUpRive, RiveComponent: SignUp } = useRive({
    src,
    artboard: "SignUp",
    stateMachines: "Default",
    layout,
    autoplay,
  });

  const { rive: LoanApprovedRive, RiveComponent: LoanApproved } = useRive({
    src,
    artboard: "LoanApproved",
    stateMachines: "Default",
    layout,
    autoplay,
  });

  const { rive: ReceiveMoneyRive, RiveComponent: ReceiveMoney } = useRive({
    src,
    artboard: "ReceiveMoney",
    stateMachines: "Default",
    layout,
    autoplay,
  });

  DownloadAppRive?.play();

  setTimeout(() => {
    SignUpRive?.play();

    setTimeout(() => {
      LoanApprovedRive?.play();

      setTimeout(() => {
        ReceiveMoneyRive?.play();
      }, 4000);
    }, 2000);
  }, 2000);

  return (
    <Stack as="section" gap={24}>
      <Stack gap={8} className="w-full md:w-4/6">
        <Text as="h2" size="display" weight="bold" className="brandedText">
          Paano mag-loan sa AppendPay?
        </Text>
        <Text as="p" size="body-large" lineHeight="relaxed" className="text">
          Mag apply para kumuha ng loan sa iyong selected Microfinance
          Institution
        </Text>
      </Stack>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-ds-16">
        <MotionCard
          title="I-download ang app"
          desc="Available both on Android and iOS"
          className="h-[500px] md:h-[380px]"
          riveComponent={<DownloadApp />}
        />

        <MotionCard
          title="Mag sign up sa isang MFI"
          desc="MFI members can apply for loans"
          className="h-[380px]"
          riveComponent={<SignUp />}
        />

        <MotionCard
          title="Mag-apply para sa loan"
          desc="Loans are subject to approval"
          className="h-[380px]"
          riveComponent={<LoanApproved />}
        />

        <MotionCard
          title="Receive Loan Amount"
          desc="Approved loans are deposited to your account"
          className="h-[380px]"
          riveComponent={<ReceiveMoney />}
        />
      </div>
    </Stack>
  );
};

export default LoanSection;
