import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useNavigateProjects } from './utils';
import { handleContactClick } from './utils';
import Header from './Header';


const DrinkDetails = () => {
    const navigate = useNavigate();
    const handleProjectsClick = useNavigateProjects();
    return (
        <div>
            <Header/>
            <div class="absolute bottom-0 left-0 w-full -z-10">
                <svg width="100%" height="80%" viewBox="0 0 1920 745" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 744.99V0C1920 0 1871.1 117.293 1668.61 298.997C1370.51 566.599 1082.91 526.954 768.687 381.59C458.962 237.878 232.481 389.85 0 643.41V745L1920 744.99Z" fill="#5C91A3" fill-opacity="0.15"/>
                </svg>
            </div>

            <div class="relative flex items-center w-full">

            <div class="relative flex justify-end w-full mt-0 mr-28">
                <div class="flex flex-col items-center mt-16">
                    <img src="assets/cocktail-generator.png" class="w-[400px] relative z-10" />

                </div>
            </div>

                <div className="text-[#444444] absolute left-[400px] mt-40 transform -translate-x-1/2 w-[600px]">
                    <span className="quicksand-semi text-3xl block text-center">
                    Drink generator app
                    </span>

                    <div className="flex flex-col space-y-10 mt-10">
                        <span className="quicksand-regular text-sm">
                        In this project, I am refreshing my knowledge of API calls and data fetching.
                        The concept of the app stems from a group project at KTH, where we developed a 
                        similar app. However, I wanted to redesign the app's structure and enhance its visual
                        appeal. The idea behind the app is simple: you enter the ingredients you have at home, 
                        and the app helps you discover drinks that contain all those ingredients. This idea 
                        came from a common scenario where you have ingredients available but aren't sure what 
                        drink to make. Although the app is functional, it still lacks some features and design 
                        refinements, which I am currently working on alongside my studies.
                        <div class=" mt-4 mb-4">
                            Link to the deployed webpage: LINK
                        </div>
                        
                         <div className="quicksand-semi text-xl mt-8 mb-4">
                            Keywords
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-4 w-full mt-0 text-sm">
                            {["Javascript", "API", "Data fetching", "CSS", "React"].map((skill) => (
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

export default DrinkDetails;