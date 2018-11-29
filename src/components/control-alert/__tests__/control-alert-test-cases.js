import ControlAlert from '../control-alert';
import React from 'react';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

testCases.basicError = {
  component: ControlAlert,
  description: 'basic error',
  props: {
    children: <span className="ml6">Drats.</span>,
    theme: 'error'
  }
};

testCases.basicLocked = {
  component: ControlAlert,
  description: 'basic locked',
  props: {
    children: <span className="ml6">Nope.</span>,
    theme: 'locked'
  }
};

testCases.basicSuccess = {
  component: ControlAlert,
  description: 'basic success',
  props: {
    children: <span className="ml6">Woohoo!</span>,
    theme: 'success'
  }
};

testCases.dismissiveWarning = {
  component: ControlAlert,
  description: 'dismissive warning',
  props: {
    children: <span className="mx6">Uh oh...</span>,
    onButtonClick: safeSpy(),
    theme: 'warning'
  }
};

testCases.dismissiveMultilineError = {
  component: ControlAlert,
  description: 'dismissive multiline error',
  props: {
    children: (
      <p className="mx6">
        This is the song that never ends.{' '}
        <a className="link" href="http://www.mapbox.com">
          Yes, it just goes on and on my friends.
        </a>{' '}
        Some people started singing it, not knowing what it was. And they'll
        continue singing it forever just because. This is the song that never
        ends.
      </p>
    ),
    onButtonClick: safeSpy(),
    theme: 'error'
  }
};

export { testCases };
