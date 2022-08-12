import React from 'react'

export default function Container(props) {
  return (
    <div style={props.style} 
        id={props.id}
        className={
         (`${props.className} `) +
        'scistone-container' + 
        (props.col ? ' col' : '') +
        (props.col12 ? ' col-12' : '') +
        (props.col6 ? ' col-6' : '') +
        (props.col8 ? ' col-8' : '') +
        (props.col16 ? ' col-16' : '') +

        
        (props.row ? ' row' : '') +
        (props.row && props.rowSize === 'sm' ? ' sm' : '') + 
        (props.row && props.rowSize === 'md' ? ' md' : '') + 
        (props.row && props.rowSize === 'lg' ? ' lg' : '') +
        
        (props.offset40 ? ' offset-40' : '') +
        (props.offset50 ? ' offset-50' : '') +
        (props.offset25 ? ' offset-25' : '') +
        (props.offset33 ? ' offset-33' : '') +
        (props.offset66 ? ' offset-66' : '') 
        }>
        {props.children}
    </div>
  )
}

