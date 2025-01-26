import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigateProjects } from './utils';
import { handleContactClick } from './utils';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleProjectsClick = useNavigateProjects();

    // Optional: Handle hash scrolling for the initial page load
    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace("#", "");
            const section = document.getElementById(sectionId);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]); 

    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/viktoria-björklund/",  "_blank");
    };

    const handleGithubClick = () => {
        window.open("https://github.com/viktoriabjorklund",  "_blank");
    };
    return (
                    <div className="bg-[#F1F1F1] fixed top-0 left-0 w-full">
                <div className="quicksand-semi text-[#8DA9B2] flex justify-between items-center py-4 px-8 ">
                    <div
                        className="text-lg sm:text-xl md:text-2xl lg:text-2xl ml-1 cursor-pointer transition transform hover:scale-110"
                        onClick={() => navigate('/')}
                    >
                        Viktoria Björklund
                    </div>
    
                    <div className="quicksand-semi text-[#8DA9B2] flex space-x-10 mr-4">
                        <div
                            className="text-lg sm:text-xl md:text-2xl lg:text-2xl cursor-pointer transition transform hover:scale-110"
                            onClick={handleProjectsClick}
                        >
                            Projects
                        </div>
                        <div
                            className="text-lg sm:text-xl md:text-2xl lg:text-2xl cursor-pointer transition transform hover:scale-110"
                        >
                             <a href="/Viktoria Björklund Resume.pdf" target="_blank" rel="noopener noreferrer">
                                    CV
                                </a>
                        </div>
                        <div
                            className="text-lg sm:text-xl md:text-2xl lg:text-2xl cursor-pointer transition transform hover:scale-110"
                            onClick={handleContactClick}
                        >
                            Contact
                        </div>
                    </div>
                </div>
                </div>
    )
}
export default Header;