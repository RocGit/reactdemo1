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

    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    const likedText = this.props.likedText || '取消'
    const unlikedText = this.props.unlikedText || '点赞'
    const wordings = this.props.wordings || {
      likedText: '取消',
      unlikedText: '点赞'
    }
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? likedText : unlikedText} 👍
        {this.state.isLiked ? wordings.likedText : wordings.unlikedText} 👍
      </button>
    )
  }
}

class Index extends Component {
  constructor() {
    super()
    this.state = {
      likedText: '已赞',
      unlikedText: '赞'
    }
  }

  handleClickOnChange() {
    this.setState({
      likedText: '取消',
      unlikedText: '点赞'
    })
    alert("change");
  }

  render() {
    return (
      <div>
        <LikeButton></LikeButton>
        <LikeButton likedText='已赞' unlikedText='赞' />
        <LikeButton
          wordings={{ likedText: '已赞', unlikedText: '赞' }}
          onClick={() => { console.log('Click on like button!'); alert("hello prop onClick") }} />

        <hr></hr>
        <LikeButton
          likedText={this.state.likedText}
          unlikedText={this.state.unlikedText} />
        <div>
          <button onClick={this.handleClickOnChange.bind(this)}>
            修改 wordings
          </button>
        </div>
        <p>
          props 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。
          它是外部传进来的配置参数，组件内部无法控制也无法修改。
          除非外部组件主动传入新的 props，否则组件的 props 永远保持不变。
        </p>
        <p>state 是让组件控制自己的状态，props 是让外部对组件自己进行配置。</p>
        <p>尽量少地用 state，尽量多地用 props。</p>
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'));
