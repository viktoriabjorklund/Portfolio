import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const PlantDetails = () => {
    const navigate = useNavigate();
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

                <div class="absolute top-0 left-24">
                    <img src="rename_plant.png" class="w-[130px] relative z-10" />
                </div>
                <div class="ml-64 mt-48">
                    <img src="reviews_plant.png" class="w-[130px] relative z-10" />
                </div>
                <div class="absolute top-80 left-24">
                    <img src="details_plant.png" class="w-[130px] relative z-10" />
                </div>
                <div className="text-[#444444]  absolute left-[800px] top-[50px] transform -translate-x-1/2 w-[600px]">
                    <span className="quicksand-semi text-3xl block text-center mb-10">
                        Plant care app
                    </span>

                    <div className="quicksand-regular flex flex-col space-y-10 ">
                        <span className="text-sm">
                        This project focused on improving plant care by designing a mobile app prototype
                         that turns users' plants into virtual characters, helping plant owners 
                         manage their care routines more effectively. The process followed a 
                         user-centered design approach, including research, ideation, prototyping, 
                         and evaluation phases. In the discovery phase, we held interviews with 9 plant owners
                         of different levels in order to gain knowledge about their current plant care routine. 
                         We also used diary studies for 2 of the users, gaining an even deeper understanding.
                         In the Definition phase we used affinity diagram to categorize themes from interviews 
                         and diary studies. We conducted personas and scenarios and formulated a problem statement.
                         In the Development phase we used brainwriting, worst possible idea and brainstorming 
                         techniques to generate concepts. We created a low fidelity prototype and then transformed
                         its to a high fidelity prototype in Figma after some user evaluations. 

                        </span>

                        <span className="quicksand-semi text-xl mt-8 mb-4">
                            Keywords
                        </span>
                        <div className="flex flex-wrap gap-x-3 gap-y-4 w-full mt-0 text-sm">
                            {["UX Research", "UX design", "Figma", "Double Diamond"].map((skill) => (
                                <div key={skill} className="bg-[#8DA9B2] text-white px-4 py-2 rounded-md w-auto min-w-fit text-center">
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

export default PlantDetails;
