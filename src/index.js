import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import React from 'react';
// import App from './App';

// import Likebutton from './Components/Buttons/LikeButton'
// import Index from './Themes'
import CommentApp from './Gallery/Comment/CommentApp'


// ReactDOM.render(<Index />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

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
