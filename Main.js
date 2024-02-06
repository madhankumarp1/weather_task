let cityLabel = document.querySelector(".city_name");
let weatherLabel = document.querySelector(".weather");
let cloud = document.querySelector(".cloud");
let background = document.getElementById("background");
let back = document.getElementById("background");

let searchInput = document.getElementById("bar_sesrch");
let search_button = document.querySelector(".search_btn");
let icon_add = document.querySelector(".icon_add");
let page = document.querySelector(".page2")
let humidity = document.querySelector(".humidity_speed");
let wind = document.querySelector(".wind_speed");




// console.log(searchInput);

let apiKey = "b8ed97787f7352a4d49791afbc8de786";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
let City = "New York"; 

search_button.addEventListener("click", function () {
    let cityName = searchInput.value;
    console.log(cityName);

    if (cityName) {
        checkWeather(cityName);
    }
});

function checkWeather(city) {
    fetch(`${apiUrl}&appid=${apiKey}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            cityLabel.textContent = data.name;
            weatherLabel.textContent = `${data.main.temp} °C`;
            wind.textContent = data.wind.speed;
            humidity.textContent = data.main.humidity;

            const weatherCondition = data.weather[0].main;
            cloud.textContent = weatherCondition;


            switch (weatherCondition.toLowerCase()) {
                case 'clear':
                    icon_add.innerHTML = '<img src="sun1.png" alt="clear sky"></img>';
                    break;
                case 'clouds':
                    icon_add.innerHTML = '<img src="clouds.png" alt="cloudy"></img>';
                    break;
                case 'storm':
                    icon_add.innerHTML = '<img src="storm.png" alt="storm"></img>';
                    break;
                case 'snow':
                    icon_add.innerHTML = '<img src="snow.png" alt="snow"></img>';
                    break;
                default:
                    icon_add.innerHTML = '<img src="weather-news_648198.png" alt="default"></img>';
            }


            if (data.main.temp > 26) {
                background.classList.remove("page2");
                background.style.backgroundImage = 'url("Bg-1.webp")';
                cityLabel.classList.remove("label");
                cityLabel.classList.add(".hi");
                weatherLabel.classList.remove("label");
                weatherLabel.classList.add(".hi");
                cloud.classList.remove("label");
                cloud.classList.add(".hi");
                humidity.classList.remove("label");
                humidity.classList.add(".hi");
                wind.classList.remove("label");
                wind.classList.add(".hi");


            } else if (data.main.temp < 20) {
                background.style.backgroundImage = 'url("Bg-3.webp")';
                cityLabel.classList.remove(".hi");
                cityLabel.classList.add("label");
                weatherLabel.classList.remove(".hi");
                weatherLabel.classList.add("label");
                cloud.classList.remove(".hi");
                cloud.classList.add("label");
                humidity.classList.remove(".hi");
                humidity.classList.add("label");
                wind.classList.remove(".hi");
                wind.classList.add("label");
            }

            else {

                background.style.backgroundImage = 'url("Bg-2.webp")';
                cityLabel.classList.remove(".hi");
                cityLabel.classList.add("label");
                weatherLabel.classList.remove(".hi");
                weatherLabel.classList.add("label");
                cloud.classList.remove(".hi");
                cloud.classList.add("label");
                wind.classList.remove(".hi");
                wind.classList.add("label");
                humidity.classList.remove(".hi");
                humidity.classList.add("label");


            }
            console.log(data);
            console.log(data.main.temp);
            console.log(weatherCondition);
            console.log(data.wind.speed);
            console.log(data.main.humidity);


        })
}
