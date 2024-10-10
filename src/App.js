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
                <div id="start"> 
                    <div class="bg-[#8DA9B2] xs:h-[4vh] lg:h-[3vh] w-full overflow-hidden"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#5C91A3">
                    <path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".3">
                    </path>
                        <path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" opacity=".6">

                        </path>
                        
                </svg>
                
        <div class="chonburi-regular text-[#fffbf0] absolute top-0 left-0 flex-row items-center mt-3 xs: space-x-6 md:space-x-14 w-full hidden xs:block">
            <span class="text-lg sm:text-xl md:text-2xl lg:text-2xl ml-10" >Home</span>
            <span class="text-lg sm:text-xl md:text-2xl lg:text-2xl" >Education</span>
            <span class="text-lg sm:text-xl md:text-2xl lg:text-2xl" >CV</span>
            <span class="text-lg sm:text-xl md:text-2xl lg:text-2xl" >Projects</span>
            <span class="text-lg sm:text-xl md:text-2xl lg:text-2xl" >Contact</span>
        </div>

        <div class='chonburi-regular-shadow text-[#DD5341] xl:w-1/3 xl:text-5xl 2xl:text-7xl text-left xl:ml-20 2xl:ml-24 xl: mt-26 2xl:mt-32'>
                HELLO, I AM VIKTORIA BJÖRKLUND!
            </div>
            <div></div>

            <div class='flex w-full'>
                <div class='chonburi-regular text-[#DD5341] lg:text-xl xl:text-2xl xl:ml-20 2xl:ml-24 w-1/3'>
                    I am a student osv här kan jag skriva nåt bra som ger mig ett jävla jobb kanske
                    <div class='mt-8 flex flex-row space-x-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24 ">
            <path fill="#8DA9B2" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
            <path fill="#8DA9B2" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            </div>
                </div>

            <div class='flex justify-end ml-auto mr-4'>
            <svg width="200" height="600" viewBox="0 0 994 1422" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="142" height="142" fill="#889C7C"/>
<rect x="710" y="1278" width="142" height="142" fill="#889C7C"/>
<rect x="426" y="1278" width="142" height="142" fill="#889C7C"/>
<rect x="142" y="1280" width="142" height="142" fill="#889C7C"/>
<rect x="852" y="1136" width="142" height="142" fill="#889C7C"/>
<rect x="568" y="1138" width="142" height="142" fill="#889C7C"/>
<rect x="284" y="1136" width="142" height="142" fill="#889C7C"/>
<rect y="1136" width="142" height="142" fill="#889C7C"/>
<rect x="710" y="994" width="142" height="142" fill="#889C7C"/>
<rect x="426" y="994" width="142" height="142" fill="#889C7C"/>
<rect x="142" y="994" width="142" height="142" fill="#889C7C"/>
<rect x="852" y="852" width="142" height="142" fill="#889C7C"/>
<rect x="568" y="852" width="142" height="142" fill="#889C7C"/>
<rect x="284" y="852" width="142" height="142" fill="#889C7C"/>
<rect y="852" width="142" height="142" fill="#889C7C"/>
<rect x="710" y="710" width="142" height="142" fill="#889C7C"/>
<rect x="426" y="710" width="142" height="142" fill="#889C7C"/>
<rect x="142" y="710" width="142" height="142" fill="#889C7C"/>
<rect x="852" y="568" width="142" height="142" fill="#889C7C"/>
<rect x="568" y="568" width="142" height="142" fill="#889C7C"/>
<rect x="284" y="568" width="142" height="142" fill="#889C7C"/>
<rect y="568" width="142" height="142" fill="#889C7C"/>
<rect x="710" y="426" width="142" height="142" fill="#889C7C"/>
<rect x="426" y="426" width="142" height="142" fill="#889C7C"/>
<rect x="142" y="426" width="142" height="142" fill="#889C7C"/>
<rect x="852" y="284" width="142" height="142" fill="#889C7C"/>
<rect x="852" width="142" height="142" fill="#889C7C"/>
<rect x="710" y="142" width="142" height="142" fill="#889C7C"/>
<rect x="568" y="284" width="142" height="142" fill="#889C7C"/>
<rect x="568" width="142" height="142" fill="#889C7C"/>
<rect x="284" y="284" width="142" height="142" fill="#889C7C"/>
<rect y="284" width="142" height="142" fill="#889C7C"/>
<rect x="426" y="142" width="142" height="142" fill="#889C7C"/>
<rect x="284" width="142" height="142" fill="#889C7C"/>
<rect x="142" y="142" width="142" height="142" fill="#889C7C"/>
</svg>
</div>
            </div>


                </div>
    
            <div class="antialiased text-gray-800 pt-60">
                <div class='text-5xl font-Ubuntu font-bold md:mx-auto text-center text-gray-600'> 
                    <h1>Education</h1>
                    </div>
                <div class="relative container mx-auto px-6 flex flex-col py-12 space-y-24">
                <div class="absolute z-0 w-1 h-full top-12 left-9 md:mx-auto md:right-0 md:left-0 bg-gradient-to-b from-[#fffbf0] from-1% via-white via-50% to-[#fffbf0] to-99%">
                </div>
                    <div class="relative z-10">
                        <div class='timeline-img'></div>
                    <div class='font-Ubuntu year-left hidden md:block'>
                        2024 - 2026
                    </div>

                    <div id='section1Ref' class="timeline-container">
                    <div 
                        class="timeline-pointer"
                        aria-hidden="true"
                    ></div>
                    
                    <div class="bg-white pl-6 pr-6 pb-2 pt-6 rounded-md shadow-md flex justify-between items-start">
                        <div class='flex-grow'>
                                
                            <hr class="justify-end w-1/2 my-2 border-t border-gray-300" />
                            <span class="font-Ubuntu font-bold text-[#5C91A3] text-2xl">KTH - Royal Institute of Technology</span>
                            <h1 class="font-Ubuntu text-gray-700 text-xl">M.Sc Interactive Media Technology</h1>
                            <h1 class="font-Ubuntu text-gray-700 text-xl">Within Master of Science in Engineering</h1>
                            <hr class="mt-6 justify-end w-1/2 my-2 border-t border-gray-300 ml-auto" />
                            <div class='text-base mt-auto font-Ubuntu text-right'>
                                <span> Stockholm, Sweden</span>
                                </div>

                        </div>

                        <div class="flex flex-items-center text-right h-full">
                            <div class="text-gray-500 text-sm">
                                <div class='font-Ubuntu text-l text-gray-500 text-sm block md:hidden'>
                                <span>2024 - 2026</span>
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
                    <div class='font-Ubuntu year-right hidden md:block'>
                        2025 - 2025
                    </div>
                    <div class="timeline-container timeline-container-left">
                    <div 
                        class="timeline-pointer timeline-pointer-left"
                        aria-hidden="true"
                    ></div>
                    <div class="bg-white p-6 rounded-md shadow-md flex justify-between items-start">
                        <div>
                            <span class="font-Ubuntu font-bold text-kth-blue">Trinity College Dublin</span>
                            <h1 class="font-Ubuntu text-gray-700">Exchange semester</h1>
                            <h1 class="font-Ubuntu text-gray-700">Faculty of Computer Science</h1>
                        </div>

                        <div class="flex justify-between text-right h-full">
                            <div class="text-gray-500 text-sm">
                                <div class='font-Ubuntu text-gray-500 text-sm block md:hidden'>
                                <span>2025 - 2025</span>
                                </div>
                                <div class='font-Ubuntu mt-auto'>
                                <span>Dublin, Ireland</span>
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
                        <div class='font-Ubuntu year-left hidden md:block'>
                            2021 - 2024
                        </div>
                    <div class="timeline-container">
                    <div 
                        class="timeline-pointer"
                        aria-hidden="true"
                    ></div>
                    <div class="bg-white p-6 rounded-md shadow-md flex justify-between items-start">
                        <div>
                            <span class="font-Ubuntu font-bold text-kth-blue">KTH - Royal Institute of Technology</span>
                            <h1 class="font-Ubuntu text-gray-700">B.Sc Media Technology</h1>
                            <h1 class="font-Ubuntu text-gray-700">Within Master of Science in Engineering</h1>
                        </div>

                        <div class="flex justify-between text-right h-full">
                            <div class="text-gray-500 text-sm">
                                <div class='font-Ubuntu text-gray-500 text-sm block md:hidden'>
                                <span>2021 - 2024</span>
                                </div>
                                <div class='font-Ubuntu mt-auto'>
                                <span> Stockholm, Sweden</span>
                                </div>
                            </div>
                           
                        </div>
                    </div>

                </div>
                </div>
                
                </div>
            </div>
            <section className='sect-1'>
                <div class='chonburi-regular text-xl'>
                    EDUCATION
                    Education
                </div>
                
            </section>
        </div>
    );
};

export default App;

