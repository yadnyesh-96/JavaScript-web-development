const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const statusText = document.getElementById("status");

const resultBox = document.getElementById("weatherResult");
const cityNameEl = document.getElementById("cityName");
const temperatureEl = document.getElementById("temperature");
const conditionEl = document.getElementById("condition");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();
  if (!city) return;

  fetchWeather(city);
});

async function fetchWeather(city) {
  try {
    statusText.textContent = "Loading...";
    resultBox.classList.add("hidden");

    // Fetch coordinates
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );

    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found");
    }

    const { latitude, longitude, name } = geoData.results[0];

    // Fetch weather
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );

    const weatherData = await weatherRes.json();

    displayWeather(name, weatherData.current_weather);

  } catch (err) {
    statusText.textContent = err.message;
  }
}

function displayWeather(city, weather) {
  statusText.textContent = "";
  resultBox.classList.remove("hidden");

  cityNameEl.textContent = city;
  temperatureEl.textContent = `Temperature: ${weather.temperature}°C`;
  conditionEl.textContent = `Weather code: ${weather.weathercode}`;
}