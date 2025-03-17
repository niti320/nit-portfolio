import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faLink, faBars, faTimes, faMailBulk, faMailReply, faMailForward, faMessage, faMailReplyAll, faEnvelope, faComputer, faDatabase, faChartBar, faChartArea, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faReact, faHtml5, faCss3Alt, faJsSquare, faPython, faPhp, faLetterboxd, faMailchimp, faJava } from '@fortawesome/free-brands-svg-icons';
export default function Skills() {
    return (

        <div id='Skills' className="portfolioBox" style={{ justifyContent: "flex-start", padding: "10px" }}>
            <section className="text-white py-2 px-2">
                <div className=" mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-20">My Expertise</h1>
                    <p className="text-white-400 font-mono mb-10">
                        Experienced in both functional and OOP: Python, Java,
                        JavaScript, C++.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {/* Software Development */}
                        <div className="border border-white-700 p-6 rounded-lg gap-6 ">
                            <div className="flex items-center w-full space-x-3 mb-4">
                                <FontAwesomeIcon icon={faComputer} style={{ fontSize: "30px" }} />
                                <h2 className="text-xl text-left">
                                    <span className="border-b-pink-500 border-b-2 font-bold">Software</span>
                                    <br />
                                    Development
                                </h2>
                            </div>
                            <p className="text-gray-400 font-mono mb-10">
                                Experienced in both functional and OOP: Python, Java,
                                JavaScript, C++.
                            </p>

                            <div className="skill" data-aos="flip-up">
                                <img style={{ width: "30px", height: "30px" }} src={`/assets/icons/python.webp`} className="skillIcon" />
                                <span>Python</span>

                            </div>
                            <div className="skill" data-aos="flip-up">
                                <FontAwesomeIcon icon={faPhp} className="skillIcon" style={{ color: "white" }} />
                                <span>Php</span>

                            </div>

                            <div className="skill" data-aos="flip-up">
                                <img style={{ width: "30px", height: "30px" }} src={`/assets/icons/cpp.png`} className="skillIcon" />
                                <span>C / C++</span>


                            </div>
                            <div className="skill" data-aos="flip-up">
                                <img style={{ width: "30px", height: "30px" }} src={`/assets/icons/java.png`} className="skillIcon" />
                                <span>Java</span>

                            </div>
                        </div>

                        {/* Frontend Development */}
                        <div className="border border-white-1000 p-6 rounded-lg ">
                            <div className="flex items-center w-full space-x-3 mb-4">
                                <FontAwesomeIcon icon={faReact} style={{ fontSize: "30px" }} />
                                <h2 className="text-xl text-left">
                                    <span className="border-b-blue-500 border-b-2 font-bold">Web</span>
                                    <br />
                                    Development
                                </h2>
                            </div>
                            <p className="text-gray-400 font-mono mb-6">
                                Passionate about UI/UX. Experience in
                                HTML, CSS, JS, React and NextJS frameworks.
                            </p>

                            <div className="skill" data-aos="flip-up">
                                <FontAwesomeIcon icon={faCss3Alt} className="skillIcon" style={{ color: "#10ccee" }} />
                                <span>CSS</span>
                            </div>
                            <div className="skill" data-aos="flip-up">
                                <FontAwesomeIcon icon={faReact} className="skillIcon" style={{ color: "#10ccee" }} />
                                <span>React</span>
                            </div>
                            <div className="skill" data-aos="flip-up">
                                <FontAwesomeIcon icon={faJsSquare} className="skillIcon" style={{ color: "#feb247" }} />
                                <span>JavaScript</span>
                            </div>
                            <div className="skill" data-aos="flip-up">
                                <FontAwesomeIcon icon={faHtml5} className="skillIcon" style={{ color: "#e5532d" }} />
                                <span>HTML</span>
                            </div>
                            <div className="skill" data-aos="flip-up">
                                <img style={{ width: "30px", height: "30px" }} src={`/assets/icons/next.png`} className="skillIcon" />
                                <span>Next.js</span>
                            </div>
                        </div>

                        {/* Flutter Development */}
                        <div className="border border-white-700 p-6 rounded-lg ">
                            <div className="flex items-center w-full space-x-3 mb-4">
                                <FontAwesomeIcon icon={faChartColumn} style={{ fontSize: "30px" }} />
                                <h2 className="text-xl text-left">
                                    <span className="border-b-yellow-500 border-b-2 font-bold">Data Science </span>
                                    <br />
                                    / Analysis
                                </h2>
                            </div>
                            <p className="text-gray-400 font-mono mb-6">
                                Proficient in working with Data, and drawing insights.
                            </p>
                            <div className="skill" data-aos="flip-up">
                                <img style={{ width: "30px", height: "30px" }} src={`/assets/icons/pandas.png`} alt="Pandas" className="skillIcon" />
                                <span>Pandas</span>
                            </div>
                            <div className="skill" data-aos="flip-up">
                                <img style={{ width: "40px", height: "30px" }} src={`/assets/icons/sklearn.png`} alt="Pandas" className="skillIcon" />
                                <span>Scikit-Learn</span>
                            </div>

                            <div className="skill" data-aos="flip-up">
                                <img style={{ width: "30px", height: "30px" }} src={`/assets/icons/numpy.svg`} alt="Pandas" className="skillIcon" />
                                <span>Numpy</span>
                            </div>

                            <div className="skill" data-aos="flip-up">
                                <img style={{ width: "30px", height: "30px" }} src={`/assets/icons/matplot.png`} alt="Pandas" className="skillIcon" />
                                <span>MatPlotLib</span>
                            </div>
                            <div className="skill" data-aos="flip-up">
                                <img style={{ width: "30px", height: "30px" }} src={`/assets/icons/powerbi.png`} alt="Pandas" className="skillIcon" />

                                <span>Power Bi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </div>
    )
};



