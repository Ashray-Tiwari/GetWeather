const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7c85f4378cmsh3782cee5bd7c709p127bc8jsnb3e3ca679098',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)


        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})


const getWeather1 = ()=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)


        // cloud_pct.innerHTML = response.cloud_pct
        temp1.innerHTML = response.temp
        feels_like1.innerHTML = response.feels_like
        humidity1.innerHTML = response.humidity
        // min_temp1.innerHTML = response.min_temp
        // max_temp1.innerHTML = response.max_temp
        // wind_speed.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        // sunrise1.innerHTML = response.sunrise
        // sunset1.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}
const getWeather2 = ()=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)


        // cloud_pct.innerHTML = response.cloud_pct
        temp2.innerHTML = response.temp
        feels_like2.innerHTML = response.feels_like
        humidity2.innerHTML = response.humidity
        // min_temp1.innerHTML = response.min_temp
        // max_temp1.innerHTML = response.max_temp
        // wind_speed.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        // sunrise1.innerHTML = response.sunrise
        // sunset1.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}
const getWeather3 = ()=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Berlin', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)


        // cloud_pct.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        // min_temp1.innerHTML = response.min_temp
        // max_temp1.innerHTML = response.max_temp
        // wind_speed.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        // sunrise1.innerHTML = response.sunrise
        // sunset1.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}
const getWeather4 = ()=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)


        // cloud_pct.innerHTML = response.cloud_pct
        temp4.innerHTML = response.temp
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        // min_temp1.innerHTML = response.min_temp
        // max_temp1.innerHTML = response.max_temp
        // wind_speed.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        // sunrise1.innerHTML = response.sunrise
        // sunset1.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}
const getWeather5 = ()=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Amsterdam', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)


        // cloud_pct.innerHTML = response.cloud_pct
        temp5.innerHTML = response.temp
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        // min_temp1.innerHTML = response.min_temp
        // max_temp1.innerHTML = response.max_temp
        // wind_speed.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        // sunrise1.innerHTML = response.sunrise
        // sunset1.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}
const getWeather6 = ()=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)


        // cloud_pct.innerHTML = response.cloud_pct
        temp6.innerHTML = response.temp
        feels_like6.innerHTML = response.feels_like
        humidity6.innerHTML = response.humidity
        // min_temp1.innerHTML = response.min_temp
        // max_temp1.innerHTML = response.max_temp
        // wind_speed.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        // sunrise1.innerHTML = response.sunrise
        // sunset1.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}


getWeather("Delhi");
getWeather1();
getWeather2();
getWeather3();
getWeather4();
getWeather5();
getWeather6();

