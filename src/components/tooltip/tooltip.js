import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';
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
  }

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
    if (children.type && children.type === Button) {
      return React.cloneElement(children, { passthroughProps: triggerProps });
    }
    throw new Error(
      'Tooltip requires a child that is a function, a regular DOM node, or a Button. If your trigger is a different custom component, pass a function as the child.'
    );
  }

  render() {
    const { props, state } = this;

    const popoverPassthroughProps = {
      id: state.tooltipId,
      // Override the "dialog" role set by popover
      role: 'tooltip'
    };

    if (props.testId) {
      popoverPassthroughProps['data-test'] = `${props.testId}-tooltip`;
    }

    const bodyClasses = classnames({
      'txt-s': props.textSize === 's',
      'txt-xs': props.textSize === 'xs',
      wmax120: props.maxWidth === 'small',
      wmax240: props.maxWidth === 'medium'
    });

    const content = <div className={bodyClasses}>{this.getContent()}</div>;

    return (
      <PopoverTrigger
        content={content}
        renderHiddenContent={true}
        disabled={props.disabled}
        block={props.block}
        respondsToClick={props.respondsToClick}
        respondsToHover={true}
        respondsToFocus={true}
        receiveFocus={false}
        popoverProps={{
          hasPointer: true,
          placement: props.placement,
          alignment: props.alignment,
          coloring: props.coloring,
          padding: props.padding,
          hideWhenAnchorIsOffscreen: true,
          passthroughProps: popoverPassthroughProps
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
   * `'light'`, `'dark'`, `'warning'`, or `'error'`.
   */
  coloring: PropTypes.oneOf(['light', 'dark', 'warning', 'error']),
  /**
   * `'xs'` (extra small), `'s'` (small), or `'none'` (no size class).
   */
  textSize: PropTypes.oneOf(['xs', 's', 'none']),
  /**
   * `'small'`, `'medium'`, or `'none'` (no `wmax*` class).
   */
  maxWidth: PropTypes.oneOf(['small', 'medium', 'none']),
  /**
   * `'small'` or `'none'`.
   */
  padding: PropTypes.oneOf(['small', 'none']),
  /**
   * If `true`, tooltip can be opened with a mouse click.
   */
  respondsToClick: PropTypes.bool,
  /**
   * If `true`, the element will be `block` displayed instead of `inline-block`.
   *
   * This is sometimes necessary to get your pixel-perfect layout, if you don't
   * want the extra line-height that wraps inline elements. Typically, you
   * should only set `block` to `true` if the parent element is controlling
   * width (in a layout that uses flexbox, absolute positioning, or floats).
   */
  block: PropTypes.bool,
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
  padding: 'small',
  block: false,
  textSize: 's',
  maxWidth: 'medium'
};
