import React, { Component } from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import About from './About'
import Repos from './Repos'
import Home from './Home'

class Rendering extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={(props) => (
            <Home {...props}>
              <Switch>
                <Route path='/about' component={About} />
                <Route path='/repos' component={Repos} />
              </Switch>
            </Home>
          )} />

          <Route path='/' component={Parent} />
        </div>
      </Router>
    )
  }
}

const Parent = () => (
  <div>
    <Route path='/about' component={About} />
    <Route path='/repos' component={Repos} />
  </div>
)

export default Rendering