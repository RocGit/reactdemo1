import React, { Component } from 'react'

// 首先我们需要导入一些组件...
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import hashHistory from 'history/createHashHistory'

const About = () => (<div>About page</div>)
const Inbox = () => (<div>Inbox page</div>)

// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* 把 <a> 变成 <Link> */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

        {/*
          接着用 `this.props.children` 替换 `<Child>`
          router 会帮我们找到这个 children
        */}
        {this.props.children}
      </div>
    )
  }
}

// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
// React.render((
//     <Router>
//       <Route path="/" component={App}>
//         <Route path="about" component={About} />
//         <Route path="inbox" component={Inbox} />
//       </Route>
//     </Router>
//   ), document.body)
class UseRouter extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App}>
          <Route path="about" component={About} />
          <Route path="inbox" component={Inbox} />
        </Route>
      </Router>
    )
  }
}

export default UseRouter