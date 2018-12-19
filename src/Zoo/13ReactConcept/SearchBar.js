import React from 'react'


class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search..."
            value={this.props.filtertext}
            onChange={this.handleFilterTextInputChange} />
          <p>
            <input type="checkbox"
              checked={this.props.instockonly}
              onChange={this.handleInStockInputChange} />
            {' '}
            Only show products in stock
          </p>
        </form>
      </div>
    )
  }
}

export default SearchBar