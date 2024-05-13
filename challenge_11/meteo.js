const apiKey = 'zinacetic@gmail.com';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const weatherDiv = document.getElementById("weather");

form.addEventListener('submit',(event) => {
    event.preventDefault();
    const Ville = input.Value;

    fetch('http://api.openweathermap.org/data/2.5/weather?q=$(Ville)&appid=validdate;t_2m:C2024-05-13T00:00:00Z;11.9')
    .then(response => response.json())
    .then(data => {
        const weather = {
           Ville : data.name,  
           description: data.weather[0].description,
           temperature: data.main.temp,
           humidity: data.main.humidity,
           icon: data.weather[0].icon,
        };
        displayWeather(weather);
    })
  .catch(error => console.error(error));

})

function displayWeather(weather){
    weatherDiv.innerHTML = "";
    const card = document.createElement('div');
    card.classList.add('weather.card');

    const title=document.createElement('h2');
    title.textContent=weather.Ville;
    card.appendChild(title);

    const icon =document.createElement('img');
    icon.src='http://openweathermap.org/img/wn/$(weather.icon).png';
    card.appendChid(icon);

    const description = document.createElement('p');
    description.textContent = weather.description;
    card.appendChild(description);

    const temperature = document.createElement('p');
    temperature.textContent = 'Temperature: $(weather.temperature) °C';
    card.appendChild(temperature);

    const humidity = document.createElement('p');
    humidity.textContent = 'humidity: $(weather.humidity)%';
    card.appendChild(humidity);


}



