import React from 'react'


class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search..." value={this.props.filtertext} />
          <p>
            <input type="checkbox" checked={this.props.instockonly} />
            {' '}
            Only show products in stock
          </p>
        </form>
      </div>
    )
  }
}

export default SearchBar