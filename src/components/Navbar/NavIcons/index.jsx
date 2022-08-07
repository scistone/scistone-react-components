import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavIcons(props) {
    const icons = props.icons
    return (
        <div className='navigation-bar--extra'>
            {icons.map((item, index) => {
                return (
                    <div className='navigation-bar--extra-icon-body' key={index}>
                        <a href={item.url} target="_blank" rel='noreferrer'>
                            <FontAwesomeIcon className='navigation-bar--extra-icon' icon={item.icon}></FontAwesomeIcon>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}