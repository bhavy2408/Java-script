const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const minTemp = document.getElementById("minTemp");
const maxTemp = document.getElementById("maxTemp");

const error = document.getElementById("error");
const loading = document.getElementById("loading");


async function getWeather(city) {

    try {

        error.textContent = "";
        loading.style.display = "block";

        const URL =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd5e378503939ddaee76f12ad7a97608&units=metric`;

        const response = await fetch(URL);

        if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
}

        const data = await response.json();

        cityName.textContent = `${data.name}, ${data.sys.country}`;

        temperature.textContent = `${Math.round(data.main.temp)}°C`;

        description.textContent = data.weather[0].description;

        humidity.textContent = `${data.main.humidity}%`;

        wind.textContent = `${data.wind.speed} m/s`;

        feelsLike.textContent =
            `${Math.round(data.main.feels_like)}°C`;

        minTemp.textContent =
            `${Math.round(data.main.temp_min)}°C`;

        maxTemp.textContent =
            `${Math.round(data.main.temp_max)}°C`;

        weatherIcon.src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherIcon.alt = data.weather[0].description;

    } 
    
    catch (err) {

        error.textContent = err.message;

        cityName.textContent = "City";
        temperature.textContent = "--°C";
        description.textContent = "Weather condition";

    } 
    
    finally {

        loading.style.display = "none";

    }
}


searchBtn.addEventListener("click", function () {

    const city = cityInput.value.trim();

    if (city === "") {
        error.textContent = "Please enter a city name";
        return;
    }

    getWeather(city);

});


cityInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        searchBtn.click();
    }

});