import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Clock from './Clock'

/*
ReactDOM.render(
 <Header />, 
  document.getElementById('root')
)

ReactDOM.render(
  React.createElement(Header, null), 
  document.getElementById('root')
)

// React.createElement 中实例化一个 Header
const header = new Header(props, children)
// React.createElement 中调用 header.render 方法渲染组件的内容
const headerJsxObject = header.render()

// ReactDOM 用渲染后的 JavaScript 对象来来构建真正的 DOM 元素
const headerDOM = createDOMFromObject(headerJsxObject)
// ReactDOM 把 DOM 元素塞到页面上
document.getElementById('root').appendChild(headerDOM)

****React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载****
*/


class Header extends Component {
  constructor() {
    super()
    console.log('construct')
  }

  componentWillMount() {
    console.log('component will mount')
  }

  componentDidMount() {
    console.log('component did mount')
  }

  // componentWillUnmount() {
  //   console.log('component Will Unmount ')
  //   clearInterval(this.timer)
  // }

  render() {
    console.log('render')
    return (
      <div>
        <h1 className='title'>React 小书</h1>
      </div>
    )
  }
}

class Index extends Component {
  constructor() {
    super()
    this.state = {
      isShowHeader: true,
      isShowClock: true
    }
  }

  handleShowOrHide() {
    this.setState({
      isShowHeader: !this.state.isShowHeader,
    })
  }

  handleShowOrHideClock() {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }

  render() {
    return (
      <div>
        {this.state.isShowHeader ? <Header /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或者隐藏标题
        </button>

        <hr></hr>
        {this.state.isShowClock ? <Clock /> : null}
        <button onClick={this.handleShowOrHideClock.bind(this)}>
          显示或隐藏时钟
        </button>
      </div>
    )
  }
}

// ReactDOM.render(<Index />, document.getElementById('root'));
export default Index