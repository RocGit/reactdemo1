import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloWorld1 extends Component {
  // constructor() {
  //   super()
  // }

  sayHi() {
    alert('Hello World  111')
  }

  render() {
    return (
      <div onClick={this.sayHi.bind(this)}>Hello World</div>
    )
  }
}

const HelloWorld2 = (props) => {
  const sayHi = (event) => alert('Hello World 222 Non State of Function Component')
  return (
    <div onClick={sayHi}>Hello World</div>
  )
}

const Index = () => {
  return (
    <div>
      <HelloWorld1></HelloWorld1>
      <HelloWorld2></HelloWorld2>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));
