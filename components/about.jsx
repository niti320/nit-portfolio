import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faComputer, faCode, faLink, faBars, faTimes, faMailBulk, faMailReply, faMailForward, faMessage, faMailReplyAll, faEnvelope, faLightbulb, faSmile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
export default function About() {
    return (

        <div id='About' className="portfolioBox"  >

            <div className="AboutSection" data-aos="fade-up">

                <h1 className="text-3xl font-bold mb-8">About Me</h1>


                <div className="AboutContent" >
                    <p className="text-white-900 font-mono mb-10">
                        Hi, I'm <strong>Nitin</strong>, I’m a enthsiastic software developer with a strong focus on building scalable and efficient software solutions. With expertise in programming languages like <b style={{ color: "white" }}>Python, C++, JavaScript, Java and SQL</b>. I enjoy creating intuitive applications that solve real-world problems. My journey has been driven by a curiosity for technology and a commitment to continuous learning..
                    </p>
                </div>







                <section className="text-white py-2 px-2">
                    <div className=" mx-auto text-center">
                       
                    <div className="flex flex-wrap justify-center gap-6">


                            {/* Software Development */}
                            <div className="p-6 rounded-lg gap-6 w-[300px]">

                                <div className="flex items-center w-full space-x-3 mb-4">
                                    <FontAwesomeIcon icon={faSmile} style={{ fontSize: "30px",color:"yellow" }} />
                                    <h2 className="text-xl text-left">
                                        <span className="border-b-yellow-100 border-b-2 font-bold">My Interests</span>
                                       
                                    </h2>
                                </div>
                              

                                <div className="skill" data-aos="flip-up">
                                    <span>Video Games</span>
                                </div>
                                
                                <div className="skill" data-aos="flip-up">
                                    <span>Philosophical Books</span>
                                </div>
                                
                                <div className="skill" data-aos="flip-up">
                                    <span>Cinema & Art</span>
                                </div>
                                
                                <div className="skill" data-aos="flip-up">
                                    <span>Sketching</span>
                                </div>
                                
                                <div className="skill" data-aos="flip-up">
                                    <span>Chess</span>
                                </div>
                            </div>
                            <div className="p-6 rounded-lg gap-6 w-[300px]">
                                <div className="flex items-center w-full space-x-3 mb-4">
                                    <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: "30px",color:"pink" }} />
                                    <h2 className="text-xl text-left">
                                        <span className="border-b-pink-500 border-b-2 font-bold">What Inspires me</span>
                                      
                                    </h2>
                                </div>
                               

                                <div className="skill" data-aos="flip-up">
                                    <span>Solving Problems</span>
                                </div>
                                
                                <div className="skill" data-aos="flip-up">
                                    <span>AI / ML</span>
                                </div>
                                
                                <div className="skill" data-aos="flip-up">
                                    <span>Future Technologies</span>
                                </div>
                                
                                <div className="skill" data-aos="flip-up">
                                    <span>Design & User Experience</span>
                                </div>
                                
                                <div className="skill" data-aos="flip-up">
                                    <span>Collaborations</span>
                                </div>


                            
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
};