import React from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import ControlLegend from '../control-legend';
import ControlWrapper from '../control-wrapper';

export default class ControlToggleSet extends React.Component {
  static propTypes = {
    /** Identifying value for input element. */
    id: PropTypes.string.isRequired,
    /** Function that's called when text changes in the input element. Argument that's returned the id prop and value entered. */
    onChange: PropTypes.func.isRequired,
    /** An array of objects containing `label` `value` key value pairings to represent each option. Any additional keys are passed as props to the input. */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired,
    /** Legend name */
    legend: PropTypes.string,
    /** input value */
    value: PropTypes.string,
    /** If provided, "(optional)" is appended to the value of the legend element. */
    optional: PropTypes.bool,
    /** Additional content inserted alongside the legend element. */
    aside: PropTypes.node,
    /** Add auto focus attributes. */
    autoFocus: PropTypes.bool,
    /** If provided, the value of this propery displays as an error message. */
    validationError: PropTypes.node,
    /** Assembly classes to apply to the toggle group */
    themeToggleGroup: PropTypes.string,
    /** Assembly classes to apply to the toggle container */
    themeToggleContainer: PropTypes.string,
    /** Assembly classes to apply to the toggle element */
    themeToggle: PropTypes.string,
    /** Assembly classes to apply to the control wrapper */
    themeControlWrapper: PropTypes.string,
    /** Assembly classes to apply to the legend element */
    themeLegend: PropTypes.string
  };

  onChange = (e) => {
    return this.props.onChange(e.target.value, this.props.id);
  };

  static defaultProps = {
    value: '',
    optional: false,
    autoFocus: false,
    themeToggleGroup: 'border border--2 border--blue bg-blue',
    themeToggleContainer: '',
    themeToggle: 'txt-s py3 toggle--white toggle--active-blue'
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
      themeToggleGroup,
      themeToggleContainer,
      themeToggle,
      themeControlWrapper,
      themeLegend
    } = this.props;

    const groupProps = {
      id,
      className: `toggle-group round-full ${themeToggleGroup}`,
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
          className={`toggle-container ${themeToggleContainer}`}
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
          <div className={`${themeToggle} toggle`}>{d.label}</div>
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
