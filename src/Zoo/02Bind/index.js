import React, { Component } from 'react';
// import React from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
  handleClickOnTitle(word, e) {
    console.log('Click on title.')
    // alert(e.target.innerHTML)
    alert(word)
  }

  render() {
    // alert(this.props)
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this, 'Hello')}>React 小书</h1>
    )
  }
}

ReactDOM.render(<Title />, document.getElementById('root'));