import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './About'
import Repos from './Repos'

class BrowserRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/about' component={About} />
          <Route path='/repos' component={Repos} />
        </div>
      </Router>
    )
  }
}

// ReactDOM.render((
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// ), document.getElementById('root'))
export default BrowserRouter