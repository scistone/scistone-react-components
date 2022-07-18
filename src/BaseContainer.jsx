import React from 'react';
import logo from './images/scistone_logo.png'
import menuData from "./data/menu_data.json"
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
                        <p index={index}>{item}</p>
                    )
                })}
            </div>
            <div className='navigation-bar--extra'></div>
        </div>
    );
};
