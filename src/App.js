import React, { useEffect, useRef, useState } from 'react';

const App = () => {
    const section2Ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const objOptions = {
            root: null,
            threshold: 0.1,  // Adjust as needed for visibility threshold
            rootMargin: "-200px",  // Adjust to ensure visibility is triggered as expected
        };

        const observerCallback = (entries) => {
            const [entry] = entries;
            console.log("Image is visible:", entry.isIntersecting); // Debugging visibility
            setIsVisible(entry.isIntersecting);
        };

        const sectionObserver = new IntersectionObserver(observerCallback, objOptions);
        if (section2Ref.current) {
            sectionObserver.observe(section2Ref.current);
        }

        return () => {
            if (section2Ref.current) {
                sectionObserver.unobserve(section2Ref.current);
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

            <section ref={section2Ref} className="section-2">
                <img
                    className={`img ${isVisible ? "fade-in" : "fade-out"}`}
                    src="logo192.png"
                    alt="Reveal on scroll"
                />
                <div 
                class="vertical-line"
                ></div>

            </section>

            <section className="section-3">
                <h2>Section 3</h2>
            </section>
        </div>
    );
};

export default App;
