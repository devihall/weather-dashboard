//DOM element references
var searchButtonEl = document.querySelector("#search-btn")
var inputEl = document.querySelector("#input")
var cityOptions = document.querySelector("#datalistOptions")
var pEL = document.querySelector("#currentDate")
// var currentDate = document.querySelector("#currentDate")
// var searchValue = input.value
// console.log(searchButtonEl)



    var apiKey = "a77950eae898ecd8c88501ac3b12b6b6";
    var queryUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityOptions +
      "&units=imperial&appid=" + apiKey;
      console.log(queryUrl)
    


// event listener on search button
searchButtonEl.addEventListener("click", function(queryUrl){
 console.log("click")
})
   
//current date
var currentDate = moment().format("MMM Do YY");
console.log (currentDate)
// pEl.innerHTML = currentDate
pEL.textContent = currentDate






// var storage = localStorage.getItem(search);
// console.log(storage)
// search.children[4].value = storage
// var search = document.querySelector(".gap-2");