import React, { useState } from 'react';
import DateInput from '../components/DateInput';
import CityInput from '../components/CityInput';
import WeatherDisplay from '../components/WeatherDisplay';
import getWeatherData from '../services/weatherService';
import '../styles/WeatherPage.css';

const WeatherPage = () => {
    const [date, setDate] = useState('');
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleSearch = async () => {
        const data = await getWeatherData(city, date);
        setWeatherData(data);
    };

    return (
        <div className="weather-page">
            <h1 className="title">Know About Weather</h1>
            <div className="input-section">
                <DateInput date={date} setDate={setDate} />
                <CityInput city={city} setCity={setCity} />
                <button className="search-button" onClick={handleSearch}>
                    Get Weather
                </button>
            </div>
            {weatherData && <WeatherDisplay data={weatherData} />}
        </div>
    );
};

export default WeatherPage;
