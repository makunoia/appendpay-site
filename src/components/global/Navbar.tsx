"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Link from "../Link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <nav className="flex w-full justify-between items-center px-[5%] mt-10">
      <NextLink href="/">
        <Image
          src="/logo.svg"
          alt="AppendPay Logo"
          width={160}
          height={100}
          priority
        />
      </NextLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row gap-ds-24 text-heading">
        <Link label="Loans" href="/#loans" />
        <Link label="Features" href="/#features" />
        <Link label="Partners" href="/#partners" />
        <Link label="Benefits" href="/#benefits" />
        <Link label="About Us" href="/about" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <IoClose className="text-brand" size={24} />
        ) : (
          <BiMenu className="text" size={24} />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 bg-interface p-8 pr-32 drop-shadow-sm z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-ds-24 text-heading">
              <NextLink
                className="text hover:text-brand transition-colors ease-out"
                href="/#loans"
                onClick={toggleMenu}
              >
                Loans
              </NextLink>
              <NextLink
                className="text hover:text-brand transition-colors ease-out"
                href="/#features"
                onClick={toggleMenu}
              >
                Features
              </NextLink>
              <NextLink
                className="text hover:text-brand transition-colors ease-out"
                href="/#partners"
                onClick={toggleMenu}
              >
                Partners
              </NextLink>
              <NextLink
                className="text hover:text-brand transition-colors ease-out"
                href="/#benefits"
                onClick={toggleMenu}
              >
                Benefits
              </NextLink>
              <NextLink
                className="text hover:text-brand transition-colors ease-out"
                href="/about"
                onClick={toggleMenu}
              >
                About Us
              </NextLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
