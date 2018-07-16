/*
Basic
*/
import React from 'react';
import Tooltip from '../tooltip';

export default class Example extends React.Component {
  render() {
    return (
      <Tooltip content="Basic">
        {triggerProps => (
          <button className="btn" {...triggerProps}>
            Basic
          </button>
        )}
      </Tooltip>
    );
  }
}
