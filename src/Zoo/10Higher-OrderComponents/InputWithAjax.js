import React, { Component } from 'react';

import WrapWithAjaxData from './WrapWithAjaxData';

class InputWithAjax extends Component {
  render() {
    return (
      <div>
        {
          JSON.stringify(this.props.data)
        }
      </div>
    )
  }
}

InputWithAjax = WrapWithAjaxData(InputWithAjax, 'username')

export default InputWithAjax