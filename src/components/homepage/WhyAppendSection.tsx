"use client";

import Button from "../Button";
import Stack from "../molecules/Stack";
import Text from "../molecules/Text";
import { IoConstruct } from "react-icons/io5";
import { IconBaseProps } from "react-icons";
import { ComponentType, Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";

const clientBenefits = [
  {
    icon: IoConstruct,
    title: "Cost Savings",
    message:
      "Acquire loans and make loan payments to our partner MFIs easily reducing transportation and other operational costs.",
  },
  {
    icon: IoConstruct,
    title: "Income Opportunities",
    message: "Access e-commerce platforms and financial services.",
  },
  {
    icon: IoConstruct,
    title: "Transactions History 2",
    message: "Accessible to users anytime",
  },
];

const userBenefits = [
  {
    icon: IoConstruct,
    title: "Access to Digital Financial Services",
    message:
      "We provide a comprehensive and cost-effective digital transactional platform, along with tools for electronic transactions and mobile financial services, including payments and microfinance solutions for all types of microfinance institutions.",
  },
  {
    icon: IoConstruct,
    title: "User-Friendly Payment Platform",
    message:
      "Our digital payment platform is easy to use, facilitating business growth.",
  },
  {
    icon: IoConstruct,
    title: "Transactions History",
    message: "Accessible to users anytime",
  },
  {
    icon: IoConstruct,
    title: "Enhanced Security and Safety",
    message:
      "Admin users are able to -------- decentralized and centralized wallet, rigorous approval for safe transfers to biller branches",
  },
  {
    icon: IoConstruct,
    title: "Cost-Effective operations",
    message: "Streamlined processes for payment and recording transactions",
  },
  {
    icon: IoConstruct,
    title: "Local Payment Solutions",
    message: "Reasonably priced, integration-free systems",
  },
];

const UserTypeSwitch = ({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  const onClickHandler = () => {
    setSelected(() => 0);
  };

  return (
    <div className="relative flex w-fit gap-ds-24 py-ds-12 px-ds-16 bg-interface rounded-ds-24 outline outline-1 shadow drop-shadow-sm overflow-hidden">
      <div
        className={`absolute bg-brand -z-10 my-auto top-1 bottom-1 rounded-ds-24 transition-transform ease-out ${
          selected
            ? "translate-x-[calc(100%)] w-[85px]" // Right edge with a 4px margin (equivalent to right-1)
            : "-translate-x-3 w-[95px]" // Left edge with a 4px margin (equivalent to left-1)
        }`}
      />
      <div className="cursor-pointer" onClick={onClickHandler}>
        <Text
          as="h2"
          size="body"
          weight="bold"
          className={`${
            selected === 0 ? "text-onBrand" : "text"
          } transition-colors ease-out select-none`}
        >
          As a client
        </Text>
      </div>
      <div
        className="cursor-pointer transition-colors ease-out"
        onClick={() => setSelected(() => 1)}
      >
        <Text
          as="h2"
          size="body"
          weight="bold"
          className={`${selected === 1 ? "text-onBrand" : "text"} select-none`}
        >
          As a user
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
}: {
  icon: ComponentType<IconBaseProps>;
  title: string;
  message: string;
  id?: string;
  index: number;
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
      className="p-ds-32 rounded-ds-24 bg-interface h-fit mb-ds-24"
    >
      <div className="bg-brand-subtle w-fit h-fit p-ds-12 rounded-ds-8">
        <Icon className="fill-icon-brand text-title" />
      </div>
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
    <Stack gap={32} className="bg-brand-subtle mt-[100px] py-[80px]">
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
          <Button>Be a partner</Button>
        </Stack>

        <Stack
          horizontal
          distribute="between"
          align="center"
          className="w-full"
        >
          <UserTypeSwitch
            selected={isUserSelected}
            setSelected={setIsUserSelected}
          />
        </Stack>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {(isUserSelected ? clientBenefits : userBenefits).map(
              (item, index) => (
                <ReasonCard
                  index={index}
                  icon={item.icon}
                  title={item.title}
                  message={item.message}
                  key={`${item.title}-${index}`}
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
