// https://www.w3schools.com/howto/howto_css_timeline.asp
// https://tailwindcss.com/
import React, { useEffect, useRef, useState } from 'react';

const App = () => {
    const section1Ref = useRef(null); // Ref for section-1
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const objOptions = {
            root: null,
            threshold: [0.3, 0.6],
            rootMargin: "0px",
        };
        

        const observerCallback = (entries) => {
            const [entry] = entries;

            if (entry.intersectionRatio >= 0.6) {
                setIsVisible(true);
            }
            else if (entry.intersectionRatio < 0.3) {
                setIsVisible(false);
            }
        };

        const sectionObserver = new IntersectionObserver(observerCallback, objOptions);
        if (section1Ref.current) {
            sectionObserver.observe(section1Ref.current);
        }

        return () => {
            if (section1Ref.current) {
                sectionObserver.unobserve(section1Ref.current);
            }
        };
    }, []);

    return (
        <div>
            <header className="info-header">
                <section id="start">
                    <h1>
                        <a href="#about">About</a>
                        <a href="#resume">Resume</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </h1>
                </section>
            </header>
    
            <body class="antialiased text-gray-800">
                <div class="relative container mx-auto px-6 flex flex-col py-12 space-y-24">
                    <div class="absolute z-0 w-1 h-full bg-white shadow-md top-12 left-9 md:mx-auto md:right-0 md:left-0">
                    </div>
                    <div class="relative z-10">
                        <img
                        src= "https://cdn.vectorstock.com/i/500p/55/77/mortar-board-or-graduation-cap-education-symbol-vector-20075577.jpg"
                        alt=""
                        class = "timeline-img"
                        />
                        
                    <div class='flex space x-8'>
                    <div class="timeline-container">
                    <div 
                        class="timeline-pointer"
                        aria-hidden="true"
                    ></div>
                    
                    <div class="bg-white p-6 rounded-md shadow-md flex justify-between items-center">
                        <div>
                            <span class="font-bold text-kth-blue">KTH - Royal Institute of Technology</span>
                            <h1 class="text-gray-700">M.Sc Interactive Media Technology</h1>
                            <h1 class="text-gray-700">Within Master of Science in Engineering</h1>
                        </div>
                        <div class="flex flex-col justify-between text-right">
                            <div class="text-gray-500 text-sm">
                                <span>2024 - 2026</span>
                            </div>
                            <div class="text-gray-500 text-sm mt-auto">
                                <p>Stockholm, Sweden</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
                </div>
                <div class="relative z-10">
                        <img
                        src= "https://cdn.vectorstock.com/i/500p/55/77/mortar-board-or-graduation-cap-education-symbol-vector-20075577.jpg"
                        alt=""
                        class = "timeline-img"
                        />
                    <div class="timeline-container timeline-container-left">
                    <div 
                        class="timeline-pointer timeline-pointer-left"
                        aria-hidden="true"
                    ></div>
                    <div class="bg-white p-6 rounded-md shadow-md flex justify-between items-center">
                        <div>
                            <span class="font-bold text-trinity-blue">Trinity College </span>
                            <h1 class="text-gray-700">Post-graduate, Computer Science</h1>
                        </div>
                        <div class="flex flex-col justify-between text-right">
                            <div class="text-gray-500 text-sm">
                                <span>2025 - 2025</span>
                            </div>
                            <div class="text-gray-500 text-sm mt-auto">
                                <p>Dublin, Ireland</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="relative z-10">
                        <img
                        src= "https://cdn.vectorstock.com/i/500p/55/77/mortar-board-or-graduation-cap-education-symbol-vector-20075577.jpg"
                        alt=""
                        class = "timeline-img"
                        />
                    <div class="timeline-container">
                    <div 
                        class="timeline-pointer"
                        aria-hidden="true"
                    ></div>
                    <div class="bg-white p-6 rounded-md shadow-md flex justify-between items-start">
                        <div>
                            <span class="font-bold text-kth-blue">KTH - Royal Institute of Technology</span>
                            <h1 class="text-gray-700">B.Sc Media Technology</h1>
                            <h1 class="text-gray-700">Within Master of Science in Engineering</h1>
                        </div>

                        <div class="flex flex-col justify-end text-right">
                            <div class="text-gray-500 text-sm">
                                <span>2021 - 2024</span>
                            </div>
                            <div class="text-gray-500 text-sm mt-auto">
                                <p>Stockholm, Sweden</p>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                <div class='flex justify-center space-x-8'>
                    <div>hej</div>
                    <div>då</div>
                </div>
                
                </div>
            </body>
            <section className='sect-1'>
            </section>
        </div>
    );
};

export default App;

