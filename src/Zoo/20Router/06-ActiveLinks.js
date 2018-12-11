import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from './About'
import Repos from './Repos'

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
          <li><Link to="/repos" activeStyle={{ color: 'green' }}>Repos</Link></li>

          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/repos" activeClassName="active">Repos</Link></li>

        </ul>

      </div>
    )
  }
}

class ActiveLinks extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App}>
          <Route path="about" component={About} />
          <Route path="repos" component={Repos} />
        </Route>
      </Router>
    )
  }
}
export default ActiveLinks