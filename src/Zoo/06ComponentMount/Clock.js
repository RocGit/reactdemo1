import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  // componentWillUnmount 就可以派上用场了，它的作用就是在组件销毁的时候，做这种清场的工作。例如清除该组件的定时器和其他的数据清理工作
  componentWillUnmount() {
    console.log('component Will Unmount Clock')
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <h1>
          <p>现在的时间是</p>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}

export default Clock