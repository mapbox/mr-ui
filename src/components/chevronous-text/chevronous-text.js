import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

export default class ChevronousText extends React.PureComponent {
  static propTypes = {
    /** The text that should be aligned next to the chevron. */
    text: PropTypes.string.isRequired,
    /** Additional classes to apply to the icon element */
    themeIcon: PropTypes.string
  };

  render() {
    const splitText = this.props.text.split(' ');
    const lastWord = splitText.pop();
    const textWithoutLastWord = splitText.join(' ');

    return (
      <span>
        {textWithoutLastWord}{' '}
        <span className="txt-nowrap">
          {lastWord}
          <Icon
            name="chevron-right"
            inline={true}
            themeIcon={this.props.themeIcon}
          />
        </span>
      </span>
    );
  }
}
