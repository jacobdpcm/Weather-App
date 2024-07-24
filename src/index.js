import './style.css';

const weather = (function(){

let currentParse = '';

const getCurrentParse = async function(location, startDate, endDate){
    const raw = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/clearwater?key=LK4KV98AZ6RNMYP4RLDSSSUWQ', {mode: 'cors'})
    currentParse = await raw.json();
}

const showCurrentParce = function(){
    console.log(currentParse);
}

return {getCurrentParse, showCurrentParce}
})();

weather.getCurrentParse()
.then(weather.showCurrentParce());//Need to figure out the .then stuff to show it after it retrieves the data.





//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY 