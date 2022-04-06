



function citySearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#city-search");
    let h2 = document.querySelector("h2");
    h2.innerHTML = `${searchInput.value}`;



}
let displayCity = document.querySelector("#display-search");
displayCity.addEventListener("submit", citySearch);
function daySearch(date) {
    let day = date.getDay();
    let minutes = date.getMinutes();
    let hour = date.getHours();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    if (hour < 10) {
        hour = `0${hour}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${days[day]}, ${hour}:${minutes}`;
}
let h1 = document.querySelector("#date-display");
let current = new Date();
h1.innerHTML = daySearch(current);

function daySearch(date) {
    let day = date.getDay();
    let minutes = date.getMinutes();
    let hour = date.getHours();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    if (hour < 10) {
        hour = `0${hour}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${days[day]}, ${hour}:${minutes}`;
}
let h1 = document.querySelector("#date-display");
let current = new Date();
h1.innerHTML = daySearch(current);

//display city and weather

// change innerHTML h1 to location name.
//connect element "button" to function
function displayWeather(response) {
    document.querySelector("#display-weather").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
        response.data.main.temp
    );

    document.querySelector("#description").innerHTML =
        response.data.weather.description;
}

function getPosition(event) {
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
}
let form = document.querySelector("#display-search");
form.addEventListener("submit", search);