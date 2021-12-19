const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');


const API_Key = "8ba59697a161968cf9ab948203867b3c";


button.addEventListener('click', () => {

  
    const cityInput = inputTxt.value;
    // console.log(cityInput);
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);

           
            inputTxt.value = " ";

          
            showData.innerHTML = `
                                <ul>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                    <li class="temp">${data.main.temp}°c</li>
                                </ul>
                                `; 

        });

});