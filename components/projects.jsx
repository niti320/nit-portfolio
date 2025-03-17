"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faLink, faBars, faTimes, faMailBulk, faMailReply, faMailForward, faMessage, faMailReplyAll, faEnvelope, faComputer, faDatabase, faChartBar, faChartArea, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import projectsData from '../app/projects.json';

import { faReact, faHtml5, faCss3Alt, faJsSquare, faPython, faPhp, faLetterboxd, faMailchimp, faJava } from '@fortawesome/free-brands-svg-icons';
export default function Projects() {
    const iconMap = {
        faReact,
        faJsSquare,
        faHtml5,
        faCss3Alt,
        faPython,
        faPhp
    };
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(projectsData);
    }, []);
    return (

        <div className="portfolioBox">
            <h1 id='projectsSection' data-aos="fade-up" data-aos-duration="500" className="text-3xl font-bold mb-20">{'Projects'}</h1>
            <div id='Projects' >
                {projectsData.map((project, index) => (
                    <div
                        className="ProjectBox"
                        data-aos="fade-up"
                        key={index}


                    >

                        <div className='projectImage'>
                            <div className="overlay"></div>
                            <img src={project.backgroundImage} alt="" />
                        </div>


                        <div className="info" >
                            <div className="ProjectTitle">{project.title}</div>

                            <div className="ProjectDesc">{project.description}</div>

                            <div className="LanguagesBar">
                                {project.languages.map((lang, langIndex) => {
                                    if (lang.startsWith("fa")) {
                                        let iconColor;
                                        switch (lang) {
                                            case 'faHtml5':
                                                iconColor = '#e5532d';
                                                break;
                                            case 'faJsSquare':
                                                iconColor = '#feb247';
                                                break;
                                            case 'faReact':
                                                iconColor = '#1099ee';
                                                break;
                                            case 'faCss3Alt':
                                                iconColor = '#1099ee';
                                                break;
                                            case 'faPython':
                                                iconColor = 'yellow';
                                                break;
                                            case 'faPhp':
                                                iconColor = 'pink';
                                                break;
                                            default:
                                                iconColor = 'black';
                                        }

                                        return (
                                            <div className="w-10 h-10 flex items-center justify-center bg-[#151515] rounded-md" key={langIndex}>
                                                <FontAwesomeIcon icon={iconMap[lang]} style={{color:iconColor,fontSize:"20px"}} />
                                            </div>

                                        );
                                    } else {
                                        return (
                                            <div className="w-10 h-10 flex items-center justify-center bg-[#151515] rounded-md" key={langIndex}>
                                                <img src={`${lang}`} alt="Custom Icon" className="w-6 h-6 object-contain" />
                                            </div>
                                        );
                                    }
                                })}
                            </div>


                            <div className="Links"> <a href={project.githubLink} className="navLink" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faGithub} className='icons' />GitHub
                            </a>
                                <a href={project.actualLink} {...(project.fileId === 3 ? { download: true } : {})} className="navLink" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faLink} className='icons' />{project.typer}
                                </a></div>
                        </div>



                    </div>
                ))}
            </div>
        </div>
    )
};



