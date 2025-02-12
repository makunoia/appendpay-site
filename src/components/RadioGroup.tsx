import {
  Children,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from 'react';

import Radio from 'path_to_RadioButton';

import { cn } from './../utilities';

import FieldWrapper, {
  type Props as WrapperProps,
} from './FieldWrapper';

type RadioItemType = {
  value: string;
} & Omit<ComponentPropsWithoutRef<typeof Radio.Item>, 'onChange' | 'checked'>;

type Props = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  children: Array<ReactElement<RadioItemType>> | ReactElement<RadioItemType>;
  containerClassName?: string;
} & WrapperProps;

function RadioGroup({
  id,
  inline,
  name,
  value,
  onChange,
  readOnly,
  label,
  error,
  children: raw,
  containerClassName,
  ...rest
}: Props) {
  const children = Array.isArray(raw) ? raw : [raw];
  return (
    <FieldWrapper
      id={id}
      name={name}
      label={!inline ? label : undefined}
      readOnly={readOnly}
      error={error}
      gap={8}
      {...rest}
    >
      <Radio.Group
        className={cn('grid w-full gap-4 pb-2 pt-4', containerClassName)}
        onValueChange={(val) => onChange(val)}
        value={value}
      >
        {Children.toArray(
          children.map((c: ReactElement) => {
            const { value: cValue, label, ...rest } = c.props as RadioItemType;
            return (
              <Radio.Item key={cValue} label={label} value={cValue} {...rest} />
            );
          })
        )}
      </Radio.Group>
    </FieldWrapper>
  );
}

export default RadioGroup;
