import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class LikeButton extends Component {
  constructor() {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton() {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render() {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? '取消' : '点赞'} 👍
      </button>
    )
  }
}

class Index extends Component {
  render() {
    return (
      <div>
        <LikeButton></LikeButton>
        <p>state 的主要作用是用于组件保存、控制、修改自己的可变状态。
          state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。
          你可以认为 state 是一个局部的、只能被组件自身控制的数据源。
          state 中状态可以通过 this.setState 方法进行更新，setState 会导致组件的重新渲染。</p>
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'));