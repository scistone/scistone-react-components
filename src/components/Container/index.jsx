import React from 'react'

export default function Container(props) {
  return (
    <div style={props.style} 
        className={
        'scistone-container ' + 
        (props.col ? 'col' : '') +
        (props.col12 ? 'col-12' : '') +
        (props.col6 ? 'col-6' : '') +
        (props.col8 ? 'col-8' : '') +
        (props.col16 ? 'col-16' : '') +
        (props.row ? 'row' : '') 
        } >
        {props.children}
    </div>
  )
}

