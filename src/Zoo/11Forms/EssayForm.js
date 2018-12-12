import React, { Component } from 'react'

class EssayForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'Please write an essay about your favorite DOM element.' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    console.log('A essay was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            {/* <input type='text' value={this.state.value} onChange={this.handleChange} /> */}
            <textarea value={this.state.value} onChange={this.handleChange} rows={10} cols={40} />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default EssayForm