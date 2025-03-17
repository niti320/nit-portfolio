"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import {
  faHome,
  faUser,
  faCode,
  faLink,
  faBars,
  faTimes,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faPython,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import { Link, Element } from "react-scroll";
import Home from "@/components/home";
import About from "@/components/about";
import Skills from "@/components/skills";
import Header from "@/components/header";
import Projects from "@/components/projects";

function App() {
  const targetSectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []); // ✅ Run only on mount

  const handleScroll = () => {
    if (typeof window !== "undefined" && targetSectionRef.current) {
      const topOffset = 80;
      const elementPosition = targetSectionRef.current.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition - topOffset,
        behavior: "smooth",
      });
    }
  };

  const iconMap = {
    faReact,
    faJsSquare,
    faHtml5,
    faCss3Alt,
    faPython,
    faPhp,
  };

  return (
    <div className="App custom-cursor">
      <Header />
      <Home />

      <div className="InnerBox">
        <main className="mainBody">
          <About />
          <Skills />
          <Projects />
        </main>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Nitin | Portfolio | {"Yes, I made this website"}</p>
      </footer>
    </div>
  );
}

export default App;
