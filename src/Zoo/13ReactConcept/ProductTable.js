import React from 'react'
import CategoryRow from './ProductCategoryRow'


class ProductTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const filtertext = this.props.filtertext
    const instockonly = this.props.instockonly

    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function (product) {
      if (product.name.indexOf(filtertext) === -1 || (!product.stocked && instockonly)) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(<CategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<CategoryRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable