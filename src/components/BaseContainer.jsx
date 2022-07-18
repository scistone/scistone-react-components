import React from 'react';
import logo from '../images/scistone_logo.png'
import menuData from "../data/menu_data.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

export const BaseContainer = () => {
    return(
        <div className='navigation-bar'>
            <div className='navigation-bar--logo'>
                <img src={logo}></img>
                <p>Scistone</p>
            </div>
            <div className='navigation-bar--items'>
                {menuData.menu_data.map((item,index) => {
                    return (
                        <div className='navigation-bar--item'>
                            <p className='navigation-bar--item-label' index={index}>{item}</p>
                            <span class="navigation-bar--item-animation"></span>  
                        </div>
                    )
                })}
            </div>
            <div className='navigation-bar--extra'>
                <div className='navigation-bar--extra-icon-body'>
                    <FontAwesomeIcon className='navigation-bar--extra-icon' icon={faGithub}></FontAwesomeIcon>
                </div>
                <div className='navigation-bar--extra-icon-body'>
                    <FontAwesomeIcon className='navigation-bar--extra-icon' icon={faLinkedin}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};
