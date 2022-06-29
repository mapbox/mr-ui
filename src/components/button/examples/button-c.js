/*
A link that looks like a slightly short button (`size: "medium"`).

The additional prop `data-test` is passed on directly to the `<a>`.

Also, `transformClasses` is used to add the drop-shadow class.
*/
import React from 'react';
import Button from '../button';

export default class Example extends React.Component {
  render() {
    const btnClasses = (variantClasses) => {
      return `${variantClasses} shadow-darken25`;
    };
    return (
      <div id="button-c">
        <Button
          href="#button-c"
          size="medium"
          data-test="link-to-c"
          transformClasses={btnClasses}
        >
          You are here
        </Button>
      </div>
    );
  }
}
