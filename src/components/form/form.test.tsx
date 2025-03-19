import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './form';
import FormSubmit from '../form-submit';
import ControlText from '../control-text';
import ControlFile from '../control-file';
import ControlSwitch from '../control-switch';
import ControlTextarea from '../control-textarea';
import ControlSelect from '../control-select';
import ControlRange from '../control-range';
import ControlCheckboxSet from '../control-checkbox-set';
import ControlToggleSet from '../control-toggle-set';
import ControlRadioSet from '../control-radio-set';
import validateRequired from './validators/validate-required';
import validateEmail from './validators/validate-email';

function renderForm(getControlProps, onSubmit) {
  return (
    <>
      <div className="grid grid--gut24">
        <div className="col w-full w-1/4-mm">
          <ControlText {...getControlProps('firstName')} />
        </div>
        <div className="col w-full w-1/4-mm">
          <ControlText {...getControlProps('lastName')} />
        </div>
        <div className="col w-full w-1/4-mm">
          <ControlText {...getControlProps('email')} />
        </div>
        <div className="col w-full w-1/4-mm">
          <ControlText {...getControlProps('url')} />
        </div>
      </div>
      <div className="flex flex--center-main w-full mb12 py12 round bg-gray-light">
        <ControlToggleSet {...getControlProps('spiritAnimal')} />
      </div>
      <div className="grid grid--gut24">
        <div className="col w-full w-1/4-mm">
          <ControlFile {...getControlProps('upload')} />
        </div>
        <div className="col w-full w-1/4-mm">
          <div className="mb12">
            <ControlRange {...getControlProps('area')} />
          </div>
          <ControlSwitch {...getControlProps('active')} />
        </div>
        <div className="col w-full w-1/4-mm">
          <div className="mb12">
            <ControlSelect {...getControlProps('level')} />
          </div>
          <ControlRadioSet {...getControlProps('difficulty')} />
        </div>
        <div className="col w-full w-1/4-mm">
          <ControlCheckboxSet {...getControlProps('tools')} />
        </div>
      </div>
      <div className="mt6">
        <ControlTextarea {...getControlProps('description')} />
      </div>
      <div className="mt6">
        <FormSubmit onSubmit={onSubmit} />
      </div>
    </>
  );
}

function onSuccess(result) {
  console.log(result); // eslint-disable-line
  return jest.fn();
}

const formConfig = {
  firstName: {
    label: 'First name',
    placeholder: 'Enter your first name',
    validator: [validateRequired('first name')]
  },
  lastName: {
    label: 'Last name',
    placeholder: 'Enter your last name',
    validator: [validateRequired('last name')]
  },
  email: {
    label: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    validator: [validateRequired('email'), validateEmail]
  },
  url: {
    label: 'url',
    type: 'url',
    placeholder: 'Enter your URL',
    validator: [validateRequired('URL')]
  },
  upload: {
    label: 'Upload a picture',
    optional: true,
    multiple: true
  },
  spiritAnimal: {
    label: 'Choose animal guide',
    initialValue: 'sea-otter',
    themeToggleGroup: 'border border--2 border--gray-faint bg-gray-faint',
    themeToggle: 'txt-s py3 toggle--gray toggle--active-white',
    themeLabel: 'color-gray-dark txt-s txt-bold',
    options: [
      {
        label: 'Humpback whale',
        value: 'humpback-whale'
      },
      {
        label: 'Rufous Hummingbird',
        value: 'rufous hummingbird'
      },
      {
        label: 'Sea Otter',
        value: 'sea-otter'
      },
      {
        label: 'Snowshoe Hare',
        value: 'snowshoe-hare'
      }
    ]
  },
  level: {
    label: 'Choose level',
    initialValue: '2',
    options: [
      {
        label: 'One',
        value: '1'
      },
      {
        label: 'Two',
        value: '2'
      },
      {
        label: 'Three',
        value: '3'
      },
      {
        label: 'Four',
        value: '4'
      },
      {
        label: 'Five',
        value: '5'
      }
    ]
  },
  difficulty: {
    label: 'Choose difficulty',
    initialValue: 'beginner',
    options: [
      {
        label: 'Beginner',
        value: 'beginner'
      },
      {
        label: 'Intermediate',
        value: 'intermediate'
      },
      {
        label: 'Advanced',
        value: 'advanced'
      }
    ]
  },
  tools: {
    label: 'Choose tools',
    initialValue: [],
    options: [
      {
        label: 'Pick axe',
        value: 'axe'
      },
      {
        label: 'Potion',
        value: 'potion'
      },
      {
        label: 'Cloak',
        value: 'cloak'
      },
      {
        label: 'Telescope',
        value: 'telescope'
      },
      {
        label: 'Map',
        value: 'map'
      },
      {
        label: 'Sword',
        value: 'sword'
      },
      {
        label: 'Armour',
        value: 'armour'
      }
    ]
  },
  active: {
    label: 'Animal active?',
    initialValue: false
  },
  area: {
    label: 'Choose size of area',
    initialValue: [10],
    min: 10,
    max: 100,
    step: 10
  },
  description: {
    label: 'Description',
    placeholder: 'Enter a short description'
  }
};

const basicFormConfig = {
  firstName: {
    label: 'First name',
    placeholder: 'Enter your first name',
    validator: validateRequired('first name')
  },
  lastName: {
    label: 'Last name',
    placeholder: 'Enter your last name'
  }
};

const basicFormRender = (getControlProps, onSubmit) => {
  return (
    <>
      <div>
        <ControlText {...getControlProps('firstName')} />
      </div>
      <div>
        <ControlText {...getControlProps('lastName')} />
      </div>
      <div className="mt6">
        <FormSubmit onSubmit={onSubmit} />
      </div>
    </>
  )
};

describe('Form', () => {
  describe('basic', () => {
    const formDataMock = jest.fn();
    const props = {
      config: basicFormConfig,
      handleFormData: formDataMock,
      renderForm: basicFormRender,
    };

    test('renders as expected', () => {
      const { baseElement } = render(<Form {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('validation handling', async () => {
      render(<Form {...props} />)

      fireEvent.click(screen.getByTestId('form-submit-handler'));

      await waitFor(() => {
        expect(screen.getByTestId('firstName-error')).toBeInTheDocument();
      });

      await userEvent.type(screen.getByTestId('firstName-input'), 'My name');

      await waitFor(() => {
        expect(screen.queryByTestId('firstName-error')).not.toBeInTheDocument();
      });
    });
  });

  describe('all controls', () => {
    const props = {
      config: formConfig,
      renderForm,
      handleFormData: onSuccess,
      onChange: jest.fn()
    };

    test('renders as expected', () => {
      const { baseElement } = render(<Form {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('handleFormData', () => {
    test('on submit handleFormData is called and state changes are set', async () => {
      const customProps = {
        config: basicFormConfig,
        renderForm: basicFormRender,
        handleFormData: jest.fn().mockImplementation(values => {
          values.firstName = values.firstName.toUpperCase();
          return Promise.resolve();
        }),
      };

      render(<Form {...customProps} />);

      await userEvent.type(screen.getByTestId('firstName-input'), 'f');
      await userEvent.type(screen.getByTestId('lastName-input'), 'l');

      fireEvent.click(screen.getByTestId('form-submit-handler'));

      await waitFor(() => expect(customProps.handleFormData).toHaveBeenCalledTimes(1));
      expect(customProps.handleFormData).toHaveBeenCalledWith({
        firstName: 'F', // This is upper case since the handleFormData function changes it and the object is passed by reference.
        lastName: 'l',
      });

      expect(screen.getByTestId('firstName-input')).toHaveValue('F');
    });
  });

  describe('onChange', () => {
    let mockOnChange;
    let props;

    beforeEach(() => {
      mockOnChange = jest.fn();
      props = {
        config: {
          description: {}
        },
        renderForm(getControlProps) {
          return <ControlTextarea {...getControlProps('description')} />;
        },
        handleFormData: onSuccess,
        onChange: mockOnChange
      };
    });

    test('onChange is called', async () => {
      render(<Form {...props} />)
      await userEvent.type(screen.getByTestId('description-textarea'), 'f');

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledTimes(1);
      });

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledWith({
          description: 'f'
        });
      });
    });

    test('when onChange updates values in the form the form is updated', async () => {
      const customerProps = {
        ...props,
        onChange: (values) => {
          values.description = values.description.toUpperCase();
        }
      };

      render(<Form {...customerProps} />);

      await userEvent.type(screen.getByTestId('description-textarea'), 'f');

      await waitFor(() => {
        expect(screen.getByTestId('description-textarea')).toHaveValue('F');
      });
    });
  });

  describe('onCancel', () => {
    const mockOnCancel = jest.fn();
    
    const props = {
      config: {
        name: {
          label: 'Name',
          placeholder: 'Enter name'
        }
      },
      handleFormData: onSuccess,
      onCancel: mockOnCancel,
      renderForm(getControlProps, onSubmit) {
        return (
          <div>
            <ControlText {...getControlProps('name')} />
            <div className="mt6">
              <FormSubmit onSubmit={onSubmit} />
            </div>
          </div>
        );
      }
    };

    test('onCancel is called', async () => {
      render(<Form {...props} />)
      fireEvent.keyDown(screen.getByTestId('name-input'), {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27
      });

      await waitFor(() => {
        expect(mockOnCancel).toHaveBeenCalledTimes(1);
      });
    });
  });
});
