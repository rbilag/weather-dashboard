import { useQuery } from "@tanstack/react-query";
import {
    GEO_BASE_ENDPOINT,
    IP_BASE_ENDPOINT,
    WEATHER_BASE_ENDPOINT,
} from "../data/constants";
import { WeatherData } from "../data/types";

const fetchWeather = async () => {
    const cityParams = new URLSearchParams(window.location.search).get("city");
    const weatherData: WeatherData[] = [];

    const getWeatherFromCoord = async (
        name: string,
        lat: number,
        lon: number
    ) => {
        try {
            const weatherResp = await fetch(
                `${WEATHER_BASE_ENDPOINT}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            );
            const data = await weatherResp.json();
            if (data) {
                const simplifiedData: WeatherData = {
                    name,
                    weather: {
                        iconId: data.weather[0].id,
                        desc: data.weather[0].description,
                    },
                    temp: Math.round(data.main.temp),
                    humidity: Math.round(data.main.humidity),
                    windSpeed: Math.round(data.wind.speed),
                };
                weatherData.push(simplifiedData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (cityParams) {
        const cities = cityParams.split(",");
        // eslint-disable-next-line no-restricted-syntax
        for (const city of cities) {
            const geoResp = await fetch(
                `${GEO_BASE_ENDPOINT}/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            );
            const [cityCoords] = await geoResp.json();
            if (cityCoords)
                await getWeatherFromCoord(
                    cityCoords.name,
                    cityCoords.lat,
                    cityCoords.lon
                );
        }
        return weatherData;
    }
    const ipResp = await fetch(`${IP_BASE_ENDPOINT}/`);
    const cityCoords = await ipResp.json();
    if (cityCoords)
        await getWeatherFromCoord(
            cityCoords.city,
            cityCoords.latitude,
            cityCoords.longitude
        );
    return weatherData;
};

// Refetches every 5mins
export default () =>
    useQuery(["weathers"], () => fetchWeather(), {
        refetchInterval: 1000 * 60 * 5,
    });
