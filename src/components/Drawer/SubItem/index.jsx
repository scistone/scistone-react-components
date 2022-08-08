import React from 'react'

export default function SubItem(props) {
    return (
        <div className='hamburger-menu--sub-item' key={props.key}>
            <p  className='hamburger-menu--sub-item-label'>{props.title}</p>
        </div>
    )
}
