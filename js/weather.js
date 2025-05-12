// API key. Replace with your API key
const APIKEY = '76e81497314034a9100e1f5e88a27afd';
// City
const city = 'Spokane';
// Units for Farenheit
const units = 'imperial';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // Check-check: Is data good? 
  console.log( data );
  
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  
  // Template to output
  const template = `
    <h1>Weather</h1>
    <data value="${data.name}" class="city">${data.name}</data>
    <data value="${data.main.temp}" class="temp">${data.main.temp}&#8457;</data>
    <p> The wind speed is: ${data.wind.speed} mph </p>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Placeholder">
  `;
  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
  
});
