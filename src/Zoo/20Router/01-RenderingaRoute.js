// V2,V3
// import { Router, Route, hashHistory } from 'react-router'
// V4
import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './About'
import Repos from './Repos'
import Home from './Home'

class Rendering extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/repos' component={Repos} />
        </div>
      </Router>
    )
  }
}

export default Rendering