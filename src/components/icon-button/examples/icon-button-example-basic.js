/*
Basic.
*/
import React from 'react';
import IconButton from '../icon-button';

export default class Example extends React.Component {
  render() {
    return (
      <IconButton
        onClick={() => {
          /* console.log('triggered on click') */
        }}
        icon="close"
        tooltipProps={{
          content: 'Close'
        }}
      />
    );
  }
}
