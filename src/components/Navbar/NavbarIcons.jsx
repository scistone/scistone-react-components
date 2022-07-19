import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

export const NavbarIcons = () => {
    return (
        <div className='navigation-bar--extra'>
            <div className='navigation-bar--extra-icon-body'>
                <a href='https://github.com/scistone' target="_blank">
                    <FontAwesomeIcon  className='navigation-bar--extra-icon' icon={faGithub}></FontAwesomeIcon>
                </a>
            </div>
            <div className='navigation-bar--extra-icon-body'>
                <a href='https://www.linkedin.com/company/scistonetech/' target="_blank">
                    <FontAwesomeIcon className='navigation-bar--extra-icon' icon={faLinkedin}></FontAwesomeIcon>
                </a>
            </div>
        </div>
    )
}