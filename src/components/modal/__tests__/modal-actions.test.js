import React from 'react';
import { shallow } from 'enzyme';
import ModalActions from '../modal-actions';

describe('primary only', () => {
  let wrapper;
  let primaryCallback;

  beforeEach(() => {
    primaryCallback = jest.fn();
    wrapper = shallow(
      <ModalActions
        primaryAction={{ text: 'Okay', callback: primaryCallback }}
      />
    );
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('fires primary callback', () => {
    wrapper.find({ 'data-test': 'primary-modal-action' }).prop('onClick')();
    expect(primaryCallback).toHaveBeenCalledTimes(1);
  });
});

describe('primary and secondary', () => {
  let wrapper;
  let primaryCallback;
  let secondaryCallback;

  beforeEach(() => {
    primaryCallback = jest.fn();
    secondaryCallback = jest.fn();
    wrapper = shallow(
      <ModalActions
        primaryAction={{ text: 'Okay', callback: primaryCallback }}
        secondaryAction={{ text: 'Cancel', callback: secondaryCallback }}
      />
    );
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('fires primary callback', () => {
    wrapper.find({ 'data-test': 'primary-modal-action' }).prop('onClick')();
    expect(primaryCallback).toHaveBeenCalledTimes(1);
  });

  test('fires secondary callback', () => {
    wrapper.find({ 'data-test': 'secondary-modal-action' }).prop('onClick')();
    expect(secondaryCallback).toHaveBeenCalledTimes(1);
  });
});

describe('primary, secondary, tertiary', () => {
  let wrapper;
  let primaryCallback;
  let secondaryCallback;
  let tertiaryCallback;

  beforeEach(() => {
    primaryCallback = jest.fn();
    secondaryCallback = jest.fn();
    tertiaryCallback = jest.fn();
    wrapper = shallow(
      <ModalActions
        primaryAction={{ text: 'Okay', callback: primaryCallback }}
        secondaryAction={{ text: 'Cancel', callback: secondaryCallback }}
        tertiaryAction={{ text: 'Give up', callback: tertiaryCallback }}
      />
    );
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('fires primary callback', () => {
    wrapper.find({ 'data-test': 'primary-modal-action' }).prop('onClick')();
    expect(primaryCallback).toHaveBeenCalledTimes(1);
  });

  test('fires secondary callback', () => {
    wrapper.find({ 'data-test': 'secondary-modal-action' }).prop('onClick')();
    expect(secondaryCallback).toHaveBeenCalledTimes(1);
  });

  test('fires tertiary callback', () => {
    wrapper.find({ 'data-test': 'tertiary-modal-action' }).prop('onClick')();
    expect(tertiaryCallback).toHaveBeenCalledTimes(1);
  });
});

describe('primary and tertiary', () => {
  let wrapper;
  let primaryCallback;
  let tertiaryCallback;

  beforeEach(() => {
    primaryCallback = jest.fn();
    tertiaryCallback = jest.fn();
    wrapper = shallow(
      <ModalActions
        primaryAction={{ text: 'Okay', callback: primaryCallback }}
        tertiaryAction={{ text: 'Cancel', callback: tertiaryCallback }}
      />
    );
  });

  test('does not render tertiary button, since secondary is not provided', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
