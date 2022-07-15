import React, { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

interface Props {
  id: string;
  header: (active: boolean) => ReactElement;
  body: ReactNode;
  disabled?: boolean;
  active?: boolean;
  themeItem?: string;
  themeItemBody?: string;
  themeItemHeader?: string;
  themeItemHeaderDisabled?: string;
}

export default function AccordionItem({
  id,
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
    <AccordionPrimitive.Item data-assembly-focus-within className={themeItem} value={id}>
      <AccordionPrimitive.Trigger className={themeHeader}>
        {header(active)}
      </AccordionPrimitive.Trigger>
      <AccordionPrimitive.Content>
        {active && <div className={themeItemBody}>{body}</div>}
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}
