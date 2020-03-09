window.onload = new function(){

  var counter= 1;

  var sec = document.getElementById('secondes').innerHTML;
  var min = document.getElementById('minutes').innerHTML;

  function timeIt(){
    sec -= counter;
    
    if (sec == 0) {
    sec = 60;
    min = min - 1;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('secondes').innerHTML = sec;


  } else {
    document.getElementById('secondes').innerHTML = sec;
  }

  }

  setInterval(timeIt, 1000);

}
