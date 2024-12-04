"use client";

import Stack from "../molecules/Stack";
import Text from "../molecules/Text";
import { IoStorefrontSharp } from "react-icons/io5";
import { IconBaseProps, IconType } from "react-icons";
import { ComponentType, Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import { FaMobileScreen, FaPiggyBank } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { RiFileHistoryFill } from "react-icons/ri";
import { HiMiniBanknotes, HiMiniCog6Tooth } from "react-icons/hi2";
import { BsShieldLockFill } from "react-icons/bs";
import { MdInsertChart, MdPayments } from "react-icons/md";
import { cn } from "@/utilities";

type itemType = {
  icon: IconType;
  title: string;
  message: string;
  filler?: boolean;
}[];

const userBenefits: itemType = [
  {
    icon: FaPiggyBank,
    title: "Cost Savings",
    message:
      "Simplify loan management by making transactions to partner MFIs easier, reducing transportation and operational costs for your business.",
  },
  {
    icon: AiFillSafetyCertificate,
    title: "Safety",
    message:
      "Protect your organization from risks associated with physical cash handling through secure digital transaction methods.",
  },
  {
    icon: IoStorefrontSharp,
    title: "Income Opportunities",
    message:
      "Expand your business potential by accessing integrated e-commerce platforms and comprehensive financial services.",
  },
  {
    icon: IoStorefrontSharp,
    title: "Hidden",
    message: "Hidden.",
    filler: true,
  },
  {
    icon: RiFileHistoryFill,
    title: "Transactions History",
    message:
      "Access complete transaction records instantly, providing transparency and easy tracking of all financial activities.",
  },
];

const clientBenefits: itemType = [
  {
    icon: HiMiniBanknotes,
    title: "Digital Financial Services",
    message:
      "Leverage our comprehensive digital transactional platform with tools for electronic transactions and mobile financial services across microfinance institutions.",
  },
  {
    icon: FaMobileScreen,
    title: "User-Friendly Payment Platform",
    message:
      "Accelerate business growth through an intuitive digital payment solution designed for seamless and efficient financial interactions.",
  },
  {
    icon: BsShieldLockFill,
    title: "Enhanced Security",
    message:
      "Manage your organization's wallets with advanced security features, including rigorous approval processes for safe and controlled fund transfers.",
  },
  {
    icon: HiMiniCog6Tooth,
    title: "Operational Efficiency",
    message:
      "Streamline your financial processes with optimized payment recording and transaction management tools.",
  },
  {
    icon: MdPayments,
    title: "Local Payment Solutions",
    message:
      "Access cost-effective payment systems with simple integration and flexible financial service options.",
  },
  {
    icon: MdInsertChart,
    title: "Reporting Capabilities",
    message:
      "Generate timely and accurate financial statements with comprehensive reporting tools.",
  },
];

const UserTypeSwitch = ({
  userSelected,
  setIsUserSelected, //User === 1
}: {
  userSelected: number;
  setIsUserSelected: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="relative flex w-fit gap-ds-24 py-ds-12 px-ds-16 bg-interface rounded-ds-24 outline outline-1 shadow drop-shadow-sm overflow-hidden">
      <div
        className={`absolute bg-brand -z-10 my-auto top-1 bottom-1 rounded-ds-24 transition-transform ease-out ${
          userSelected
            ? "-translate-x-3 w-[90px]"
            : "translate-x-[calc(75%)] w-[105px]"
        }`}
      />
      <div
        className="cursor-pointer transition-colors ease-out"
        onClick={() => setIsUserSelected(() => 1)}
      >
        <Text
          as="h2"
          size="body"
          weight="bold"
          className={`${
            userSelected === 1 ? "text-onBrand" : "text"
          } select-none`}
        >
          As a user
        </Text>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => setIsUserSelected(() => 0)}
      >
        <Text
          as="h2"
          size="body"
          weight="bold"
          className={`${
            userSelected === 0 ? "text-onBrand" : "text"
          } transition-colors ease-out select-none`}
        >
          As a partner
        </Text>
      </div>
    </div>
  );
};

const ReasonCard = ({
  icon: Icon,
  title,
  message,
  id,
  index,
  filler,
}: {
  icon: ComponentType<IconBaseProps>;
  title: string;
  message: string;
  id?: string;
  index: number;
  filler?: boolean;
}) => {
  return (
    <Stack
      motion
      key={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      gap={16}
      className={cn(
        `p-ds-32 rounded-ds-24 bg-interface h-fit mb-ds-24 ${
          filler && "hidden lg:block md:invisible"
        }`
      )}
    >
      {Icon && (
        <div className="bg-brand-subtle w-fit h-fit p-ds-12 rounded-ds-8">
          <Icon className="fill-icon-brand text-title" />
        </div>
      )}
      <Stack gap={8}>
        <Text as="h2" size="subheading" weight="bold" className="text">
          {title}
        </Text>
        <Text as="h2" size="body" className="text-subtle" lineHeight="tight">
          {message}
        </Text>
      </Stack>
    </Stack>
  );
};

const WhyAppendSection = () => {
  const [isUserSelected, setIsUserSelected] = useState(0);

  const breakpointColumnsObj = {
    default: 3, // 3 columns by default
    1024: 2, // 2 columns on smaller screens
    768: 1, // 1 column on mobile
  };

  return (
    <Stack
      id="benefits"
      gap={32}
      className="bg-brand-subtle mt-[100px] py-[80px]"
    >
      {/* Switch and Buttons */}
      <Stack gap={32} className="px-[5%]">
        <Stack gap={12} className="w-8/12">
          <Text as="h2" size="display" weight="bold" className="brandedText">
            Why choose AppendPay?
          </Text>
          <Text as="p" size="body-large" lineHeight="relaxed" className="text">
            Lorem ipsum dolor sit amet consectetur. Egestas lorem enim egestas
            leo diam eget. Egestas scelerisqueh tincidunt sit fames hac dictum.
          </Text>
        </Stack>

        <Stack
          horizontal
          distribute="between"
          align="center"
          className="w-full"
        >
          <UserTypeSwitch
            userSelected={isUserSelected}
            setIsUserSelected={setIsUserSelected}
          />
        </Stack>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {(isUserSelected ? userBenefits : clientBenefits).map(
              (item, index) => (
                <ReasonCard
                  index={index}
                  icon={item.icon}
                  title={item.title}
                  message={item.message}
                  key={`${item.title}-${index}`}
                  filler={item.filler}
                />
              )
            )}
          </Masonry>
        </AnimatePresence>
      </Stack>
    </Stack>
  );
};

export default WhyAppendSection;
