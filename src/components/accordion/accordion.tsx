import React, { ReactElement, ReactNode } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

interface Item {
  id: string;
  header: (active: boolean) => ReactElement;
  body: ReactNode;
  disabled?: boolean;
}

interface Props {
  items: Array<Item>;
  onToggle: (id: string) => void;
  activeItem?: string;
  themeItem?: string;
  themeItemBody?: string;
  themeItemHeader?: string;
  themeItemHeaderDisabled?: string;
}

export default function Accordion({
  items,
  onToggle,
  activeItem,
  themeItem,
  themeItemBody,
  themeItemHeader = 'txt-s txt-bold txt-truncate link link--gray py6',
  themeItemHeaderDisabled = 'color-gray-light'
}: Props): ReactElement {
  const renderItems = (item: Item) => {
    const { id, header, body, disabled } = item;
    const active = id === activeItem;
    const themeHeader = classnames(`w-full ${themeItemHeader}`, {
      [`cursor-default ${themeItemHeaderDisabled}`]: disabled,
      'cursor-pointer': !disabled
    });

    return (
      <AccordionPrimitive.Item
        data-assembly-focus-within
        className={themeItem}
        key={id}
        value={id}
      >
        <AccordionPrimitive.Trigger disabled={disabled} data-testid="accordion-trigger" className={themeHeader}>
          {header(active)}
        </AccordionPrimitive.Trigger>
        <AccordionPrimitive.Content>
          {active && <div className={themeItemBody}>{body}</div>}
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    );
  };

  return (
    <AccordionPrimitive.Root type="single" value={activeItem} onValueChange={onToggle} collapsible>
      {items.map(renderItems)}
    </AccordionPrimitive.Root>
  );
}

Accordion.propTypes = {
  /** An array of items that represents each tab. Each entry supports:
   * 1. `id` Identifying value for accordion item.
   * 2. `header` Contents that are always shown.
   * 3. `body` Contents that are shown when the accorion is active.
   * 4. `disabled` Flag to disable the clickability of an accorion item (optional). */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** Identifying value for accordion item. */
      id: PropTypes.string.isRequired,
      /** Contents that are always shown. */
      header: PropTypes.func.isRequired,
      /** Contents that shown when the accordion is active. */
      body: PropTypes.node.isRequired,
      /** Flag to disable the clickability of an accordion item. */
      disabled: PropTypes.bool
    })
  ).isRequired,
  /** Callback when an accordion header item is clicked. */
  onToggle: PropTypes.func.isRequired,
  /** Value should coorespond to an `id` within the items array. */
  activeItem: PropTypes.string,
  /** CSS classes to apply to the accordion item container */
  themeItem: PropTypes.string,
  /** CSS classes to apply to the accordion header */
  themeItemHeader: PropTypes.string,
  /** CSS classes to apply to the disabled accordion header */
  themeItemHeaderDisabled: PropTypes.string,
  /** CSS classes to apply to the accordion body */
  themeItemBody: PropTypes.string
};
