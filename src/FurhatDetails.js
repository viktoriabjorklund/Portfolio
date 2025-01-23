import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const FurhatDetails = () => {
    const navigate = useNavigate();
    return (
        <div>
                          <div className="bg-[#F1F1F1] fixed top-0 left-0 w-full">
            <div className="chonburi-regular text-[#8DA9B2] flex justify-between items-center py-4 px-8">
                <div
                    className="text-lg sm:text-xl md:text-2xl lg:text-2xl ml-1 cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    Viktoria Björklund
                </div>

                <div className="chonburi-regular text-[#8DA9B2] flex space-x-10 mr-4">
                    <div
                        className="text-lg sm:text-xl md:text-2xl lg:text-2xl cursor-pointer"
                        onClick={() => navigate('/plant-details')}
                    >
                        Projects
                    </div>
                    <div
                        className="text-lg sm:text-xl md:text-2xl lg:text-2xl cursor-pointer"
                        onClick={() => navigate('/cv')}
                    >
                        CV
                    </div>
                    <div
                        className="text-lg sm:text-xl md:text-2xl lg:text-2xl cursor-pointer"
                        onClick={() => navigate('/contact')}
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
                    <img src="furhat.png" class="w-[400px] relative z-10" />

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

                <div className="text-[#444444] chonburi-regular absolute left-[400px] mt-0 transform -translate-x-1/2 w-[500px]">
                    <span className="text-3xl block text-center">
                        Pitch Imperfect
                    </span>

                    <div className="flex flex-col space-y-10 mt-10 ">
                        <span className="text-lg text-justify">
                            Hejsan här ska jag skriva om projektet. Det kommer bli svårt haha
                            men jag kan nog fråga chatgpt. Borde verkligen ta tag i detta någon gång. 
                            Skulle gissa på att det blir lite mer text än såhär? Måste ju få med allt. 
                            Finns en del att skriva, men vad spelar det för roll, jag vill ändå
                            inte ha ett sånt jobb.
                        </span>

                        <span className="text-xl">
                            Keywords
                        </span>
                        <div className="flex flex-wrap gap-x-3 gap-y-4 w-full">
                            {["Kotlin", "Furhat Robotics", "Multimodalities", "Teamwork"].map((skill) => (
                                <div key={skill} className="bg-[#8DA9B2] text-white px-2 py-1 rounded-md w-auto min-w-fit text-center">
                                    {skill}
                                </div>
                            ))}
                        </div>

                        
                    </div>
                </div>

            </div>
            </div>

    );
};

export default FurhatDetails;