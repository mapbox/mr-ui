import React from 'react';
import PropTypes from 'prop-types';

export default class ControlLegend extends React.PureComponent {
  static propTypes = {
    /** Label text for this control. */
    text: PropTypes.string.isRequired,
    /** Element id used to group additional form controls. */
    id: PropTypes.string.isRequired,
    /** Additional content inserted alongside the label element. */
    aside: PropTypes.node,
    /** If `true`, the text `(optional)` is appended to the label element. */
    optional: PropTypes.bool,
    /** Classes to apply to the legend element. */
    themeLegend: PropTypes.string
  };

  static defaultProps = {
    themeLegend: 'txt-s txt-bold mb6'
  };

  render() {
    const { text, id, aside, optional, themeLegend } = this.props;
    const legendClasses = `inline-block ${themeLegend}`;

    return (
      <div>
        <legend htmlFor={id} className={legendClasses}>
          {text} {optional && <span className="txt-normal">(optional)</span>}
        </legend>
        {aside && <span className="inline-block ml12">{aside}</span>}
      </div>
    );
  }
}
