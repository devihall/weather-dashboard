//////////////////DOM element references//////////////////////////
var pEL = document.querySelector("#currentDate");
var currentDate = document.querySelector("#currentDate");
var currentCity = document.querySelector("#current-city");
var cityInput = document.querySelector(".form-control");
var iconContainer = document.querySelector("#icon-container");
var tempContainer = document.querySelector("#temp-container");
var humidContainer = document.querySelector("#humid-container");
var windContainer = document.querySelector("#wind-container");
var uviContainer = document.querySelector("#uvi-container");
var forecastGroupContainerEl = document.querySelector(
  "#forecast-group-container"
);
var cityArr = [];

////////////////////current date//////////////////////////////////
var currentDate = moment().format("MMM Do YY");
pEL.textContent = "Today's date " + currentDate;

//////////grab user input and pass as a query parameter///////////
document.getElementById("search-btn").addEventListener("click", function () {
  var cityInput = document.querySelector(".form-control").value;
  var apiKey = "a77950eae898ecd8c88501ac3b12b6b6";
  var queryUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityInput +
    "&units=imperial&appid=" +
    apiKey;
  // console.log(queryUrl)

  ////////////////////get weather data/////////////////////////////
  fetch(queryUrl).then(function (response) {
    // console.log(response)
    if (response.ok) {
      response.json().then(function (data) {

        console.log(data)

        var lon = data.coord.lon;
        var lat = data.coord.lat;
       
        displayWeatherData(data);
        cityArr.push(cityInput);
        displayUVIData(lon,lat)

        localStorage.setItem("city", JSON.stringify(cityArr));
        // console.log(cityArr)
      });
    } else {
      alert("There was a problem");
    }
  });
});

//////////////display weather data for searched city//////////////
var displayWeatherData = function (data) {
  currentCity.innerHTML = "<p>" + data.name + "</p>";

  /////////////////////display icon//////////////////////////////
  iconContainer.innerHTML =
    "<img src='https://openweathermap.org/img/wn/" +
    data.weather[0].icon +
    ".png' >";
  // console.log(data.weather[0].icon);

  ////////////////////display temperature////////////////////////////
  tempContainer.innerHTML = "<p>" + "Temperature " + data.main.temp + "	&#8457" + "</p>";
  ////////////////////display humidity////////////////////////////
  humidContainer.innerHTML = "<p>" + "Humidity " + data.main.humidity + " %" + "</p>";
  ////////////////////display wind speed////////////////////////
  windContainer.innerHTML = "<p>" + "Wind Speed " + data.wind.speed + " mph" + "</p>";
  // console.log(currentTemp);
  // console.log(data);
};
//////////////////////////UV index////////////////////////////////

var displayUVIData = function (lon,lat){

  var apiKey = "a77950eae898ecd8c88501ac3b12b6b6";
  var uviQueryUrl ="https://api.openweathermap.org/data/2.5/uvi?&lat=" + lat +"&lon=" +lon + "&appid=" +apiKey;
  
  fetch(uviQueryUrl).then(function (response) {
    
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
         uviContainer.innerHTML = "<p>" + data.name + "</p>";
       
      });
    }
  });
};

// var displayUVIData = function (data) {
//   uviContainer.innerHTML = "<p>" + data.name + "</p>";
// };

////////////////////list previously searched cities//////////////////
document.getElementById("search-btn").addEventListener("click", function () {
  var cityInput = document.getElementById("input-box").value;
  var searchedCities = document.createElement("li");
  searchedCities.textContent = cityInput;
  searchedCities.className = "city-ul";
  document.getElementById("cities").append(searchedCities);
});

//////////5 day forecast///////////////////////////////////
document.getElementById("search-btn").addEventListener("click", function () {
  var cityInput = document.querySelector(".form-control").value;
  var apiKey = "a77950eae898ecd8c88501ac3b12b6b6";
  var forecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityInput +
    "&units=imperial&appid=" +
    apiKey;
  // console.log(forecastURL)
  fetch(forecastURL).then(function (response) {
    // console.log(response)
    if (response.ok) {
      response.json().then(function (data) {
        // console.log(data);
        JSON.parse;
        for (var i = 0; i < 5; i++) {
          ////////forecast parent element//////////////////
          var forecastContainerEl = document.createElement("div");
          forecastContainerEl.className = "forecast-container";
          forecastGroupContainerEl.append(forecastContainerEl);

          /////forecast date container/////////////////////
          var forecastDateContainerEl = document.createElement("div");
          forecastDateContainerEl.className = "forecast-date-container";
          forecastDateContainerEl.textContent = "Date: " + data.list[i].dt_txt;
          forecastContainerEl.append(forecastDateContainerEl);

          /////forecast city container/////////////////////
          var forecastCityContainerEl = document.createElement("div");
          forecastCityContainerEl.className = "forecast-city-container";
          forecastCityContainerEl.textContent = data.city.name;
          // console.log(data.city.name);
          // console.log(data.list[i]);
          // console.log(data);
          forecastContainerEl.append(forecastCityContainerEl);

          /////forecast icon container/////////////////////
          var forecastIconContainerEl = document.createElement("img");
          forecastIconContainerEl.className = "forecast-icon-container";
          // forecastIconContainerEl.innerHTML = "<img src='https://openweathermap.org/img/wn/" + data.weather[i].icon + ".png' >";
          forecastContainerEl.append(forecastIconContainerEl);

          /////forecast temp container/////////////////////
          var temperatureContainerEl = document.createElement("div");
          temperatureContainerEl.className = "temperature-container";
          temperatureContainerEl.textContent =
            "Temp: " + Number(data.list[i].main.temp) + "°";
          forecastContainerEl.append(temperatureContainerEl);

          /////forecast humidity container/////////////////////
          var forecastHumidContainerEl = document.createElement("div");
          forecastHumidContainerEl.className = "forecast-humid-container";
          forecastHumidContainerEl.textContent =
            "Humidity: " + Number(data.list[i].main.humidity) + "%";
          forecastContainerEl.append(forecastHumidContainerEl);

          /////forecast wind container/////////////////////
          var forecastWindContainerEl = document.createElement("div");
          forecastWindContainerEl.className = "forecast-wind-container";
          forecastWindContainerEl.textContent =
            "Wind Speed: " + data.list[i].wind.speed + " MPH";
          forecastContainerEl.append(forecastWindContainerEl);
        }
      });
    }
  });
});

// ////////////save cities in local storage/////////////////////
// var inputBox = document.querySelector("#input-box")
// // var userInput = document.querySelector(".text")
// var searchBtn = document.querySelector(".btn");
// inputBox.addEventListener("input",function(cities) {
//     console.log(cities)
//     text.textContent = cities.target.value

// })

// var storage = localStorage.setItem("",inputBox) ;
// cityInput.searchBtn = storage
// console.log(localstorage)
// search.children[4].value = storage
// var search = document.querySelector(".gap-2")
