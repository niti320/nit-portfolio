"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHome, faUser, faCode, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 465);
    };

    // Set initial state and listen for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <header className="header" data-aos="fade-in">
        <div className="navBar">
          <nav className="navLinks">
            <Link href="/" className={`navLink ${pathname === "/" ? "active" : ""}`}>
              {isMobile ? <FontAwesomeIcon icon={faHome} /> : "Home"}
            </Link>
            <Link href="/about" className={`navLink ${pathname === "/about" ? "active" : ""}`}>
              {isMobile ? <FontAwesomeIcon icon={faUser} /> : "About"}
            </Link>
            <Link href="/skills" className={`navLink ${pathname === "/skills" ? "active" : ""}`}>
              {isMobile ? <FontAwesomeIcon icon={faCode} /> : "Skills"}
            </Link>
            <Link href="/projects" className={`navLink resumeButton ${pathname === "/projects" ? "active" : ""}`}>
              {isMobile ? <FontAwesomeIcon icon={faProjectDiagram} /> : "Projects"}
            </Link>
          </nav>
          <div className="menu-icon">
            <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`horizontal-menu ${menuOpen ? "active" : ""}`}>
        <FontAwesomeIcon icon={faTimes} onClick={toggleMenu} className="close-icon" />
        <nav className="navLinks2">
          <a href="https://linkedin.com/in/nitinsharma003" className="navLink" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icons" /> {isMobile ? "" : "LinkedIn"}
          </a>
          <a href="https://github.com/niti320" className="navLink" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icons" /> {isMobile ? "" : "GitHub"}
          </a>
        </nav>
      </div>
    </>
  );
}
