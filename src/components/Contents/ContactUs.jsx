import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import userData from "../../data/user_data.json"
import { ContactCard } from './ContactUs/ContactCard';

export const ContactUs = () => {
    const cleanUrl = (url) => {
        let result = url.replace("https://","")
        result = result.replace("www.","")
        return result
    }

    return(
        <div className='contact-us--body'>
            {userData.users.map((item,index)=>{
                return (
                   <ContactCard index={index} picture={item.picture} name={item.name} jobTitle={item.title} email={item.email} github={item.github} linkedin={item.linkedin} location={item.location}/>
                )
            })}
        </div>
    );
};
