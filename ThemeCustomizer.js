import React, { useState } from 'react';

const ThemeCustomizer = () => {
    const [theme, setTheme] = useState({
        backgroundColor: '#ffffff',
        textColor: '#000000',
        buttonColor: '#007bff',
    });

    const handleColorChange = (e) => {
        const { name, value } = e.target;
        setTheme((prevTheme) => ({
            ...prevTheme,
            [name]: value,
        }));
    };

    const applyTheme = () => {
        document.body.style.backgroundColor = theme.backgroundColor;
        document.body.style.color = theme.textColor;
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Theme Customizer</h1>
            <div style={{ marginBottom: '20px' }}>
                <label>
                    Background Color: 
                    <input
                        type="color"
                        name="backgroundColor"
                        value={theme.backgroundColor}
                        onChange={handleColorChange}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>
                    Text Color: 
                    <input
                        type="color"
                        name="textColor"
                        value={theme.textColor}
                        onChange={handleColorChange}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>
                    Button Color: 
                    <input
                        type="color"
                        name="buttonColor"
                        value={theme.buttonColor}
                        onChange={handleColorChange}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
            </div>
            <button onClick={applyTheme} style={{ backgroundColor: theme.buttonColor, color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                Apply Theme
            </button>
        </div>
    );
};

export default ThemeCustomizer;
