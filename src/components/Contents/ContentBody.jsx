import React from 'react';

export const ContentBody = ({title}) => {
    return(
        <div className='content-body'>
            <div className='content-body-contents'>
                <h1>{title}</h1>
            </div>
        </div>
    );
};
