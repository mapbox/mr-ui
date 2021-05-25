import React from 'react';
import Form from '../form';
import FormSubmit from '../../form-submit';
import ControlText from '../../control-text';
import ControlFile from '../../control-file';
import ControlSwitch from '../../control-switch';
import ControlTextarea from '../../control-textarea';
import ControlSelect from '../../control-select';
import ControlRange from '../../control-range';
import ControlCheckboxSet from '../../control-checkbox-set';
import ControlToggleSet from '../../control-toggle-set';
import ControlRadioSet from '../../control-radio-set';
import ControlDate from '../../control-date';
import safeSpy from '../../../test-utils/safe-spy';
import validateRequired from '../validators/validate-required';
import validateEmail from '../validators/validate-email';
import validateStartDateBeforeEndDate from '../validators/validate-start-date-before-end-date';
import moment from 'moment';

const testCases = {};

function renderForm(getControlProps, onSubmit) {
  return (
    <div>
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
        <div className="col w-full w-3/4-mm">
          <ControlDate {...getControlProps('date')} />
        </div>
      </div>
      <div className="mt6">
        <ControlTextarea {...getControlProps('description')} />
      </div>
      <div className="mt6">
        <FormSubmit onSubmit={onSubmit} />
      </div>
    </div>
  );
}

function onSuccess(result) {
  console.log(result); // eslint-disable-line
  return safeSpy();
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
  date: {
    moment,
    dateRange: true,
    label: 'Date',
    validator: [validateStartDateBeforeEndDate]
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
    initialValue: '10',
    min: 10,
    max: 100,
    step: 10
  },
  description: {
    label: 'Description',
    placeholder: 'Enter a short description'
  }
};

testCases.basic = {
  description: 'basic',
  component: Form,
  props: {
    config: {
      firstName: {
        label: 'First name',
        placeholder: 'Enter your first name',
        validator: validateRequired('first name')
      },
      lastName: {
        label: 'Last name',
        placeholder: 'Enter your last name'
      }
    },
    handleFormData: safeSpy(),
    renderForm(getControlProps, onSubmit) {
      return (
        <div>
          <div>
            <ControlText {...getControlProps('firstName')} />
          </div>
          <div>
            <ControlText {...getControlProps('lastName')} />
          </div>
          <div className="mt6">
            <FormSubmit onSubmit={onSubmit} />
          </div>
        </div>
      );
    }
  }
};

testCases.allControls = {
  description: 'all controls',
  component: Form,
  props: {
    config: formConfig,
    renderForm,
    handleFormData: onSuccess,
    onChange: safeSpy()
  }
};

testCases.onChange = {
  description: 'onChange',
  component: Form,
  props: {
    config: {
      description: {}
    },
    renderForm(getControlProps) {
      return <ControlTextarea {...getControlProps('description')} />;
    },
    handleFormData: onSuccess,
    onChange: safeSpy()
  }
};

testCases.onCancel = {
  description: 'onCancel',
  component: Form,
  props: {
    config: {
      name: {
        label: 'Name',
        placeholder: 'Enter name'
      }
    },
    handleFormData: onSuccess,
    onCancel: safeSpy(),
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
  }
};

export { testCases };
