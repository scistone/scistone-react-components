import React from 'react';

import { ContactUs } from './ContactUs';

export const ContentBody = ({title}) => {

    const components = {
        "Product Cards":"",
        "Embed Video":"",
        "Carousels":"",
        "Buttons":"",
        "Extra":"",
        "Contact Us":<ContactUs/>
    }

    return(
        <div className='content-body'>
            <div className='content-body-contents'>
                <h1>{title}</h1>
                {components[title]}
            </div>
        </div>
    );
};
