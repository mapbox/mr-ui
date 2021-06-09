import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Tooltip from '../tooltip';

export default class ControlAlert extends React.Component {
  static propTypes = {
    /** Whether to use ARIA alert role for screen readers or not. */
    autoFocus: PropTypes.bool,
    /** The content of the alert. */
    children: PropTypes.node.isRequired,
    /**
     * Called on click of dismiss button. Must have this callback to display
     * the button.
     */
    onButtonClick: PropTypes.func,
    /**
     * The alert `theme` options are "error", "locked", "success", and
     * "warning".
     */
    theme: PropTypes.oneOf(['error', 'locked', 'success', 'warning']).isRequired
  };

  static defaultProps = {
    autoFocus: false
  };

  componentDidMount() {
    const { autoFocus } = this.props;

    if (autoFocus && this.contentRef) {
      this.contentRef.focus();
    }
  }

  handleContentRef = (ref) => {
    this.contentRef = ref;
  };

  onButtonClick = () => {
    const { onButtonClick } = this.props;

    if (onButtonClick) {
      onButtonClick();
    }
  };

  renderDismissButton() {
    const { onButtonClick } = this.props;

    if (!onButtonClick) return null;

    return (
      <Tooltip content="Dismiss" block={true}>
        <button
          aria-label="Dismiss"
          className="bg-transparent color-gray-dark color-blue-on-hover px0 py0"
          data-test="alert-dismiss"
          onClick={this.onButtonClick}
        >
          <Icon name="close" inline={true} size="1.3em" />
        </button>
      </Tooltip>
    );
  }

  render() {
    const { autoFocus, children, theme } = this.props;
    const containerClasses = classnames('round px24 py24 flex', {
      'bg-green-light': theme === 'success',
      'bg-red-faint': theme === 'error',
      'bg-yellow-light': theme === 'warning' || theme === 'locked'
    });

    let iconName = 'alert';
    if (theme === 'success') {
      iconName = 'check';
    } else if (theme === 'locked') {
      iconName = 'lock';
    }

    return (
      <div className={containerClasses}>
        <div className="flex-child-no-shrink">
          <Icon name={iconName} inline={true} size="1.3em" />
        </div>
        <div
          className="flex-child-grow"
          ref={this.handleContentRef}
          role={autoFocus ? 'alert' : null}
          tabIndex={autoFocus ? -1 : null}
        >
          {children}
        </div>
        {this.renderDismissButton()}
      </div>
    );
  }
}
