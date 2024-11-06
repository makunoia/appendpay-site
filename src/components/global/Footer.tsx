/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import Link from "../Link";
import Stack from "../molecules/Stack";
import Text from "../molecules/Text";

const Footer = () => {
  return (
    <footer className="h-[40vh] pt-[20%] pb-[15%] px-[5%] w-full bg-interface border border-t-brand mt-[10%] flex flex-col justify-center place-items-start gap-ds-32">
      <Image
        src="/logo.svg"
        alt="AppendPay Logo"
        width={200}
        height={130}
        priority
      />

      <Stack horizontal distribute="between" className="w-2/4">
        <Stack gap={8}>
          <Text size="body" weight="medium" className="text-brand">
            Sitemap
          </Text>

          <div className="grid grid-cols-2 grid-rows-2">
            <Link label="About Us" href="/about" />
            <Link label="Our Technology Partner" href="/tech-partner" />
            <Link label="Key Benefits" href="#partners" />
            <Link label="Be an MFI Partner" href="#technology" />
            <Link label="Privacy Policy" href="#technology" />
            <Link label="Terms and Conditions" href="#technology" />
          </div>
        </Stack>

        <Stack gap={8}>
          <Text size="body" weight="medium" className="text-brand">
            Contact us
          </Text>

          <Stack>
            <Text size="body" className="text-subtle py-ds-4">
              hello@appendpay.com
            </Text>

            <Text size="body" className="text-subtle py-ds-4">
              +63 928 0285
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </footer>
  );
};

export default Footer;
