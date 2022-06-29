import React from 'react';
import PropTypes from 'prop-types';
import AccordionItem from '../accordion-item';

export default class UncontrolledAccordion extends React.PureComponent {
  // If you change propTypes, also change propNames.
  static propTypes = {
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
    onToggle: PropTypes.func,
    /** Value should coorespond to an `id` within the items array. */
    initiallyActiveItem: PropTypes.string,
    /** CSS classes to apply to the accordion item container */
    themeItem: PropTypes.string,
    /** CSS classes to apply to the accordion header */
    themeItemHeader: PropTypes.string,
    /** CSS classes to apply to the accordion body */
    themeItemBody: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      active: props.initiallyActiveItem ? props.initiallyActiveItem : ''
    };
  }

  onToggle = (id) => {
    const { onToggle } = this.props;
    this.setState(
      {
        active: id === this.state.active ? '' : id
      },
      () => {
        if (onToggle) onToggle(id);
      }
    );
  };

  render() {
    const { items, themeItem, themeItemHeader, themeItemBody } = this.props;

    const renderItems = (item) => {
      return (
        <AccordionItem
          {...item}
          key={item.id}
          active={item.id === this.state.active}
          onToggle={this.onToggle}
          themeItem={themeItem}
          themeItemHeader={themeItemHeader}
          themeItemBody={themeItemBody}
        />
      );
    };

    return <div>{items.map(renderItems)}</div>;
  }
}
