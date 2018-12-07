import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Card extends Component {
  render() {
    console.log(this.props.children)

    return (
      <div className='card'>
        <div className='card-content'>
          {this.props.content}
        </div>
        <div className='card-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

class Layout extends Component {
  render() {
    return (
      <div className='two-cols-layout'>
        <div className='sidebar'>
          {this.props.children[0]}
        </div>
        <div className='main'>
          {this.props.children[1]}
        </div>
      </div>
    )
  }
}

class Index extends Component {
  render() {
    return (
      <div>
        <Card content={
          <div>
            <h2>React.js 小书 content</h2>
            <div>开源、免费、专业、简单</div>
            订阅：<input />
          </div>
        } />

        <hr></hr>
        <Card>
          <h2>React.js 小书 children</h2>
          <div>开源、免费、专业、简单</div>
          订阅：<input />
        </Card>

        <hr></hr>
        <Layout>
          <h2>React.js 小书 Layout</h2>
          <div>开源、免费、专业、简单</div>
          订阅：<input />
        </Layout>
      </div>
    )
  }
}

// ReactDOM.render(<Title />, document.getElementById('root'));
export default Index