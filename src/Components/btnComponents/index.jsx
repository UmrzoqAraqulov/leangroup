import React, { Component } from 'react'
import './btnStyle.scss'

export class BtnComponents extends Component {
  render() {
    const btnTitle = this.props.children
    return (
      <button className='button'>
        {btnTitle}
      </button>
    )
  }
}

export default BtnComponents