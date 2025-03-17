"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { faHome, faUser, faCode, faLink, faBars, faTimes, faMailBulk, faMailReply, faMailForward, faMessage, faMailReplyAll, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5, faCss3Alt, faJsSquare, faPython, faPhp, faLetterboxd, faMailchimp, faJava } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import { Link, Element } from 'react-scroll';
import Home from '@/components/home';
import About from '@/components/about';
import Skills from '@/components/skills';
import Header from '@/components/header';
import Projects from '@/components/projects';

function App() {
  const targetSectionRef = useRef(null);

  const handleScroll = () => {
    if (targetSectionRef.current) {
      const topOffset = 80;

      const elementPosition = targetSectionRef.current.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  const iconMap = {
    faReact,
    faJsSquare,
    faHtml5,
    faCss3Alt,
    faPython,
    faPhp
  };


  AOS.init({
    offset: 120,
    duration: 800,
    easing: 'ease-in-out',
    once: false
  });


  return (

    <div className="App custom-cursor" >
     <Header></Header>
      <Home></Home>

      <div className="InnerBox">
        <main  className="mainBody">
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
        </main>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Nitin | Portfolio  | {'Yes i made this webiste'}</p>
      </footer>
    </div>
  );
}

export default App;
