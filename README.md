# Weather App

## Overview

The Weather App is a modern web application built with React.js, TailwindCSS, and Vite. This app provides real-time weather information by fetching data from the OpenWeather API. It displays detailed weather metrics for any city, including weather conditions, temperature, humidity, and wind speed.

## Features

- **Weather Conditions:** Displays current weather with appropriate emojis based on the weather id
- **Temperature:** Shows the current temperature in Fahrenheit
- **Temperature Range:** Provides the highest and lowest temperatures for the day
- **City Information:** Displays the name of the city for which the weather is being shown
- **Humidity:** Shows the humidity level in percentage
- **Wind Speed:** Displays the wind speed in miles per hour (mph)

## Technologies

1. **React.js:** A JavaScript library for building user interfaces
2. **TailwindCSS:** A utility-first CSS framework for styling
3. **Vite:** A fast build tool and development server
4. **OpenWeather API:** Service used to fetch weather data

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Steps

1. **Clone the Repository:**
   `git clone https://github.com/yourusername/weather-app.git`

2. **Navigate to the Project Directory:**
   `cd weather-app`

3. **Install Dependencies:**
   `npm install`

4. **Set Up Environment Variables:**

   - Create a `.env` file in the root directory of the project.
   - Add your OpenWeather API key:
     `VITE_OPENWEATHER_API_KEY=your_api_key_here`

5. **Run the Application:**
   `npm run dev`

## Usage

1. **Open the App:**
   - Open your browser and navigate to `http://localhost:3000`
2. **Enter City Name:**

   - Type the name of the city in the search bar and press Enter.

3. **View Weather Information:**
   - The app will display the current weather, temperature, temperature range, humidity, and wind speed for the entered city.

## License

This project is licensed under the MIT License. See LICENSE for more details.

## Acknowledgments

- **OpenWeather API:** For providing the weather data
- **React:** For the powerful and flexible front-end library
- **TailwindCSS:** For making it easy to style the application
- **Vite:** For providing a fast development experience
