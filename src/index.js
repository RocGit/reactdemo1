import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
// import React, { Component } from 'react';
// import App from './App';

// import Likebutton from './Components/Buttons/LikeButton'
// import Index from './Themes'
// import CommentApp from './Gallery/Comment/CommentApp'
// import Index from './Zoo/ComponentMount/'
// import Index from './Zoo/OPTDOM/'
// import Index from './Zoo/Container/'
// import Index from './Zoo/Style/'
// import Index from './Zoo/ParamValidate/'
// import Index from './Gallery/CommentS2/'
// import Index from './Zoo/10Higher-OrderComponents/'
// import Index from './Gallery/CommentS3/'
// import Index from './Zoo/20Router/'
import Index from './Zoo/11Forms/'


// ReactDOM.render(<Index />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(<Index />, document.getElementById('root'));
