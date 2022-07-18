//////////////////DOM element references///////////////////
var pEL = document.querySelector("#currentDate");
var currentDate = document.querySelector("#currentDate");
var currentCity = document.querySelector("#current-city");
var cityInput = document.querySelector(".form-control");
var weatherContainer = document.querySelector("#weather-container");
var cityArr = [];
////////////////////current date///////////////////////////
var currentDate = moment().format("MMM Do YY");
pEL.textContent = currentDate;

//////////grab user input and pass as a query parameter///////
document.getElementById("search-btn").addEventListener("click", function () {
  var cityInput = document.querySelector(".form-control").value;
  var apiKey = "a77950eae898ecd8c88501ac3b12b6b6";
  var queryUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityInput +
    "&units=imperial&appid=" +
    apiKey;
  // console.log(queryUrl)

  ////////////////////get weather data/////////////////////
  fetch(queryUrl).then(function (response) {
    // console.log(response)
    if (response.ok) {
      response.json().then(function (data) {
        // console.log(data);
        displayWeatherData(data);
        cityArr.push(cityInput);
        // console.log(cityArr)
        console.log(JSON.stringify(cityArr));
        console.log(cityArr);
        localStorage.setItem("city", cityArr);
      });
    } else {
      alert("There was a problem");
    }
  });
});

//////////////diplay weather data for searched city//////////////
var displayWeatherData = function (data) {
  //   var currentTemp = document.createElement("p");
  //   console.log(currentTemp);
  //   currentTemp.textContent = data.main.temp;
  // weatherContainer.innerHTML = "<p>Hello</p>";
  weatherContainer.innerHTML = "<p>" + data.main.temp + "</p>";
  // console.log(currentTemp);
  //   console.log(data.main);
};

//////add user input to a list previously searched cities/////////
document.getElementById("search-btn").addEventListener("click", function () {
  var cityInput = document.getElementById("input-box").value;
  var searchedCities = document.createElement("li");
  searchedCities.textContent = cityInput;
  searchedCities.className = "city-ul";
  document.getElementById("cities").append(searchedCities);
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
