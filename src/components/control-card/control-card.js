import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../heading';
import Icon from '../icon';
import Tooltip from '../tooltip';

export default class ControlCard extends React.Component {
  static propTypes = {
    /**
     * The type of update to the card. Options are "close" and "collapse".
     * Must have `onButtonClick` prop to enable action and button.
     */
    buttonType: PropTypes.oneOf(['close', 'collapse']),
    /** The content of the card. */
    children: PropTypes.node.isRequired,
    /**
     * Called on click of update button. Must have `buttonType` prop to enable
     * this action and button.
     */
    onButtonClick: PropTypes.func,
    /** Card title heading. */
    title: PropTypes.string,
    /**
     * The card title heading variant. Options are "primary", "secondary",
     * "tertiary", and "minor".
     */
    titleSize: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'minor'])
  };

  static defaultProps = {
    buttonType: 'close',
    titleSize: 'tertiary'
  };

  onButtonClick = () => {
    const { onButtonClick } = this.props;
    if (onButtonClick) {
      onButtonClick();
    }
  };

  renderTitle() {
    const { title, titleSize } = this.props;

    if (!title) return null;

    return (
      <div className="mb24">
        <Heading variant={titleSize}>{title}</Heading>
      </div>
    );
  }

  renderUpdateButton() {
    const { onButtonClick, buttonType } = this.props;

    if (!onButtonClick || !buttonType) return null;

    let toolTipMessage = 'Close';
    let updateIcon = 'close';
    if (buttonType === 'collapse') {
      toolTipMessage = 'Collapse';
      updateIcon = 'caret-up';
    }

    return (
      <div className="absolute top right mt18 mr18">
        <Tooltip content={toolTipMessage} block={true}>
          <button
            aria-label={toolTipMessage}
            type="button"
            className="bg-transparent color-gray-dark color-blue-on-hover px0 py0"
            onClick={onButtonClick}
          >
            <Icon name={updateIcon} />
          </button>
        </Tooltip>
      </div>
    );
  }

  render() {
    const { children } = this.props;

    return (
      <section className="bg-white round-bold shadow-darken10-bold relative py36 py60-ml px18 px36-mm px60-ml">
        {this.renderTitle()}
        {this.renderUpdateButton()}
        {children}
      </section>
    );
  }
}
