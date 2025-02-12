import * as React from 'react';
import type { IconType } from 'react-icons';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from './../utilities';

import Text from './molecules/Text';
import Stack from './molecules/Stack';

const Group = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-4', className)}
      {...props}
      ref={ref}
    />
  );
});
Group.displayName = RadioGroupPrimitive.Root.displayName;

type ChoiceItemProps = {
  id?: string;
  label: string;
  value: string;
  description: string;
  disabled?: boolean;
  icon: IconType;
};

const ItemContent = ({
  id,
  label,
  description,
  icon: Icon,
}: {
  id?: string;
  label: string;
  description: string;
  icon: IconType;
}) => (
  <>
    <div
      className={cn(
        'grid aspect-square h-9 w-9 shrink-0 place-items-center rounded-md bg-interface-subtle fill-icon-subtle text-xl text-subtle',
        'group-hover:text-brand',
        'group-data-[state=checked]:bg-brand group-data-[state=checked]:text-white',
        'transition-colors duration-300'
      )}
    >
      <Icon />
    </div>
    <Stack gap={4} className="text-left">
      <Text
        as="label"
        size="body"
        weight="medium"
        htmlFor={id ? id : `id-${label}`}
        className="cursor-pointer text"
      >
        {label}
      </Text>
      <Text size="caption" className="text-subtle">
        {description}
      </Text>
    </Stack>
  </>
);

const Item = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  ChoiceItemProps
>(({ id, label, value, description, disabled = false, icon }, ref) => {
  return (
    <Stack
      horizontal
      gap={12}
      className={description ? 'items-start' : 'items-center'}
    >
      <RadioGroupPrimitive.Item
        id={id ? id : `id-${label}`}
        ref={ref}
        className={cn(
          'group flex w-full items-start gap-3 rounded-lg transition-colors ' +
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interface-focus ' +
            'disabled:cursor-not-allowed disabled:opacity-50'
        )}
        value={value}
        disabled={disabled}
      >
        <ItemContent label={label} description={description} icon={icon} />
      </RadioGroupPrimitive.Item>
    </Stack>
  );
});
Item.displayName = RadioGroupPrimitive.Item.displayName;

const Choice = {
  Group,
  Item,
};

export default Choice;
