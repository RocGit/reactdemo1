import React, { Component } from 'react'
import $ from 'jquery'

export default (WrappedComponent, name) => {
  class NewComponent extends Component {
    constructor() {
      super()
      this.state = { data: null }
    }

    componentWillMount() {
      // $.get('http://www.w3school.com.cn//jquery/test1.txt', (data) => {
      //   this.setState({ data })
      // })

      $.get('/data/' + name, (data) => {
        this.setState({ data })
      })
    }

    render() {
      return <WrappedComponent data={this.state.data} />
    }
  }
  return NewComponent
}