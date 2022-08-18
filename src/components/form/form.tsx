import React, { ReactElement, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import shallowEqualObjects from 'shallow-equal/objects';
import Submittable from 'react-submittable';
import LoaderFull from '../loader-full';
import LoaderLocal from '../loader-local';
import usePrevious from '../utils/use_previous';
import { InputType } from 'zlib';

type GetControlProps = (id: string) => void;
type Values = { [id: string]: string };
type Validator = (value: any) => string;

type Config = {
  [key: string]: {
    label?: string,
    type?: InputType,
    placeholder?: string,
    multiple?: boolean,
    optional?: boolean,
    min?: number,
    max?: number,
    step?: number,
    options?: Array<{ label: string, value: string }>,
    initialValue?: any,
    validator?: Array<Validator> | Validator
  }
}

interface Props {
  config: Config;
  renderForm: (getControlProps: GetControlProps, onSubmit) => ReactElement;
  handleFormData: (controlValues: Values) => void;
  onChange?: (data: Values) => void;
  onCancel?: () => void;
}

const formStates = {
  preSubmission: 'PRE_SUBMISSION',
  errorSubmission: 'SUBMITTED_WITH_ERRORS',
  pendingSubmission: 'PENDING',
  completeSubmission: 'COMPLETE'
};

function setControlProperties(config: Config, values?: Values) {
  const controlValues = {};
  const controlValidationErrors = {};

  Object.keys(config).forEach((controlName) => {
    const controlConfig = config[controlName];
    if (values && values[controlName]) {
      controlValues[controlName] = values[controlName];
    } else {
      controlValues[controlName] =
        controlConfig.initialValue !== undefined
          ? controlConfig.initialValue
          : '';
    }

    controlValidationErrors[controlName] = '';
  });

  return {
    controlValues,
    controlValidationErrors
  };
}

function validateControlValue(value, validators, controlValues) {
  if (!validators) return '';

  if (!Array.isArray(validators)) {
    validators = [validators];
  }

  for (let i = 0, l = validators.length; i < l; i++) {
    const errorMessage = validators[i](value, controlValues);
    if (errorMessage) {
      return errorMessage;
    }
  }
  return '';
}

export default function Form({
  config,
  renderForm,
  handleFormData,
  onChange,
  onCancel
}: Props): ReactElement {
  const formState = useRef(formStates.preSubmission);
  const mounted = useRef(false);
  const { 
    controlValues: initControlValues,
    controlValidationErrors: initControlValidationErrors
  } = setControlProperties(config);
  const [controlValidationErrors, setControlValidationErrors] = useState(initControlValidationErrors);
  const [controlValues, setControlValues] = useState(initControlValues);
  const [ready, setReady] = useState(false);
  const prevConfig = usePrevious(config);

  useEffect(() => {
    mounted.current = true;
    setReady(true);

    return () => {
      mounted.current = false;
    }
  }, []);

  useEffect(() => {
    if (!shallowEqualObjects(config, prevConfig)) {
      const {
        controlValues: updatedControlValues,
        controlValidationErrors: updatedControlValidationErrors
      } = setControlProperties(
        config,
        controlValues
      );

      setControlValues(updatedControlValues);
      setControlValidationErrors(updatedControlValidationErrors);
      formState.current = formStates.preSubmission;
    }
  }, [config, prevConfig, controlValues]);

  const checkValidation = async (nextFormState: string) => {
    const validationErrors = { ...controlValidationErrors };

    for (const controlName of Object.keys(controlValues)) {
      const errorMessage = await validateControlValue(
        controlValues[controlName],
        config[controlName].validator,
        controlValues
      );

      if (errorMessage) {
        validationErrors[controlName] = errorMessage;
        nextFormState = formStates.errorSubmission;
      } else {
        validationErrors[controlName] = '';
      }
    }

    setControlValidationErrors(validationErrors);
    formState.current = nextFormState;
  }

  const onControlChange = (controlValue, controlName: string) => {
    const nextControlValues = { ...controlValues };
    nextControlValues[controlName] = controlValue;
    if (formState.current !== formStates.preSubmission) {
      checkValidation(formStates.preSubmission).then(() => {
        setControlValues(nextControlValues);
      });
    } else {
      setControlValues(nextControlValues);
    }

    if (onChange) onChange(nextControlValues);
  };

  const getControlProps = (controlName: string) => {
    const control = config[controlName];

    return {
      ...control,
      id: controlName,
      onChange: onControlChange,
      validationError: controlValidationErrors[controlName],
      value: controlValues[controlName]
    };
  };

  const onSubmit = () => {
    checkValidation(formStates.pendingSubmission).then(() => {
      if (formState.current === formStates.pendingSubmission)
        submitForm();
    });
  };

  const submitForm = () => {
    // Promise.resolve because if handleFormData is a promise,
    // we want to handle loading and error states.
    Promise.resolve(handleFormData(controlValues))
      .then(() => {
        if (!mounted.current) return;
        if (formState.current === formStates.pendingSubmission) {
          formState.current = formStates.completeSubmission;
        }
      })
      .catch((err) => {
        if (!mounted.current) return;
        if (formState.current === formStates.pendingSubmission) {
          formState.current = formStates.completeSubmission;
        }
        console.error(err);
      });
  };

  const formProps: {
    onEnter: () => void,
    noValidate: boolean,
    onCancel?: () => void
  } = {
    onEnter: onSubmit,
    noValidate: true
  };

  if (onCancel) formProps.onCancel = onCancel;

  return (
    <div className="relative">
      <Submittable {...formProps}>
        {renderForm(getControlProps, onSubmit)}
      </Submittable>
      {formState.current === formStates.pendingSubmission && (
        <LoaderFull />
      )}
      {!ready && <LoaderLocal />}
    </div>
  );
}

Form.propTypes = {
  /** An object containing keys that correspond to control names. The value of each control name key are objects containing the configuration of a control. */
  config: PropTypes.object.isRequired,
  /** Renders the form layout. When called a get argument is passed to return the configuration object of each control type. */
  renderForm: PropTypes.func.isRequired,
  /** Called when the form has successfully passed validation and returns an object containing keys the coorespond to control names with values equalling the users inputted value. */
  handleFormData: PropTypes.func.isRequired,
  /** Called when any control component registered with the form changes in value. */
  onChange: PropTypes.func,
  /** Called when ESC is pressed. */
  onCancel: PropTypes.func
};
