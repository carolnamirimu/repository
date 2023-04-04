function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  function displayweather(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
  }
  
  function searchcity(event) {
    event.preventDefault();
    let apikey = "441d1183262ff89540a8b2407eb2ee23";
    let city = document.querySelector("#city-input").value;
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiurl).then(displayweather);
  }
  
  function handlesubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchcity(city);
  }
  function searchlocation(position) {
    let apikey = "441d1183262ff89540a8b2407eb2ee23";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apikey}&units=metric`;
  
    axios.get(apiurl).then(displayweather);
  }
  
  function getCurrentlocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchlocation);
  }
  
  // Feature #1
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  // Feature #2
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", searchcity);
  let currentlocationbutton = document.querySelector("#current-location-button");
  currentlocationbutton.addEventListener("click", getCurrentlocation);
  