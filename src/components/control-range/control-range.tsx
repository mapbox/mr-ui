import React, {ReactElement, ReactNode} from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import ControlLabel from '../control-label';
import ControlWrapper from '../control-wrapper';
import { InputProps } from '../typings';

const propNames = [
  'id',
  'value',
  'onChange',
  'label',
  'optional',
  'aside',
  'validationError',
  'themeControlRange',
  'themeControlWrapper',
  'themeLabel',
  // Passed when used with the Form component
  'initialValue',
  'validator'
];

interface Props extends Omit<InputProps, 'value' | 'onChange'>{
  id: string;
  onChange: (value: Array<number>, id: string) => void;
  value?: Array<number>;
  label?: string;
  optional?: boolean;
  aside?: ReactNode;
  validationError?: ReactNode;
  themeControlRange?: string;
  themeControlWrapper?: string;
  themeLabel?: string;
}

export default function ControlRange({
  id,
  onChange,
  value = [],
  label,
  optional = false,
  aside,
  validationError,
  themeControlRange = 'range--s range--gray w-full h-full',
  themeControlWrapper,
  themeLabel,
  ...props
}: Props): ReactElement {

  const extraProps = omit(props, propNames);

  const rootProps = {
    id,
    name: id,
    onValueChange: (value: Array<number>) => onChange(value, id),
    value,
    'aria-required': optional ? false : true,
    'data-test': `${id}-input`,
    ...extraProps
  };

  if (validationError) {
    rootProps['aria-invalid'] = true;
  }

  return (
    <ControlWrapper
      themeControlWrapper={themeControlWrapper}
      id={id}
      validationError={validationError}
    >
      {label && (
        <ControlLabel
          text={label}
          id={id}
          aside={aside}
          optional={optional}
          themeLabel={themeLabel}
        />
      )}
      <div className={`range ${themeControlRange}`}>
        <SliderPrimitive.Root {...rootProps}>
          <SliderPrimitive.Track>
            <SliderPrimitive.Range />
          </SliderPrimitive.Track>
          {value.map((_, i) => (
            <SliderPrimitive.Thumb key={i} />
          ))}
        </SliderPrimitive.Root>
      </div>
    </ControlWrapper>
  );
}

ControlRange.propTypes = {
  /** Identifying value for input element. */
  id: PropTypes.string.isRequired,
  /** Called during changes to the input element. */
  onChange: PropTypes.func.isRequired,
  /** Accepts an array of numbers, where each number matches a draggable thumb. */
  value: PropTypes.array,
  /** Value passed to the label element. */
  label: PropTypes.string,
  /** If provided the text, "(optional)" is appended to the value of the label element. */
  optional: PropTypes.bool,
  /** Additional content inserted alongside the label element. */
  aside: PropTypes.node,
  /** If provided, the value of this propery displays as an error message. */
  validationError: PropTypes.node,
  /** Assembly classes to apply to the range element */
  themeControlRange: PropTypes.string,
  /** Assembly classes to apply to the control wrapper */
  themeControlWrapper: PropTypes.string,
  /** Assembly classes to apply to the label element */
  themeLabel: PropTypes.string
};
