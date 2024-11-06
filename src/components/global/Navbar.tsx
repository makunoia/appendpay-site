import Image from "next/image";
import Link from "../Link";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center">
      <NextLink href="/">
        <Image
          src="/logo.svg"
          alt="AppendPay Logo"
          width={160}
          height={100}
          priority
        />
      </NextLink>

      <div className="flex flex-row gap-ds-24 text-heading">
        <Link label="Loans" href="#loans" />
        <Link label="Features" href="#features" />
        <Link label="Partners" href="#partners" />
        <Link label="Technology" href="#technology" />
      </div>
    </nav>
  );
};

export default Navbar;
