import React from 'react';

export default function NavItem(props) {
    const lineColor = props.lineColor
    return (
        <div className='navigation-bar--item'>
            <a href={props.url}> 
                <p style={{color:props.titleColor}} className='navigation-bar--item-label'>{props.title}</p>
            </a>
            <span style={{backgroundColor:lineColor}} className='navigation-bar--item-animation'></span>
        </div>
    );
};


