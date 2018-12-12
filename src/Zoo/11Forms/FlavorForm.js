import React, { Component } from 'react'

class FlavorForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'coconut' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    console.log('Your favorite flavor is: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    // const options = ['grapefruit', 'lime', 'coconut', 'mango']
    // const items = options.map((item) =>
    //   <option value={item}>{item}</option>
    // )

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite La Croix flavor:
            {/* <input type='text' value={this.state.value} onChange={this.handleChange} /> */}
            {/* <textarea value={this.state.value} onChange={this.handleChange} rows={10} cols={40} /> */}
            <select value={this.state.value} onChange={this.handleChange}>
              {/* {items} */}
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>

            </select>
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default FlavorForm