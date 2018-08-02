import React from 'react';
import MbxButton from '../mbx-button';
import MbxIconText from '../../mbx-icon-text';

const testCases = {};

testCases.defaults = {
  component: MbxButton,
  props: {
    children: 'Buttonized'
  }
};

testCases['link with outline and icon text, extra padding'] = {
  component: MbxButton,
  props: {
    children: <MbxIconText iconBefore="bug">Go do things</MbxIconText>,
    href: '#',
    outline: true,
    width: 'large'
  }
};

testCases['full width, alternate color'] = {
  component: MbxButton,
  props: {
    children: 'Here we are',
    color: 'purple',
    width: 'full'
  }
};

testCases['small style-editor-type button'] = {
  component: MbxButton,
  props: {
    children: 'Turn it off',
    color: 'gray',
    size: 'small',
    width: 'small',
    corners: true,
    block: true
  }
};

testCases['small secondary button'] = {
  component: MbxButton,
  props: {
    children: 'Done',
    color: 'gray',
    size: 'small',
    outline: true,
    block: true
  }
};

testCases[
  'div styled like a medium button with some extended props and transformed classes'
] = {
  component: MbxButton,
  props: {
    children: 'Save',
    size: 'medium',
    transformClasses: classes => {
      return classes + ' shadow-darken75 unselectable cursor-pointer';
    },
    component: 'div',
    role: 'button',
    'data-test': 'foo'
  }
};

export { testCases };
