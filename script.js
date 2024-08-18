var API = "https://restcountries.com/v3.1/all";


var weather_country = fetch(API)
  .then((response) => response.json())
  .then((data) => {
    
    data.map((value) => {
      var data_storage = {
        country_name: value.name.common,
        country_flag: value.flags.png,
        country_code: value.cioc,
        country_capital: value.capital,
        country_region: value.region,
        country_population: value.population,
        country_latitude: value.latlng[0],
        country_longitude: value.latlng[1]
      };
      createcountry(data_storage);
    })
  })
  
  
   
function createcountry({ country_name, country_flag, country_code, country_capital, country_region, country_population,country_latitude,country_longitude }) {
   
  document.body.innerHTML += 
  ` <div class="container">
    <div class="card">
    <h1 id="title" class="text-center">${country_name}</h1>
    <img src="${country_flag}" class="flag" alt="${country_name}'Flag image">
  <div class="card-body card-header" >
  <p><span>Population :</span>${country_population}</p>
  <p><span>Captial :</span> ${country_capital}</p>
  <p><span>Region :</span> ${country_region}</p>
  <p><span>Country Code :</span>${country_code}</p>
  <a href="#" class="btn btn-primary" onclick=(weatherCheck(${country_latitude},${country_longitude},${country_name})) >Click for Weather</a>
 <div id=${country_name}> </div> 
  </div>
</div>
</div>
`
}


function weatherCheck(con_lat,con_lng,con_name){

  var WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${con_lat}&lon=${con_lng}&appid=06e423ec0af839c485470951f60c3f6b`

 fetch(WeatherAPI)
 .then((response) => response.json())
 .then((data)=> {

     alert(`
     ${con_name.id}:
     Current Humidity : ${data.main.humidity}
     Current Pressure : ${data.main.pressure}
     Current Temperature : ${data.main.temp}`)
    })
}
  
document.addEventListener("click",(event) => event.preventDefault())
