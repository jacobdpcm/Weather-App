function generateCurrentDOM(currentAddress, currentConditions, currentTemp, currentIcon){
    const overview = document.querySelector('.overview');
    overview.classList.add('overview');
    overview.innerHTML = '';

    const overviewImage = document.createElement('img');
    overviewImage.classList.add('overviewImage');
    overviewImage.src = currentIcon;
    overview.appendChild(overviewImage);
    
    const overviewInfo = document.createElement('div');
    overviewInfo.classList.add('overviewInfo');
    overview.appendChild(overviewInfo);

    const overviewTitle = document.createElement('div');
    overviewTitle.textContent = 'Current Overview';
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

export { generateCurrentDOM }