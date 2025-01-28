import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useNavigateProjects } from './utils';
import { handleContactClick } from './utils';
import Header from './Header';


const PlantDetails = () => {
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

                <div class="absolute top-0 left-24">
                    <img src="assets/rename_plant.png" class="w-[130px] relative z-10" />
                </div>
                <div class="ml-64 mt-48">
                    <img src="assets/reviews_plant.png" class="w-[130px] relative z-10" />
                </div>
                <div class="absolute top-80 left-24">
                    <img src="assets/details_plant.png" class="w-[130px] relative z-10" />
                </div>
                <div className="text-[#444444] absolute left-[800px] mt-10 transform -translate-x-1/2 w-[600px]">
                    <span className="quicksand-semi text-3xl block text-center">
                        Plant care app
                    </span>

                    <div className="flex flex-col space-y-10 mt-10">
                        <span className="quicksand-regular text-sm">
                        This project focused on improving plant care by designing a mobile app prototype
                         that turns users' plants into virtual characters, helping plant owners 
                         manage their care routines more effectively. The process followed a 
                         user-centered design approach, including research, ideation, prototyping, 
                         and evaluation phases. In the discovery phase, we held <b>interviews </b> with 9 plant owners
                         of different levels in order to gain knowledge about their current plant care routine. 
                         We also used <b>diary studies </b>for 2 of the users, gaining an even deeper understanding.
                         In the Definition phase we used <b>affinity diagram</b>to categorize themes from interviews 
                         and diary studies. We conducted <b>personas </b> and <b>scenarios </b> and formulated a problem statement.
                         In the Development phase we used <b>brainwriting </b>, <b>worst possible idea</b> and <b>brainstorming </b> 
                         techniques to generate concepts. We created a low fidelity prototype and then transformed
                         its to a high fidelity prototype in Figma after some user evaluations. 
                        <div class="mt-4">
                         This project was made by me, O. Martin, D Segal, K. Biro and V. Oetterli and took place 8/2025 - 10/2025.
                         </div>
                         <div class="mt-4">
                         <a href="/Workbook (1).pdf" target="_blank" rel="noopener noreferrer" class="ml-0 text-blue-600 underline hover:text-blue-800">
                            Link to our workbook 
                            </a>
                         </div>
                         <div className="quicksand-semi text-xl mt-8 mb-4">
                            Keywords
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-4 w-full mt-0 text-sm">
                            {["User-centered design","UX Research", "UI/UX design", "Figma", "Double Diamond"].map((skill) => (
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

export default PlantDetails;
