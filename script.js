const getWeatherBtn = document.querySelector('button')
const getCityInp = document.querySelector('input')
const currentCity = document.getElementById('cityField')
const currentTemperature = document.getElementById('temperatureField')
const currentDescription = document.getElementById('feelsLikeField')
const currentWeather = document.getElementById('weatherField')


getWeatherBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getCityInp.value}&units=imperial&appid=2a3fe53d432c9797101df0fd22e22638`)
    .then((res) => res.json())
    .then((data) => {
        currentCity.innerText = "Weather for: " + data.name
        currentTemperature.innerText = "Temperature: " + data.main.temp + " °F"
        currentDescription.innerText = "Feels Like: " + data.main.feels_like + " °F"
        currentWeather.innerText = "Weather: " + data.weather[0].description
        })
        .catch((err) => console.log(err))
})
  
    


   

