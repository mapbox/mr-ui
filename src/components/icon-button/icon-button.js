import React from 'react';
import PropTypes from 'prop-types';
import xtend from 'xtend';
import Tooltip from '../tooltip';
import Icon from '../icon';
import omit from '../utils/omit';

export default class IconButton extends React.PureComponent {
  // If you change propTypes, also change propNames.
  static propTypes = {
    /** Callback when button is clicked. */
    onClick: PropTypes.func.isRequired,
    /** Name of the icon to use. */
    icon: PropTypes.string.isRequired,
    /** Extra props to pass to the Tooltip component. tooltipProps.content is required. */
    tooltipProps: PropTypes.object,
    /** Assembly classes to apply to the button element */
    themeButton: PropTypes.string,
    /** Assembly classes to apply to the icon element */
    themeIcon: PropTypes.string
  };

  static propNames = [
    'onClick',
    'icon',
    'tooltipProps',
    'themeButton',
    'themeIcon'
  ];

  static defaultProps = {
    themeButton: 'btn--xs px0'
  };

  getBody = (triggerProps: Object) => {
    const themeButton = `btn ${this.props.themeButton}`;
    const extraProps = omit(this.props, IconButton.propNames);
    const buttonProps = xtend(extraProps, triggerProps, {
      type: 'button',
      className: themeButton,
      onClick: this.props.onClick
    });
    const iconProps = {
      name: this.props.icon
    };
    if (this.props.themeIcon !== undefined) {
      iconProps.themeIcon = this.props.themeIcon;
    }

    return (
      <button {...buttonProps}>
        <Icon {...iconProps} />
      </button>
    );
  };

  render() {
    return <Tooltip {...this.props.tooltipProps}>{this.getBody}</Tooltip>;
  }
}
