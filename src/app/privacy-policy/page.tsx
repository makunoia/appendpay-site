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
          Privacy Policy
        </Text>
      </Stack>
      <Stack as="section" gap={8}>
        <Text size="title" weight="medium" className="text-brand">
          Who we are
        </Text>

        <Text lineHeight="relaxed">
          APPEND Inc. is a non-stock, non-profit, charitable, social welfare
          development & civic service organization established in 1991 that
          continues to transform people and communities for more than 27 years.
          Our ​AppendPay​ app is a next generation mobile application and online
          system that links APPEND members around the country to a wide array of
          loan platforms and eCommerce channels. Append aims to provide an
          automated payment of AppendPay’s registered MFI and Application of MFI
          Loan servicethat will help the user to have a convenient and secured
          transaction. At Append, we recognize the importance of data privacy,
          and commit to protecting the confidentiality ofall of our clients. In
          line with this, we ensure that we comply with the Data Privacy Act of
          2012 (RA10173), along with its Implementing Rules and Regulations as
          well as any other relevant data privacyrelated laws and issuances by
          the National Privacy Commission. Furthermore, we only collect and
          process information that is necessary to fulfill the purpose of our
          platform. In accordance with this, this privacy policy will detail any
          necessary information about how AppendPay will collect, process, and
          store your personal data. This includes how long we will retain the
          information,all your privacy rights in relation to that data, and the
          people/organizations with whom we may share itwith when necessary. The
          content of this Privacy Statement may be updated or amended from time
          to time to align with anyfuture platform configurations, and to comply
          with any changes in relevant laws and policies. Shouldthese changes
          require your consent, we will be sure to notify you and request for
          your said updatedconsent as you proceed with using the platform.
          Otherwise, changes will be rendered effectiveimmediately upon posting.
        </Text>
      </Stack>

      <Stack as="section" gap={8}>
        <Text size="title" weight="medium" className="text-brand">
          Definition of Terms
        </Text>

        <Text lineHeight="relaxed">
          Personal Information refers to any information, whether recorded in a
          material form or not, from which the identity of an individual is
          apparent or can be reasonably and directly ascertained by theentity
          holding the information, or when put together with other information
          would directly and certainly identify an individual;
        </Text>

        <ul className="flex flex-col gap-ds-8 w-5/6 mt-6">
          <li>
            <Text weight="bold">Data Subject/User </Text>
            <Text lineHeight="relaxed">
              refers to an individual whose Personal, Sensitive or Privileged
              information is processed;
            </Text>
          </li>

          <li>
            <Text weight="bold">Consent of the Data Subject </Text>
            <Text lineHeight="relaxed">
              refers to any freely given, specific, informed indication of will,
              whereby the Data Subject agrees to the processing of his or her
              personal, sensitive personal, or privileged information. It may
              also be given on behalf of a Data Subject by a lawful
              representative or an agent specifically authorized by the Data
              Subject to do so;
            </Text>
          </li>

          <li>
            <Text weight="bold">Processing </Text>
            <Text lineHeight="relaxed">
              refers to any operation or set of operations performed upon
              Personal Data including, but not limited to, the collection,
              recording, organization, storage, updating or modification,
              retrieval, consultation, use, consolidation, blocking, erasure, or
              destruction of data. Processing may be performed through automated
              means, or manual processing, if the Personal Data are contained or
              are intended to be contained in a filing system;
            </Text>
          </li>

          <li>
            <Text weight="bold">Outsourcing </Text>
            <Text lineHeight="relaxed">
              Outsourcing refers to the disclosure or transfer of Personal Data
              by the Parties to their respective Personal Information
              Processor/s (PIP/s), if any, for the Processing of Personal Data
              obtained or shared under this Agreement;
            </Text>
          </li>

          <li>
            <Text weight="bold">Personal Data Breach </Text>
            <Text lineHeight="relaxed">
              refers to a breach of security leading to the accidental or
              unlawful destruction, loss, alteration, unauthorized disclosure
              of, or access to, Personal Data transmitted, stored, or otherwise
              processed
            </Text>
          </li>
        </ul>
      </Stack>

      <Stack as="section" gap={8}>
        <Text size="title" weight="medium" className="text-brand">
          Data Sharing / Outsourcing
        </Text>

        <Text lineHeight="relaxed">
          Data collected shall be disclosed with our third-party partners, MFI
          and AllBank, who will be processing said data as acting admins for
          Append. Admins will have limited access and control within the system
          and access to some of the modules, including Dashboard, Customer
          Verification, User management, Subscribers, Report-Summary Dashboard,
          and Audit Trails. Data storage shall be outsourced to Multisys
          Technologies Corporation.
        </Text>
      </Stack>

      <Stack as="section" gap={8}>
        <Text size="title" weight="medium" className="text-brand">
          How we protect your information
        </Text>

        <Text lineHeight="relaxed">
          We implement reasonable and appropriate physical, technical, and
          organizational measures to prevent the loss, destruction, misuse, or
          alteration of your information. We keep and protect your information
          using a secured server behind a firewall, encryption, and security
          controls to ensure our clients we are committed to protecting their
          information from personal data breaches.
        </Text>
      </Stack>

      <Stack as="section" gap={8}>
        <Text size="title" weight="medium" className="text-brand">
          Retention of User Data
        </Text>

        <Text lineHeight="relaxed">
          APPEND shall retain data provided by the user for a period of ten (10)
          years. Users also have the option of requesting their data to be
          deleted at any given time by request deletion of data function within
          the application, or by contacting our Data Protection Officer at
          support@appendpay.com. When we no longer require your data, Append
          shall securely delete and/or archive said information.
        </Text>
      </Stack>

      <Stack as="section" gap={8}>
        <Text size="title" weight="medium" className="text-brand">
          Contact Us
        </Text>

        <Text lineHeight="relaxed">
          APPEND is fully committed to protecting and maintaining your privacy.
          For any questions, concerns or clarifications regarding this privacy
          policy and how to exercise your rights as a data subject, you may
          contact our Data Protection Officer at admin@appendpay.com or send a
          text at +63 925 762 0521. You may also get in touch with us at
          info@appendpay.com, or reach us at our main office at +63 925 762
          0521.
        </Text>
      </Stack>
    </Stack>
  );
};

export default Page;
