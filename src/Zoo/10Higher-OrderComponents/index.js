import React, { Component } from 'react';

import InputWithUserName from './InputWithUserName'
import TextareaWithContent from './TextareaWithContent'

import AjaxData from './WrapWithAjaxData'
/*
高阶组件的作用其实不言而喻，其实就是为了组件之间的代码复用。
组件可能有着某些相同的逻辑，把这些逻辑抽离出来，放到高阶组件中进行复用。
高阶组件内部的包装组件和被包装组件之间通过 props 传递数据。
*/
class Index extends Component {
  render() {
    return (
      <div>
        用户名：<InputWithUserName />
        <hr />
        内容：<TextareaWithContent />

        AjaxData:<AjaxData />
      </div>
    )
  }
}

export default Index