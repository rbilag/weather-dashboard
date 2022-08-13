import React from "react";
import { useFetchWeather } from "../../api/fetchWeathers";
import "./Home.css";

function Home() {
    const { status, data } = useFetchWeather();

    return (
        <div className="weather-section">
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
                <div>
                    {data.map((weatherData: any) => (
                        <div
                            key={`${weatherData.coord.lat}-${weatherData.coord.lon}`}
                        >
                            <i
                                data-testid="weather-icon"
                                className={`wi wi-owm-${weatherData.weather[0].id}`}
                            />
                            <p data-testid="city-name">{weatherData.name}</p>
                            <p data-testid="weather-name">
                                {weatherData.weather[0].main}
                            </p>
                            <p data-testid="temperature">
                                {weatherData.main.temp}
                            </p>
                            <p data-testid="humidity">
                                {weatherData.main.humidity}
                            </p>
                            <p data-testid="wind-speed">
                                {weatherData.wind.speed}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
