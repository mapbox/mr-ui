import React from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import Tooltip from '../tooltip';
import Icon from '../icon';
import ControlLabel from '../control-label';
import ControlWrapper from '../control-wrapper';
import IconText from '../icon-text';

const propNames = [
  'value',
  'id',
  'onChange',
  'label',
  'optional',
  'aside',
  'disabled',
  'validationError',
  'initialDisplayValue',
  'themeControlFile',
  'themeControlFileClear',
  'themeControlWrapper',
  'themeLabel',
  // Passed when used with the Form component
  'validator'
];

export default class ControlFile extends React.Component {
  static propTypes = {
    /** Identifying value for input element. */
    id: PropTypes.string.isRequired,
    /** Input value */
    value: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired
        })
      ),
      PropTypes.oneOf([''])
    ]),
    /** Called during changes to the input element. Invoked with the array of
     selected files and the id of the input. */
    onChange: PropTypes.func.isRequired,
    /** Value passed to the label element. */
    label: PropTypes.string,
    /** If provided the text, "(optional)" is appended to the value of the label element. */
    optional: PropTypes.bool,
    /** Additional content inserted alongside the label element. */
    aside: PropTypes.node,
    /** Pass disabled attribute */
    disabled: PropTypes.bool,
    /** If provided, the value of this propery displays as an error message. */
    validationError: PropTypes.node,
    /** Overrides the "Select a file" label. */
    initialDisplayValue: PropTypes.string,
    /** Assembly classes to apply to the button trigger element */
    themeControlFile: PropTypes.string,
    /** Assembly classes to apply to the file clear element */
    themeControlFileClear: PropTypes.string,
    /** Assembly classes to apply to the control wrapper */
    themeControlWrapper: PropTypes.string,
    /** Assembly classes to apply to the input element */
    themeLabel: PropTypes.string
  };

  onChange = (e) => {
    const fileList = e.target.files;
    if (!fileList.length) return;
    const filesArray = [];
    for (let i = 0, l = fileList.length; i < l; i++) {
      filesArray.push(fileList[i]);
    }
    return this.props.onChange(filesArray, this.props.id);
  };

  static defaultProps = {
    initialDisplayValue: 'Select a file',
    optional: false,
    disabled: false,
    themeControlFile:
      'btn align-l bg-gray-faint py6 px12 round-full w-full txt-s link--gray txt-normal',
    themeControlFileClear: ''
  };

  state = {
    displayValue: ''
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const nextDisplayValue = !nextProps.value
      ? ''
      : nextProps.value.map((f) => f.name).join(', ');
    if (nextDisplayValue !== this.state.displayValue) {
      this.setState({ displayValue: nextDisplayValue });
    }
  }

  onButtonClick = () => {
    if (!this.props.disabled) {
      this.refs.file.click();
    }
  };

  onClear = () => {
    this.refs.file.value = '';
    return this.props.onChange('', this.props.id);
  };

  render() {
    const extraProps = omit(this.props, propNames);

    const {
      id,
      label,
      optional,
      aside,
      disabled,
      validationError,
      initialDisplayValue,
      themeControlFile,
      themeControlFileClear,
      themeControlWrapper,
      themeLabel
    } = this.props;

    const inputProps = {
      id,
      name: id,
      onChange: this.onChange,
      type: 'file',
      ref: 'file',
      disabled,
      className: 'absolute opacity0 top left',
      style: { height: '0', width: '0', zIndex: -1 },
      'aria-required': optional ? false : true,
      'data-test': `${id}-input`,
      tabIndex: -1
    };

    if (validationError) {
      inputProps['aria-invalid'] = true;
    }

    return (
      <ControlWrapper
        themeControlWrapper={themeControlWrapper}
        id={id}
        validationError={validationError}
      >
        {label && (
          <ControlLabel
            text={label}
            id={id}
            aside={aside}
            optional={optional}
            themeLabel={themeLabel}
          />
        )}
        <div className="flex flex--center-cross overflow-hidden">
          <div className="flex-child-grow">
            <button
              type="button"
              aria-hidden={true}
              disabled={disabled}
              className={`${themeControlFile} relative`}
              onClick={this.onButtonClick}
            >
              <span className="txt-truncate">
                <IconText iconBefore="harddrive">
                  {this.state.displayValue || initialDisplayValue}
                </IconText>
              </span>
            </button>
            <input {...inputProps} {...extraProps} />
          </div>
          {this.state.displayValue && (
            <Tooltip content="Clear" block={true}>
              <button
                aria-label="Clear"
                type="button"
                className={`ml6 block link link--gray relative bg-transparent py0 ${themeControlFileClear}`}
                onClick={this.onClear}
                data-test="control-file-clear"
              >
                <Icon name="trash" />
              </button>
            </Tooltip>
          )}
        </div>
      </ControlWrapper>
    );
  }
}
