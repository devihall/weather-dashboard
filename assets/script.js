//DOM element references
var pEL = document.querySelector("#currentDate")
var currentDate = document.querySelector("#currentDate")

//current date
var currentDate = moment().format("MMM Do YY");
pEL.textContent = currentDate



//grab user input and pass as a query parameter
document.getElementById("search-btn").addEventListener("click", function(){
    var cityInput = document.querySelector(".form-control").value;
var apiKey = "a77950eae898ecd8c88501ac3b12b6b6";
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=" + apiKey;
// console.log(queryUrl)
fetch(queryUrl);
})

    
//grab user input and make a list previously searched cities
 document.getElementById("search-btn").addEventListener("click", function(){
        var cityInput = document.getElementById("input-box").value;
        var searchedCities = document.createElement('li');
        searchedCities.textContent = cityInput;
        searchedCities.className = "city-ul";
        document.getElementById("cities").append(searchedCities)
    })

   
    
        







    //   queryUrl = searchCityInput.value()

// event listener on search button
// searchButtonEl.addEventListener("click", function(event){
//     searchCityInput = 
// //  console.log("click")
// })
   






// var storage = localStorage.getItem(search);
// console.log(storage)
// search.children[4].value = storage
// var search = document.querySelector(".gap-2");