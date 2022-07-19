import React, { useState } from 'react';

import {HamburgerMenu} from './HamburgerMenu/HamburgerMenu'
import {ContentBody} from "./Contents/ContentBody"

export const BaseContainer = () => {
    const [title, setTitle] = useState("Product Cards")
    return(
        <div className='main-container'>
            <HamburgerMenu setTitle={setTitle}/>
            <ContentBody title={title}/>
        </div>
    );
};
