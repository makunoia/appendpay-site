import Text from "./molecules/Text";
import NextLink from "next/link";

const Link = ({ label, href }: { label: string; href: string }) => {
  return (
    <NextLink href={href} className="h-fit">
      <Text className="text-subtle hover:text-brand ease-in" size="body">
        {label}
      </Text>
    </NextLink>
  );
};

export default Link;
