// backend/controllers/weatherController.js
const axios = require('axios');
const { OPENWEATHER_API_KEY, OPENWEATHER_API_URL } = require('../config');

const getWeatherData = async (req, res) => {
    const { city, date } = req.query;

    if (!city || !date) {
        return res.status(400).json({ message: 'City and date are required' });
    }

    try {
        // Fetch weather data from OpenWeatherMap API
        const weatherResponse = await axios.get(`${OPENWEATHER_API_URL}/weather`, {
            params: {
                q: city,
                appid: OPENWEATHER_API_KEY,
                units: 'metric',
            }
        });
        // console.log('weatherResponse',weatherResponse);
        // console.log('weatherdata',weatherResponse.data);
        // console.log('temp-min',weatherResponse.data.main.temp_min);
        // console.log("temp-max",weatherResponse.data.main.temp_max);
        // console.log('pressure',weatherResponse.data.main.pressure);
        // console.log('humidity',weatherResponse.data.main.humidity);
        // console.log('wind speed',weatherResponse.data.wind.speed);

        const { data } = weatherResponse;
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

        console.log('weather data',weatherResponse.data);
        console.log('weather response',weatherResponse);

        const responseData = {
            temperature: data.main.temp,
            temp_min:weatherResponse.data.main.temp_min,
            temp_max:weatherResponse.data.main.temp_max,
            pressure:weatherResponse.data.main.pressure,
            humidity:weatherResponse.data.main.humidity,
            wind_speed:weatherResponse.data.wind.speed,
            sunrise,
            sunset,
            description: data.weather[0].description
        };

        res.json(responseData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ message: 'Error fetching weather data' });
    }
};

module.exports = {
    getWeatherData
};
