/*
Click the button to show the loader for 3 seconds.
*/
import React from 'react';
import LoaderFull from '../loader-full';

export default class Example extends React.Component {
  timeout = null;
  state = { loading: false };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  showLoader = () => {
    this.setState({ loading: true });
    this.timeout = setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  render() {
    let loader = null;
    if (this.state.loading) {
      loader = <LoaderFull />;
    }

    return (
      <div>
        <button
          aria-label="Show loader"
          className="btn btn--purple"
          onClick={this.showLoader}
        >
          Show loader
        </button>
        {loader}
      </div>
    );
  }
}
