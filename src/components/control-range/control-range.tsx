import React, {
  ReactElement,
  ReactNode,
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect
} from 'react';
import { createPortal } from 'react-dom';
import * as SliderPrimitive from '@radix-ui/react-slider';

import PropTypes from 'prop-types';
import omit from '../utils/omit';
import ControlLabel from '../control-label';
import ControlWrapper from '../control-wrapper';
import { InputProps } from '../typings';
import { getTheme } from '../utils/styles';

const propNames = [
  'id',
  'value',
  'onChange',
  'label',
  'optional',
  'aside',
  'validationError',
  'themeControlRange',
  'themeControlRangeActive',
  'themeControlWrapper',
  'themeLabel',
  'tooltip',
  // Passed when used with the Form component
  'initialValue',
  'validator'
];

interface Props extends Omit<InputProps, 'value' | 'onChange'> {
  id: string;
  onChange: (value: Array<number>, id: string) => void;
  value?: Array<number>;
  label?: string | ReactNode;
  optional?: boolean;
  aside?: ReactNode;
  tooltip?: boolean;
  validationError?: ReactNode;
  themeControlRange?: string;
  themeControlRangeActive?: string;
  themeControlTrack?: string;
  themeControlThumb?: string;
  themeControlWrapper?: string;
  themeLabel?: string;
  themeTooltipColoring?: 'light' | 'dark' | 'warning' | 'error';
}

export default function ControlRange({
  id,
  onChange,
  value = [],
  label,
  optional = false,
  aside,
  tooltip,
  validationError,
  themeControlRange = 'range--s range--gray w-full h-full',
  themeControlRangeActive,
  themeControlTrack = '',
  themeControlThumb = '',
  themeControlWrapper,
  themeLabel,
  themeTooltipColoring = 'light',
  ...props
}: Props): ReactElement {
  const extraProps = omit(props, propNames);
  const [activeThumbIndex, setActiveThumbIndex] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const tooltipTheme = useMemo(() => {
    if (!tooltip) return null;
    const { background, borderColor, color, fill, shadowColor } =
      getTheme(themeTooltipColoring);
    return {
      tooltipClasses: `${background} ${borderColor} ${color} border round txt-s px12 py6 wmax240`,
      fill,
      shadowColor
    };
  }, [tooltip, themeTooltipColoring]);

  const updateTooltipPosition = useCallback((thumbElement: HTMLElement) => {
    const thumbRect = thumbElement.getBoundingClientRect();

    setTooltipPosition({
      x: thumbRect.left + thumbRect.width / 2,
      y: thumbRect.top - 44
    });
  }, []);

  useEffect(() => {
    if (activeThumbIndex !== null && thumbRefs.current[activeThumbIndex]) {
      const thumbElement = thumbRefs.current[activeThumbIndex];
      if (thumbElement) {
        updateTooltipPosition(thumbElement);
      }
    }
  }, [activeThumbIndex, value, updateTooltipPosition]);


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

  const renderThumb = useCallback(
    (thumbValue: number, index: number) => {
      return (
        <SliderPrimitive.Thumb
          key={index}
          ref={(el) => {
            thumbRefs.current[index] = el;
          }}
          className={`${themeControlThumb}`}
          onMouseOver={() => setActiveThumbIndex(index)}
          onMouseOut={() => setActiveThumbIndex(null)}
          onPointerCancel={() => setActiveThumbIndex(null)}
        />
      );
    },
    [themeControlThumb]
  );

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
      <div className={`range ${themeControlRange}`} ref={sliderRef}>
        <SliderPrimitive.Root {...rootProps}>
          <SliderPrimitive.Track className={`${themeControlTrack}`}>
            <SliderPrimitive.Range
              className={`absolute h-full ${themeControlRangeActive}`}
            />
          </SliderPrimitive.Track>
          {value.map(renderThumb)}
        </SliderPrimitive.Root>
      </div>
      {tooltip && activeThumbIndex !== null && tooltipTheme && createPortal(
        <div
          className={`fixed ${tooltipTheme.tooltipClasses}`}
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: 'translateX(-50%)',
            filter: `drop-shadow(0 0 4px ${tooltipTheme.shadowColor})`,
            pointerEvents: 'none',
            zIndex: 9999
          }}
        >
          {value[activeThumbIndex]}
          <div
            className="absolute"
            style={{
              bottom: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: `6px solid ${tooltipTheme.fill}`
            }}
          />
        </div>,
        document.body
      )}
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
  /** Value passed to the label element. Value can be string or ReactNode. */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** If provided the text, "(optional)" is appended to the value of the label element. */
  optional: PropTypes.bool,
  /** Additional content inserted alongside the label element. */
  aside: PropTypes.node,
  /** Provide a tooltip for visual feedback on a range thumb value. */
  tooltip: PropTypes.bool,
  /** If provided, the value of this propery displays as an error message. */
  validationError: PropTypes.node,
  /** Assembly classes to apply to the range element */
  themeControlRange: PropTypes.string,
  /** Assembly classes to apply to the active part of the range track */
  themeControlRangeActive: PropTypes.string,
  /** Assembly classes to apply to the track element */
  themeControlTrack: PropTypes.string,
  /** Assembly classes to apply to the thumb element */
  themeControlThumb: PropTypes.string,
  /** Assembly classes to apply to the control wrapper */
  themeControlWrapper: PropTypes.string,
  /** Assembly classes to apply to the label element */
  themeLabel: PropTypes.string,
  /** `'light'`, `'dark'`, `'warning'`, or `'error'`. */
  themeTooltipColoring: PropTypes.oneOf(['light', 'dark', 'warning', 'error'])
};
