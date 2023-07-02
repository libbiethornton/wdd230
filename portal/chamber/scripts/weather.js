const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windspeed = document.querySelector('#windspeed');
const windchill = document.querySelector('#windchill');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Iqaluit&appid=e77a477167067e7a50fa768c6a425e78&units=imperial"

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

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp;
    windspeed.innerHTML = weatherData.wind.speed;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    const temp = weatherData.main.temp;
    const speed = weatherData.wind.speed;

    if (temp <= 50 && speed > 3) {
      chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    } else {
      chill = "N/A";
    }
    windchill.innerHTML = chill.toFixed(2);

};
