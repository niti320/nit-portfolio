"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faLink, faBars, faTimes, faMailBulk, faMailReply, faMailForward, faMessage, faMailReplyAll, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Typewriter } from "react-simple-typewriter";

import AOS from 'aos';

export default function Home() {

    AOS.init({
        offset: 120,
        duration: 800,
        easing: 'ease-in-out',
        once: false
    });
    return (
        <div
            id='Home'
            className="Homepage"
            style={{
                padding: "10px",
                minHeight: "800px",
                // backgroundImage: `linear-gradient(to bottom, #101010, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.5) 80%, #101010 100%), url('/assets/back2.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat"
            }}
        >


            <h1
                style={{ marginBottom: "-20px" }}
                className="text-white text-[clamp(2rem,5vw,3.5rem)] drop-shadow-none text-center"
                data-aos="flip-down"
            >
                turning{" "}
                <span className="text-[#11eeff] font-bold inline-block">
                   ideas
                </span>
            </h1>
            

            <h2
                className="text-white font-extralight text-[clamp(2rem,8vw,6rem)] drop-shadow-none text-center"
                data-aos="fade-in"
            >
                into{" "}
                <span className="text-white font-extrabold inline-block">
                    <Typewriter
                        words={["EXPERIENCES", "REALITY", "PRODUCTS", "SOLUTIONS"]}
                        loop={0} // Infinite loop
                        typeSpeed={80}
                        deleteSpeed={80}
                        delaySpeed={1000}
                    />
                </span>
            </h2>




            <h2 style={{ fontSize: "25px", fontFamily: "monospace" }} className='descText' data-aos="flip-up"> Nitin Sharma |    Software Developer</h2>
            <nav className="justLinks" data-aos="flip-up" style={{ gap: "0px" }}>

                <a href="https://linkedin.com/in/nitinsharma003" className="navLink" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className='icons' style={{ fontSize: "30px" }} />
                </a>

                <a href="https://github.com/niti320" className="navLink" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className='icons' style={{ fontSize: "30px" }} />
                </a>
                <a href="mailto:nitebreet2002@gmail.com" className="navLink" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className='icons' style={{ fontSize: "30px" }} />
                </a>
            </nav>

        </div>
    )
};