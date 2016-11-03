import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './testcomponent';

class TestLayout extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}

ReactDOM.render(<TestComponent />, document.getElementById("app"))