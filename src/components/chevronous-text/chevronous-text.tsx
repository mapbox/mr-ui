import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

interface Props {
  text: string;
  iconBefore?: boolean;
  iconSize?: number | string;
}

export default function ChevronousText({
  text,
  iconBefore = false,
  iconSize = '1.5em'
}: Props): ReactElement {

  const splitText = text.split(' ');
  const iconWord = iconBefore ? splitText.shift() : splitText.pop();
  const textWithoutIconWord = splitText.join(' ');

  if (iconBefore) {
    return (
      <span>
        <span className="txt-nowrap">
          <Icon name="chevron-left" inline={true} size={iconSize} />
          {iconWord}
        </span>{' '}
        {textWithoutIconWord}
      </span>
    );
  }

  return (
    <span>
      {textWithoutIconWord}{' '}
      <span className="txt-nowrap">
        {iconWord}
        <Icon name="chevron-right" inline={true} size={iconSize} />
      </span>
    </span>
  );
}

ChevronousText.propTypes = {
  /** The text that should be aligned next to the chevron. */
  text: PropTypes.string.isRequired,
  /** When true, the text will follow after a left pointed chevron. */
  iconBefore: PropTypes.bool,
  /**
   * The width and height size of the chevron icon. Note that this icon is
   * inline and the height won't go beyond the line-height. This can be a
   * number which will fall back to px, or a string in the units of
   * px, em, %, or pt.
   */
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
