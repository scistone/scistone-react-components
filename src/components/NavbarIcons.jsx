import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

export const NavbarIcons = () => {
    return (
        <div className='navigation-bar--extra'>
            <div className='navigation-bar--extra-icon-body'>
                <FontAwesomeIcon className='navigation-bar--extra-icon' icon={faGithub}></FontAwesomeIcon>
            </div>
            <div className='navigation-bar--extra-icon-body'>
                <FontAwesomeIcon className='navigation-bar--extra-icon' icon={faLinkedin}></FontAwesomeIcon>
            </div>
        </div>
    )
}