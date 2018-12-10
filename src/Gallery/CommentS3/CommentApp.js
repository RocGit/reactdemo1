import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import WrapWithLoadData from './WrapWithLoadData'

class CommentApp extends Component {
  static propTypes = {
    data: PropTypes.any,
    saveData: PropTypes.func.isRequired
  }
  // 我们在 CommentApp 的 state 中初始化一个数组，来保存所有的评论数据，并且通过 props 把它传递给 CommentList
  /*  
  “状态提升”
  当某个状态被多个组件依赖或者影响的时候，就把该状态提升到这些组件的最近公共父组件中去管理，
  用 props 传递数据或者函数来管理这种依赖或着影响的行为。
  */
  // constructor() {
  //   super()
  //   this.state = {
  //     comments: []
  //   }
  // }
  constructor(props) {
    super(props)
    this.state = { comments: props.data }
  }

  componentWillMount() {
    this._loadComments()
  }

  _loadComments() {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }

  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleSubmitComment(comment) {
    console.log(comment)
    // alert(comment.username + "\n" + comment.content)

    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments
    comments.push(comment)
    this.setState({ comments })
    // this._saveComments(comments)
    this.props.saveData(comments)
  }
  handleDeleteComment(index) {
    console.log("deleted Index: " + index)
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
    // this._saveComments(comments)
    this.props.saveData(comments)
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput
          onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment.bind(this)} />
      </div>
    )
  }
}

CommentApp = WrapWithLoadData(CommentApp, 'comments')
export default CommentApp