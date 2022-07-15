import React, { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import AccordionItem from './accordion-item';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

interface Item = {
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
  themeItemHeader
}: Props): ReactElement {

  const renderItems = (item: Item) => {
    return (
      <AccordionItem
        {...item}
        key={item.id}
        active={item.id === activeItem}
        onToggle={onToggle}
        themeItem={themeItem}
        themeItemHeader={themeItemHeader}
        themeItemBody={themeItemBody}
        themeItemHeaderDisabled={themeItemHeaderDisabled}
      />
    );
  };

  return (
    <>
      {items.map(renderItems)}
    </>
  );
}

Accordion.propTypes = {
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
  /** CSS classes to apply to the accordion body */
  themeItemBody: PropTypes.string
};
