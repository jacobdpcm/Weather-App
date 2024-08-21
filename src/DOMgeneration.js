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
    const content = document.querySelector('.forecastdays');
    content.innerHTML = '';

    forecastArray.forEach(forecastDay => {
        const day = document.createElement('div');
        day.classList.add('day');
        content.appendChild(day);

        const icon = document.createElement('img');
        icon.classList.add('icon');
        icon.src = forecastDay.icon;
        day.appendChild(icon);

        const conditions = document.createElement('div');
        conditions.textContent = forecastDay.conditions;
        day.appendChild(conditions);
    });
}

//Make 15 day Forcast Now:


export { generateCurrentDOM, generate15DayDOM }