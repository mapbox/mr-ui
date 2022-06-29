import React from 'react';
import PropTypes from 'prop-types';

export default class ControlLabel extends React.PureComponent {
  static propTypes = {
    /** Label text */
    text: PropTypes.string.isRequired,
    /** Value should match the identifying id of the input element. */
    id: PropTypes.string.isRequired,
    /** Additional content to provide aligned to the right of the label. */
    aside: PropTypes.node,
    /** If true, label text adds (optional) alongside it. */
    optional: PropTypes.bool,
    /** A space separated list of Assembly class names to override the existing presentation. */
    themeLabel: PropTypes.string
  };

  static defaultProps = {
    themeLabel: 'txt-s txt-bold mb6'
  };

  render() {
    const { text, id, aside, optional, themeLabel } = this.props;
    const labelClasses = `inline-block ${themeLabel}`;

    return (
      <div>
        <label htmlFor={id} className={labelClasses}>
          {text} {optional && <span className="txt-normal">(optional)</span>}
        </label>
        {aside && <span className="inline-block ml12">{aside}</span>}
      </div>
    );
  }
}
