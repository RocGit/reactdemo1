import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CommentApp from './CommentApp'


class Index extends Component {
  render() {
    return (
      <div>
        <CommentApp></CommentApp>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

export default Index