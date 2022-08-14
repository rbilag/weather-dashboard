/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
import { WeatherData } from "../../data/types";
import getBeaufortWindScale from "./getBeaufortWindScale";
import Card from "../Card/Card";
import getBackgroundColor from "./getBackgroundColor";

const dataGrid = css({
    height: "100vh",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(9px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
});
const dataGridFooter = css({
    display: "flex",
    flexDirection: "row",
    "& > div": {
        flexGrow: 1,
    },
});
const dataGridDivider = css({
    width: "100%",
    border: "none",
    borderTop: "3px solid rgba(255, 255, 255, 0.25)",
});

interface DataGridProps {
    /**
     * Data to display on grid
     */
    data: WeatherData;
}

/**
 * Primary UI component for displaying data collection
 */
function DataGrid({ data }: DataGridProps) {
    const backgroundColor = getBackgroundColor(data.temp);

    return (
        <div
            css={[
                dataGrid,
                {
                    backgroundColor: `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, 0.65)`,
                    border: `1px solid rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, 0.18)`,
                },
            ]}
        >
            <Card
                size="large"
                text={data.weather.desc}
                icon={`wi wi-owm-${data.weather.iconId}`}
            />
            <hr css={dataGridDivider} />
            <div css={dataGridFooter}>
                <Card text={`${data.temp}\u00B0`} />
                <div>
                    <Card
                        size="small"
                        text={`${data.humidity}%`}
                        icon="wi wi-raindrop"
                    />
                    <Card
                        size="small"
                        text={`${data.windSpeed} km/h`}
                        icon={`wi wi-wind-beaufort-${getBeaufortWindScale(
                            data.windSpeed
                        )}`}
                    />
                </div>
            </div>
        </div>
    );
}

export default DataGrid;
