import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useNavigateProjects } from './utils';
import { handleContactClick } from './utils';


const FurhatDetails = () => {
    const navigate = useNavigate();
    const handleProjectsClick = useNavigateProjects();
    return (
        <div>
                          <div className="bg-[#F1F1F1] fixed top-0 left-0 w-full">
            <div className="quicksand-semi text-[#8DA9B2] flex justify-between items-center py-4 px-8">
                <div
                    className="text-lg sm:text-xl md:text-2xl lg:text-2xl ml-1 cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    Viktoria Björklund
                </div>

                <div className="quicksand-semi text-[#8DA9B2] flex space-x-10 mr-4">
                    <div
                        className="text-lg sm:text-xl md:text-2xl lg:text-2xl cursor-pointer"
                        onClick={handleProjectsClick}
                    >
                        Projects
                    </div>
                    <div
                        className="text-lg sm:text-xl md:text-2xl lg:text-2xl cursor-pointer"
                       
                    >
                        <a href="/Viktoria Björklund Resume.pdf" target="_blank" rel="noopener noreferrer">
                                CV
                            </a>
                    </div>
                    <div
                        className="text-lg sm:text-xl md:text-2xl lg:text-2xl cursor-pointer"
                        onClick={handleContactClick}
                    >
                        Contact
                    </div>
                </div>
            </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full -z-10">
                <svg width="100%" height="80%" viewBox="0 0 1920 745" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 744.99V0C1920 0 1871.1 117.293 1668.61 298.997C1370.51 566.599 1082.91 526.954 768.687 381.59C458.962 237.878 232.481 389.85 0 643.41V745L1920 744.99Z" fill="#5C91A3" fill-opacity="0.15"/>
                </svg>
            </div>

            <div class="relative flex items-center w-full">

            <div class="relative flex justify-end w-full mt-0 mr-28">
                <div class="flex flex-col items-center mt-16">
                    <img src="assets/furhat.png" class="w-[400px] relative z-10" />

                    <div class="mt-10">
                    <iframe 
                        width="320" 
                        height="180" 
                        src="https://www.youtube.com/embed/yD6-LCzyFVA" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                    </div>
                </div>
            </div>

                <div className="text-[#444444] absolute left-[400px] mt-10 transform -translate-x-1/2 w-[600px]">
                    <span className="quicksand-semi text-3xl block text-center">
                    Pitch Imperfect
                    </span>

                    <div className="flex flex-col space-y-10 mt-10">
                        <span className="quicksand-regular text-sm">
                        This project explored the potential of Furhat, a multimodal social robot, 
                        as a tool for interactive pitch training. By leveraging real-time pitch 
                        detection and responsive feedback, Furhat provided guidance through either 
                        verbal cues or expressive gestures. The system was designed to enhance 
                        accessibility in musical training by offering an engaging and instructor-free 
                        learning experience. Key features included:
                        <div class="ml-4 mt-4 mb-4">
                            <ul class="list-disc pl-4">
                                <li><b>Real-time pitch analysis</b> using an adapted YIN algorithm</li>
                                <li><b>Informative feedback mechanisms</b>, where Furhat responded with either verbal instructions 
                                ("up", "down", "perfect") or nonverbal cues like head tilts and smiles</li>
                                <li><b>Smooth integration</b> of Java-based pitch detection with Furhat’s Kotlin-based interface</li>
                            </ul>
                        </div>
                         This project was made by me, C. Kärnekull, F. Maras and O. Lövgren and took place 10/2025 - 12/2025.
                        
                         <div className="quicksand-semi text-xl mt-8 mb-4">
                            Keywords
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-4 w-full mt-0 text-sm">
                            {["Kotlin", "Furhat Robotics", "Multimodalities", "Java", "Teamwork"].map((skill) => (
                                <div key={skill} className="bg-[#8DA9B2] text-white px-2 py-1 rounded-md w-auto min-w-fit text-center">
                                    {skill}
                                </div>
                            ))}
                        </div>
                        </span>


                        

                        
                    </div>
                </div>

            </div>
            </div>

    );
};

export default FurhatDetails;