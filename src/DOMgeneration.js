const generateSearch = (function(){
    const search = document.querySelector('.search');

    const searchLabel = document.createElement('label');
    searchLabel.htmlFor = 'searchLocation';
    searchLabel.textContent = 'Enter a city into the field and get that weather:';
    search.appendChild(searchLabel);
    
    const searchInput = document.createElement('input');
    searchInput.id = 'searchLocation';
    searchInput.type = 'text';
    search.appendChild(searchInput);

    const degreeSet = document.createElement('div');
    search.appendChild(degreeSet); 

    const fahrChoice = document.createElement('input');
    fahrChoice.id = 'fahr';
    fahrChoice.type = 'radio';
    fahrChoice.name = 'degree';
    fahrChoice.checked = true;
    fahrChoice.value = '°F';
    degreeSet.appendChild(fahrChoice);

    const fahr = document.createElement('label');
    fahr.htmlFor = 'fahr';
    fahr.textContent = '°F';
    degreeSet.appendChild(fahr);
    
    const celsiusChoice = document.createElement('input');
    celsiusChoice.id = 'celsius';
    celsiusChoice.type = 'radio';
    celsiusChoice.name = 'degree';
    celsiusChoice.value = '°C';
    degreeSet.appendChild(celsiusChoice);

    const celsius = document.createElement('label');
    celsius.htmlFor = 'celsius';
    celsius.textContent = '°C';
    degreeSet.appendChild(celsius);

    const searchButton = document.createElement('button');
    searchButton.classList.add('getWeather');
    searchButton.textContent = 'Get Weather';
    search.appendChild(searchButton);
})();

function generateCurrentDOM(currentAddress, currentConditions, currentTemp, currentIcon){
    const overview = document.querySelector('.overview');
    overview.innerHTML = '';

    const overviewImage = document.createElement('img');
    overviewImage.classList.add('overviewImage');
    overviewImage.src = currentIcon;
    overview.appendChild(overviewImage);
    
    const overviewInfo = document.createElement('div');
    overviewInfo.classList.add('overviewInfo');
    overview.appendChild(overviewInfo);

    const overviewTitle = document.createElement('div');
    overviewTitle.textContent = 'Current Overview:';
    overviewInfo.appendChild(overviewTitle);

    const address = document.createElement('div');
    address.textContent = currentAddress;
    overviewInfo.appendChild(address);

    const conditions = document.createElement('div');
    conditions.textContent = currentConditions;
    overviewInfo.appendChild(conditions);
    
    const temp = document.createElement('div');
    temp.textContent = currentTemp;
    overviewInfo.appendChild(temp);
}

function generate15DayDOM(forecastArray){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    const forecastdays = document.createElement('div');
    forecastdays.classList.add('forecastdays');
    content.appendChild(forecastdays);

    forecastArray.forEach(forecastDay => {
        const day = document.createElement('div');
        day.classList.add('day');
        forecastdays.appendChild(day);

        const date = document.createElement('div');
        date.textContent = forecastDay.datetime.slice(5);
        day.appendChild(date);

        const icon = document.createElement('img');
        icon.classList.add('icon');
        icon.src = forecastDay.icon;
        day.appendChild(icon);

        const conditions = document.createElement('div');
        conditions.textContent = forecastDay.conditions;
        day.appendChild(conditions);

        //temp
        const temp = document.createElement('div');
        temp.textContent = forecastDay.temp;
        day.appendChild(temp);

        //min and max temp
        const minmax = document.createElement('div');
        minmax.textContent = 'Min: ' + forecastDay.tempmin + ',   Max: ' + forecastDay.tempmax;
        day.appendChild(minmax);

        //humidity
        const humidity = document.createElement('div');
        humidity.textContent = 'Humidity: ' + forecastDay.humidity;
        day.appendChild(humidity);
    });
}

//Make 15 day Forcast Now:


export { generateCurrentDOM, generate15DayDOM }