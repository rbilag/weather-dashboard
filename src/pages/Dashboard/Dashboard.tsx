/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useMemo, useState } from "react";
import { jsx, css } from "@emotion/react";
import useFetchWeather from "../../hooks/useFetchWeather";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import DataGrid from "../../components/DataGrid/DataGrid";

const plainDashboard = css({
    width: "100vw",
    height: "100vh",
    backgroundColor: "#041c32",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& p": {
        margin: 0,
        color: "white",
        fontSize: "calc(48px + 5vmin)",
    },
});

const weatherDashboard = css({
    width: "100vw",
    backgroundSize: "cover",
    backgroundPosition: "100% 100%",
    display: "inline-grid",
    gridTemplateColumns: "2fr 3fr",
    "& .weather-data": {
        gridColumn: 1,
    },
});

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

    const content = useMemo(() => {
        if (status === "error")
            return (
                <div css={plainDashboard}>
                    <p>Error fetching data</p>
                </div>
            );
        if (status === "success" && data)
            return (
                <div
                    css={[
                        weatherDashboard,
                        { backgroundImage: `url(${background})` },
                    ]}
                >
                    <div className="weather-data">
                        <DataGrid data={data[showIndex]} />
                    </div>
                    <Header city={data[showIndex].name} />
                </div>
            );
        return (
            <div css={plainDashboard}>
                <p>Fetching data...</p>
            </div>
        );
    }, [data, showIndex, status]);

    return content;
}

export default Dashboard;
