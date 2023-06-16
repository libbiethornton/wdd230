const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windspeed = document.querySelector('#windspeed');
const windchill = document.querySelector('#windchill');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Logan&appid=e77a477167067e7a50fa768c6a425e78&units=imperial"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function  displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp;
    windspeed.innerHTML = weatherData.main.speed;
    windchill.innerHTML = weatherData.main.feels_like;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }