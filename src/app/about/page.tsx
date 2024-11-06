import Text from "@/components/molecules/Text";
import Stack from "@/components/molecules/Stack";

const About = () => {
  return (
    <Stack gap={40} className="my-[5%]">
      <Stack gap={16}>
        <Text size="display" weight="bold" className="text-brand">
          About Us
        </Text>
        <Text size="body" lineHeight="relaxed" className="text">
          AppendPay is pioneering digital financial inclusion in the Philippines
          with a payment system specifically designed for microfinance
          institutions (MFs), cooperatives, and micro, small, and medium
          enterprises (MSMEs). Registered with the Securities and Exchange
          Commission and recognized by the Bangko Sentral ng Pilipinas (BSP) as
          an Operator of Payment System, AppendPay aims to accelerate poverty
          alleviation and enhance financial inclusion. Founded in 2019,
          AppendPay was created to empower over 11 million economically
          underprivileged micro-entrepreneurs and their communities served by
          microfinance institutions (MFIs) by providing access to essential
          financial services through innovative digital solutions. We envision
          AppendPay as a leader in development finance, leveraging a
          forward-thinking digital payment system. Our mission is to support
          microfinance institutions (MFIs) and accelerate the growth of the
          micro-entrepreneurs and small to medium enterprises they serve. The
          demand-driven digital financial services we offer to our partner MFIs
          ensure that, despite the shift towards digitalization, they can
          maintain high-touch support for their clients, affectionately known as
          Nanays (a Filipino term for mothers).
        </Text>
      </Stack>

      <Stack gap={16}>
        <Text size="display" weight="bold" className="text-brand">
          Our Brand Story
        </Text>
        <Text size="body" lineHeight="relaxed" className="text">
          Since 1981, the AppendPay founders and stockholders have been at the
          forefront of providing microfinance and associated socio-economic
          products and services to the low-income population. Key milestones
          include:
        </Text>

        <ul>
          <li>
            <Text size="body" lineHeight="relaxed" className="text">
              2010: Vision to create a digital payment platform for the entire
              micro-enterprise sector
            </Text>
          </li>

          <li>
            <Text size="body" lineHeight="relaxed" className="text">
              2019: Approval of the Append Inc. Board to establish the AppendPay
              Corporation & partnership with Multisys Technologies Corporation
              to develop the AppendPay mobile app
            </Text>
          </li>

          <li>
            <Text size="body" lineHeight="relaxed" className="text">
              2020: SEC Registration as stock corporation owned by microfinance
              NGOs – TSKI, KMBI and CARD Inc., APPEND Inc., Foundation for
              Sustainable Society Inc. (FSSI) and social enterprises.
            </Text>
          </li>

          <li>
            <Text size="body" lineHeight="relaxed" className="text">
              Registration as an Operator of Payment System with BSP
            </Text>
          </li>

          <li>
            <Text size="body" lineHeight="relaxed" className="text">
              2021: Registration as an Operator of Payment System with BSP
            </Text>
          </li>

          <li>
            <Text size="body" lineHeight="relaxed" className="text">
              2022-2023: Pilot testing of the AppendPay version 1 and 2
            </Text>
          </li>
          <li>
            <Text size="body" lineHeight="relaxed" className="text">
              2024: Launch of the all-inclusive AppendPay mobile app version 3
              in collaboration with Multisys Technologies Corporation and Union
              Bank’s UBX Corporation
            </Text>
          </li>
        </ul>
      </Stack>
    </Stack>
  );
};

export default About;
