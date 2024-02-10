// https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=5d8d7f7587c787087872c45bb6867325

fetch('https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=5d8d7f7587c787087872c45bb6867325')
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))


const user = document.getElementById("input");
const display = document.getElementsByClassName("he3");

const windy = document.getElementById("winhum");

const weatherImg = document.getElementById("weatherImg");
weatherImg.src = "/sunny.png";

const celcius = document.getElementById("celcius");

const discription  = document.getElementById("discription")


user.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${user.value}&appid=5d8d7f7587c787087872c45bb6867325`)
.then(res => res.json())
.then(data => {

    display[0].innerHTML = ` ${data.main.humidity}`;
    windy.innerHTML = `${data.wind.speed}Km/h`;
    celcius.innerHTML = `${parseInt(data.main.temp - 273.15)}°`

    console.log(`partly ${data.weather[0].main}`);

    if (data.weather[0].main == 'Clear') {
        weatherImg.src = "/sunny.png";
        discription.innerHTML = `Partly ${data.weather[0].main}`

    }

    if (data.weather[0].main == 'Snow') {
        weatherImg.src = "/snow.png";
        discription.innerHTML = `Partly ${data.weather[0].main}y`;

    }

    if (data.weather[0].main == 'Rain' || data.weather[0].main == 'Mist') {
        weatherImg.src = "/rain.png";
        discription.innerHTML = `Partly ${data.weather[0].main}y`

    }


    console.log(data.weather[0].main +" " +data.main.humidity)

   


    
})
.catch(error => console.log(error))

        // display[0].style.color ="";

      // Trigger the button element with a click
    }
    
  });



console.log(display[0].innerHTML)



// const wow = document.getElementsByClassName("wow");
// console.log(wow[0].innerHTML)


