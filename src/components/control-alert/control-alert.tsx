import classnames from 'classnames';
import React, { useEffect, useRef, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Tooltip from '../tooltip';

interface Props {
  theme: 'error' | 'locked' | 'success' | 'warning';
  children: ReactNode;
  autoFocus?: boolean;
  onButtonClick?: () => void;
}

export default function ControlAlert({
  theme,
  children,
  autoFocus = false,
  onButtonClick
}: Props): ReactElement {
  const container = useRef(null);

  useEffect(() => {
    if (autoFocus && container.current) {
      container.current.focus();
    }
  }, [autoFocus]);

  const renderDismissButton = () => (
    <Tooltip content="Dismiss">
      <button
        aria-label="Dismiss"
        className="bg-transparent color-gray-dark color-blue-on-hover px0 py0"
        data-testid="alert-dismiss"
        onClick={onButtonClick}
      >
        <Icon name="close" inline={true} size="1.3em" />
      </button>
    </Tooltip>
  );

  const containerClasses = classnames('round px24 py24 flex', {
    'bg-green-faint': theme === 'success',
    'bg-red-faint': theme === 'error',
    'bg-yellow-faint': theme === 'warning' || theme === 'locked'
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
        ref={container}
        role={autoFocus ? 'alert' : null}
        tabIndex={autoFocus ? -1 : null}
      >
        {children}
      </div>
      {onButtonClick && renderDismissButton()}
    </div>
  );
}

ControlAlert.propTypes = {
  /**
   * The alert `theme` options are "error", "locked", "success", and
   * "warning".
   */
  theme: PropTypes.oneOf(['error', 'locked', 'success', 'warning']).isRequired,
  /** The content of the alert. */
  children: PropTypes.node.isRequired,
  /** Whether to use ARIA alert role for screen readers or not. */
  autoFocus: PropTypes.bool,
  /**
   * Called on click of dismiss button. Must have this callback to display
   * the button.
   */
  onButtonClick: PropTypes.func
}
