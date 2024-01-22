// const waeatherForm = document.querySelectorAll(".weatherForm");
// const cityInput = document.querySelectorAll(".cityInput");
// const card = document.querySelectorAll(".card");
// const apiKey = "d3ab0bac15214404cd191f5a8172f53e";

// waeatherForm.addEventListner("submit", event =>{
//     event.preventDefault();
//     const city = cityInput.value;
    
//     if(city){
//         try{
//             const weatherData = await getWeathearData(city);
//             displayWeatherInfo(weatherData);
//         }
//         catch(error){
//             console.error(error);
//             displayError(error);
//         }

//     }
//     else{
//         displayError("Please enetr a city");
//     }
// });

// async function getWeatherData(city){
//     const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API key}`;
//     const response = await fetch(apiUrl);
//     if(!response.ok){
//           throw new Error ("Could not fetch weather data");
//     }
//     return await response.json();

// }
// async function displayWeatherInfo(data){
//     const {name:city,
//         main: {temp, humidity},
//         weather: [{description. id}]}=data;
//     card.textContent="";
//     card.style.display= "flex";

//     const cityDisplay = document.createElement("h1");
//     const tempoDisplay = document.createElement("p");
//     const humidityDisplay = document.createElement("p");
//     const descDisplay = document.createElement("p");
//     const weatherEmoji = document.createElement("p");
    
//     cityDisplay.textContent = city;
//     tempoDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
//     humidityDisplay.textContent = `Humidity : ${humidity}%`;
//     descDisplay.textContent = description;
//     weatherEmoji.textContent = getWeathearEmoji(id);

//     cityDisplay.classList.add("cityDisplay");
//     tempoDisplay.classList.add("tempoDisplay");
//     humidityDisplay.classList.add("humidityDisplay");
//     descDisplay.classList.add("descDisplay");
//     weatherEmoji.classList.add("weatherEmoji");

//     card.appendChild(cityDisplay);
//     card.appendChild(tempoDisplay);
//     card.appendChild(humidityDisplay);
//     card.appendChild(descDisplay);
//     card.appendChild(weatherEmoji);
// }
// async function getWeathearEmoji(weatherId){

//     switch (true) {
//         case (weatherId >= 200 && weatherId < 300):
//             return "⛈️";
//             case (weatherId >= 300 && weatherId < 400):
//                 return "🌧️";
//                 case (weatherId >= 500 && weatherId < 600):
//                     return "🌧️";
//                     case (weatherId >= 600 && weatherId < 700):
//                         return "❄️";
//                         case (weatherId >= 700 && weatherId < 800):
//                             return "🌫️";
//                             case (weatherId === 800):
//                                 return "☀️";
//                                 case (weatherId >= 801 && weatherId < 81-):
//                                     return "☁️";
//                                     default:
//                                         return "❓";
                
            
            
    

//     }
// }
// async function displayError(message){
//     const errorDisplay =  document.createElement("p");
//     errorDisplay.textContent=message;
//     errorDisplay.classList.add("errorDisplay");
//     card.textContent= "";
//     card.style.display = "flex";
//     card.appendChild();
// }



// const weatherForm = document.querySelector(".weatherForm"); // Use querySelector instead of querySelectorAll
// const cityInput = document.querySelector(".cityInput"); // Use querySelector instead of querySelectorAll
// const card = document.querySelector(".card");
// const apiKey = "d3ab0bac15214404cd191f5a8172f53e";

// weatherForm.addEventListener("submit", async (event) => { // Corrected the typo in addEventListener
//     event.preventDefault();
//     const city = cityInput.value;

//     if (city) {
//         try {
//             const weatherData = await getWeatherData(city);
//             await displayWeatherInfo(weatherData);
//         } catch (error) {
//             displayError("Error fetching weather data");
//         }
//     } else {
//         displayError("Please enter a city");
//     }
// });

// async function getWeatherData(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error("Weather data not available");
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         throw new Error("Error fetching weather data");
//     }
// }

// async function displayWeatherInfo(data) {
//     // Update this function to display the weather information on your HTML elements
// }

// async function getWeatherEmoji(weatherId) {
//     // Implement this function to get the weather emoji based on the weather ID
// }

// function displayError(message) {
//     const errorDisplay = document.createElement("p");
//     errorDisplay.textContent = message;
//     errorDisplay.classList.add("errorDisplay");
//     card.innerHTML = ""; // Use innerHTML to clear the content
//     card.style.display = "flex";
//     card.appendChild(errorDisplay); // Append the errorDisplay element
// }

// Use querySelector instead of querySelectorAll to target a single element
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "d3ab0bac15214404cd191f5a8172f53e";

// Correct the typo in 'addEventListener'
weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value;
    
    if(city){
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch(error) {
            console.error(error);
            displayError(error);
        }

    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){
    // Correct the typo in 'apiURL' and replace placeholders with actual values
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

async function displayWeatherInfo(data){
    // Fix the destructuring syntax error
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;
    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempoDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");
    
    cityDisplay.textContent = city;
    tempoDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempoDisplay.classList.add("tempoDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempoDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){
    // Fix the typo in the switch case and remove unnecessary 'case' labels
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message){
    const errorDisplay =  document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
