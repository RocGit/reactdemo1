import React, { Component } from 'react'
import App from './01-RenderingaRoute'
import NestRoute from './02-NestRoute'
import NaviLink from './03-NaviLink'
// import Redirector from './RedirectRouter'
import Histories from './05-Histories'
import Topic from './04-RouterMatch'
import UseRouter from './UseRouter'
import ActiveLinks from './06-ActiveLinks'

class Index extends Component {

  render() {
    return (
      <div>
        <App />
        <hr></hr>
        <span>NestRoute</span>
        <NestRoute />
        <hr></hr>

        <NaviLink />

        {/* <Redirector /> */}
        <hr></hr>
        <Topic />

        <hr></hr>
        <Histories />
        <hr></hr>

        <ActiveLinks />
        <hr></hr>



        <UseRouter />
        <hr></hr>
      </div>
    )
  }
}

export default Index