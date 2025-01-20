import { Link } from 'react-router-dom';

const PlantDetails = () => {
    return (
        <div>
            {/* SVG at the very bottom (behind the image) */}
            <div class="chonburi-regular text-[#8DA9B2] text-right absolute top-0 right-0 mr-8 flex items-center mt-3 xs:space-x-6 md:space-x-14 w-full xs:block justify-end">
                    <Link to="/">
                        <span class="text-lg sm:text-xl md:text-2xl lg:text-2xl ml-10">Home</span>
                    </Link>
                    <span class="text-lg sm:text-xl md:text-2xl lg:text-2xl">Projects</span>
                    <span class="text-lg sm:text-xl md:text-2xl lg:text-2xl">CV</span>
                    <span class="text-lg sm:text-xl md:text-2xl lg:text-2xl">Contact</span>
            </div>

            <div class="absolute bottom-0 left-0 w-full -z-10">
                <svg width="100%" height="80%" viewBox="0 0 1920 745" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 744.99V0C1920 0 1871.1 117.293 1668.61 298.997C1370.51 566.599 1082.91 526.954 768.687 381.59C458.962 237.878 232.481 389.85 0 643.41V745L1920 744.99Z" fill="#5C91A3" fill-opacity="0.15"/>
                </svg>
            </div>

            {/* Image positioned above the SVG */}
            <div class="relative flex items-center w-full">
                {/*  
                <div class="ml-24">
                    <img src="details_view.png" class="w-[300px] relative z-10" />
                </div>
                        */}
                {/* Centered Text */}
                <div class="absolute top-0 left-24">
                    <img src="rename_plant.png" class="w-[130px] relative z-10" />
                </div>
                <div class="ml-64 mt-48">
                    <img src="reviews_plant.png" class="w-[130px] relative z-10" />
                </div>
                <div class="text-[#444444] chonburi-regular absolute left-[700px] top-1/4 transform -translate-x-1/2">
                <span class="text-3xl">
                    Plant care app
                </span>
                <span class="text-l text-[#444444] chonburi-regular absolute left-1/2 mt-20 w-[500px] transform -translate-x-1/2 text-justify">
                    hejsan här ska jag skriva om projektet. Det kommer bli svårt haha
                    men jag kan nog fråga chatgpt. Borde verkligen ta tag i detta någon gång. 
                    Skulle gissa på att det blir lite mer text än såhär? Måste ju få med allt. 
                    Finns en del att skriva, men vad spelar det för roll, jag vill ändå
                    inte ha ett sånt jobb.
                
                </span>

                <span class="text-l text-[#444444] chonburi-regular absolute left-1/2 mt-20 w-[500px] transform -translate-x-1/2 text-justify">
                    skills
                
                </span>
                </div>

            </div>


        </div>
    );
};

export default PlantDetails;
