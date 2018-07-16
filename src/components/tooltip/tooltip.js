import React from 'react';
import PropTypes from 'prop-types';
import PopoverTrigger from '../popover-trigger';

let tooltipCounter = 0;

export default class Tooltip extends React.Component {
  static propTypes = {
    /** The trigger element. Note that this should be a *function* that is passed a `triggerProps` argument to support accessiblity attributes from the tooltip. */
    children: PropTypes.func.isRequired,
    /** The tooltip content. This can either be a string, valid JSX, or a function returning either. */
    content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    /** Placement of the tooltip in relation to the trigger element. */
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /** Alignment of the tooltip's edge in relation to the trigger element. */
    alignment: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'center']),
    /** If `true`, the tooltip will not appear. */
    disabled: PropTypes.bool,
    /** Background color of the tooltip. */
    backgroundColor: PropTypes.string,
    /** If `true`, tooltip can be opened with a mouse click. */
    respondsToClick: PropTypes.bool,
    /** Classes to style the tooltip container. */
    themeTooltip: PropTypes.string,
    /** The CSS `display` property of the trigger element. */
    display: PropTypes.string,
    /** Added as `data-test` to the tooltip element. */
    testId: PropTypes.string
  };

  state: {
    visible: boolean,
    tooltipId: ?string
  };
  anchorElement: ?Element;
  showTimeout: ?number;

  static defaultProps = {
    placement: 'top',
    alignment: 'center',
    backgroundColor: '#fff',
    disabled: false,
    respondsToClick: false,
    themeTooltip: 'round py6 px12 shadow-darken25 txt-s z1'
  };

  state = {
    visible: false,
    tooltipId: null
  };

  componentDidMount() {
    // Save the application for the random generated id until after mount
    // so that it doesn't mess up the relation of static/dynamic React code.
    // Generating unique ids for server-rendered code without breaking
    // the checksum is very hard!
    tooltipCounter += 1;
    this.setState({ tooltipId: `tooltip-${tooltipCounter}` });
  }

  render() {
    const triggerProps = { 'aria-describedby': this.state.tooltipId };
    const tooltipContentAttributes = {
      id: this.state.tooltipId,
      // Override the "dialog" role set by popover
      role: 'tooltip'
    };

    const { testId } = this.props;
    if (testId) {
      triggerProps['data-test'] = `${testId}-trigger`;
      tooltipContentAttributes['data-test'] = `${testId}-tooltip`;
    }

    const triggerElement = this.props.children
      ? this.props.children(triggerProps)
      : null;

    return (
      <PopoverTrigger
        content={this.props.content}
        renderHiddenContent={true}
        disabled={this.props.disabled}
        display={this.props.display}
        respondsToClick={this.props.respondsToClick}
        respondsToHover={true}
        respondsToFocus={true}
        receiveFocus={false}
        popoverProps={{
          hasPointer: true,
          themePopover: this.props.themeTooltip,
          placement: this.props.placement,
          alignment: this.props.alignment,
          backgroundColor: this.props.backgroundColor,
          hideWhenAnchorIsOffscreen: true,
          // Tooltips do not need aria-labels
          accessibleTitle: null,
          contentElementAttributes: tooltipContentAttributes
        }}
      >
        {triggerElement}
      </PopoverTrigger>
    );
  }
}
