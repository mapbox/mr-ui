/*
Options.
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
        icon="bike"
        themeButton="py12 px12 bg-gray"
        themeIcon="color-gray-dark"
        tooltipProps={{
          content: <strong className="txt-bold">tada</strong>,
          placement: 'right'
        }}
      />
    );
  }
}
