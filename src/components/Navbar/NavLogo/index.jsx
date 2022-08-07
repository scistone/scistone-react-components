import React from 'react';


export default function NavLogo (props) {
    return(
        <div className='navigation-bar--logo'>
            <img src={props.logo} alt={props.alt}></img>
            <p>{props.title}</p>
        </div>
    );
};


