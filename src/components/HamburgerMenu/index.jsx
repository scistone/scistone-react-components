import React, { useState } from 'react';

import menuData from "../../data/menu_data.json"
import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
}

export const HamburgerMenu = ({ setTitle }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={isOpen ? 'hamburger-menu' : 'ham'} >
            <nav role='navigation' >                
                <div id="menuToggle" >
                    <input type="checkbox"  onClick={() => setIsOpen(isOpen => !isOpen)}/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <motion.div
                        animate={isOpen ? "open" : "closed"}
                        variants={variants}
                        transition={{ duration: 0.5 }}
                        
                    >
                    {isOpen &&
                    <div className='hamburger-menu--items'>
                        {Object.keys(menuData.hamburger_menu_data).map((item, index) => {
                            return (
                                <div className='hamburger-menu--item' index={index}>
                                    <p onClick={() => setTitle(item)} className='hamburger-menu--item-label'>{item}</p>
                                    <div className='hamburger-menu--sub-items'>
                                        {menuData.hamburger_menu_data[item].map((subItem, subIndex) => (
                                            <div className='hamburger-menu--sub-item' index={subIndex}>
                                                <p onClick={() => setTitle(subItem)} className='hamburger-menu--sub-item-label'>{subItem}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
                </motion.div>
                </div>
            </nav>
        </div> 
    );
};
