import React, { Component } from 'react'

class CommentInput extends Component {
  //用户可输入内容一个是用户名（username），一个是评论内容（content），我们在组件的构造函数中初始化一个 state 来保存这两个状态
  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }
  handleContentChange(event) {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({ username, content })
    }
    this.setState({ content: '' })
  }

  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button
            onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput