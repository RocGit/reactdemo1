import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  // 我们给 CommentList 加上 defaultProps 防止 comments 不传入的情况
  static defaultProps = {
    comments: []
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
            <Comment comment={comment} key={i} />
          )}
        </div>
      </div>
    )
  }
}

export default CommentList