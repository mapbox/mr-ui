import safeSpy from '../../../test-utils/safe-spy';
import ControlCard from '../control-card';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ControlCard,
  props: {
    children: 'This is a basic card.'
  }
};

testCases.title = {
  description: 'title',
  component: ControlCard,
  props: {
    children: 'This is a titled card.',
    title: 'Title'
  }
};

testCases.sizedTitle = {
  description: 'sized title',
  component: ControlCard,
  props: {
    children: 'This is a sized titled card.',
    title: 'Title',
    titleSize: 'primary'
  }
};

testCases.collapsible = {
  description: 'collapsible',
  component: ControlCard,
  props: {
    buttonType: 'collapse',
    children: 'This is a titled card with a collapsible button.',
    onButtonClick: safeSpy(),
    title: 'Title'
  }
};

testCases.sizedTitleclosable = {
  description: 'sized title and closable',
  component: ControlCard,
  props: {
    buttonType: 'close',
    children: 'This is a sized titled card with a closable button.',
    onButtonClick: safeSpy(),
    title: 'Title',
    titleSize: 'secondary'
  }
};

export { testCases };
