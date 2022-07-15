import React, { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

interface Props {
  id: string;
  header: (active: boolean) => ReactElement;
  body: ReactNode;
  disabled?: boolean;
  active?: boolean;
  onToggle: (id: string) => void;
  themeItem?: string;
  themeItemBody?: string;
  themeItemHeader?: string;
  themeItemHeaderDisabled?: string;
}

export default function AccordionItem({
  id,
  onToggle,
  header,
  body,
  active = false,
  disabled,
  themeItem,
  themeItemBody,
  themeItemHeader = 'txt-s txt-bold txt-truncate link link--gray py6',
  themeItemHeaderDisabled = 'color-gray-light'
}: Props): ReactElement {

  let themeHeader: string = `w-full ${themeItemHeader}`;
  if (disabled) {
    themeHeader += ` cursor-default ${themeItemHeaderDisabled}`;
  } else {
    themeHeader += ' cursor-pointer';
  }

  return (
    /*
    <AccordionPrimitive.Item className={themeItem} value={id}>
      <AccordionPrimitive.Trigger className={themeHeader}>
        {header(active)}
      </AccordionPrimitive.Trigger>
      <AccordionPrimitive.Content>
        {active && <div className={themeItemBody}>{body}</div>}
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
    */



    <div className={themeItem}>
      <button
        aria-label="Toggle"
        className={buttonClasses}
        disabled={disabled}
        data-test={id}
        onClick={() => onToggle(id)}
      >
        {header(active)}
      </button>
    </div>
  );
}

AccordionItem.propTypes = {
  /** Identifying value for accordion item. */
  id: PropTypes.string.isRequired,
  /** Callback when an accordion header item is clicked. */
  onToggle: PropTypes.func.isRequired,
  /** Function that accepts an `active` boolean argument and returns JSX. */
  header: PropTypes.func.isRequired,
  /** Contents that shown when the accordion is active. */
  body: PropTypes.node.isRequired,
  /** Determines if the state of the accordion item is active. */
  active: PropTypes.bool,
  /** Determines if the state of the accordion item is disabled. */
  disabled: PropTypes.bool,
  /** CSS classes to apply to the accordion item container. */
  themeItem: PropTypes.string,
  /** CSS classes to apply to the accordion header. */
  themeItemHeader: PropTypes.string,
  /** CSS classes to apply to the accordion header when `disabled` is true/ */
  themeItemHeaderDisabled: PropTypes.string,
  /** CSS classes to apply to the accordion body. */
  themeItemBody: PropTypes.string
};
