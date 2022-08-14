import { rest } from "msw";
import {
    GEO_BASE_ENDPOINT,
    IP_BASE_ENDPOINT,
    WEATHER_BASE_ENDPOINT,
} from "../data/constants";
import {
    mockGeoResponse,
    mockIPResponse,
    mockWeatherResponse,
} from "./mockData";

const getWeatherPath = `${WEATHER_BASE_ENDPOINT}/weather`;
const getIPPath = `${IP_BASE_ENDPOINT}/`;
const getGeoPath = `${GEO_BASE_ENDPOINT}/direct`;

const weatherHandler = rest.get(getWeatherPath, async (req, res, ctx) =>
    res(ctx.json(mockWeatherResponse))
);
const ipHandler = rest.get(getIPPath, async (req, res, ctx) =>
    res(ctx.json(mockIPResponse))
);
const geoHandler = rest.get(getGeoPath, async (req, res, ctx) =>
    res(ctx.json(mockGeoResponse))
);

export default [weatherHandler, ipHandler, geoHandler];
