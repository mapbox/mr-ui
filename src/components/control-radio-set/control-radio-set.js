import React from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import ControlLegend from '../control-legend';
import ControlWrapper from '../control-wrapper';

export default class ControlRadioSet extends React.Component {
  static propTypes = {
    /** Unique id for this control. Required if you want a `label`. */
    id: PropTypes.string.isRequired,
    /**
     * An array of objects that represent each option of the set.
     * Each object should contain two fields:
     *
     * - `label` which can either be a string or valid JSX
     * - `value` a unique string value
     *
     * Any additional fields added will be passed as attributes to the input
     * element.
     */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired,
    /**
     * Invoked when the control's value changes.
     * Passed two arguments:
     *
     * - The value. A string matching the `value` field of one of the `options`
     *   props passed.
     * - The `id` prop.
     */
    onChange: PropTypes.func.isRequired,
    /** Legend label for the control. */
    legend: PropTypes.string,
    /** The control's value. Can be an empty string to indicate no value. */
    value: PropTypes.string,
    /** If provided, "(optional)" is appended to the value of the legend element. */
    optional: PropTypes.bool,
    /** Additional content inserted alongside the legend element. */
    aside: PropTypes.node,
    /** When set, auto focus attributes are applied to the input that matches the `value` prop passed. */
    autoFocus: PropTypes.bool,
    /** A validation error to display beneath the control. */
    validationError: PropTypes.node,
    /** Classes to apply to the radio container */
    themeRadioContainer: PropTypes.string,
    /** Classes to apply to the radio element */
    themeRadio: PropTypes.string,
    /** Classes to apply to the control wrapper */
    themeControlWrapper: PropTypes.string,
    /** Classes to apply to the legend element */
    themeLegend: PropTypes.string
  };

  onChange = (e) => {
    return this.props.onChange(e.target.value, this.props.id);
  };

  static defaultProps = {
    value: '',
    optional: false,
    autoFocus: false,
    themeRadioContainer: 'txt-s block mb6 flex',
    themeRadio: 'mr6 radio--blue radio--s-label inline-block '
  };

  render() {
    const {
      id,
      value,
      legend,
      options,
      optional,
      aside,
      autoFocus,
      validationError,
      themeRadioContainer,
      themeRadio,
      themeControlWrapper,
      themeLegend
    } = this.props;

    const groupProps = {
      id,
      role: 'radiogroup',
      'aria-required': optional ? false : true,
      'data-test': `${id}-input`
    };

    if (validationError) {
      groupProps['aria-invalid'] = true;
    }

    const renderOptions = (d) => {
      const extraProps = omit(d, ['value', 'label']);
      return (
        <label
          key={d.value}
          className={`radio-container ${themeRadioContainer}`}
        >
          <input
            value={d.value}
            checked={d.value === value}
            autoFocus={autoFocus && d.value === value}
            onChange={this.onChange}
            name={id}
            type="radio"
            {...extraProps}
          />
          <div className={`${themeRadio} radio`} />
          {d.label}
        </label>
      );
    };

    return (
      <ControlWrapper
        themeControlWrapper={themeControlWrapper}
        id={id}
        validationError={validationError}
      >
        <fieldset>
          {legend && (
            <ControlLegend
              text={legend}
              id={id}
              aside={aside}
              optional={optional}
              themeLegend={themeLegend}
            />
          )}
          <div {...groupProps}>{options.map(renderOptions)}</div>
        </fieldset>
      </ControlWrapper>
    );
  }
}
