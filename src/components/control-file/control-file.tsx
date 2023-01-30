import React, { ReactElement, ReactNode, useRef } from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import ControlWrapper from '../control-wrapper';
import IconText from '../icon-text';
import { InputProps } from '../typings';

interface Props extends Omit<InputProps, 'value' | 'onChange'> {
  id: string;
  onChange: (files: '' | Array<string>, id: string) => void;
  value?: '' | [{ name: string }];
  optional?: boolean;
  disabled?: boolean;
  validationError?: ReactElement | string;
  displayValue?: ReactNode;
  themeControlFile?: string;
  themeControlWrapper?: string;
}

const propNames = [
  'id',
  'onChange',
  'value',
  'optional',
  'disabled',
  'validationError',
  'displayValue',
  'themeControlFile',
  'themeControlWrapper',
  // Passed when used with the Form component
  'validator'
];

export default function ControlFile({
  id,
  optional = false,
  disabled = false,
  validationError,
  displayValue = 'Select a file',
  themeControlFile = 'btn',
  themeControlWrapper,
  ...props
}: Props): ReactElement {
  const extraProps = omit(props, propNames);
  const file = useRef(null);

  const onChange = e => {
    const fileList = e.target.files;

    if (!fileList.length) return;
    const filesArray = [];
    for (let i = 0, l = fileList.length; i < l; i++) {
      filesArray.push(fileList[i]);
    }
    return props.onChange(filesArray, id);
  };

  const onButtonClick = () => {
    if (!disabled) {
      file.current.click();
    }
  };

  const inputProps = {
    id,
    name: id,
    onChange,
    type: 'file',
    disabled,
    tabIndex: -1,
    ref: file,
    className: 'absolute opacity0 top left',
    style: { height: '0', width: '0', zIndex: -1 },
    'aria-required': optional ? false : true,
    'data-testid': `${id}-input`
  };

  if (validationError) {
    inputProps['aria-invalid'] = true;
  }

  return (
    <ControlWrapper
      id={id}
      themeControlWrapper={themeControlWrapper}
      validationError={validationError}
    >
      <div className="flex flex--center-cross overflow-hidden">
        <div className="flex-child-grow">
          <button
            type="button"
            aria-hidden={true}
            disabled={disabled}
            className={`${themeControlFile} relative`}
            onClick={onButtonClick}
          >
            <IconText iconBefore="harddrive">
              {displayValue}
            </IconText>
          </button>
          <input {...inputProps} {...extraProps} />
        </div>
      </div>
    </ControlWrapper>
  );
}

ControlFile.propTypes = {
  /** Identifying value for input element. */
  id: PropTypes.string.isRequired,
  /** Called during changes to the input element. Invoked with the array of
   selected files and the id of the input. */
  onChange: PropTypes.func.isRequired,
  /** Input value */
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ),
    PropTypes.oneOf([''])
  ]),
  /** If provided the text, "(optional)" is appended to the value of the label element. */
  optional: PropTypes.bool,
  /** Pass disabled attribute */
  disabled: PropTypes.bool,
  /** If provided, the value of this propery displays as an error message. */
  validationError: PropTypes.node,
  /** Overrides the "Select a file" label. */
  displayValue: PropTypes.node,
  /** Assembly classes to apply to the button trigger element */
  themeControlFile: PropTypes.string,
  /** Assembly classes to apply to the control wrapper */
  themeControlWrapper: PropTypes.string
};
