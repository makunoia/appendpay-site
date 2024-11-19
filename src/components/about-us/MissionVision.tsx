"use client";
import Text from "@/components/molecules/Text";
import Stack from "../molecules/Stack";
import { easeOut, motion } from "framer-motion";

const MissionVision = () => {
  return (
    <Stack className="w-10/12 mx-auto mt-ds-40" gap={40}>
      <Stack
        motion
        initial={{ opacity: 0, y: "-20%" }}
        animate={{ opacity: 1, y: "-50%" }}
        transition={{ ease: easeOut, delay: 1 }}
        gap={16}
        width="full"
      >
        <h1 className="brandedText text-center lg:text-left font-bold text-brand leading-[2.8rem] text-[2.5rem]">
          Our Mission
        </h1>

        <Text
          size="heading"
          lineHeight="loose"
          className="text-subtle text-left w-9/12 leading-8"
        >
          To support microfinance institutions (MFIs) and accelerate the growth
          of the micro-entrepreneurs and small to medium enterprises they serve.
        </Text>
      </Stack>

      <Stack horizontal gap={40} distribute="between" width="full">
        <motion.div
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, ease: easeOut }}
          className="w-5/12 opacity-0 bg-brand-subtle text-onBrand-subtle italic p-ds-32 rounded-tl-[60px] rounded-br-[60px]"
        >
          The demand-driven digital financial services we offer to our partner
          MFIs ensure that, despite the shift towards digitalization, they can
          maintain high-touch support for their clients, affectionately known as
          Nanays (a Filipino term for mothers).
        </motion.div>
        <Stack
          gap={16}
          motion
          align="end"
          className="w-6/12 opacity-0"
          initial={{ y: 60 }}
          transition={{ delay: 1, ease: easeOut }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="brandedText text-right font-bold text-brand leading-[2.8rem] text-[2.5rem]">
            Our Vision
          </h1>

          <Text
            size="heading"
            lineHeight="loose"
            className="text-subtle text-right w-full leading-8"
          >
            We envision AppendPay as a leader in development finance, leveraging
            a forward-thinking digital payment system
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MissionVision;
