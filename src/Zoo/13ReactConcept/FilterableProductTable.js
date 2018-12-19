import React from 'react'
import Filter from './SearchBar'
import ProductTable from './ProductTable'


class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    }

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockInput = this.handleInStockInput.bind(this);
  }
  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div id="container">
        <Filter
          filtertext={this.state.filterText}
          instockonly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput} />

        <ProductTable
          products={this.props.products}
          filtertext={this.state.filterText}
          instockonly={this.state.inStockOnly} />
      </div>
    )
  }
}

export default FilterableProductTable