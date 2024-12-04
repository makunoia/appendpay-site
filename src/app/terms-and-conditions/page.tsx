import Stack from "@/components/molecules/Stack";
import Text from "@/components/molecules/Text";

const Page = () => {
  return (
    <Stack as="section" gap={32} className="mt-6 mb-24 px-[5%]">
      <Stack
        gap={6}
        align="center"
        justify="center"
        className="h-[250px] w-full bg-brand-subtle rounded-ds-16"
      >
        <Text size="overline" className="text-onBrand-subtle" weight="bold">
          Updated December 2024
        </Text>
        <Text size="display" className="text-onBrand-subtle" weight="bold">
          Terms and Conditions
        </Text>
      </Stack>
      <Stack as="section" gap={8}>
        <Text size="title" weight="medium" className="text-brand">
          Terms of Service
        </Text>

        <ul className="flex flex-col gap-ds-8 w-5/6">
          <li>
            <Text lineHeight="relaxed">
              Misuse of our AppendPay Mobile Service or unauthorized access
              thereto, may lead to suspension or termination of your account.
            </Text>
          </li>

          <li>
            <Text lineHeight="relaxed">
              Using our service does not give you ownership of any intellectual
              property rights. These terms do not grant you the removal or
              alterations of the branding AppendPay.
            </Text>
          </li>

          <li>
            <Text lineHeight="relaxed">
              In connection with your use of the service, we may send you
              service announcements, administrative messages and other
              information. You may opt out of some of those communications.
            </Text>
          </li>

          <li>
            <Text lineHeight="relaxed">
              By using our services you accept these terms and conditions “as
              is”. You shall indemnify and hold AppendPay Corporation, its
              affiliates, officers, agents and employees, free and harmless from
              any claim, suit, damages or action arising from or related to the
              use of the services or the violation of the terms herein provided,
              including any expenses arising from, or reasonable attorney’s fee
              incurred on account of such claims, suits, damage or action.
            </Text>
          </li>

          <li>
            <Text lineHeight="relaxed">
              AppendPay Corp. (“AppendPay”) recognizes its responsibilities
              under Republic Act No. 10173, also known ast the Data Privacy Act
              of 2012 and is committed to safeguarding your personal
              information.
            </Text>
          </li>
        </ul>
      </Stack>

      <Stack as="section" gap={8}>
        <Text size="title" weight="medium" className="text-brand">
          Coverage
        </Text>

        <Text lineHeight="relaxed">
          Your Personal Information is needed to register to our mobile app
          which at the minimum includes your full name, address and contact
          details. Your personal Information is further required by the billing
          company in processing your payments through the AppendPay system. This
          includes your full name, account number, MFI number, address, contact
          details, government ID and other forms of personal identifications.
        </Text>
      </Stack>

      <Stack as="section" gap={8}>
        <Text size="title" weight="medium" className="text-brand">
          Data Gathering and Usage
        </Text>

        <Text lineHeight="relaxed">
          We collect your personal information mainly to verify your identity
          and ensure that your payment and application details are accurate.
          Your transaction data is encoded through our secured payment system
          and is subsequently uploaded to your microfinance institution for the
          processing and posting of your payment and application.
        </Text>

        <Text lineHeight="relaxed">
          Furthermore, your information may and shall only be used for the
          following purposes:
        </Text>

        <ul className="flex flex-col gap-ds-2 w-5/6 pb-3">
          <li>
            <Text weight="medium">Loan Application</Text>
          </li>

          <li>
            <Text weight="medium">Payment history and inquiry</Text>
          </li>

          <li>
            <Text weight="medium">Regular Saving account creation</Text>
          </li>

          <li>
            <Text weight="medium">Payment and transaction histories</Text>
          </li>

          <li>
            <Text weight="medium">
              AppendPay promotions, rewards and customer loyalty programs.
            </Text>
          </li>

          <li>
            <Text weight="medium">Credit Scoring Purposes</Text>
          </li>

          <li>
            <Text weight="medium">Customer Onboarding Processes</Text>
          </li>
        </ul>

        <Text lineHeight="relaxed">
          AppendPay shall not disclose your personal information to third
          parties without your consent unless such disclosure or data sharing is
          required by applicable laws necessary to the said purposes.
        </Text>
      </Stack>

      <Stack as="section" gap={8}>
        <Text size="title" weight="medium" className="text-brand">
          Data Retention
        </Text>

        <Text lineHeight="relaxed">
          Your register Personal Information, Loan information and your payment
          information will be stored in our database. While your bank account
          application and other personal information would be stored in our bank
          partner databases. AppendPay establishes appropriate organizational,
          physical and technical security measures to ensure the protection of
          your personal information.
        </Text>
      </Stack>

      <Stack as="section" gap={8}>
        <Text size="title" weight="medium" className="text-brand">
          Customer's Consent and Declaration
        </Text>

        <Text lineHeight="relaxed">
          The personal, application and payment information that I will provide
          will be made in good faith, verified correct to the best of my
          knowledge, pursuant to any laws and regulations applicable. I fully
          understand that AppendPay Corporation is authorized to accept and
          process payments and documents submitted through its mobile
          application.
        </Text>

        <Text lineHeight="relaxed">
          Furthermore, I have read the AppendPay Data Privacy Statement and
          voluntarily and freely provide my consent to AppendPay to collect,
          encode, transmit, process, analyze, retrieve, update or modify my
          personal data for registration to AppendPay mobile application and
          processing of my loan application, loan payments and other modes of
          transactions serviced by the said application. I also affirm my rights
          to (a) be informed, (b) access, (d) ensure erasure of blocking, (e)
          damages, (f) file a complaint, (g) rectify, and (h) data portability.
        </Text>
      </Stack>
    </Stack>
  );
};

export default Page;
