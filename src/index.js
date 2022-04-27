//display city and weather

/*add a function that tells the current date and 
time of the selected city*/
//calculate the date
// change innerHTML h1 to location name.
//connect element "button" to function
// added wind and humidity
//fixed description weather[0].description
function formatDate(timestamp)
{
return new Date(timestamp * 1000);
}
  function displayWeather(response) {
    document.querySelector("#display-weather").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );

    document.querySelector("#description").innerHTML =
      response.data.weather[0].description;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;

 document.querySelector("#datetime").innerHTML = formatDate(response.data.dt);
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    celsiusTemperature = response.data.main.temp;

  }

  function getPosition(event) 
  {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  //make an api call to open weather map api.
  function searchLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "308d6474e5d7b4afbc574ee18365c824";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  //add current location button after giving the current button an id.
  let currentLocationButton = document.querySelector("#current-location-button");
  currentLocationButton.addEventListener("click", getPosition);
  function search(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-search");
    let cityElement = document.querySelector("#display-weather");
    cityElement.innerHTML = cityInput.value;
    let apiKey = "308d6474e5d7b4afbc574ee18365c824";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  let form = document.querySelector("#display-search");
  form.addEventListener("submit", search);

  //converting celsius to fahrenhiet
  function displayCelsiusTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
  }

  function displayFarhenhietTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let fahrenhietTemp = (celsiusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenhietTemp);


  }
  let celsiusTemperature = null;
  let fahrenheitLink = document.querySelector("#fahrenheit-temp");
  fahrenheitLink.addEventListener("click", displayFarhenhietTemperature);
  let ctemp = document.querySelector("#celsius-temp");
  ctemp.addEventListener("click", displayCelsiusTemperature);

