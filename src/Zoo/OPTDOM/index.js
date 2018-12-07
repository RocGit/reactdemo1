import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class AutoFocusInput extends Component {
  componentDidMount() {
    this.input.focus()
  }

  render() {
    return (
      <input ref={(input) => this.input = input} />
    )
  }
}

class Index extends Component {
  render() {
    return (
      <AutoFocusInput />
    )
  }
}

// ReactDOM.render(<Title />, document.getElementById('root'));
export default Index