import React, { useEffect, useState } from "react";
import { useFetchWeather } from "../../api/fetchWeathers";
import "./Home.css";

function Home() {
    const { status, data } = useFetchWeather();
    const [showIndex, setShowIndex] = useState(0);

    // Rotates city shown every 5s
    useEffect(() => {
        setShowIndex(0);
        let interval: ReturnType<typeof setTimeout>;
        if (data?.length > 1) {
            interval = setInterval(() => {
                setShowIndex((current) => {
                    if (current >= data.length - 1) return 0;
                    return current + 1;
                });
            }, 1000 * 5);
        }
        return () => {
            clearInterval(interval);
        };
    }, [data]);

    return (
        <div className="weather-section">
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
                <div>
                    <div
                        key={`${data[showIndex].coord.lat}-${data[showIndex].coord.lon}`}
                    >
                        <i
                            data-testid="weather-icon"
                            className={`wi wi-owm-${data[showIndex].weather[0].id}`}
                        />
                        <p data-testid="city-name">{data[showIndex].name}</p>
                        <p data-testid="weather-name">
                            {data[showIndex].weather[0].main}
                        </p>
                        <p data-testid="temperature">
                            {data[showIndex].main.temp}
                        </p>
                        <p data-testid="humidity">
                            {data[showIndex].main.humidity}
                        </p>
                        <p data-testid="wind-speed">
                            {data[showIndex].wind.speed}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
