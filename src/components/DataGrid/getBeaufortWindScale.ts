// Reference for Beaufort Wind Scale: https://www.weather.gov/mfl/beaufort
export default (windSpeed: number) => {
    if (windSpeed >= 0 && windSpeed <= 1) return 0;
    if (windSpeed >= 1 && windSpeed <= 3) return 1;
    if (windSpeed >= 4 && windSpeed <= 7) return 2;
    if (windSpeed >= 8 && windSpeed <= 12) return 3;
    if (windSpeed >= 13 && windSpeed <= 18) return 4;
    if (windSpeed >= 19 && windSpeed <= 24) return 5;
    if (windSpeed >= 25 && windSpeed <= 31) return 6;
    if (windSpeed >= 32 && windSpeed <= 38) return 7;
    if (windSpeed >= 39 && windSpeed <= 46) return 8;
    if (windSpeed >= 47 && windSpeed <= 54) return 9;
    if (windSpeed >= 55 && windSpeed <= 63) return 10;
    if (windSpeed >= 64 && windSpeed <= 72) return 11;
    return 12;
};
