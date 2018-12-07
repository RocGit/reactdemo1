import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  // 我们在 CommentApp 的 state 中初始化一个数组，来保存所有的评论数据，并且通过 props 把它传递给 CommentList
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  handleSubmitComment(comment) {
    console.log(comment)
    alert(comment.username + "\n" + comment.content)

    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput
          onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp