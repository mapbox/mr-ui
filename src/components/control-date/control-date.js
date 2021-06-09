import React from 'react';
import PropTypes from 'prop-types';
import ControlLabel from '../control-label';
import ControlWrapper from '../control-wrapper';
import DatePicker from 'react-datepicker';
import getWindow from '../utils/get-window';
import datePickerStyle from './date-picker-style';

// Theme cache, used to prevent the creation of multiple <style> elements with the same content.
const injectedStyles = [];

export default class ControlDate extends React.Component {
  static propTypes = {
    /** Your version of Moment.js. What you get when you `import moment from 'moment'`. */
    moment: PropTypes.func.isRequired,
    /** Unique id for this control. Required if you want a `label`. */
    id: PropTypes.string,
    /**
     * The control's value. Can be an empty string to indicate no value.
     * Otherwise, should be an object with a required `date` property and
     * optional `endDate`. If `endDate` is provided, `date` serves as the
     * start date for the range.
     */
    value: PropTypes.oneOfType([
      PropTypes.shape({
        date: PropTypes.instanceOf(Date).isRequired,
        endDate: PropTypes.instanceOf(Date)
      }),
      PropTypes.oneOf([''])
    ]),
    /**
     * If `true`, there will be one input for the start of a date range
     * and one input for the end of a date range. If `false`, there will only
     * be one input for a single date.
     */
    dateRange: PropTypes.bool,
    /** Date furthest in the future you can select. */
    maxDate: PropTypes.instanceOf(Date),
    /** Date furthest in the past you can select. */
    minDate: PropTypes.instanceOf(Date),
    /** If `true`, the control cannot be interacted with. */
    disabled: PropTypes.bool,
    /**
     * Placeholder for the inputs.
     * If `dateRange` is true, this placeholder applies to both
     * inputs unless you provide an `endDatePlaceholder`.
     */
    placeholder: PropTypes.string,
    /**
     * Placeholder for the end date input, if `dateRange` is true.
     * If nothing is provided, the end date input will show the `placeholder`.
     */
    endDatePlaceholder: PropTypes.string,
    /**
     * [Moment.js format](http://momentjs.com/docs/#/displaying/format/)
     * the inputs will display and accept (e.g. `'YYYY MM DD'`).
     */
    format: PropTypes.string,
    /** Force a certain UTC offset, useful mostly for stabilizing tests. */
    utcOffset: PropTypes.number,
    /** Label for the control. */
    label: PropTypes.string,
    /** Additional content inserted alongside the label element. */
    aside: PropTypes.node,
    /** Classes to apply to the label element. */
    themeLabel: PropTypes.string,
    /**
     * Invoked when the control's value changes.
     * Passed two arguments:
     *
     * - The date value. An object with a `date` and, if the control allows
     *   a date range, an `endDate`.
     * - The `id` prop.
     */
    onChange: PropTypes.func.isRequired,
    /** Classes to apply to the control wrapper. */
    themeWrapper: PropTypes.string,
    /** Classes to apply to the datepicker's calendar. */
    themeCalendar: PropTypes.string,
    /** Classes to apply to the input elements. */
    themeTextInput: PropTypes.string,
    /** A validation error to display beneath the control. */
    validationError: PropTypes.node
  };

  static defaultProps = {
    dateRange: false,
    placeholder: 'M/D/YYYY',
    endDatePlaceholder: 'M/D/YYYY',
    format: 'M/D/YYYY',
    themeWrapper:
      'react-control-date react-control-date--disable-keyboard inline-flex flex--center-cross flex--wrap',
    themeCalendar: 'shadow-darken10 border--0 none block-mm',
    themeTextInput: 'input w180 none block-mm'
  };

  constructor(props) {
    super(props);
    const value = props.value;
    this.moment = props.moment;
    this.state = {
      momentDate: value && value.date ? this.moment(value.date) : null,
      momentEndDate: value && value.endDate ? this.moment(value.endDate) : null
    };
  }

  componentDidMount() {
    // Do not load themes that have already been injected.
    if (injectedStyles.indexOf(datePickerStyle) !== -1) {
      return;
    }
    injectedStyles.push(datePickerStyle);
    const doc = getWindow().document;
    this.styleTag = doc.createElement('style');
    this.styleTag.innerHTML = datePickerStyle;
    doc.head.appendChild(this.styleTag);
  }

  getDateData = () => {
    return this.state.momentEndDate
      ? {
          date: this.state.momentDate ? this.state.momentDate.toDate() : null,
          endDate: this.state.momentEndDate
            ? this.state.momentEndDate.toDate()
            : null
        }
      : {
          date: this.state.momentDate ? this.state.momentDate.toDate() : null
        };
  };

  handleChange = (date, changedDateKey) => {
    // date: moment
    const { minDate, maxDate, moment } = this.props;
    if (date === null) return;
    if (minDate && date.isBefore(moment(minDate))) return;
    if (maxDate && date.isAfter(moment(maxDate))) return;
    this.setState({ [changedDateKey]: date }, () => {
      this.props.onChange(this.getDateData(), this.props.id);
    });
  };
  changeStartDate = (date) => this.handleChange(date, 'momentDate');
  changeEndDate = (date) => this.handleChange(date, 'momentEndDate');
  nativeChangeDate = (e) =>
    this.handleChange(this.moment(e.target.value, 'YYYY-MM-DD'), 'momentDate');
  nativeChangeEndDate = (e) =>
    this.handleChange(
      this.moment(e.target.value, 'YYYY-MM-DD'),
      'momentEndDate'
    );

  handleChangeRaw = (value, changedDateKey) => {
    // clears set date
    const momentifiedDate = this.moment(value, this.props.format, true);
    if (!momentifiedDate.isValid()) {
      this.setState({ [changedDateKey]: null }, () => {
        this.props.onChange(this.getDateData(), this.props.id);
      });
    }
  };
  onChangeRawStartDate = (e) =>
    this.handleChangeRaw(e.target.value, 'momentDate');
  onChangeRawEndDate = (e) =>
    this.handleChangeRaw(e.target.value, 'momentEndDate');

  render() {
    const {
      dateRange,
      maxDate,
      minDate,
      id,
      disabled,
      format,
      utcOffset,
      label,
      aside,
      placeholder,
      endDatePlaceholder,
      themeLabel,
      themeWrapper,
      themeCalendar,
      themeTextInput,
      validationError
    } = this.props;
    const sharedDatePickerProps = {
      className: themeTextInput,
      startDate: this.state.momentDate,
      endDate: this.state.momentEndDate,
      minDate: minDate ? this.props.moment(minDate) : undefined,
      maxDate: maxDate ? this.props.moment(maxDate) : undefined,
      calendarClassName: themeCalendar,
      dateFormat: format,
      disabledKeyboardNavigation: true,
      popperModifiers: {
        preventOverflow: {
          enabled: true,
          escapeWithReference: true,
          boundariesElement: 'viewport'
        }
      },
      utcOffset,
      disabled
    };
    const sharedNativeDateProps = {
      className: 'input input-s w180 block none-mm',
      pattern: '[0-9]{4}-[0-9]{2}-[0-9]{2}',
      type: 'date',
      min: minDate
        ? this.props.moment(minDate).format('YYYY-MM-DD')
        : undefined,
      max: maxDate
        ? this.props.moment(maxDate).format('YYYY-MM-DD')
        : undefined,
      disabled
    };

    const controlLabel = label && (
      <ControlLabel
        text={label}
        id={id}
        aside={aside}
        themeLabel={themeLabel}
      />
    );
    const basePicker = (
      <div className="flex">
        <DatePicker
          {...sharedDatePickerProps}
          selected={this.state.momentDate}
          onChange={this.changeStartDate}
          onChangeRaw={this.onChangeRawStartDate}
          placeholderText={placeholder}
          id={id}
        />
        <input
          {...sharedNativeDateProps}
          value={
            this.state.momentDate
              ? this.state.momentDate.format('YYYY-MM-DD')
              : ''
          }
          placeholder={placeholder}
          onChange={this.nativeChangeDate}
        />
      </div>
    );
    const endDatePicker =
      this.state.momentEndDate || dateRange ? (
        <div className="flex">
          <DatePicker
            {...sharedDatePickerProps}
            selected={this.state.momentEndDate}
            onChange={this.changeEndDate}
            onChangeRaw={this.onChangeRawEndDate}
            placeholderText={endDatePlaceholder}
          />
          <input
            {...sharedNativeDateProps}
            value={
              this.state.momentEndDate
                ? this.state.momentEndDate.format('YYYY-MM-DD')
                : ''
            }
            placeholder={endDatePlaceholder}
            onChange={this.nativeChangeEndDate}
          />
        </div>
      ) : null;
    const doubleButtonDivider =
      this.state.momentEndDate || dateRange ? (
        <span className="px12">to</span>
      ) : null;

    return (
      <ControlWrapper id={id} validationError={validationError}>
        <div>
          {controlLabel}
          <div className={themeWrapper}>
            {basePicker}
            {doubleButtonDivider}
            {endDatePicker}
          </div>
        </div>
      </ControlWrapper>
    );
  }
}
