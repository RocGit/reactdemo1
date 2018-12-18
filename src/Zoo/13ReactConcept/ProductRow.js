import React from 'react'


class ProductRow extends React.Component {
  render() {
    const name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{ color: 'red' }}>
        {this.props.product.name}
      </span>

    return (
      <div>
        {name}
        {this.props.product.price}
      </div>
    )
  }
}

export default ProductRow