import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }

  // 我们给 CommentList 加上 defaultProps 防止 comments 不传入的情况
  static defaultProps = {
    comments: []
  }

  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    // const comments = [
    //   { username: 'Jerry', content: 'Hello' },
    //   { username: 'Tomy', content: 'World' },
    //   { username: 'Lucy', content: 'Good' }
    // ]

    return (
      <div>
        {/* {comments.map((comment, i) => {
          return (
            <div key={i}>
              {comment.username}：{comment.content}
            </div>
          )
        })} */}

        {/* <div>
          {comments.map((commentP, i) => <Comment comment={commentP} key={i} />)}
        </div> */}

        <div>
          {this.props.comments.map((comment, i) =>
            <Comment
              comment={comment}
              key={i}
              index={i}
              onDeleteComment={this.handleDeleteComment.bind(this)} />
          )}
        </div>
      </div>
    )
  }
}

export default CommentList