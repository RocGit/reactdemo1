import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  // 我们在 CommentApp 的 state 中初始化一个数组，来保存所有的评论数据，并且通过 props 把它传递给 CommentList
  /*  
  “状态提升”
  当某个状态被多个组件依赖或者影响的时候，就把该状态提升到这些组件的最近公共父组件中去管理，
  用 props 传递数据或者函数来管理这种依赖或着影响的行为。
  */
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  handleSubmitComment(comment) {
    console.log(comment)
    alert(comment.username + "\n" + comment.content)

    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
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