import './style.css';
import { generateCurrentDOM, generate15DayDOM } from './DOMgeneration.js';
import { weather } from './weatherData';


const button = document.querySelector('.getWeather');
const searchLocation = document.querySelector('#searchLocation');
let searchLocationFocus = false;


button.addEventListener('click', () => {
    weather.generateCurrentParse(searchLocation.value)
    .then(() => {
        generateCurrentDOM(weather.getaddress(), weather.getcurrentCondition(), weather.getcurrentTemp(), weather.getCurrentIcon());
        generate15DayDOM(weather.getFifteenDays());
});
})

//Allow Enter key functionality
searchLocation.addEventListener('focus', () => {
    searchLocationFocus = true;
})

searchLocation.addEventListener('blur', () => {
    searchLocationFocus = false;
})

window.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && searchLocationFocus === true){
        weather.generateCurrentParse(searchLocation.value)
        .then(() => {
        generateCurrentDOM(weather.getaddress(), weather.getcurrentCondition(), weather.getcurrentTemp(), weather.getCurrentIcon());
        generate15DayDOM(weather.getFifteenDays());
        console.log(weather.getFifteenDays())
        });
    }
    
})



/*list of conditions to have an image for:
snow	                    Amount of snow is greater than zero
rain	                    Amount of rainfall is greater than zero
fog	                        Visibility is low (lower than one kilometer or mile)
wind	                    Wind speed is high (greater than 30 kph or mph)
cloudy	                    Cloud cover is greater than 90% cover
partly-cloudy-day	        Cloud cover is greater than 20% cover during day time.
partly-cloudy-night	        Cloud cover is greater than 20% cover during night time.
clear-day	                Cloud cover is less than 20% cover during day time
clear-night	                Cloud cover is less than 20% cover during night time
*/






//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY 