/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import Link from "../Link";
import Stack from "../molecules/Stack";
import Text from "../molecules/Text";

const Footer = () => {
  return (
    <footer className="h-fit max-h-[800px] py-[10%] lg:py-[5%] px-[5%] w-full bg-interface border-t-4 border-t-brand flex flex-col justify-center place-items-start gap-ds-32">
      <Image
        src="/logo.svg"
        alt="AppendPay Logo"
        width={200}
        height={130}
        priority
      />

      <Stack
        distribute="between"
        className="gap-ds-24 lg:flex-row w-full lg:w-7/12"
      >
        <Stack gap={8} className="w-[80%]">
          <Text size="body" weight="medium" className="text-brand">
            Sitemap
          </Text>

          <div className="grid grid-cols-2 grid-rows-2">
            <Link label="About Us" href="/about" />
            <Link label="Benefits" href="#partners" />
            <Link label="Our Technology Partner" href="/tech-partner" />
            <Link label="Be an MFI Partner" href="/sign-up" />
            <Link label="Privacy Policy" href="/privacy-policy" />
            <Link label="Terms and Conditions" href="/terms-and-conditions" />
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
