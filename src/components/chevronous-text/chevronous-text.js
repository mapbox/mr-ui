import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

export default class ChevronousText extends React.PureComponent {
  static propTypes = {
    /** When true, the text will follow after a left pointed chevron. */
    iconBefore: PropTypes.bool,
    /** The text that should be aligned next to the chevron. */
    text: PropTypes.string.isRequired
  };

  static defaultProps = {
    iconBefore: false
  };

  render() {
    const { iconBefore, text } = this.props;
    const splitText = text.split(' ');
    const iconWord = iconBefore ? splitText.shift() : splitText.pop();
    const textWithoutIconWord = splitText.join(' ');

    return iconBefore ? (
      <span className="inline-block">
        <span className="txt-nowrap">
          <Icon name="chevron-left" inline={true} />
          {iconWord}
        </span>{' '}
        {textWithoutIconWord}
      </span>
    ) : (
      <span className="inline-block">
        {textWithoutIconWord}{' '}
        <span className="txt-nowrap">
          {iconWord}
          <Icon name="chevron-right" inline={true} />
        </span>
      </span>
    );
  }
}
