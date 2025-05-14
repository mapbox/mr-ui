import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TabItem from './tab-item';
import { SIZE_SMALL } from './tabs-constants';
import * as RadixTabs from '@radix-ui/react-tabs';
import { TabItemProps, SizeType } from './types';
/**
 * For navigation between sections. Tabs will be always buttons
 *
 */

interface Props {
  items: Array<TabItemProps>;
  active: string;
  onChange?: (a: string) => void;
  size?: SizeType;
  tabBorder?: boolean;
  themeTabsContainer?: string;
  themeTabItem?: string;
  id?: string;
}

export default function Tabs({
  size = 'medium',
  tabBorder = true,
  items,
  active,
  onChange,
  themeTabItem = 'color-gray color-gray-dark-on-active color-blue-on-hover',
  themeTabsContainer = '',
  id
}: Props): ReactElement {
  const small = size === SIZE_SMALL;
  const containerClasses = classnames(
    `flex txt-nowrap unselectable ${themeTabsContainer}`
  );

  const itemEls = items.map((item, index) => {
    const first = index === 0;
    const layoutClasses = classnames({
      ml12: !first && small && tabBorder,
      'ml24 ml36-mxl': !first && !small && tabBorder,
      'inline-block': true
    });
    return (
      <RadixTabs.Trigger
        aria-label={typeof item.label === 'string' ? item.label : item.id}
        className={layoutClasses}
        data-testid={
          id ? `button-tab-${id}-${item.id}` : `button-tab-${item.id}`
        }
        value={item.id}
        key={item.id}
        disabled={item.disabled}
      >
        <TabItem
          active={active === item.id}
          size={size}
          themeTabItem={themeTabItem}
          tabBorder={tabBorder}
          {...item}
        />
      </RadixTabs.Trigger>
    );
  });

  const tabContents = items.map((item) => {
    return (
      <RadixTabs.TabsContent value={item.id} key={item.id}>
        {item.content}
      </RadixTabs.TabsContent>
    );
  });

  return (
    <RadixTabs.Root onValueChange={onChange} value={active} id={id}>
      <div
        className={containerClasses}
        data-testid={id ? `tabs-wrapper-${id}` : 'tabs-wrapper'}
      >
        <RadixTabs.List
          className={classnames({
            'mb-neg1': tabBorder
          })}
        >
          {itemEls}
        </RadixTabs.List>
      </div>
      {tabContents}
    </RadixTabs.Root>
  );
}

Tabs.propTypes = {
  /**
   * The ID of the active item. Value must correspond with an `id` property
   * in the `items` array.
   */
  active: PropTypes.string.isRequired,
  /**
   * Each tab is an object with the following properties:
   * - `id` (required): A string ID.
   * - `label`: Text or React node. A button will be automatically created based on the label. if label is not provided the id will serve as a label
   * - `disabled`: Boolean.
   * - `content`: React node for generating the tab content.
   *    If provided, the tab content will automatically be rendered when changing tabs. Tab content does not have any styling applied by by default
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      disabled: PropTypes.bool,
      content: PropTypes.node
    })
  ).isRequired,
  /**
   * A callback that will be invoked when an item is clicked.
   * It will receive the ID of the clicked item and the click `event` itself as arguments.
   */
  onChange: PropTypes.func,
  /**
   * Three sizes: "small", "medium", or "large".
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * If `true`, there will be a bottom border on the active tab border. 
   * The element will extend down one pixel so the underline beneath the active item overlaps the bottom border of a container.
   * You must provide your own bottom border, by setting it on a container element or in the themeTabsContainer.
   */
  tabBorder: PropTypes.bool,
  /** Css classes for wrapping the tabs. */
  themeTabsContainer: PropTypes.string,
  /** Css classes for the tab item. Active tab has the is-active class, so you can use *-on-active to
   * control the color of the active tab.
   */
  themeTabItem: PropTypes.string
};
