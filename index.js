
    const apiKey = "&appid=0d285d49670c33d29069a161d191a75c"
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=`
    const input= document.querySelector("input")
    const search = document.querySelector("#search-btn")
    const mainIcon = document.querySelector("#weather-icon")

    search.addEventListener("click",getcode)
    async function getcode(){
        try {
            const response = await fetch(apiUrl +input.value+ apiKey) ;
            const data = await response.json();
            const lon = data[0].lon
            const lat = data[0].lat
            cheakWheather(lon,lat)
        } catch (error) {
            console.log("E:",error)
        }
    }
    async function cheakWheather(lon,lat){
        try {
            let longitude = await lon;
            let latitude = await lat
            // console.log(longitude,latitude)
           const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0d285d49670c33d29069a161d191a75c`)
           const data = await response.json()
           document.querySelector(".temp").innerHTML=((data.main.temp)-272.15).toFixed(2) +"°C";
           document.querySelector(".city").innerHTML=  data.name;
            document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`
            document.querySelector(".wind-speed").innerHTML = `${data.wind.speed}km/h`
           displayImage(data)
        } catch (error) {
            console.log("E:",error)
        }
    }
    function displayImage(data){
        if(data.weather[0].main == 'Clouds'){
            mainIcon.src=`./images/rain.png`
        }
        else if (data.weather[0].main == 'Rain'){[0]
            mainIcon.src=`./images/rain.png`
        }
        else if (data.weather[0].main == 'Snow'){
            mainIcon.src=`./images/snow.png`
        }
        else if (data.weather[0].main == 'Clear'){
            mainIcon.src=`./images/clear.png`
        }
        else if (data.weather[0].main == 'Drizzle'){
            mainIcon.src=`./images/drizzle.png`
        }
        else if (data.weather[0].main == 'Mist'){
            mainIcon.src=`./images/mist.png`
        }
        console.log(data)
        console.log(data.weather[0].main)
    }
    
    getcode()
