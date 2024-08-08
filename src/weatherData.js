const weather = (function(){

    let currentParse = '';
    let address = '';
    let currentCondition = '';
    let currentTemp = '';
    let currentIcon = '';
    
    
    const generateCurrentParse = async function(location, startDate, endDate){
        const raw = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?key=LK4KV98AZ6RNMYP4RLDSSSUWQ', {mode: 'cors'})
        currentParse = await raw.json();
        console.log(currentParse);
        //allocate data:
        address = currentParse.resolvedAddress;
        currentCondition = currentParse.currentConditions.conditions;
        currentTemp = currentParse.currentConditions.temp + '°F';
        currentIcon = currentParse.currentConditions.icon;
    }
    
    const showCurrentParce = function(){
        console.log(currentParse);
    }
    
    const getaddress = () => {return address}
    const getcurrentCondition = () => {return currentCondition}
    const getcurrentTemp = () => {return currentTemp}
    
    return {generateCurrentParse, showCurrentParce, getaddress, getcurrentCondition, getcurrentTemp}
    })();

    export { weather }