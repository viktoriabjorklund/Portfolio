// https://www.w3schools.com/howto/howto_css_timeline.asp
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
            <section className="sect-1">
            <section
                ref={section1Ref}
                className={`section-1 ${isVisible ? "fade-in" : "fade-out"}`}
            >
                <div className="timeline">
                    <div className="container left">
                        <div className="content">
                            <h2>Royal Institute of Technology</h2>
                            <h3>M.Sc Interactive Media Technology</h3>
                            <p>2024 - 2026, Stockholm</p>
                        </div>
                    </div>

                    <div className='timeline'/>
            <section
                ref={section1Ref}
                className={`section-1 ${isVisible ? "fade-in" : "fade-out"}`}
            >
                    <div className="container right">
                        <div className="content">
                            <h2>2016</h2>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
            </section>
            <section
                ref={section1Ref}
                className={`section-1 ${isVisible ? "fade-in" : "fade-out"}`}
            >
                    <div className="container left">
                        <div className="content">
                            <h2>2015</h2>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
            </section>

                </div>
            </section>
            </section>
        </div>
    );
};

export default App;

