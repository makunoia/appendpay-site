import Text from "@/components/molecules/Text";
import Stack from "@/components/molecules/Stack";

const TechPartner = () => {
  return (
    <Stack gap={40} className="my-[5%]">
      <Stack gap={16}>
        <Text size="display" weight="bold" className="text-brand">
          Our Technology Partner
        </Text>
        <Text size="body" lineHeight="relaxed" className="text">
          We collaborate with Multisys Technologies Corporation in developing
          the AppendPay Mobile application, integrating state-of-the-art
          technology tailored for microfinance operations and community
          development. Multisys is a PLDT-owned company that specializes in
          Fintech solutions, enabling seamless payments and microfinance
          services both within and beyond the Philippines.
        </Text>
      </Stack>

      <Stack gap={16}>
        <Text size="display" weight="bold" className="text-brand">
          AppendPay Empowers all types of MFIs and Cooperatives
        </Text>
        <ul>
          <li>
            <Text size="body" lineHeight="relaxed" className="text">
              1. Access to Digital Financial Services: We provide a
              comprehensive and cost-effective digital transactional platform,
              along with tools for electronic transactions and mobile financial
              services, including payments and microfinance solutions for all
              types of microfinance institutions.
            </Text>
          </li>

          <li>
            <Text size="body" lineHeight="relaxed" className="text">
              2. User-Friendly Payment Platform: Our digital payment platform is
              easy to use for both staff and Nanays, facilitating business
              growth.
            </Text>
          </li>

          <li>
            <Text size="body" lineHeight="relaxed" className="text">
              3. Financial Inclusion: We expand access to financial and
              non-financial products for unbanked and underserved populations,
              effectively increasing the outreach of microfinance institutions
              (MFIs).
            </Text>
          </li>

          <li>
            <Text size="body" lineHeight="relaxed" className="text">
              4. Increased Efficiency: We enhance service delivery for
              organizations and key players in social development and poverty
              alleviation.
            </Text>
          </li>

          <li>
            <Text size="body" lineHeight="relaxed" className="text">
              5. E-Commerce Opportunities: Our platform enables clients and
              Nanays to market diverse products and services, increasing their
              income potential.
            </Text>
          </li>

          <li>
            <Text size="body" lineHeight="relaxed" className="text">
              6. Training Access: Our Lead and Train program offers users
              leadership training, values formation, financial literacy, and
              business skills training anytime, anywhere
            </Text>
          </li>
        </ul>
      </Stack>
    </Stack>
  );
};

export default TechPartner;
