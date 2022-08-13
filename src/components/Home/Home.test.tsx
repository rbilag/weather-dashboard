import React from "react";
import { render } from "@testing-library/react";
import nock from "nock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    GEO_BASE_ENDPOINT,
    IP_BASE_ENDPOINT,
    WEATHER_BASE_ENDPOINT,
} from "../../data/constants";
import Home from "./Home";

// TODO add tests for multiple city arg, no city arg
describe("<Home />", () => {
    const mockCoords = [40.4167047, -3.7035825];
    const mockCity = "Madrid";
    const mockWeather = "Clear";
    const mockWeatherId = 800;
    const mockTemp = 300.01;
    const mockHumidity = 41;
    const mockSpeed = 2.06;

    beforeEach(() => {
        // Intercepts call to weather API and mocks response
        nock(WEATHER_BASE_ENDPOINT)
            .defaultReplyHeaders({
                "access-control-allow-origin": "*",
                "access-control-allow-credentials": "true",
            })
            .get((uri) => uri.includes("/weather"))
            .reply(200, {
                coord: {
                    lat: mockCoords[0],
                    lon: mockCoords[1],
                },
                weather: [
                    {
                        id: mockWeatherId,
                        main: mockWeather,
                    },
                ],
                main: {
                    temp: mockTemp,
                    humidity: mockHumidity,
                },
                wind: {
                    speed: mockSpeed,
                },
                name: mockCity,
            });
    });

    test("should render weather data for current location", async () => {
        // Intercepts call to ip API and mocks response
        nock(IP_BASE_ENDPOINT)
            .defaultReplyHeaders({
                "access-control-allow-origin": "*",
                "access-control-allow-credentials": "true",
            })
            .get("/")
            .reply(200, {
                city: mockCity,
                latitude: mockCoords[0],
                longitude: mockCoords[1],
            });

        const queryClient = new QueryClient();
        const { findByTestId } = render(
            <QueryClientProvider client={queryClient}>
                <Home />
            </QueryClientProvider>
        );

        const cityName = await findByTestId("city-name");
        const weatherName = await findByTestId("weather-name");
        const temperature = await findByTestId("temperature");
        const humidity = await findByTestId("humidity");
        const windSpeed = await findByTestId("wind-speed");

        expect(cityName).toHaveTextContent(mockCity);
        expect(weatherName).toHaveTextContent(mockWeather);
        expect(temperature).toHaveTextContent(mockTemp.toString());
        expect(humidity).toHaveTextContent(mockHumidity.toString());
        expect(windSpeed).toHaveTextContent(mockSpeed.toString());
    });
    test("should render weather data for city url query param", async () => {
        // Intercepts call to geo API and mocks response
        nock(GEO_BASE_ENDPOINT)
            .defaultReplyHeaders({
                "access-control-allow-origin": "*",
                "access-control-allow-credentials": "true",
            })
            .get((uri) => uri.includes("/direct"))
            .reply(200, [
                {
                    name: mockCity,
                    lat: mockCoords[0],
                    lon: mockCoords[1],
                },
            ]);

        const location: any = new URL(
            `http://localhost:3000/?city=${mockCity}`
        );
        location.assign = jest.fn();
        location.replace = jest.fn();
        location.reload = jest.fn();
        delete (window as any).location;
        window.location = location;

        const queryClient = new QueryClient();
        const { findByTestId } = render(
            <QueryClientProvider client={queryClient}>
                <Home />
            </QueryClientProvider>
        );
        const cityName = await findByTestId("city-name");
        const weatherName = await findByTestId("weather-name");
        const temperature = await findByTestId("temperature");
        const humidity = await findByTestId("humidity");
        const windSpeed = await findByTestId("wind-speed");

        expect(cityName).toHaveTextContent(mockCity);
        expect(weatherName).toHaveTextContent(mockWeather);
        expect(temperature).toHaveTextContent(mockTemp.toString());
        expect(humidity).toHaveTextContent(mockHumidity.toString());
        expect(windSpeed).toHaveTextContent(mockSpeed.toString());
    });
});
