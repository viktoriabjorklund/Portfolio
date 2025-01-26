// https://www.w3schools.com/howto/howto_css_timeline.asp
// https://tailwindcss.com/
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigateProjects } from './utils';
import { handleContactClick } from './utils';
import Header from './Header';

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleProjectsClick = useNavigateProjects();


    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/viktoria-björklund/",  "_blank");
    };

    const handleGithubClick = () => {
        window.open("https://github.com/viktoriabjorklund",  "_blank");
    };



    return (
        
        <div>
                <div id="start"> 
                <Header/>


        <div class="flex flex-row">
            <div class='text-justify quicksand-semi text-[#DD5341] xl:w-[1500px] xl:text-4xl 2xl:text-5xl xl:ml-20 2xl:ml-24 xl: mt-26 2xl:mt-32'>
                    HELLO, I AM VIKTORIA!
                    <div class="text-left quicksand-regular text-[#DD5341] lg:text-xl xl:text-xl pb-48">
                    I'm a fourth-year student in the Media Technology program at KTH, 
                    currently pursuing a Master's degree in Interactive Media Technology. 
                    I'm passionate about expanding my skills, and this page showcases some 
                    of my current expertise through a selection of projects. Note that this website is currently
                    only customized for laptop screens.
                        <div class='mt-8 flex flex-row space-x-4'>
                            <div class="cursor-pointer transition transform hover:scale-110" onClick={handleGithubClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24 ">
                            <path fill="#8DA9B2" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                </div>
                            <div class="cursor-pointer transition transform hover:scale-110" onClick={handleLinkedInClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                            <path fill="#8DA9B2" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end w-full mt-24 mr-48">
                    <img src="assets/portfolio-bild.JPG" class="w-80 h-80 object-cover rounded-full" alt="Profile Picture"></img>
                    </div>
        </div>
                </div>
    
            <div class="sect-1" id="projects">
                <div class="lg:text-5xl lg:pt-36 lg:pb-32 2xl:pt-48 2xl:pb-28 text-[#8DA9B2] quicksand-semi 2xl:text-6xl text-center"> 
                    Projects 
                    </div>
 
                
                    <div class="flex flex-col items-center mt-6">
                        <div class="flex-row-reverse flex items-center space-x-10 mb-28">
                            <img src="assets/furhat.png" class="w-96 mt-6"/>

                            <div class="flex flex-col max-w-md">
                                <div class="text-2xl quicksand-semi text-[#444444]">
                                    Pitch Imperfect
                                </div>
                                <div class="text-lg mt-4 quicksand-regular text-[#444444]">
                                This project explored using Furhat, a multimodal social robot, 
                                for interactive pitch training by providing real-time pitch analysis 
                                and responsive feedback through verbal cues and expressive gestures 
                                to enhance musical training accessibility.
                                </div>
                                <div class="mt-4 self-start">
                                    <button class="bg-[#DD5341] text-[#F1F1F1] quicksand-regular py-2 px-4 rounded-lg inline-block transition transform hover:scale-110"
                                    onClick={() => navigate('/pitch-imperfect-details')}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    
                        <div class="flex-row flex items-center space-x-10 mb-28">
                            <img src="/assets/plantisarmockup.png" class="w-96 mt-6"/>

                            <div class="flex flex-col max-w-md">
                                <div class="text-2xl quicksand-semi text-[#444444]">
                                    Plant care app
                                </div>
                                <div class="text-lg mt-4 quicksand-regular text-[#444444]">
                                    Through various interaction design methodologies, I worked on a project that culminated in a 
                                    Figma-based prototype, applying user-centered design principles, usability testing, and modern 
                                    prototyping techniques.
                                </div>
                                <div class="mt-4 self-start">
                                    <button class="bg-[#DD5341] text-[#F1F1F1] quicksand-regular py-2 px-4 rounded-lg inline-block transition transform hover:scale-110"
                                    onClick={() => navigate('/plant-details')}
                                    >
                                        Read More
                                        
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="flex-row-reverse flex items-center space-x-10 mb-28">
                            <img src="assets/cocktail-generator.png" class="w-96 mt-6"/>

                            <div class="flex flex-col max-w-md">
                                <div class="text-2xl quicksand-semi text-[#444444]">
                                    Drink generator app
                                </div>
                                <div class="text-lg mt-4 quicksand-regular text-[#444444]">
                                In this side project I am refreshing my knowledge about data
                                fetching and web development. This project is ongoing and lacks some 
                                functions at the moment.
                                </div>
                                <div class="mt-4 self-start">
                                    <button class="bg-[#DD5341] text-[#F1F1F1] quicksand-regular py-2 px-4 rounded-lg inline-block transition transform hover:scale-110"
                                    onClick={() => navigate('/drink-generator-details')}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="flex justify-center items-center mb-8 text-gray-500">
    Developed by Viktoria Björklund 2025
</div>

            </div>

            </div> 
    );
};

export default Home;

