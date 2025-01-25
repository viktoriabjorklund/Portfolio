// utils.js
import { useNavigate } from 'react-router-dom';

export const useNavigateProjects = () => {
    const navigate = useNavigate();
    
    return () => {
        // Navigate to the Home page first
        navigate('/');

        // Wait for the navigation to complete and then scroll to the section
        setTimeout(() => {
            const section = document.getElementById('projects');
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            } else {
                console.error("Section #projects not found on Home page.");
            }
        }, 100); // Delay to ensure navigation is complete
    };
};

export const handleContactClick = () => {
    // Open the mail client when 'Contact' is clicked
    window.location.href = "mailto:viktoriabjorklund99@gmail.com";
};
