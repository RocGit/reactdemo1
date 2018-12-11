import React, { Component } from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

const App = () => (<h2>主页</h2>)
const Zhuanlan = () => (<div><h2>专栏</h2></div>)
// const Hot = () => (<div><h2>热门</h2></div>)
// const Content = () => (<h2>文章</h2>)
// 父组件中
const Hot = ({ match }) => (
  <div>
    <h2>热门</h2>
    <Link to={`${match.url}/article`}>文章</Link>&nbsp;|&nbsp;
    <Link to={`${match.url}/qa`}>问答</Link>&nbsp;|&nbsp;
    <Link to={`${match.url}/news`}>新闻</Link>
    <hr />
    <Route path={`${match.url}/:title`} component={Content}></Route>
  </div>
)

// 子组件中
const Content = ({ match }) => (
  <div>
    <h2>热门子目录</h2>
    <p>{match.params.title}</p>
  </div>
)

class Topic extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">主页</Link></li>
            <li><Link to="/hot">热门</Link></li>
            <li><Link to="/zhuanlan">专栏</Link></li>
          </ul>
          <hr />
          <Route exact path="/" component={App}></Route>
          <Route path="/hot" component={Hot} ></Route>
          <Route path="/zhuanlan" component={Zhuanlan}></Route>
        </div>
      </Router>
    )
  }
}

export default Topic