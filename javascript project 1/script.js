// (function(){
//     var city = "London"
//     fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=718e0ea3e3520e8c0b3a76124342f930")
//     .then(result =>{
//         return result.json()
//     })
//     .then(data =>{
//         // return data.json()
//         console.log(data)
//     })
//     .catch(error =>{
//         console.log(error)
//     }
//     )
// })()

  

(function(){
    var weather = {
        "apikey" :"718e0ea3e3520e8c0b3a76124342f930",
        fetchweather: function(city){
            fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apikey)
            .then(result =>{
                return result.json()
            })
            .then(data =>{
                console.log(data)
               return this.displayweather(data)
            })
        },
        displayweather: function(data){
            const{name}= data; 
            const{icon, description}= data.weather[0]
            const{temp, humidity} = data.main
            const{speed} = data.wind

            document.querySelector(".city").innerHTML = name
            document.querySelector(".description").innerHTML = description
            document.querySelector(".temperature").innerHTML = temp+" <sup>o</sup>C"
            document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`
            document.querySelector(".humidity").innerHTML = humidity + "%"
            document.querySelector(".icon").innerHTML = icon
            document.querySelector(".wind").innerHTML = speed + "km/h"
        },
        search:function(){
            this.fetchweather(document.querySelector(".searchbar").value)
            
        }
    }

   var btn = document.querySelector(".btn")
   btn.addEventListener("click", () =>{
    weather.search()
   })

   var searchbox = document.querySelector(".searchbar")
   searchbox.addEventListener("keyup", function(){
        if (event.key=="Enter"){
            weather.search()
        }
   })
    
})()