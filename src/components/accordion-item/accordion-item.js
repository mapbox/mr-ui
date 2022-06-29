import React from 'react';
import PropTypes from 'prop-types';

export default class AccordionItem extends React.Component {
  static propTypes = {
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

  static defaultProps = {
    active: false,
    themeItemHeader: 'txt-s txt-bold txt-truncate link link--gray py6',
    themeItemHeaderDisabled: 'color-gray-light'
  };

  onToggle = () => {
    const { id, onToggle } = this.props;
    onToggle(id);
  };

  renderHeader = () => {
    const { header, active } = this.props;
    return header(active);
  };

  render() {
    const {
      id,
      active,
      body,
      disabled,
      themeItem,
      themeItemHeader,
      themeItemHeaderDisabled,
      themeItemBody
    } = this.props;

    let buttonClasses = `w-full ${themeItemHeader}`;
    if (disabled) {
      buttonClasses += ` cursor-default ${themeItemHeaderDisabled}`;
    } else {
      buttonClasses += ' cursor-pointer';
    }

    return (
      <div className={themeItem}>
        <button
          aria-label="Toggle"
          className={buttonClasses}
          disabled={disabled}
          data-test={id}
          onClick={this.onToggle}
        >
          {this.renderHeader()}
        </button>
        {active && <div className={themeItemBody}>{body}</div>}
      </div>
    );
  }
}
