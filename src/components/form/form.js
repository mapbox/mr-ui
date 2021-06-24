import React from 'react';
import PropTypes from 'prop-types';
import xtend from 'xtend';
import shallowEqualObjects from 'shallow-equal/objects';
import Submittable from 'react-submittable';
import LoaderFull from '../loader-full';
import LoaderLocal from '../loader-local';

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

const formStates = {
  preSubmission: 'PRE_SUBMISSION',
  errorSubmission: 'SUBMITTED_WITH_ERRORS',
  pendingSubmission: 'PENDING',
  completeSubmission: 'COMPLETE'
};

export default class Form extends React.Component {
  static propTypes = {
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

  _isMounted = false;

  setControlProperties(config) {
    const controlValues = {};
    const controlValidationErrors = {};

    Object.keys(config).forEach((controlName) => {
      const controlConfig = config[controlName];
      if (
        this.state &&
        this.state.controlValues &&
        this.state.controlValues[controlName]
      ) {
        controlValues[controlName] = this.state.controlValues[controlName];
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

  constructor(props) {
    super(props);
    this.state = xtend(this.setControlProperties(props.config), {
      formState: formStates.preSubmission,
      ready: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      ready: true
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { config } = this.props;
    if (!shallowEqualObjects(nextProps.config, config)) {
      const { controlValues, controlValidationErrors } =
        this.setControlProperties(nextProps.config);
      this.setState({
        controlValues,
        controlValidationErrors,
        formState: formStates.preSubmission
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  checkValidation(formState) {
    return new Promise((resolve) => {
      const controlValidationErrors = this.state.controlValidationErrors;

      Object.keys(this.state.controlValues).forEach((controlName) => {
        const errorMessage = validateControlValue(
          this.state.controlValues[controlName],
          this.props.config[controlName].validator,
          this.state.controlValues
        );
        if (errorMessage) {
          controlValidationErrors[controlName] = errorMessage;
          formState = formStates.errorSubmission;
        } else {
          controlValidationErrors[controlName] = '';
        }
      });

      this.setState(
        {
          controlValidationErrors,
          formState
        },
        () => {
          resolve();
        }
      );
    });
  }

  onControlChange = (controlValue, controlName) => {
    const controlValues = this.state.controlValues;
    controlValues[controlName] = controlValue;
    if (this.state.formState !== formStates.preSubmission) {
      this.checkValidation(formStates.preSubmission).then(() => {
        this.setState({ controlValues });
      });
    } else {
      this.setState({ controlValues });
    }

    if (this.props.onChange) this.props.onChange(controlValues);
  };

  getControlProps = (controlName) => {
    const control = this.props.config[controlName];
    return xtend(control, {
      id: controlName,
      onChange: this.onControlChange,
      validationError: this.state.controlValidationErrors[controlName],
      value: this.state.controlValues[controlName]
    });
  };

  onSubmit = () => {
    this.checkValidation(formStates.pendingSubmission).then(() => {
      if (this.state.formState === formStates.pendingSubmission)
        this.submitForm();
    });
  };

  submitForm = () => {
    // Use Promise.resolve, because if handleFormData is a promise,
    // we want to handle loading and error states.
    Promise.resolve(this.props.handleFormData(this.state.controlValues))
      .then(() => {
        if (!this._isMounted) return;
        if (this.state.formState === formStates.pendingSubmission) {
          this.setState({ formState: formStates.completeSubmission });
        }
      })
      .catch((err) => {
        if (!this._isMounted) return;
        if (this.state.formState === formStates.pendingSubmission) {
          this.setState({ formState: formStates.completeSubmission });
        }
        console.error(err);
      });
  };

  render() {
    const { onCancel } = this.props;
    const formProps = {
      onEnter: this.onSubmit,
      noValidate: true
    };

    if (onCancel) formProps.onCancel = onCancel;

    return (
      <div className="relative">
        <Submittable {...formProps}>
          {this.props.renderForm(this.getControlProps, this.onSubmit)}
        </Submittable>
        {this.state.formState === formStates.pendingSubmission && (
          <LoaderFull />
        )}
        {!this.state.ready && <LoaderLocal />}
      </div>
    );
  }
}
