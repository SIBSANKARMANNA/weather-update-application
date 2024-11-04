// backend/config.js
require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 5000,
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
    OPENWEATHER_API_URL: 'https://api.openweathermap.org/data/2.5'
};
