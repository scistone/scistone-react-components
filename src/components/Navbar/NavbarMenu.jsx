import React from 'react';

import menuData from "../../data/menu_data.json"

export const NavbarMenu = () => {
    return(
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
    );
};


