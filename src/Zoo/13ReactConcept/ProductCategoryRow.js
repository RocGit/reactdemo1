import React from 'react'


class CategoryRow extends React.Component {
  render() {
    return (
      <div>
        {this.props.category}
      </div>
    )
  }
}

export default CategoryRow