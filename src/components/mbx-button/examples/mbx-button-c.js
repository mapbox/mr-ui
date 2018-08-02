/*
A link that looks like a slightly short button (`size: "medium"`).

The additional prop `data-test` is passed on directly to the `<a>`.

Also, `transformClasses` is used to add the drop-shadow class.
*/
import React from 'react';
import MbxButton from '../mbx-button';

export default class Example extends React.Component {
  render() {
    const btnClasses = variantClasses => {
      return `${variantClasses} shadow-darken25`;
    };
    return (
      <div id="mbx-button-c">
        <MbxButton
          href="#mbx-button-c"
          size="medium"
          data-test="link-to-c"
          transformClasses={btnClasses}
        >
          You are here
        </MbxButton>
      </div>
    );
  }
}
