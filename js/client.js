import React from 'react';
import ReactDOM from 'react-dom';

class TestLayout extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}


ReactDOM.render(<TestLayout />, document.getElementById("app"))