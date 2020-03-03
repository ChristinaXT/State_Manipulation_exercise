import React, { Component } from 'react'

class Button extends Component {
  render(){
    const { title, action } = this.props
    return(


      <button onClick = { action }>{ title }</button>

    )}
}
export default Button
