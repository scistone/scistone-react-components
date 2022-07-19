import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import userData from "../../data/user_data.json"

export const ContactUs = () => {
    const cleanUrl = (url) => {
        let result = url.replace("https://","")
        result = result.replace("www.","")
        return result
    }
    console.log(userData)
    return(
        <div className='contact-us--body'>
            {userData.users.map((item,index)=>{
                return (
                    <div className='contact-us--user'>
                        <div className='contact-us--user-picture'>
                            <img src={item.picture}></img>
                        </div>

                        <div className='contact-us--user-name'>
                            <h5>{item.name}</h5>
                        </div>

                        <div className='contact-us--user-info'>
                            <div className='contact-us--user-info-icons'>
                                <FontAwesomeIcon icon={faBriefcase}/>
                                <a>{item.title}</a>
                            </div>

                            <div className='contact-us--user-info-icons'>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <a>{item.email}</a>
                            </div>

                            <div className='contact-us--user-info-icons'>
                                <FontAwesomeIcon icon={faGithub}/>
                                <a>{cleanUrl(item.github)}</a>
                            </div>

                            <div className='contact-us--user-info-icons'>
                                <FontAwesomeIcon icon={faLinkedin}/>
                                <a>{cleanUrl(item.linkedin)}</a>
                            </div>

                            <div className='contact-us--user-info-icons'>
                                <FontAwesomeIcon icon={faMapPin}/>
                                <a>{item.location}</a>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    );
};
