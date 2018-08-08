import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import PopoverTrigger from '../popover-trigger';

let tooltipCounter = 0;

/**
 * Wrap a trigger element so that when it is hovered or focused a tooltip
 * appears.
 *
 * Tooltip extends [PopoverTrigger](#popovertrigger) and configures the
 * popover and trigger for accessibility.
 */
export default class Tooltip extends React.Component {
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

  getContent() {
    const { content } = this.props;
    if (typeof content === 'function') {
      return content();
    } else {
      return content;
    }
  };

  renderTrigger() {
    const { children, testId } = this.props;
    const { tooltipId } = this.state;

    if (!children) {
      return null;
    }

    const triggerProps = { 'aria-describedby': tooltipId };
    if (testId) {
      triggerProps['data-test'] = `${testId}-trigger`;
    }

    if (typeof children === 'function') {
      return children(triggerProps);
    }
    if (children.type && typeof children.type === 'string') {
      return React.cloneElement(children, triggerProps);
    }
    if (children.type && children.type.name === 'Button') {
      return React.cloneElement(children, { passthroughProps: triggerProps });
    }
    throw new Error('Tooltip requires a child that is a function, a regular DOM node, or a Button. If your trigger is a different custom component, pass a function as the child.');
  }

  render() {
    const { props, state } = this;

    const tooltipContentAttributes = {
      id: state.tooltipId,
      // Override the "dialog" role set by popover
      role: 'tooltip'
    };

    if (props.testId) {
      tooltipContentAttributes['data-test'] = `${props.testId}-tooltip`;
    }

    const bodyClasses = classnames({
      'px12 py6': props.padded,
      'txt-s': props.textSize === 's',
      'txt-xs': props.textSize === 'xs'
    });

    const content = (
      <div className={bodyClasses}>
        {this.getContent()}
      </div>
    );

    return (
      <PopoverTrigger
        content={content}
        renderHiddenContent={true}
        disabled={props.disabled}
        display={props.display}
        respondsToClick={props.respondsToClick}
        respondsToHover={true}
        respondsToFocus={true}
        receiveFocus={false}
        popoverProps={{
          hasPointer: true,
          placement: props.placement,
          alignment: props.alignment,
          coloring: props.coloring,
          padded: false,
          hideWhenAnchorIsOffscreen: true,
          passthroughProps: tooltipContentAttributes
        }}
      >
        {this.renderTrigger()}
      </PopoverTrigger>
    );
  }
}

Tooltip.propTypes = {
  /**
   * The trigger element.
   *
   * If your element is a DOM element
   * (e.g. `<button>`, `<a>`, `<span>`, `<div>`),
   * you can pass it directly and it will have accessibility-related props
   * automatically added to it.
   *
   * If your element is a custom React component, you need to provide a
   * function as the child. The function will be invoked with a `triggerProps`
   * object, and you need to apply those `triggerProps` in such a way that
   * they end up on the DOM element of the trigger.
   */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  /**
   * The tooltip content. This can either be a string, valid JSX, or a function
   * returning either.
   */
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  /**
   * Placement of the tooltip in relation to the trigger element.
   */
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /**
   * Alignment of the tooltip's edge in relation to the trigger element.
   */
  alignment: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'center']),
  /**
   * If `true`, the tooltip will not appear.
   */
  disabled: PropTypes.bool,
  /**
   * `'light'`, `'dark'`, or `'warning'`.
   */
  coloring: PropTypes.oneOf(['light', 'dark', 'warning']),
  /**
   * `'xs'` (extra small), `'s'` (small), or `'none'` (no size class).
   */
  textSize: PropTypes.oneOf(['xs', 's', 'none']),
  /**
   * Set to `false` to remove the default padding on the popover body
   * (and, hopefully, apply your own).
   */
  padded: PropTypes.bool,
  /**
   * If `true`, tooltip can be opened with a mouse click.
   */
  respondsToClick: PropTypes.bool,
  /**
   * The CSS `display` value of the trigger element: '`block'` or '`inline-block'`.
   */
  display: PropTypes.oneOf(['block', 'inline-block']),
  /**
   * Added as `data-test` to the tooltip element.
   */
  testId: PropTypes.string
};

Tooltip.defaultProps = {
  placement: 'top',
  alignment: 'center',
  coloring: 'light',
  disabled: false,
  respondsToClick: false,
  padded: true,
  display: 'inline-block',
  textSize: 's'
};
