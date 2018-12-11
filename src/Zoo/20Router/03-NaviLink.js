import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import About from './About'
import Repos from './Repos'
import Home from './Home'

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <p>
            React Router v4 Browser Example
          </p>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/repos'>Repos</Link>
                {/* <Route path='/repos' component={Repos} />  */}
              </li>
            </ul>
          </nav>
        </header>
        <div style={{ height: 100, width: 300, border: 1, backgroundColor: '#00FFCC' }}>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/repos' component={Repos} />
        </div>
        <footer>
          React Router v4 Browser Example (c) 2017
        </footer>
      </div>
    )
  }
}

const NaviLink = () => (
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
)

export default NaviLink