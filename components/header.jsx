"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faHome, faUser, faCode, faLink, faBars, faTimes, faMailBulk, faMailReply, faMailForward, faMessage, faMailReplyAll, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link, Element } from 'react-scroll';

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <>
            <header className='header' data-aos="fade-in">
                <div className="navBar">

                    <nav className="navLinks">

                        <Link offset={-100} to="Home" smooth={true} duration={800} className="navLink">Home</Link>

                        <Link
                            duration={800}
                            offset={-120} to="About" smooth={true} className="navLink">About</Link>
                        <Link offset={-100} to="Skills" smooth={true} duration={800} className="navLink">Skills</Link>
                        <Link offset={-180} to="Projects" smooth={true} duration={800} className="navLink resumeButton">Projects</Link>
                    </nav>
                    <div className="menu-icon"><FontAwesomeIcon icon={faBars} onClick={toggleMenu} /></div>


                </div>
            </header>

            <div className={`horizontal-menu ${menuOpen ? 'active' : ''}`}>
                <FontAwesomeIcon
                    icon={!menuOpen ? faTimes : faReact}
                    onClick={toggleMenu}
                    className="close-icon"
                />
                <nav className="navLinks2">
                    <a href="https://linkedin.com/in/nitinsharma003" className="navLink" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className='icons' /> LinkedIn
                    </a>
                    <a href="https://github.com/niti320" className="navLink" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className='icons' /> GitHub
                    </a>
                </nav>
            </div></>

    )
};