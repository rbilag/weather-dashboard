import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Dashboard";
import { mockWeatherResponse } from "../../mocks/mockData";

describe("<Dashboard />", () => {
    test("should render weather data for current location", async () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Dashboard />
            </QueryClientProvider>
        );
        expect(
            await screen.findByText(mockWeatherResponse.name)
        ).toBeInTheDocument();
        expect(
            await screen.findByText(mockWeatherResponse.weather[0].description)
        ).toBeInTheDocument();
        expect(
            await screen.findByText(
                `${Math.round(mockWeatherResponse.main.temp)}\u00B0`
            )
        ).toBeInTheDocument();
        expect(
            await screen.findByText(
                `${Math.round(mockWeatherResponse.main.humidity)}%`
            )
        ).toBeInTheDocument();
        expect(
            await screen.findByText(
                `${Math.round(mockWeatherResponse.wind.speed)} km/h`
            )
        ).toBeInTheDocument();
    });

    test("should render weather data for city url query param", async () => {
        const location: any = new URL(
            `http://localhost:3000/?city=${mockWeatherResponse.name}`
        );
        location.assign = jest.fn();
        location.replace = jest.fn();
        location.reload = jest.fn();
        delete (window as any).location;
        window.location = location;

        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Dashboard />
            </QueryClientProvider>
        );
        expect(
            await screen.findByText(mockWeatherResponse.name)
        ).toBeInTheDocument();
        expect(
            await screen.findByText(mockWeatherResponse.weather[0].description)
        ).toBeInTheDocument();
        expect(
            await screen.findByText(
                `${Math.round(mockWeatherResponse.main.temp)}\u00B0`
            )
        ).toBeInTheDocument();
        expect(
            await screen.findByText(
                `${Math.round(mockWeatherResponse.main.humidity)}%`
            )
        ).toBeInTheDocument();
        expect(
            await screen.findByText(
                `${Math.round(mockWeatherResponse.wind.speed)} km/h`
            )
        ).toBeInTheDocument();
    });
});
