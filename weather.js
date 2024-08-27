addressEl = document.querySelector(".address");
descriptionEl = document.querySelector(".description");
timezoneEl = document.querySelector(".timezone");
searchWeather = document.querySelector(".input");
generateButton = document.querySelector(".generate");
weatherReportBox = document.querySelector(".weather-report");

async function findWeather(input) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=AHQU6Y2REZY62TGR5QSUKUDBR`,
    { mode: "cors" }
  );

  const data = await response.json();
  console.log(data);
  return {
    address: data.address,
    description: data.description,
    timezone: data.timezone,
  };
}

generateButton.addEventListener("click", () => {
  const searchWeatherValue = searchWeather.value;
  if (!searchWeatherValue) {
    return;
  } else {
    displayWeather(searchWeatherValue);
  }
});

async function displayWeather(input) {
  const weatherData = await findWeather(input);
  weatherReportBox.style.display = "block";
  if (weatherData) {
    addressEl.textContent = `Address: ${weatherData.address}`;
    descriptionEl.textContent = `Description: ${weatherData.description}`;
    timezoneEl.textContent = `Timezone: ${weatherData.timezone}`;
  }
}
