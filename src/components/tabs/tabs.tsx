import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TabItem from './tab-item';
import { SIZE_SMALL, SIZE_MEDIUM } from './tabs-constants';
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
  overlapBorder?: boolean;
  inactiveColor?: string;
  activeColor?: string;
  hoverColor?: string,
  bold?: boolean,
  fitHeight?: boolean,
  themeTabsContainer?: string,
}

export default function Tabs({
  size = 'medium',
  inactiveColor = 'gray',
  activeColor = 'gray-dark',
  hoverColor = 'blue',
  overlapBorder = false,
  bold = true,
  items,
  active,
  onChange,
  fitHeight = false,
  themeTabsContainer = ""
}: Props): ReactElement {
  const small = size === SIZE_SMALL;
  const medium = size === SIZE_MEDIUM;

  const rootContainerClasses = classnames({
    'h-full flex flex--column': fitHeight,
  })

  const containerClasses = classnames(`flex txt-nowrap unselectable ${themeTabsContainer}`, {
    'txt-bold': bold,
    'txt-s': medium,
    'txt-xs': small,
  });

  const tabContentClasses = classnames({
    'overflow-auto': fitHeight,
  })

  const itemEls = items.map((item, index) => {
    const first = index === 0;
    const layoutClasses = classnames({
      ml12: !first && small,
      'ml24 ml36-mxl': !first && !small,
      'inline-block': true
    });
    return (
      <RadixTabs.Trigger aria-label={item.label} className={layoutClasses} data-testid={`button-tab-${item.id}`} value={item.id} key={item.id} disabled={item.disabled}>
        <TabItem
          active={active === item.id}
          size={size}
          inactiveColor={inactiveColor}
          activeColor={activeColor}
          hoverColor={hoverColor}
          overlapBorder={overlapBorder}
          {...item}
        />
      </RadixTabs.Trigger>

    );
  });

  const tabContents = items.map((item) => {
    return (
      <RadixTabs.TabsContent value={item.id} key={item.id} className={tabContentClasses}>
        {item.content}
      </RadixTabs.TabsContent>
    );
  });

  return (
    <RadixTabs.Root onValueChange={onChange} value={active} className={rootContainerClasses}>
      <div className={containerClasses} data-testid="tabs-wrapper">
        <RadixTabs.List>
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
   * - `label`: Text. A button will be automatically created based on the label. if label is not provided the id will serve as a label
   * - `disabled`: Boolean.
   * - `content`: React node for generating the tab content. 
   *    If provided, the tab content will automatically be rendered when changing tabs. Tab content does not have any styling applied by by default
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
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
   * If `true`, the element will extend down one pixel so the underline beneath
   * the active item overlaps the bottom border of a container.
   * **You must provide your own bottom border,** by setting it on a container
   * element.
   */
  overlapBorder: PropTypes.bool,
  /** The Assembly color of inactive items. */
  inactiveColor: PropTypes.string,
  /** The Assembly color of active items. */
  activeColor: PropTypes.string,
  /** The Assembly color of hovered inactive items. */
  hoverColor: PropTypes.string,
  /** Whether or not the text is bold. */
  bold: PropTypes.bool,
  /** If `true`, this element will fit the height of the parent and add a scroll bar to the tab content if it exceeds the height of the parent */
  fitHeight: PropTypes.bool,
  /** Css classes for wrapping the tabs */
  themeTabsContainer: PropTypes.string
};
