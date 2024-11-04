import React from 'react';
import '../styles/WeatherDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faWind, faTint, faCompressArrowsAlt, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

const WeatherDisplay = ({ data }) => {
    return (
        <div className="weather-display">
            <div className="sun-times">
                <p>
                    <strong>
                        <FontAwesomeIcon icon={faSun} /> Sunrise:
                    </strong> {data.sunrise}
                </p>
                <p>
                    <strong>
                        <FontAwesomeIcon icon={faSun} /> Sunset:
                    </strong> {data.sunset}
                </p>
            </div>
            <h2 className='heading'>Weather Information</h2>
            <div className="weather-info">
                <p>
                    <strong>
                        <FontAwesomeIcon icon={faThermometerHalf} /> Temperature:
                    </strong> {data.temperature}°C
                </p>
                <p>
                    <strong>Min-temperature:</strong> {data.temp_min}°C
                </p>
                <p>
                    <strong>Max-temperature:</strong> {data.temp_max}°C
                </p>
                <p>
                    <strong>
                        <FontAwesomeIcon icon={faTint} /> Humidity:
                    </strong> {data.humidity}%
                </p>
                <p>
                    <strong>
                        <FontAwesomeIcon icon={faCompressArrowsAlt} /> Pressure:
                    </strong> {data.pressure} hPa
                </p>
                <p>
                    <strong>
                        <FontAwesomeIcon icon={faWind} /> Wind Speed:
                    </strong> {data.wind_speed} m/s
                </p>
                <p>
                    <strong>Description:</strong> {data.description}
                </p>
            </div>
        </div>
    );
};

export default WeatherDisplay;
