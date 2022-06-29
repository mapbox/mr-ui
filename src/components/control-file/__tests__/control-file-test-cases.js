import React from 'react';
import ControlFile from '../control-file';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

class Interactive extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: null };
    this.setFiles = this.setFiles.bind(this);
  }

  setFiles(files) {
    this.setState({ files });
  }

  render() {
    return (
      <ControlFile
        id="interactive-file"
        label="Select a file"
        onChange={this.setFiles}
        value={this.state.files}
      />
    );
  }
}

testCases.interactive = {
  description: 'Interactive',
  element: <Interactive />
};

testCases.basic = {
  description: 'basic',
  component: ControlFile,
  props: {
    id: 'testinput-1',
    label: 'Basic',
    onChange: safeSpy()
  }
};

testCases.multiple = {
  description: 'multiple',
  component: ControlFile,
  props: {
    id: 'testinput-multiple',
    label: 'Multiple',
    onChange: safeSpy(),
    multiple: true
  }
};

testCases.disabled = {
  description: 'disabled',
  component: ControlFile,
  props: {
    id: 'testinput-2',
    label: 'Disabled',
    disabled: true,
    onChange: safeSpy()
  }
};

testCases.allOptions = {
  description: 'all options',
  component: ControlFile,
  props: {
    id: 'testinput-3',
    themeControlFile: 'bg-red-faint py6 px12 round-full link--red txt-s',
    themeControlWrapper: 'bg-red-light',
    themeControlFileClear: 'btn btn--red color-white',
    themeLabel: 'txt-s txt-bold',
    initialDisplayValue: 'Select an image',
    validationError: 'oh no!',
    label: 'All options',
    aside: <span>Aside text</span>,
    optional: true,
    accept: '.jpg, .jpeg, .png',
    multiple: true,
    autoFocus: true,
    onChange: safeSpy()
  }
};

export { testCases };
