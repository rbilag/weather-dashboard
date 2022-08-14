export const mockData = [
    {
        name: "Yellowknife",
        coords: { lat: 62.4540807, lon: -114.377385 },
        weather: [{ id: 804, description: "overcast clouds" }],
        main: {
            temp: 13.1,
            humidity: 76,
        },
        wind: {
            speed: 5.14,
        },
    },
    {
        name: "Paris",
        coords: { lat: 48.8588897, lon: 2.3200410217200766 },
        weather: [{ id: 500, description: "light rain" }],
        main: {
            temp: 25.98,
            humidity: 91,
        },
        wind: {
            speed: 3.6,
        },
    },
    {
        name: "Cairo",
        coords: { lat: 37.5666791, lon: 126.9782914 },
        weather: [{ id: 800, description: "clear sky" }],
        main: {
            temp: 33.33,
            humidity: 31,
        },
        wind: {
            speed: 5.66,
        },
    },
];
export const mockWeatherResponse = mockData[0];
export const mockIPResponse = {
    city: mockData[0].name,
    latitude: mockData[0].coords.lat,
    longitude: mockData[0].coords.lon,
};
export const mockGeoResponse = [
    {
        name: mockData[0].name,
        lat: mockData[0].coords.lat,
        lon: mockData[0].coords.lon,
    },
];
