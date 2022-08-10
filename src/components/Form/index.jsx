import React, { Component } from 'react'
import Item from './Item'

export default class Form extends Component {
  static Item = Item;

  render() {
    return (
      <form className='scistone-form'>
        {this.props.children}
      </form>
    )
  }
}
