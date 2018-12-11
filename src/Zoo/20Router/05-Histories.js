import React, { Component } from 'react'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

// import About from './About'
// import Repos from './Repos'
import Home from './Home'

const history = createBrowserHistory()

class Histories extends Component {
  render() {
    return (
      <div>
        <Router history={history} >
          <Home />
        </Router >
      </div>
    )
  }
}

export default Histories