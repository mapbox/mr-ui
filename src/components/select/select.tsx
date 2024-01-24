import React, { ReactElement, ReactNode, forwardRef, useRef, ForwardedRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import querySelectorContainsNode from '@mapbox/query-selector-contains-node';
import { getTheme } from '../utils/styles';
import * as SelectPrimitive from '@radix-ui/react-select';

type Option = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
  active?: boolean;
  options?: Array<Option>
}

interface Props {
  children: ReactNode;
  options: Array<Option>;
  onChange: (value: string) => void;
  onExit?: () => void;
  onOpenChange?: () => void;
  header?: ReactNode;
  footer?: ReactNode;
  offsetFromAnchor?: number;
  padding?: 'medium' | 'small' | 'none';
  coloring?: 'light' | 'dark';
  placement?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'center' | 'start' | 'end';
  clickOutsideCloses?: boolean;
  escapeCloses?: boolean;
  hasPointer?: boolean;
  hideWhenAnchorIsOffscreen?: boolean;
  allowPlacementAxisChange?: boolean;
  themeSelectWrapper?: string;
  themeSelectItemWrapper?: string;
  themeSelectItem?: string;
  passthroughProps?: {
    [key: string]: string | number | boolean;
  };
}

const Select = forwardRef(({
  onExit,
  onOpenChange,
  children,
  header,
  footer,
  onChange,
  options,
  hasPointer = true,
  hideWhenAnchorIsOffscreen = false,
  allowPlacementAxisChange = true,
  clickOutsideCloses = true,
  escapeCloses = true,
  coloring = 'light',
  placement = 'right',
  alignment = 'center',
  padding = 'medium',
  offsetFromAnchor = 6,
  themeSelectWrapper = '',
  themeSelectItemWrapper = '',
  themeSelectItem = 'transition bg-gray-light-on-active block py6 txt-break-word-soft bg-darken5-on-hover color-blue-on-hover cursor-pointer round px6',
  passthroughProps
}: Props, forwardedRef: ForwardedRef<HTMLButtonElement>): ReactElement => {
  const { background, borderColor, color, fill } = getTheme(coloring);
  const triggerRef = useRef(null);

  const contentClasses = classnames(
    `${background} ${borderColor} ${color} border shadow-darken25 round`,
    {
      'px12 py12': padding === 'medium',
      'px12 py6': padding === 'small',
      [`border border-1 border--${borderColor}`]: borderColor
    }
  );

  const onDown = (e: Event) => {

    // Don't call onExit if it wasn't provided.
    if (!onExit) {
      return;
    }

    // If event target contains the trigger element, assume onExit is handled
    // on its own so don't re-fire it.
    if (triggerRef.current && triggerRef.current.contains(e.target)) {
      return;
    }

    // Check if the event target contains the following data attribute. If it
    // does, do not call onExit.
    if (querySelectorContainsNode('[data-popover-ignore-clicks]', e.target)) {
      return;
    }

    onExit();
  }

  const renderOptions = ({ label, value, active, disabled, options }: Option) => {

    const itemClasses = classnames(themeSelectItem, {
      'is-active': active
    })

    if (options) {
      return (
        <SelectPrimitive.Group>
          {options.map(renderOptions)}
        </SelectPrimitive.Group>
      );
    } else {
      return (
        <SelectPrimitive.Item className={itemClasses} disabled={disabled} key={value} value={value}>
          {label}
        </SelectPrimitive.Item>
      );
    }
  };

  return (
    <SelectPrimitive.Root
      onOpenChange={onOpenChange && onOpenChange}
      onValueChange={onChange}
    >

      <SelectPrimitive.Trigger ref={forwardedRef} asChild>
        {children}
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          sideOffset={offsetFromAnchor}
          className={contentClasses}
          position="popper"
          side={placement}
          align={alignment}
          onEscapeKeyDown={escapeCloses && onExit}
          onPointerDownOutside={clickOutsideCloses && onDown}
          hideWhenDetached={hideWhenAnchorIsOffscreen}
          avoidCollisions={allowPlacementAxisChange}
          {...passthroughProps}
        >
          <SelectPrimitive.Viewport>
            <div className={themeSelectWrapper}>
              {header && header}
              <div className={themeSelectItemWrapper}>
                {options.map(renderOptions)}
              </div>
              {footer && footer}
            </div>
          </SelectPrimitive.Viewport>
          {hasPointer && <SelectPrimitive.Arrow width={12} height={6} offset={6} fill={fill} />}
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>

    </SelectPrimitive.Root>
  );
});

Select.propTypes = {
  /** An array of objects containing `label` `value` key value pairings to represent each option. An optional `disable` key can be provided to disable the selection of an indiviual `<option>`. If `value` is not present but an `options` array is provided containing the same `label` `value` key value pairings, options will be grouped within a `<optgroup>` element as defined by `label` child key. Note that each `label` value must be unique. */
  // @ts-expect-error
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      active: PropTypes.bool,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.node.isRequired,
          value: PropTypes.string.isRequired,
          disabled: PropTypes.bool,
          active: PropTypes.bool
        })
      )
    })
  ).isRequired,
  /**
   * `'light'`, `'dark'`.
   */
  coloring: PropTypes.oneOf(['light', 'dark']),
  /**
   * `'medium'`, `'small'`, or `'none'`.
   */
  padding: PropTypes.oneOf(['medium', 'small', 'none']),
  /**
   * Whether or not the select container has a triangle pointer.
   */
  hasPointer: PropTypes.bool,
  /**
   * If `true`, the select container will hide when its anchor is scrolled offscreen.
   * By default, the select container will follow its anchor wherever it goes.
   *
   * If your anchor is within an internally scrolling area, you may want to
   * use `true`, so the select container doesn't existing in a disembodied state after
   * its anchor is scrolled away.
   */
  hideWhenAnchorIsOffscreen: PropTypes.bool,
  /**
   * If `false`, the select container  is *not* allowed to change axes on the 
   * anchor when modifying its position to fit available space. By default, 
   * select containers on the `left` and `right`, for example, might change to `bottom` 
   * is there is neither space on the left nor the right.
   */
  allowPlacementAxisChange: PropTypes.bool,
  /**
   * Preferred placement of the select container in relation to the anchor.
   * Adjusted according to available space.
   */
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /**
   * `'center'`, `'start'`, `'end'` Alignment of the select container edge in relation to the trigger element.
   */
  alignment: PropTypes.oneOf(['center', 'start', 'end']),
  /** Called during changes to the input element. */
  onChange: PropTypes.func.isRequired,
  /** Assembly classes to apply to the select wrapper */
  themeSelectWrapper: PropTypes.string,
  /** Assembly classes to apply to the wrapper containing the select items */
  themeSelectItemWrapper: PropTypes.string,
  /** Assembly classes to apply to the select element */
  themeSelectItem: PropTypes.string,
    /**
   * If `false`, clicking outside the select container will not close it.
   * By default, it does.
   */
  clickOutsideCloses: PropTypes.bool,
  /**
   * If `false`, hitting Escape will not close the select container. By default, it does.
   */
  escapeCloses: PropTypes.bool,
  /**
   * A function called when select list open state changes.
   */
  onOpenChange: PropTypes.func,
  /**
   * A function called when select container is dismissed.
   */
  onExit: PropTypes.func,
  /**
   * Number of pixels by which the select container should be offset from its anchor.
   */
  offsetFromAnchor: PropTypes.number,
  /**
   * Props to pass directly to select content options from `@radix-ui/react-select`.
   */
  passthroughProps: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number
  ]))
};

export default Select;
