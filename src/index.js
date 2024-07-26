import './style.css';

const weather = (function(){

let currentParse = '';
let address = '';
let currentCondition = '';
let currentTemp = '';



const generateCurrentParse = async function(location, startDate, endDate){
    const raw = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?key=LK4KV98AZ6RNMYP4RLDSSSUWQ', {mode: 'cors'})
    currentParse = await raw.json();

    //allocate data:
    address = currentParse.resolvedAddress;
    currentCondition = currentParse.currentConditions.conditions;
    currentTemp = currentParse.currentConditions.temp + '°F';
}

const showCurrentParce = function(){
    console.log(currentParse);
}

const getaddress = () => {return address}
const getcurrentCondition = () => {return currentCondition}
const getcurrentTemp = () => {return currentTemp}

return {generateCurrentParse, showCurrentParce, getaddress, getcurrentCondition, getcurrentTemp}
})();
const button = document.querySelector('.getWeather');
const searchLocation = document.querySelector('#searchLocation')
const address = document.querySelector('.address');
const currentConditions = document.querySelector('.currentConditions');
const temp = document.querySelector('.temp');

button.addEventListener('click', () => {
    weather.generateCurrentParse(searchLocation.value)
    .then(() => {
        address.textContent = weather.getaddress();
        currentConditions.textContent = weather.getcurrentCondition();
        temp.textContent = weather.getcurrentTemp();
});
})







//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY 