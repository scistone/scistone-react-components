import React from "react";

import './ContactCard.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faEnvelope, faMapPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faInstagram, faLinkedin, faPinterest, faSnapchat, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const ContactCard = ({
    picture,
    name,
    jobTitle = "",
    email = "",
    phone = "",
    instagram = "",
    twitter = "",
    facebook = "",
    pinterest = "",
    linkedin = "",
    github = "",
    youtube = "",
    snapchat = "",
    location = "",
    backgroundColor = "#393E46",
    textColor = "#EEEEEE",
    boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius = "12px",
}) => {

    const cleanUrl = (url) => {
        let result = url.replace("https://", "")
        result = result.replace("www.", "")
        return result
    }
    return (
        <div className="contact-us--user" style={{ backgroundColor: backgroundColor, boxShadow: boxShadow, borderRadius: borderRadius }}>
            <div className="contact-us--user-picture" style={{ boxShadow: boxShadow }}>
                <img src={picture}></img>
            </div>

            <div className="contact-us--user-name">
                <h2>{name}</h2>
            </div>

            <div className="contact-us--user-info" style={{ color: textColor }}>
                {jobTitle ?
                    <div className="contact-us--user-info-icons">
                        <FontAwesomeIcon icon={faBriefcase} />
                        <a>{jobTitle}</a>
                    </div>
                    : null}

                {email ?
                    <div className='contact-us--user-info-icons'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href={"mailto:" + email}>{email}</a>
                    </div>

                    : null}

                {phone ?
                    <div className="contact-us--user-info-icons">
                        <FontAwesomeIcon icon={faPhone} />
                        <a href={"tel:" + phone} target="_blank">
                            {cleanUrl(phone)}
                        </a>
                    </div>
                    : null}

                {instagram ?
                    <div className="contact-us--user-info-icons">
                        <FontAwesomeIcon icon={faInstagram} />
                        <a href={instagram} target="_blank">
                            {cleanUrl(instagram)}
                        </a>
                    </div>
                    : null}

                {twitter ?
                    <div className="contact-us--user-info-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <a href={twitter} target="_blank">
                            {cleanUrl(twitter)}
                        </a>
                    </div>
                    : null}

                {facebook ?
                    <div className="contact-us--user-info-icons">
                        <FontAwesomeIcon icon={faFacebook} />
                        <a href={facebook} target="_blank">
                            {cleanUrl(facebook)}
                        </a>
                    </div>
                    : null}

                {pinterest ?
                    <div className="contact-us--user-info-icons">
                        <FontAwesomeIcon icon={faPinterest} />
                        <a href={pinterest} target="_blank">
                            {cleanUrl(pinterest)}
                        </a>
                    </div>
                    : null}

                {linkedin ?
                    <div className="contact-us--user-info-icons">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <a href={linkedin} target="_blank">
                            {cleanUrl(linkedin)}
                        </a>
                    </div>
                    : null}

                {github ?
                    <div className="contact-us--user-info-icons">
                        <FontAwesomeIcon icon={faGithub} />
                        <a href={github} target="_blank">
                            {cleanUrl(github)}
                        </a>
                    </div>
                    : null}

                {youtube ?
                    <div className="contact-us--user-info-icons">
                        <FontAwesomeIcon icon={faYoutube} />
                        <a href={youtube} target="_blank">
                            {cleanUrl(youtube)}
                        </a>
                    </div>
                    : null}

                {snapchat ?
                    <div className="contact-us--user-info-icons">
                        <FontAwesomeIcon icon={faSnapchat} />
                        <a href={snapchat} target="_blank">
                            {cleanUrl(snapchat)}
                        </a>
                    </div>
                    : null}
                    
                {location ?
                    <div className="contact-us--user-info-icons">
                        <FontAwesomeIcon icon={faMapPin} />
                        <a>{location}</a>
                    </div>
                    : null}
            </div>
        </div>
    );
};
