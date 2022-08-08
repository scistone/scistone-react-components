// import React, { Component } from 'react'

// import menuData from "../../data/menu_data.json"
// import { motion } from "framer-motion"
// import Item from './Item'
// import SubItem from './SubItem'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

// const variants = {
//     open: { opacity: 1, y: 0 },
//     closed: { opacity: 0, y: "-100%" },
// }

// export default class DrawerMenu extends Component {
//     static Item = Item;
//     static SubItem = SubItem;

//     constructor(props) {
//         super(props);
//         this.state = {
//           isOpen: false
//         };
//       }
//   render() {
//     return (
//         <>
//         <FontAwesomeIcon className='toggle-icon' onClick={() => this.setState({isOpen : !this.state.isOpen}) } icon={faBars}/>

//         <div className='hamburger-menu' >
//         <nav role='navigation' >    
//                 <motion.div
//                     animate={this.state.isOpen ? "open" : "closed"}
//                     variants={variants}
//                     transition={{ duration: 0.5 }}
//                     className='hamburger-menu--items'
//                 >

//                 { this.state.isOpen && this.props.children }
//             </motion.div>
//         </nav>
//     </div> 
//         </>
//     )
//   }
// }




import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


export const Drawer = (props) => {

    return (
        <div className={`scistone-drawer ${props.visible ? 'drawer__container' : ''}`} >
            <div className='scistone-drawer-mask' onClick={props.onClose}>
            </div>
            <div className='scistone-drawer-content' >
                <div className='scistone-drawer-wrapper-body'>
                    {props.header &&
                        <div className="scistone-drawer-header">
                            <div className="scistone-drawer-header-title">
                                <button onClick={props.onClose} className="scistone-drawer-close">
                                    {props.closeIcon ?
                                        <FontAwesomeIcon icon={props.closeIcon} />
                                        :
                                        <FontAwesomeIcon icon={faX} />
                                    }
                                </button>
                                <div className="scistone-drawer-title">{props.headerTitle}</div>
                            </div>
                        </div>
                    }
                    <div className='scistone-drawer-body'>
                        {props.visible && props.children}

                    </div>

                </div>

            </div>
        </div>
    );
};


// <div className='hamburger-menu--items'>
//                         {Object.keys(menuData.hamburger_menu_data).map((item, index) => {
//                             return (
//                                 <div className='hamburger-menu--item' index={index}>
//                                     <p onClick={() => setTitle(item)} className='hamburger-menu--item-label'>{item}</p>
//                                     <div className='hamburger-menu--sub-items'>
//                                         {menuData.hamburger_menu_data[item].map((subItem, subIndex) => (
//                                             <div className='hamburger-menu--sub-item' index={subIndex}>
//                                                 <p onClick={() => setTitle(subItem)} className='hamburger-menu--sub-item-label'>{subItem}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>