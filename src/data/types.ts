export type WeatherData = {
    name: string;
    weather: {
        iconId: number;
        desc: string;
    };
    temp: number;
    humidity: number;
    windSpeed: number;
};

export type Color = {
    r: number;
    g: number;
    b: number;
};
