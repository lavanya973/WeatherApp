const apikey = "64e7dace4a2c99a46996a4601a93c98a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="   
const input = document.querySelector(".search input")
const btn = document.querySelector("button");
let  temp = document.querySelector('.temp');
let  city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector('.wind');
let weather = document.querySelector(".weather");
let weather_icon = document.querySelector(".weather-icon")
let error = document.querySelector(".error");

btn.addEventListener("click",()=>{
   let cityName =input.value.trim();
   checkWeather(cityName);


})

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + cityName+ `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);
  if(data.cod==="404"){
    console.log("invalid");
    error.classList.remove("hidden");
    error.classList.add("visible");
    weather.classList.remove('visible');
    weather.classList.add('hidden');

    

  }
  else{
  weather.classList.remove('hidden');
  weather.classList.add('visible');
  error.classList.remove("visible");
  error.classList.add("hidden");
  temp.innerText = data.main.temp;
  console.log(temp)
  city.innerText = data.name;
  console.log(city);
  humidity.innerText =data.main.humidity;
  wind.innerText = data.wind.speed;
  if(data.weather[0].main == "Clear"){
    weather_icon.setAttribute("src","weather-app-img/images/clear.png")
}
else if(data.weather[0].main == "Clouds"){
    weather_icon.setAttribute("src","weather-app-img/images/clouds.png")
}
else if(data.weather[0].main == "Mist"){
    weather_icon.setAttribute("src","weather-app-img/images/mist.png")
}
else if(data.weather[0].main == "Rain"){
    weather_icon.setAttribute("src","weather-app-img/images/rain.png")
}
else if(data.weather[0].main == "Snow"){
    weather_icon.setAttribute("src","weather-app-img/images/snow.png")
}
else if(data.weather[0].main == "Drizzle"){
    weather_icon.setAttribute("src","weather-app-img/images/drizzle.png")
}
}



}



