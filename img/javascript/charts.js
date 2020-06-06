function fuelLineChart() {
  const CHART = document.getElementById('fuel');
  console.log(CHART);
  let lineChart = new Chart(CHART, {
    type: 'line',
    options: {
      scales: {
        yAxes: [{

          ticks: {
            beginAtZero: true,
            fontColor: '#01908C',
            fontFamily: 'aspace',
            fontSize: 11
          },
        }],
        xAxes: [{
          ticks: {
            fontColor: '#01908C',
            fontFamily: 'Montserrat',
            fontSize: 11
          },
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      }
    },
    data: {
      labels: ['Takeoff', 'In-Orbit', 'Out-Orbit', 'space', 'near-mars', 'mars'],
      datasets: [{

        // xAxisID: 'Kerosene(L) x 10^5',
        // yAxisID: 'Milestones',
        lineTension: 0.1,
        borderCapStyle: "round",
        data: [330, 140, 135, 80, 70, 30],
        backgroundColor: 'rgb(0,91,112, 0.8)',
        borderColor: '#01908C',

        pointStyle: 'star',
        borderWidth: 1
      }]
    },
  })
}

function speedLineChart() {
  const CHART = document.getElementById('speed');
  console.log(CHART);
  let lineChart = new Chart(CHART, {
    type: 'line',
    options: {
      scales: {
        yAxes: [{

          ticks: {
            beginAtZero: true,
            fontColor: '#01908C',
            fontFamily: 'aspace',
            fontSize: 11
          },
        }],
        xAxes: [{
          ticks: {
            fontColor: '#01908C',
            fontFamily: 'Montserrat',
            fontSize: 11
          },
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      }
    },
    data: {
      labels: ['Takeoff', 'In-Orbit', 'Out-Orbit', 'space', 'near-mars', 'mars'],
      datasets: [{

        // xAxisID: 'Kerosene(L) x 10^5',
        // yAxisID: 'Milestones',
        lineTension: 0.4,
        borderCapStyle: "round",
        data: [0, 30, 32, 40, 25, 0],
        borderColor: '#01908C',

        pointStyle: 'dash',
        borderWidth: 1
      }]
    },
  })
}


function acceLineChart() {
  const CHART = document.getElementById('acce');
  console.log(CHART);
  let lineChart = new Chart(CHART, {
    type: 'line',
    options: {
      scales: {
        yAxes: [{

          ticks: {
            beginAtZero: true,
            fontColor: '#01908C',
            fontFamily: 'aspace',
            fontSize: 11
          },
        }],
        xAxes: [{
          ticks: {
            fontColor: '#01908C',
            fontFamily: 'Montserrat',
            fontSize: 9
          },
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      }
    },
    data: {
      labels: ['Takeoff', '', 'In-Orbit', '', 'Out-Orbit', '', 'space', '', 'near-mars', 'mars'],
      datasets: [{

        // xAxisID: 'Kerosene(L) x 10^5',
        // yAxisID: 'Milestones',
        lineTension: 0.2,
        borderCapStyle: "round",
        data: [0, 120, 5, -15, 15, 40, 0, -5, -10, -10, -1],
        borderColor: '#01908C',
        backgroundColor: 'rgb(0,91,112, 0.8)',

        pointStyle: 'dash',
        borderWidth: 1
      }]
    },
  })
}

function forceBarChart() {
  const CHART = document.getElementById('g-force');
  console.log(CHART);
  let barChart = new Chart(CHART, {
    type: 'bar',
    options: {
      scales: {
        yAxes: [{

          ticks: {
            beginAtZero: true,
            fontColor: '#01908C',
            fontFamily: 'Montserrat',
            fontSize: 11
          },
        }],
        xAxes: [{
          ticks: {
            fontColor: '#01908C',
            fontFamily: 'Montserrat',
            fontSize: 11
          },
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      }
    },
    data: {
      labels: ['after 30sec', '60sec', '120sec', '5minutes'],
      datasets: [{

        // xAxisID: 'Kerosene(L) x 10^5',
        // yAxisID: 'Milestones',
        lineTension: 0.2,
        borderCapStyle: "round",
        data: [3.0, 2.0, 1.5, 1],
        borderColor: '#01908C',
        backgroundColor: 'rgb(0,91,112, 0.8)',
        pointStyle: 'dash',
        borderWidth: 1
      }]
    },
  })
}


function gravAreaChart() {
  const CHART = document.getElementById('gravity');
  console.log(CHART);
  let areaChart = new Chart(CHART, {
    type: 'polarArea', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ['Uranus', 'Mars', 'Saturnus', 'Maan', 'Neptunus', 'Aarde'],


      datasets: [{
        backgroundColor: ['rgb(1,52,73)', 'rgb(217,88,31, 0.4)', 'rgb(1,52,73)', 'rgb(1,52,73)', 'rgb(1,52,73)', 'rgb(0,91,112, 0.8)'],
        borderColor:['rgb(0,91,112, 0.8)', 'rgb(224,128,32)', 'rgb(0,91,112, 0.8)', 'rgb(0,91,112, 0.8)', 'rgb(0,91,112, 0.8)', '#01908C'],
        data: [
          8.87,
          3.71,
          10.44,
          1.62,
          11.15,
          9.78,

        ],

      }]
    },
    options: {

      scale: {
        ticks: {
        display: false,
        fontColor: 'rgb(1,52,73)',
        fontFamily: 'neuropolitical'
        },
        gridLines: {
          display: true,
          color: 'rgb(2,116,171, .4)'
        },




      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 10,
          bottom: 10
        }
      },
      responsive: true,
      title: {
        display: false
      },
      label: {
        display: false
      },
      legend: {
        display: true,
        position: 'top',
        align: 'start',
        labels: {
          boxWidth: 40,
          align: 'start',
            fontFamily: 'Montserrat',
            fontColor: '#01908C',
        },
      },
      tooltips: {
        enabled: true,
        xPadding: 20,
        yPadding: 10
      },

    }
  });
}

function donuAreaChart() {
  const CHART = document.getElementById('atmos');
  console.log(CHART);
  let areaChart = new Chart(CHART, {
    type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ['Koolstofdioxide(CO2)', 'Stikstof(N2)', 'Argon(Ar)', 'Overig(H20, O2, CO)'],


      datasets: [{
        backgroundColor: ['rgb(0,91,112, 0.8)', 'rgb(217,88,31, 0.4)', 'rgb(2,116,171, 0.6)', 'rgb(1,52,73)'],
        borderColor:['#01908C', 'rgb(224,128,32)', 'rgb(2,116,171, 1)', 'rgb(0,91,112, 0.8)'],
        data: [
          95.32,
          2.7,
          1.6,
          0.24,


        ],

      }]
    },

    options: {

      legend: {
        display: true,
        position: 'top',
        align: 'start',
        labels: {
          boxWidth: 40,
          align: 'start',
            fontFamily: 'Montserrat',
            fontColor: '#01908C',
        },
      }
    }

  });
}

function waterAreaChart() {
  const CHART = document.getElementById('water');
  console.log(CHART);
  let areaChart = new Chart(CHART, {
    type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ['water', 'nowater'],



      datasets: [{
        backgroundColor: ['rgb(2,116,171, 0.4)', 'rgb(0,91,112, 0.1)'],
        borderColor:['rgb(2,116,171, 0.8)', 'rgb(0,91,112, 0.8)'],
        data: [
          98.3,
          1.7
        ],

      }]
    },

    options: {

      legend: {
        display: false,

        },
      }


  });
}

function foodAreaChart() {
  const CHART = document.getElementById('food');
  console.log(CHART);
  let areaChart = new Chart(CHART, {
    type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ['food', 'nofood'],



      datasets: [{
        backgroundColor: ['rgb(217,88,31, 0.4)', 'rgb(0,91,112, 0.1)'],
        borderColor:['rgb(224,128,32)', 'rgb(217,88,31, 0.4)'],
        data: [
          95,
          5
        ],

      }]
    },

    options: {

      legend: {
        display: false,

        },
      }


  });
}

var click = document.getElementById('buttonCalc');
// click.addEventListener('click', {
//   var input = document.getElementById('weight').value;
//   console.log(input);
// });
click.onclick = function(){
  var input = document.getElementById('weight').value
  var weightMars = input * 0.38;
  document.getElementById('weightMars').innerHTML = weightMars + 'kg';
console.log(weightMars);
};
console.log(click);

var ageclick = document.getElementById('ageCalc');
ageclick.onclick = function(){
  var input = document.getElementById('age').value
  var agebruh = input / 1.88;
  var ageMars = agebruh.toFixed(2);

  document.getElementById('ageMars').innerHTML = ageMars + 'Jaar';
console.log(ageMars);
};




// om alle grafieken te tonen
fuelLineChart();
speedLineChart();
acceLineChart();
forceBarChart();
gravAreaChart();
donuAreaChart();
waterAreaChart();
foodAreaChart();
