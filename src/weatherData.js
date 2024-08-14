import snow from './icons/snow.svg';
import rain from './icons/rain.svg';
import fog from './icons/fog.svg';
import wind from './icons/wind.svg';
import cloudy from './icons/cloudy.svg';
import partlyCloudyDay from './icons/partly-cloudy-day.svg';
import partlyCloudyNight from './icons/partly-cloudy-night.svg';
import clearDay from './icons/clear-day.svg';
import clearNight from './icons/clear-night.svg';

const weather = (function(){

    let currentParse = '';
    let address = '';
    let currentCondition = '';
    let currentTemp = '';
    let currentIcon = '';
    let fifteenDays = '';
    
    
    const generateCurrentParse = async function(location, startDate, endDate){
        const raw = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?key=LK4KV98AZ6RNMYP4RLDSSSUWQ', {mode: 'cors'})
        currentParse = await raw.json();
        //allocate data:
        address = currentParse.resolvedAddress;
        currentCondition = currentParse.currentConditions.conditions;
        currentTemp = currentParse.currentConditions.temp + '°F';
        currentIcon = convertIcon(currentParse.currentConditions.icon);
        fifteenDays = currentParse.days; 
    }
    
    const convertIcon = (icon) => {
        switch(icon){
            case 'snow':
                return snow;
            case 'rain':
                return rain;
            case 'fog':
                return fog;
            case 'wind':
                return wind;
            case 'cloudy':
                return cloudy;
            case 'partly-cloudy-day':
                return partlyCloudyDay;
            case 'partly-cloudy-night':
                return partlyCloudyNight;
            case 'clear-day':
                return clearDay;
            case 'clear-night':
                return clearNight;
        }
    }

    const showCurrentParce = function(){
        console.log(currentParse);
    }
    
    const getaddress = () => {return address};
    const getcurrentCondition = () => {return currentCondition};
    const getcurrentTemp = () => {return currentTemp};
    const getCurrentIcon = () => {return currentIcon};
    const getFifteenDays = () => {return fifteenDays};
    
    return {generateCurrentParse, showCurrentParce, getaddress, getcurrentCondition, getcurrentTemp, getCurrentIcon, getFifteenDays}
    })();

    export { weather }