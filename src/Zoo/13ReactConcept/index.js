import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import FilterProductTable from './FilterableProductTable'


const style = theme => ({
  body: {
    padding: '5px'
  }
})

var PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

class Index extends React.Component {
  render() {
    return (
      <div>
        <FilterProductTable products={PRODUCTS} />
      </div>
    )
  }
}

export default withStyles(style)(Index)