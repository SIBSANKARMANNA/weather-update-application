// frontend/src/services/weatherService.js
const getWeatherData = async (city, date) => {
    try {
        const response = await fetch(`https://weather-update-application-3.onrender.com/api/weather?city=${city}&date=${date}`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        // console.log('response',response.json);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

export default getWeatherData;
