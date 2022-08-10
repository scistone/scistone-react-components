import React, { useState } from 'react'

export default function Toggle(props) {

    return (
        <div id="menuToggle" style={props.style}>
            <input type="checkbox" onClick={props.onClick} />
            <span className='primary-span'></span>
            <span className='primary-span'></span>
            <span className='primary-span'></span>
        </div>
    )
}
