// Initialize Storage
const storage = new Storage();

// Get Stored Location Data
const weatherLocation = storage.getLocationData();

// Initaialize weather Object/Class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Initialize UI
const ui = new UI();

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Change Location
    weather.changeLocation(city, state);

    // Set Location in Local Storage
    storage.setLocationData(city, state);

    // Get and Display
    getWeather();

    // Close MOdal
    $('#locModal').modal('hide');
});

// weather.changeLocation('Miami', 'FL');

function getWeather() {
    weather.getWeather()
        .then(results => {
            // console.log(results);
            ui.paint(results);
        })
        .catch(err => console.log(err));
}