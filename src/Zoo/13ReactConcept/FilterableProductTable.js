import React from 'react'
import Filter from './SearchBar'
import ProductTable from './ProductTable'


class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  render() {
    return (
      <div id="container">
        <Filter filtertext={this.state.filterText} instockonly={this.state.inStockOnly} />
        <ProductTable products={this.props.products} filtertext={this.state.filterText} instockonly={this.state.inStockOnly} />
      </div>
    )
  }
}

export default FilterableProductTable