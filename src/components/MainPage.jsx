import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const MainPage = () => {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [cityNameError, setCityNameError] = useState(null);

  const getCityName = (e) => {
    setCity(e.target.value);
  };

  const searchWeather = () => {
    let apiKey = import.meta.env.VITE_API_KEY;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        let weatherDescription = res.weather[0].description;
        let weatherId = res.weather[0].id;
        const weather = {
          cityName: res.name,
          cityTemp: Math.round(res.main.temp),
          cityMinTemp: Math.round(res.main.temp_min),
          cityMaxTemp: Math.round(res.main.temp_max),
          cityHumidity: res.main.humidity,
          cityWindSpeed: Math.round(res.wind.speed),
          weatherId: weatherId,
          weatherIcon: res.weather[0].icon,
          citySunset: res.sys.sunset * 1000,
          cityWeatherDes: weatherDescription,
        };
        setWeatherInfo(weather);
        setCityNameError(null);
      })
      .catch((err) => {
        console.log(err);
        const errorObj = {
          message: "Please enter a valid city name!",
        };
        setCityNameError(errorObj);
        setWeatherInfo(null);
      });
    document.getElementById("cityName").value = "";
  };
  const getWeatherEmoji = (id, icon) => {
    switch (true) {
      case id >= 200 && id < 300:
        return "🌩️";
      case id >= 300 && id < 400:
        return "🌧️";
      case id >= 500 && id < 600:
        return "🌧️";
      case id >= 600 && id < 700:
        return "❄️";
      case id >= 700 && id < 800:
        return "🌫️";
      case id === 800 && icon.endsWith("d"):
        return "☀️";
      case id === 800 && icon.endsWith("n"):
        return "🌃";
      case id === 801 && icon.endsWith("d"):
        return "🌥️";
      case id === 801 && icon.endsWith("n"):
        return "🎑";
      case id >= 802 && id < 805:
        return "☁️";
      default:
        return "❓";
    }
  };
  return (
    <main className="min-h-[100vh] mt-[5rem] sm:mt-[7rem] mb-2 font-serif z-0">
      <section className="inputBox sm:flex-row flex flex-col gap-2 items-center justify-center">
        <div className="inputBar relative">
          <input
            type="text"
            placeholder="Weather in your city"
            id="cityName"
            className="p-[0.8rem] sm:text-xl w-[18rem] min-w-[35vw] rounded-xl bg-slate-50 border border-gray-800"
            onChange={(e) => getCityName(e)}
          />
          <div className="btn absolute right-2 top-[1.1rem]">
            <button
              className=" text-xl sm:text-2xl font-semibold sm:font-bold text-gray-500"
              title="Search Weather"
              onClick={searchWeather}
            >
              <FaMagnifyingGlass />
            </button>
          </div>
        </div>
      </section>
      {weatherInfo && (
        <section className="weatherInfo bg-gradient-to-b from-blue-400 to-yellow-200 shadow-md rounded-md w-[18rem] min-w-[30vw] p-2 mx-auto my-4 sm:my-8">
          <div className="information text-center">
            <p className="cityName text-2xl sm:text-3xl font-bold text-gray-100  drop-shadow-xl mt-3">
              {weatherInfo.cityName}
            </p>
            <p className="weatherEmoji text-[5rem]">
              {getWeatherEmoji(weatherInfo.weatherId, weatherInfo.weatherIcon)}
            </p>
            <p className="weatherDescription capitalize mt-[-1rem]">
              {weatherInfo.cityWeatherDes}
            </p>
            <p className="tempInfo text-2xl sm:mt-2">
              {weatherInfo.cityTemp}°F
            </p>
            <p className="tempMaxMin sm:mt-2">
              H:{weatherInfo.cityMaxTemp}°F&nbsp; &nbsp; L:
              {weatherInfo.cityMinTemp}°F
            </p>
          </div>
          <div className="additionInfo flex justify-around my-4">
            <div className="humidityContainer flex flex-col items-center justify-center">
              <img className="w-10" src="/humidity.png" alt="HumidityLogo" />
              <span>Humidity</span>
              <p className="humidityInfo">{weatherInfo.cityHumidity}%</p>
            </div>

            <div className="windSpeedContainer flex flex-col items-center justify-center">
              <img className="w-10" src="/wind.png" alt="WindLogo" />
              <span>Wind Speed</span>
              <p className="windSpeed">{weatherInfo.cityWindSpeed} mph</p>
            </div>
          </div>
        </section>
      )}
      {cityNameError && (
        <section className="errorInfo bg-gradient-to-r from-pink-400 to-red-400 p-4 text-white shadow-md rounded-md w-[18rem] min-w-[30vw] mx-auto my-4 sm:my-8">
          <p className=" text-center font-semibold text-lg sm:text-xl">
            {cityNameError.message}
          </p>
        </section>
      )}
    </main>
  );
};

export default MainPage;
