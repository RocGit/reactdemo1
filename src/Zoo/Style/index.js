import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Editor extends Component {
  constructor() {
    super()
    this.state = {
      content: '<h1>React.js 小书</h1>'
    }
  }

  render() {
    return (
      <div>
        <div className='editor-wrapper'>
          {this.state.content}
        </div>

        <div className='editor-wrapper' dangerouslySetInnerHTML={{ __html: this.state.content }}>
        </div>

        <h1 style={{ fontSize: '16px', color: 'red' }}>
          React.js 小书 in Component
        </h1>
      </div>
    )
  }
}


class EditorBlue extends Component {
  constructor() {
    super()
    this.state = {
      color: 'blue'
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ fontSize: '20px', color: this.state.color }}>React.js 小书 blue Component</h1>
      </div>
    )
  }
}

// 在 React.js 中你需要把 CSS 属性变成一个对象再传给元素
class Index extends Component {
  render() {
    return (
      <div>
        <Editor />
        <h1 style={{ fontSize: '16px', color: 'green' }}>
          React.js 小书
        </h1>

        <EditorBlue />
      </div>
    )
  }
}

export default Index