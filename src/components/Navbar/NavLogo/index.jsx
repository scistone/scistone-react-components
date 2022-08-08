import React from 'react';


export default function NavLogo (props) {
    return(
        <div style={props.style} className='navigation-bar--logo'>
            <img style={props.logoImgStyle} src={props.logo} alt={props.alt}></img>
            <p style={props.titleStyle}>{props.title}</p>
        </div>
    );
};


