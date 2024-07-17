document.getElementById("search-btn").addEventListener("click", function () {
  const city = document.getElementById("city-input").value;
  const apiKey = "8894763699b171019722c46bca7c5676";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const weather = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
        document.getElementById("weather-result").innerHTML = weather;
      } else {
        document.getElementById(
          "weather-result"
        ).innerHTML = `<p>${data.message}</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching the weather data:", error);
      document.getElementById(
        "weather-result"
      ).innerHTML = `<p>Error fetching the weather data.</p>`;
    });
});
