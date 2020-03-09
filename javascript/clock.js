const deg =  6;
const lit = document.querySelector('#moveGround');
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

var ur = document.getElementById('uren');
var min = document.getElementById('minuten');
var sec = document.getElementById('seconden');
var mon = document.getElementById('maanden');


setInterval(() =>{
  let day = new Date();

  let light = day.getHours() * 15;
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  let uren = day.getHours();
  let minuten = day.getMinutes();
  let seconden = day.getSeconds();
  let maand = day.getMonth();




  lit.style.transform = `rotateZ(${(light - 200) + (mm/24)}deg)`
  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  ur.innerHTML = uren;
  min.innerHTML = minuten;
  sec.innerHTML = seconden;
  mon.innerHTML = maand;

});
