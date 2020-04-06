// 360deg/ 60s = 6
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

  // light gaat in 24, 360/24 = 15
  let light = day.getHours() * 15;
  // hours = 360/12
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  let uren = day.getHours();
  let minuten = day.getMinutes();
  let seconden = day.getSeconds();
  let maand = day.getMonth();

  uren = (uren < 10) ? "0" + uren : uren;
  minuten = (minuten < 10) ? "0" + minuten : minuten;
  seconden = (seconden < 10) ? "0" + seconden : seconden;
  maand = (maand < 10) ? "0" + maand : maand;
  console.log(minuten);



// speciale rotatie die er voorzorg dat die om het middelste punt draait
  lit.style.transform = `rotateZ(${(light - 220) + (mm/24)}deg)`
  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

// digitale clock
  ur.innerHTML = uren;
  min.innerHTML = minuten;
  sec.innerHTML = seconden;
  mon.innerHTML = maand;

});
