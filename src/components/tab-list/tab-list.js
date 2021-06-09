import React from 'react';
import PropTypes from 'prop-types';
import PopoverTrigger from '../popover-trigger';

export default class TabList extends React.PureComponent {
  /** If you change propTypes, also change propNames. */
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /** Identifying value for tab list item. */
        id: PropTypes.string.isRequired,
        /** The name of the tab to be displayed. */
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
          .isRequired,
        /** Determines if the state of the tab list item is active. */
        active: PropTypes.bool,
        /** Link to the page the lab list item should take you to when clicked. */
        href: PropTypes.string,
        /** Flag to disable the clickability of an tab list item. */
        disabled: PropTypes.bool
      })
    ).isRequired,
    /** Callback when an tab list header item is clicked.
     Note that this should be a function that is passed an `id` argument. */
    onChange: PropTypes.func,
    /** Value should coorespond to an `id` within the items array. */
    activeItem: PropTypes.string,
    /** Index of the first item in the `items` array that
     should move to the dropdown on narrow screens. */
    truncateBy: PropTypes.number,
    /** CSS classes to apply to the tab list item. */
    themeItem: PropTypes.string,
    /** CSS classes to apply to the active tab list item. */
    themeItemActive: PropTypes.string,
    /** CSS classes to apply to items when they are truncated. */
    themeItemTruncated: PropTypes.string,
    /** CSS classes to apply to the active tab list item. */
    themeItemActivePopover: PropTypes.string,
    /** CSS classes to apply to the tab list item container. */
    themeItemContainer: PropTypes.string,
    /** CSS classes to apply to the tab list item when `disabled` is true */
    themeItemDisabled: PropTypes.string
  };

  static defaultProps = {
    truncateBy: 2,
    themeItem: 'border-b-mm border-b--2',
    themeItemActive: 'border--blue txt-bold',
    themeItemTruncated: 'border-b--0',
    themeItemActivePopover: 'border-b block',
    themeItemContainer: '',
    themeItemDisabled: 'color-gray-light'
  };

  constructor(props) {
    super(props);
    this.state = { openPopover: false };
  }

  onChange = (id) => {
    const { onChange } = this.props;
    onChange(id);
  };

  handlePopoverOpen = () => {
    this.setState({ openPopover: true });
  };

  handlePopoverClose = () => {
    this.setState({ openPopover: false });
  };

  render() {
    const {
      items,
      activeItem,
      truncateBy,
      themeItem,
      themeItemActive,
      themeItemTruncated,
      themeItemDisabled
    } = this.props;

    const renderAllItems = (item, truncatedClasses) => {
      /** The classes that the active item should have. */
      let activeClasses = '';
      if (item.id === activeItem) {
        activeClasses = themeItemActive;
      } else {
        activeClasses = 'border--transparent';
      }
      /** The classes that a disabled item should have. */
      let disabledClasses = '';
      if (item.disabled === true) {
        disabledClasses = themeItemDisabled;
      }
      /** The classes that every item should have. */
      let renderedItemClasses = `px6 mr24 fl-mm align-center-mm align-l py12 ${themeItem} ${truncatedClasses} ${activeClasses} ${disabledClasses}`;
      let renderedItem = null;
      /** If the item contains an href, make a link. */
      if (item.href) {
        renderedItem = (
          <a
            key={item.id}
            href={item.href}
            className={`inline-block ${renderedItemClasses}`}
            data-test={item.id}
          >
            {item.label}
          </a>
        );
        /** If the item does not contain an href, make a button. */
      } else {
        renderedItem = (
          <button
            aria-label={item.id}
            key={item.id}
            type="button"
            className={renderedItemClasses}
            disabled={item.disabled}
            data-test={item.id}
            onClick={() => this.onChange(item.id)}
          >
            {item.label}
          </button>
        );
      }
      return renderedItem;
    };

    /** These are the tab list items that will never be truncated. */
    const alwaysRenderedItems = items
      .slice(0, truncateBy)
      .map((item, index) => {
        return (
          <div key={index} className="fl">
            {renderAllItems(item, 'inline-block border-b')}
          </div>
        );
      });

    /** These are the tab list items that will be truncated on narrow screens.
    They should still be rendered as usual on wide screens, and should be hidden
    on narrow screens using `inline-block-mm none`. */
    const sometimesHiddenItems = items
      .slice(truncateBy, items.length)
      .map((item, index) => {
        return (
          <div key={index} className="fl">
            {renderAllItems(item, 'inline-block-mm none')}
          </div>
        );
      });

    /** These are the tab list items that will be truncated on narrow screens.
    This is the same content as is in the `sometimesHiddenItems` array, but we _do_
    want to render them on narrow screens, but they should be stacked (`block`) and
    should not have a bottom border (`border-b--0`) when active. */
    const dropdownMenuItems = items
      .slice(truncateBy, items.length)
      .map((item, index) => {
        return (
          <div key={index} className="block">
            {renderAllItems(item, themeItemTruncated)}
          </div>
        );
      });

    /** This is the "More +" button that appears on narrow screens and provides
     a popover that contains the `dropdownMenuItems`. */
    const moreButton = (
      <div className="fl">
        <PopoverTrigger
          content={dropdownMenuItems}
          onPopoverOpen={this.handlePopoverOpen}
          onPopoverClose={this.handlePopoverClose}
          receiveFocus={true}
          respondsToFocus={false}
          respondsToHover={true}
          trapFocus={true}
          popoverProps={{
            placement: 'bottom',
            themePopover:
              'round shadow-darken25 h480 overflow-auto px12 py12 scroll-styled'
          }}
          triggerProps={{
            'data-test': 'more-dropdown-menu'
          }}
        >
          <button
            aria-label="More"
            className="px6 py12 mr12 align-l cursor-pointer none-mm"
            type="button"
          >
            More +
          </button>
        </PopoverTrigger>
      </div>
    );

    return (
      <div className="clearfix">
        {alwaysRenderedItems}
        {sometimesHiddenItems}
        {truncateBy < items.length && moreButton}
      </div>
    );
  }
}
