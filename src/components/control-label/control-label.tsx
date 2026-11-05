import React, { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';

export interface ControlLabelProps {
  id: string;
  text: string | ReactNode;
  aside?: ReactNode;
  optional?: boolean;
  themeLabel?: string;
}

export default function ControlLabel({
  id,
  text,
  aside,
  optional,
  themeLabel = 'txt-s txt-bold mb6'
}: ControlLabelProps): ReactElement {
  return (
    <div>
      <label htmlFor={id} className={`inline-block ${themeLabel}`}>
        {text} {optional && <span className="txt-normal">(optional)</span>}
      </label>
      {aside && <span className="inline-block ml12">{aside}</span>}
    </div>
  );
}

ControlLabel.propTypes = {
  /** Value should match the identifying id of the input element. */
  id: PropTypes.string.isRequired,
  /** Label text. Label can be string or ReactNode. */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Additional content to provide aligned to the right of the label. */
  aside: PropTypes.node,
  /** If true, label text adds (optional) alongside it. */
  optional: PropTypes.bool,
  /** A space separated list of Assembly class names to override the existing presentation. */
  themeLabel: PropTypes.string
};
