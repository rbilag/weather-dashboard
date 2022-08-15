<a name="readme-top"></a>
<div align="center">
<h3 align="center">Weather Dashboard</h3>

  <p align="center">
    Dashboard that shows current weather, temperature, humidity, and wind speed.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies-used">Technologies Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Weather Dashboard Screenshot][product-screenshot]]

<p>
    Dashboard that shows current weather, temperature, humidity, and wind speed of your current location. To see weather at other cities, append <code>/?city=cityName</code> to url(e.g. <code>/?city=Paris</code>). You can also query for multiple cities (<code>/?city=Paris,Barcelona,Toronto</code>). Dashboard will then cycle between each city for 5 seconds each.
  </p>
  <p>
    Current location data was fetched using IP API while weather data was fetched from Open Weather Map API.
  </p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Technologies Used

-   [React.js][react-url]
-   [Typescript][typescript-url]
-   [Emotion][emotion-url]
-   [Storybook][storybook-url]
-   [Tanstack Query][tanstack-query-url]
-   [Jest][jest-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1. Get a free Open Weather Map API Key at [https://openweathermap.org/api](https://openweathermap.org/api)
2. Clone the repo
    ```sh
    git clone https://github.com/crookedfingerworks/weather-dashboard.git
    ```
3. Install NPM packages
    ```sh
    npm install
    ```
4. Create .env file and add API key
    ```sh
    REACT_APP_WEATHER_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ```
5. Start the application
    ```sh
    npm start
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

**Get Current Location's Weather**
<p>Simply open the application normally (without any additional url query parameters). The user's location is captured by default.</p>

**Get A Specific City's Weather**
<p>
Append <code>/?city=cityName</code> to url(e.g. <code>/?city=Paris</code>). Please note that the parameter has to be a city name. If the name entered isn't found, the weather from the user's current location is displayed instead.
</p>

**Get Multiple City's Weather**
<p>
Append <code>/?city=cityName,cityName,cityName,...</code> to url(<code>/?city=Paris,Barcelona,Toronto</code>). Please note that the parameters have to be valid city names. If a specific city name isn't found, it won't be added to the weather cycle that will be displayed. If none of the inputted cities were found, the weather from the user's current location is displayed instead.
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

crooked.finger.works@gmail.com

Project Link: [https://github.com/crookedfingerworks/weather-dashboard](https://github.com/crookedfingerworks/weather-dashboard)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: screenshot.jpg
[react-url]: https://reactjs.org/
[typescript-url]: https://www.typescriptlang.org/
[emotion-url]: https://emotion.sh/docs/introduction
[storybook-url]: https://storybook.js.org/
[tanstack-query-url]: https://tanstack.com/query/v4
[jest-url]: https://jestjs.io/
