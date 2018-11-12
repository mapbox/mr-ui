import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

export default class ChevronousText extends React.PureComponent {
  static propTypes = {
    /** When true, the text will follow after a left pointed chevron. */
    iconBefore: PropTypes.bool,
    /**
     * The width and height size of the chevron icon. Note that this icon is
     * inline and the height won't go beyond the line-height.
     */
    iconSize: PropTypes.number,
    /** The text that should be aligned next to the chevron. */
    text: PropTypes.string.isRequired
  };

  static defaultProps = {
    iconBefore: false,
    iconSize: 18
  };

  render() {
    const { iconBefore, iconSize, text } = this.props;
    const splitText = text.split(' ');
    const iconWord = iconBefore ? splitText.shift() : splitText.pop();
    const textWithoutIconWord = splitText.join(' ');

    if (iconBefore) {
      return (
        <span className="inline-block">
          <span className="txt-nowrap">
            <Icon name="chevron-left" inline={true} size={iconSize} />
            {iconWord}
          </span>{' '}
          {textWithoutIconWord}
        </span>
      );
    }

    return (
      <span className="inline-block">
        {textWithoutIconWord}{' '}
        <span className="txt-nowrap">
          {iconWord}
          <Icon name="chevron-right" inline={true} size={iconSize} />
        </span>
      </span>
    );
  }
}
