import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {
    // comment: PropTypes.object
    comment: PropTypes.object.isRequired
    /*
PropTypes.array
PropTypes.bool
PropTypes.func
PropTypes.number
PropTypes.object
PropTypes.string
PropTypes.node
PropTypes.element
https://reactjs.org/docs/typechecking-with-proptypes.html
    */
  }

  render() {
    const { comment } = this.props
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username} </span>：
        </div>
        <p>{comment.content}</p>
      </div>
    )
  }
}

class Index extends Component {
  render() {
    return (
      <div>
        <Comment comment={{ username: 'userName', content: 'hello' }} />
        {/* <Comment comment={1} /> */}
        {/* <Comment /> */}
      </div>
    )
  }
}

export default Index