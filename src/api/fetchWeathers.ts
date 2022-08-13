import { useQuery } from "@tanstack/react-query";
import {
    GEO_BASE_ENDPOINT,
    IP_BASE_ENDPOINT,
    WEATHER_BASE_ENDPOINT,
} from "../data/constants";

export const fetchWeathers = async () => {
    const cityParams = new URLSearchParams(window.location.search).get("city");
    const weatherData: any = [];

    const getWeatherFromCoord = async (
        name: string,
        lat: number,
        lon: number
    ) => {
        try {
            const weatherResp = await fetch(
                `${WEATHER_BASE_ENDPOINT}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            );
            const data = await weatherResp.json();
            if (data) {
                weatherData.push({ ...data, name });
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
            console.log(cityCoords);
            if (cityCoords)
                await getWeatherFromCoord(
                    cityCoords.name,
                    cityCoords.lat,
                    cityCoords.lon
                );
        }
        console.log(weatherData);
        return weatherData;
    }
    const ipResp = await fetch(`${IP_BASE_ENDPOINT}/`);
    const cityCoords = await ipResp.json();
    console.log(cityCoords);
    if (cityCoords)
        await getWeatherFromCoord(
            cityCoords.city,
            cityCoords.latitude,
            cityCoords.longitude
        );
    console.log(weatherData);
    return weatherData;
};

// Refetches every 5mins
export const useFetchWeather = () =>
    useQuery(["weathers"], () => fetchWeathers(), {
        refetchInterval: 1000 * 60 * 5,
    });
