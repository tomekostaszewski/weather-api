const input = document.querySelector('.city');
const btnCheck = document.querySelector('.verifyWeather');
const labelCity = document.querySelector('.nameCity');
const error = document.querySelector('.error');

const temperature = document.querySelector('.valTemp');
const humidity = document.querySelector('.valHum');
const wind = document.querySelector('.valWin');
const pressure = document.querySelector('.valPress');
const description = document.querySelector('.valDes');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=0fcd163a483389ca0ce693ea80bbac35';
const API_UNITS = '&units=metric';
const API_LANG = '&lang=pl';

const weather = () => {

    const city = input.value;
    const URL = API_LINK + city + API_UNITS + API_KEY + API_LANG;
    
    fetch(URL)
    .then(res => res.json())
    .then(data => {

        labelCity.textContent = `${city}`;
        
        const tempe = data.main.temp;
        temperature.textContent = `${tempe.toFixed(0)}°C`;

        const hum = data.main.humidity;
        humidity.textContent = `${hum} %`;

        const winda = data.wind.speed;
        wind.textContent = `${winda} km/h`;

        const press = data.main.pressure;
        pressure.textContent = `${press} hPa`;

        const status = Object.assign({}, ...data.weather)
        description.textContent = `${status.description}`;

        error.textContent = '';
        input.value = '';

    }).catch(() => error.textContent = 'Wpisz poprawną nazwę miasta...');
}

const keyCheck = e => {
    if(e.key === 'Enter'){
        weather();
    }
}

btnCheck.addEventListener('click', weather);
input.addEventListener('keyup', keyCheck);