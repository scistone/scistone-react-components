import React, { Component } from 'react';
import NavItems from './NavItems';
import NavItem from './NavItem';
import NavLogo from './NavLogo';
import NavIcons from './NavIcons';

export default class Navbar extends Component {
    static Items = NavItems;
    static Item = NavItem;
    static Logo = NavLogo;
    static Icons = NavIcons;

    // navBarStyle = {
    //     position: this.props.style.position,
    //     height: this.props.style.height,
    //     color: this.props.style.color,
    //     backgroundColor: this.props.style.backgroundColor,
    //     boxShadow: this.props.style.boxShadow
    // };
    render() {
    return(
    <div 
        style = { this.props.style }
        className = 'navigation-bar'
            >

            { this.props.children }
        
    </div>
    )
    }
}
