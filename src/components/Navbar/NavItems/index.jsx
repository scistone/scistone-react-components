import React from 'react'

export default function NavItems(props,) {
    return (
        <div className='navigation-bar--items'>
            {props.children[0]}
            {props.children[1]}
            {props.children[2]}
            {props.children[3]}
            {props.children[4]}
            {props.children[5]}
        </div>
    )
}
