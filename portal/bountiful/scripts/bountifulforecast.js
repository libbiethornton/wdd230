const forecast1 = document.querySelector('#forecast1');
const forecast2 = document.querySelector('#forecast2');
const forecast3 = document.querySelector('#forecast3');


const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=e77a477167067e7a50fa768c6a425e78&units=imperial"

async function apiFetch2() {
    try {
      const response2 = await fetch(url2);
      if (response2.ok) {
        const data = await response2.json();
        //console.log(data); // this is for testing the call
        displayResults2(data);
      } else {
          throw Error(await response2.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch2();

function displayResults2(weatherData) {
    forecast1.innerHTML = weatherData.list[0].main.temp;
    forecast2.innerHTML = weatherData.list[1].main.temp;
    forecast3.innerHTML = weatherData.list[2].main.temp;

};