import React from 'react'

export default function Container(props) {
  return (
    <div style={props.style} 
        className={
        'scistone-container ' + 
        (props.col ? 'col' : '') +
        (props.row ? 'row' : '') 
        } >
        {props.children}
    </div>
  )
}

