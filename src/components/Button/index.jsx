import React from 'react'

export default function Button(props) {
  
  return (
    <button 
        onClick={props.onClick} 
        className={
            'scistone-btn ' + 
            (props.size ? props.size : '') + 
            (props.type ? ` ${props.type}` : '') +
            (props.rounded ? ' rounded' : '')
            } 
        >
        <span>{props.children}</span>
    </button>
  )
}
