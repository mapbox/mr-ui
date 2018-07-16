/*
Basic.
*/
import React from 'react';
import pageLoadingIndictor from '../page-loading-indicator';

export default class Example extends React.Component {
  show = () => {
    pageLoadingIndictor.start();
    setTimeout(pageLoadingIndictor.end, 1000);
  };

  render() {
    return (
      <div>
        <button className="btn btn--purple" onClick={this.show}>
          Show for 1 second
        </button>
      </div>
    );
  }
}
