function generateCurrentDOM(currentAddress, currentConditions, currentTemp){
    const overview = document.querySelector('.overview');
    overview.innerHTML = '';
    
    const overviewTitle = document.createElement('div');
    overviewTitle.textContent = 'Current Overview';
    overview.appendChild(overviewTitle);

    const address = document.createElement('div');
    address.textContent = currentAddress;
    overview.appendChild(address);

    const conditions = document.createElement('div');
    conditions.textContent = currentConditions;
    overview.appendChild(conditions);
    
    const temp = document.createElement('div');
    temp.textContent = currentTemp;
    overview.appendChild(temp);
}

export { generateCurrentDOM }