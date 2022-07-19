import React from 'react';

import menuData from "../../data/menu_data.json"

export const HamburgerMenu = ({setTitle}) => {
    return(
        <div className='hamburger-menu'>
            <h1>Menu</h1>
            <div className='hamburger-menu--items'>
            {Object.keys(menuData.hamburger_menu_data).map((item,index)=>{
                return (
                    <div className='hamburger-menu--item' index={index}>
                        <p onClick={()=> setTitle(item)} className='hamburger-menu--item-label'>{item}</p>
                        <div className='hamburger-menu--sub-items'>
                        {menuData.hamburger_menu_data[item].map((subItem,subIndex)=>(
                            <div className='hamburger-menu--sub-item' index={subIndex}>
                                <p onClick={()=> setTitle(subItem)} className='hamburger-menu--sub-item-label'>{subItem}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    );
};
