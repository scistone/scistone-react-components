import React from 'react'

export default function Item(props) {
    return (
        <div className='hamburger-menu--item' key={props.index}>
            <p className='hamburger-menu--item-label'>{props.title}</p>
        </div>
    )
}
