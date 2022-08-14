import React from "react";
import { WeatherData } from "../../data/types";
import getBeaufortWindScale from "./getBeaufortWindScale";
import Card from "../Card/Card";
import getBackgroundColor from "./getBackgroundColor";
import "./dataGrid.css";

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
            className="data-grid"
            style={{
                backgroundColor: `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, 0.65)`,
                border: `1px solid rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, 0.18)`,
            }}
        >
            <Card
                size="large"
                text={data.weather.desc}
                icon={`wi wi-owm-${data.weather.iconId}`}
            />
            <hr />
            <div className="data-grid-footer">
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
