import React from 'react';
import '../styles/CityInput.css';

const CityInput = ({ city, setCity }) => {
    return (
        <div className="city-input">
            <label htmlFor="city">City:</label>
            <input
                type="text"
                id="city"
                value={city}
                placeholder="Enter city name"
                onChange={(e) => setCity(e.target.value)}
            />
        </div>
    );
};

export default CityInput;
