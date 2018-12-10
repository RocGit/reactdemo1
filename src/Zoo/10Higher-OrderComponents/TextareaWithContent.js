import React, { Component } from 'react';

import WrapWithLoadData from './WrapWithLoadData'

class TextareaWithContent extends Component {
  render() {
    return (
      <div>
        <textarea value={JSON.stringify(this.props.data)} rows={10} cols={60} />
      </div>
    )
  }
}

TextareaWithContent = WrapWithLoadData(TextareaWithContent, 'comments')
export default TextareaWithContent