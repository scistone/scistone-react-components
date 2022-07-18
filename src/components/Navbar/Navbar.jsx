import React from 'react';

import {NavbarIcons} from './NavbarIcons'
import {NavbarLogo} from './NavbarLogo'
import {NavbarMenu} from './NavbarMenu'

export const Navbar = () => {
    return(
        <div className='navigation-bar'>
            <NavbarLogo/>
            <NavbarMenu/>
            <NavbarIcons/>
        </div>
    );
};
