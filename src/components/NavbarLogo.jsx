import React from 'react';
import logo from '../images/scistone_logo.png'


export const NavbarLogo = () => {
    return(
        <div className='navigation-bar--logo'>
            <img src={logo}></img>
            <p>Scistone</p>
        </div>
    );
};


