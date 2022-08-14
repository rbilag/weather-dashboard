import React, { useEffect, useState } from "react";
import useFetchWeather from "../../hooks/useFetchWeather";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import DataGrid from "../../components/DataGrid/DataGrid";
import "./dashboard.css";

function Dashboard() {
    const { status, data } = useFetchWeather();
    const [showIndex, setShowIndex] = useState(0);

    // Rotates city shown every 5s
    useEffect(() => {
        setShowIndex(0);
        let interval: ReturnType<typeof setTimeout>;
        if (data && data?.length > 1) {
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
        <>
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && data && (
                <div
                    className="weather-dashboard"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <div className="weather-data">
                        <DataGrid data={data[showIndex]} />
                    </div>
                    <Header city={data[showIndex].name} />
                </div>
            )}
        </>
    );
}

export default Dashboard;
