import React from 'react';

export default function NavItem(props) {
    const lineColor = props.lineColor
    return (
        <div className='navigation-bar--item'>
            <p className='navigation-bar--item-label'>{props.title}</p>
            <span style={{backgroundColor:lineColor}} className='navigation-bar--item-animation'></span>
        </div>
    );
};


