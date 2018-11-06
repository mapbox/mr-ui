import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

const ChevronAfterText = ({ text }) => {
  const splitText = text.split(' ');
  const lastWord = splitText.pop();
  const textWithoutLastWord = splitText.join(' ');

  return (
    <span>
      {textWithoutLastWord}{' '}
      <span className="txt-nowrap">
        {lastWord}
        <Icon name="chevron-right" inline={true} />
      </span>
    </span>
  );
};

ChevronAfterText.propTypes = {
  text: PropTypes.string.isRequired
};

const ChevronBeforeText = ({ text }) => {
  const splitText = text.split(' ');
  const firstWord = splitText.shift();
  const textWithoutFirstWord = splitText.join(' ');

  return (
    <span>
      <span className="txt-nowrap">
        <Icon name="chevron-left" inline={true} />
        {firstWord}
      </span>{' '}
      {textWithoutFirstWord}
    </span>
  );
};

ChevronBeforeText.propTypes = {
  text: PropTypes.string.isRequired
};

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

    return iconBefore ? (
      <ChevronBeforeText text={text} />
    ) : (
      <ChevronAfterText text={text} />
    );
  }
}
