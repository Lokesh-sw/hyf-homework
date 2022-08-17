const button = document.querySelector(".submit");
const input = document.querySelector("input");
const message = document.querySelector(".message");
const city = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const img = document.createElement("img");
const wind = document.querySelector(".windSpeed");
const description = document.querySelector(".descriptionClouds");
const sunsetSunrise = document.querySelector(".sunsetSunrise");

const visibility = document.querySelector(".visibility");

function printWeather(data) {
  city.innerHTML = data.name;

  const roundTemperature = Math.round(data.main.temp);
  temp.innerHTML = ` ${roundTemperature} °`;

  img.src = `
     http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png
     `;
  document.querySelector(".mainContainer").appendChild(img);

  wind.innerHTML = `Wind speed ${data.wind.speed}`;

  description.innerHTML = data.weather[0].description;

  const unixTimeSunrise = data.sys.sunrise;
  const milisecondsSunrise = unixTimeSunrise * 1000;
  const dateObjectSunrise = new Date(milisecondsSunrise);
  const humanFormatSunrise = dateObjectSunrise.toLocaleString("de-DE", {
    hour: "numeric",
    minute: "numeric",
  });

  const unixTimeSunset = data.sys.sunset;
  const milisecondsSunset = unixTimeSunset * 1000;
  const dateObjectSunset = new Date(milisecondsSunset);
  const humanformatSunset = dateObjectSunset.toLocaleString("de-DE", {
    hour: "numeric",
    minute: "numeric",
  });
  console.log(humanformatSunset);

  sunsetSunrise.innerHTML = ` Sunrise at : ${humanFormatSunrise} and sunset at : ${humanformatSunset} .`;

  visibility.innerHTML = `Visibility ${data.visibility / 1000} kilometers`;
}

button.addEventListener("click", () => {
  if (input.value === "") {
    message.innerHTML = "Remember to write city!";
  } else {
    message.innerHTML = "";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=087721b0a2eb18a4c52d312920c02f42&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        printWeather(data);

        initMap(data.coord.lat, data.coord.lon);
      });
  }
});

const buttonCurrentPosition = document.getElementById("currentPosition");

buttonCurrentPosition.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (geolocationPosition) {
    const longitudeTwo = geolocationPosition.coords.longitude;
    const latitudeTwo = geolocationPosition.coords.latitude;
    console.log(longitudeTwo);
    console.log(latitudeTwo);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeTwo}&lon=${longitudeTwo}&appid=087721b0a2eb18a4c52d312920c02f42&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        printWeather(data);
        initMap(latitudeTwo, longitudeTwo);
      });
  });
});
