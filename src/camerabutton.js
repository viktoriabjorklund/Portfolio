import React, { useState } from 'react';

const CameraButton = () => {
    const [imageSrc, setImageSrc] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            {/* Hidden file input for camera access */}
            <input 
                type="file" 
                id="cameraButton" 
                accept="image/*" 
                capture="environment" 
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            
            {/* Visible button */}
            <button onClick={() => document.getElementById('cameraButton').click()}>
                Open Camera
            </button>

            {/* Display the captured image */}
            {imageSrc && (
                <div>
                    <img src={imageSrc} alt="Captured" style={{ width: '100%', maxWidth: '600px' }} />
                </div>
            )}
        </div>
    );
};

export default CameraButton;
