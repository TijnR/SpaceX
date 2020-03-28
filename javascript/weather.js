var weather;


var api = "http://api.openweathermap.org/data/2.5/weather?q=";

var city = "haarlem";
var apikey = "&appid=e5a18e332c3804c053bf3b167b498945";
var units = "&units=metric"

var input;

function $(get){
  return document.querySelector(get);
}

function setup(){
  var gone = document.getElementById('city');
  gone.addEventListener("blur", function(event) {
    getWeather();
  });

  gone.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        getWeather();
    }
  });

  input = select('#city');


  function getWeather(){
  var url = api + input.value() + apikey + units;
  console.log(url);
  loadJSON(url, gotData);

  }
}

function getSunData(lng, lt){
  let sunApi = "https://api.sunrise-sunset.org/json?";
  // lat=36.7201600&lng=-4.4203400&date=today
  let lan = '&lng=' + lng;
  let lat = 'lat=' + lt;
  let today = 'date=today';
  let sunUrl = sunApi+lat+lan+today;
  loadJSON(sunUrl, setSunData);
}

function setSunData(data){
  sun = data;
  sunrise = sun.results.sunrise;
  sunset = sun.results.sunset;
  $("#rise").innerHTML = sunrise;
  $("#set").innerHTML = sunset;

}

function gotData(data){
  weather = data;
  console.log(weather);
  var count = weather.sys.country;
  var coord = {
    lon: weather.coord.lon,
    lat: weather.coord.lat
  }
  var temp = weather.main.temp;
  var feels = weather.main.feels_like;
  var timeZone = weather.timezone;
  var wind = {
    speed: weather.wind.speed,
    deg: weather.wind.deg
  }
  wind.speed = parseFloat(wind.speed).toFixed(2);
  var visi = weather.visibility;
  var clouds = weather.clouds.all;
  var humi = weather.main.humidity;
  var pressure = weather.main.pressure;

  setCount(count);
  setCoord(coord.lon, coord.lat);
  setTemp(temp, feels);
  setInterval(function(){
    setDate(timeZone);
  }, 1000);
  setWind(wind.speed, wind.deg);
  setVisibility(visi);
  setCloud(clouds);
  getSunData(coord.lon, coord.lat);
  var wind_score = getWindSpeedScore(wind.speed, wind.deg);
  var wind_score_speed = wind_score.speed();
  var wind_score_deg = wind_score.deg();
  console.log("windspeed in: " + wind_score_speed);
  console.log("windspeed in: " + wind_score_deg);
  setTimeout(getScore(wind_score_speed, wind_score_deg, getVisibilityScore(visi), getCloudScore(clouds)), 10000);




}

function setCount(country){
  $('.country').innerHTML = country;
}

function setCoord(lon, lat){
  $('.lon').innerHTML= lon;
  $('.lat').innerHTML= lat;
}

function setTemp(tempra, feelsLike){
  $('#temp').innerHTML = tempra+"º";
  $('#feels').innerHTML = feelsLike+ "º";
}

function setDate(zone){
  let day = new Date();

  let h = day.getHours();
  let m = day.getMinutes();
  let s = day.getSeconds();
  let mnd = day.getMonth() + 1;

  let extraH = (zone/3600) - 1;


  h += extraH;
  if (h >= 24) {
    h -= 24;
  } else if(h < 0){
    h += 24;
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  mnd = (mnd < 10) ? "0" + mnd : mnd;

  console.log(h);
  console.log(m);
  console.log(s);
  console.log(mnd);

  $('#hours').innerHTML = h;
  $('#minuten').innerHTML = m;
  $('#seconden').innerHTML = s;
  $('#maanden').innerHTML = mnd;



}

function setWind(speed, deg){
let wind_speed = speed * 3.6;
wind_speed = parseFloat(wind_speed).toFixed(1);
$('#windspeed').innerHTML = wind_speed + "km/u";
var arrow = $("#arrow");
  arrow.style.transform = `rotateZ(${deg}deg)`;
}

function getWindSpeedScore(speed, deg){
  let wind_speed = speed * 3.6;
  var windscore ={
    speed: function (){
      if (wind_speed < 5) {
        return 1;
      } else if (wind_speed > 5 && wind_speed <= 10){
        return 0.9;
      } else if (wind_speed > 10 && wind_speed <= 20){
        return 0.7;
      } else if (wind_speed > 20 && wind_speed <= 30){
        return 0.6;
      } else if (wind_speed > 30 && wind_speed <= 40){
          return 0.6;
      } else if (wind_speed > 40 && wind_speed <= 50){
        return 0.3;
      } else if (wind_speed > 50){
        return 0.0;
      }
  },

    deg: function(){
      if(deg >=0 && deg< 10 || deg >=170 && deg < 190 || deg >= 350 && deg<= 360){
        return 1;
      } else if(deg >=10 && deg< 25 || deg >=155 && deg < 170||  deg >= 190 && deg < 205 || deg >= 335 && deg< 350){
        return 0.8;
      } else if(deg >=25 && deg< 45 || deg >=135 && deg < 155||  deg >= 205 && deg < 225 || deg >= 315 && deg< 335){
        return 0.5;
      } else if(deg >=45 && deg< 70 || deg >=110 && deg < 135||  deg >= 225 && deg < 250 || deg >= 290 && deg< 315){
        return 0.2;
    }   else if(deg >=70 && deg< 110 || deg >=250 && deg < 290||  deg >= 225 && deg < 250 || deg >= 290 && deg< 315){
        return 0;
  }
    }
}

console.log("speed"+windscore.speed());
console.log("deg"+windscore.deg());


return windscore;

}



function setVisibility(visible){
  let visi = $("#visible");
  let persvisi = visible/100;
  if (persvisi) {
    persvisi =persvisi;
  } else {
    persvisi = 50;
  }
  visi.innerHTML = visible + "km";



}
function getVisibilityScore(visible){
  visiScore = 0;
  if (visible) {
    visiScore = visible/10000;
    if (visiScore > 1) {
      visiScore = 1;
    }
  } else {
    visiScore = 0;
  }
  return visiScore;
}


function setCloud(cloudValue){
  let cloud = $('#cloud');
  let text = $('.cloudiness');
  if (cloudValue < 10) {
    console.log('lager dan 10');
    cloud.style.filter = "brightness(130%)";
    text.innerHTML = "Clear Sky";
  } else if (cloudValue >= 10 && cloudValue<25){
    console.log('little bit cloudiness');
    cloud.style.filter = "brightness(100%)";
    text.innerHTML = "Low cloudiness";
  } else if (cloudValue >= 25 && cloudValue< 60){
    console.log("Pritty cloudy");
    cloud.style.filter = "brightness(40%)";
    text.innerHTML = "Medium cloudiness";
  } else if (cloudValue >=60 && cloudValue<=100) {
    console.log("really cloudy");
    cloud.style.filter = "brightness(0%)";
    text.innerHTML = "High cloudiness";
  }

}

function getCloudScore(cloudValue){
  return (1 - (cloudValue/100));
}

function getScore(windSpeedScore, windDegScore, visiScore, cloudScore){
  let score = ((windSpeedScore*5)+(windDegScore*1.5)+(visiScore*2.5)+(cloudScore*1));
  score = parseFloat(score).toFixed(1);
  $('.score').innerHTML = score;
  console.log(score);
}


// getTemp = (graden) => {
//   temp = graden.temp;
//   feels = graden.feels_like;
//   console.log(temp);
//   console.log(feels);
// }
