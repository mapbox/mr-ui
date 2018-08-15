/*
Icons rendered inline with multi-line text.
*/
import React from 'react';
import Icon from '../icon';

export default class Example extends React.Component {
  render() {
    return (
      <div style={{ lineHeight: '24px' }}>
        The last thing you want in your kitchen is a{' '}
        <span className="inline-block color-red">
          <Icon name="flame" inline={true} /> fire
        </span>{' '}
        even though there is{' '}
        <span className="inline-block color-blue">
          <Icon name="water" inline={true} /> water
        </span>{' '}
        nearby. The last thing you want in your kitchen is a{' '}
        <span className="inline-block color-red">
          <Icon name="flame" inline={true} /> fire
        </span>{' '}
        even though there is{' '}
        <span className="inline-block color-blue">
          <Icon name="water" inline={true} /> water
        </span>{' '}
        nearby. The last thing you want in your kitchen is a{' '}
        <span className="inline-block color-red">
          <Icon name="flame" inline={true} /> fire
        </span>{' '}
        even though there is{' '}
        <span className="inline-block color-blue">
          <Icon name="water" inline={true} /> water
        </span>{' '}
        nearby.
      </div>
    );
  }
}
