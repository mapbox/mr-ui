import React from 'react';
import PropTypes from 'prop-types';
import pageLoadingIndictor from '../page-loading-indicator';

const testCases = {};

class Showman extends React.Component {
  static propTypes = {
    time: PropTypes.number.isRequired
  };

  go = () => {
    pageLoadingIndictor.start();
    setTimeout(pageLoadingIndictor.end, this.props.time);
  };

  render() {
    return (
      <div>
        <button
          aria-label={`${String(this.props.time)}ms`}
          onClick={this.go}
          className="btn"
        >
          {String(this.props.time)}ms
        </button>
      </div>
    );
  }
}

testCases.ms1000 = {
  description: '1000ms',
  element: <Showman time={1000} />
};

testCases.ms300 = {
  description: '300ms',
  element: <Showman time={300} />
};

testCases.ms40 = {
  description: '40ms',
  element: <Showman time={40} />
};

export { testCases };
