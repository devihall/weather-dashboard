//////////////////DOM element references///////////////////
var pEL = document.querySelector("#currentDate")
var currentDate = document.querySelector("#currentDate")
var currentCity = document.querySelector("#current-city");


////////////////////current date///////////////////////////
var currentDate = moment().format("MMM Do YY");
pEL.textContent = currentDate



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
        console.log(data);
        displayWeatherData(data);
      });
    } else {
      alert("There was a problem");
    }
  });
});

//////////////diplay weather data for searched city//////////////
var displayWeatherData = function(data){
var currentTemp = document.createElement("p")
currentTemp.textContent = response(main.temp)
console.log(currentTemp)

}
    
//////add user input to a list previously searched cities/////////
 document.getElementById("search-btn").addEventListener("click", function(){
        var cityInput = document.getElementById("input-box").value;
        var searchedCities = document.createElement('li');
        searchedCities.textContent = cityInput;
        searchedCities.className = "city-ul";
        document.getElementById("cities").append(searchedCities)
    })

   
    
        




// var storage = localStorage.getItem(search);
// console.log(storage)
// search.children[4].value = storage
// var search = document.querySelector(".gap-2")