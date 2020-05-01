// Tijn Roozen


document.addEventListener("scroll",function(event){


	//Een waarde geven aan de scroll positie op de site
	var top = window.scrollY + document.querySelector('.meter').getBoundingClientRect().top;
	//deze waarden moet overeen komen met de echte diepte van de artikelen, Door deze som.

	top = (((top - 70) / 30))
	//afronden.

	top = parseInt(top);
	console.log(top);
	//Het in de HTML zetten
	document.getElementById("diepte").innerHTML = top;


	var upButton = document.querySelector('.up');
	var downButton = document.querySelector('.down');

	upButton.addEventListener("click", function(event){

		window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
		});
	});

	downButton.addEventListener("click", function(event){

		// window.scrollTo(0, 2000);


		if (top < 18) {
			window.scrollTo({
			top: 600,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=18 && top <28){
			window.scrollTo({
			top: 900,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=28 && top <55){
			window.scrollTo({
			top: 1700,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=55 && top <95){
			window.scrollTo({
			top: 2900,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=95 && top <145){
			window.scrollTo({
			top: 4400,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=145 && top <205){
			window.scrollTo({
			top: 6200,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=205 && top <252){
			window.scrollTo({
			top: 7600,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=252 && top <335){
			window.scrollTo({
			top: 10100,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=335 && top <598){
			window.scrollTo({
			top: 18000,
			left: 0,
			behavior: 'smooth'
			});
		}	else if (top >=598 && top <845){
			window.scrollTo({
			top: 25400,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=845 && top <892){
			window.scrollTo({
			top: 26800,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=892 && top < 1015){
			window.scrollTo({
			top: 30500,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 1015 && top < 1055){
			window.scrollTo({
			top: 31700,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 1055 && top < 1492){
			window.scrollTo({
			top: 44800,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 1492 && top < 1795){
			window.scrollTo({
			top: 53900,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 1795 && top < 2158){
			window.scrollTo({
			top: 64800,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 2158 && top < 3822){
			window.scrollTo({
			top: 114700,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 3822 && top < 3998){
			window.scrollTo({
			top: 120000,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 3998 && top < 4342){
			window.scrollTo({
			top: 130300,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 4342 && top < 4545){
			window.scrollTo({
			top: 136400,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 4545 && top < 5998){
			window.scrollTo({
			top: 180000,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 5998 && top < 6742){
			window.scrollTo({
			top: 202300,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 6742 && top < 8212){
			window.scrollTo({
			top: 246400,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 8212 && top < 8852){
			window.scrollTo({
			top: 265600,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 8212){
			window.scrollTo({
			top: 400000,
			left: 0,
			behavior: 'smooth'
			});
		}


	});

	var upWebButton = document.querySelector('.web_up');
	var downWebButton = document.querySelector('.web_down');

	upWebButton.addEventListener("click", function(event){

		window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
		});
	});

	downWebButton.addEventListener("click", function(event){

		// window.scrollTo(0, 2000);


		if (top < 18) {
			window.scrollTo({
			top: 600,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=18 && top <34){
			window.scrollTo({
			top: 900,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=34 && top <67){
			window.scrollTo({
			top: 1900,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=67 && top <124){
			window.scrollTo({
			top: 3600,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=124 && top <174){
			window.scrollTo({
			top: 5100,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=174 && top <210){
			window.scrollTo({
			top: 6200,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=210 && top <270){
			window.scrollTo({
			top: 8000,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=270 && top <350){
			window.scrollTo({
			top: 10400,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=350 && top <604){
			window.scrollTo({
			top: 18000,
			left: 0,
			behavior: 'smooth'
			});
		}	else if (top >=604 && top <860){
			window.scrollTo({
			top: 25700,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=860 && top <917){
			window.scrollTo({
			top: 27400,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=917 && top < 1000){
			window.scrollTo({
			top: 29900,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 1000 && top < 1033){
			window.scrollTo({
			top: 30900,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 1033 && top < 1473){
			window.scrollTo({
			top: 44100,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 1473 && top < 1780){
			window.scrollTo({
			top: 53300,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 1780 && top < 2170){
			window.scrollTo({
			top: 65000,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 2170 && top < 3803){
			window.scrollTo({
			top: 114000,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 3803 && top < 4000){
			window.scrollTo({
			top: 119900,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 4000 && top < 4337){
			window.scrollTo({
			top: 130000,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 4337 && top < 4547){
			window.scrollTo({
			top: 136300,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 4547 && top < 5993){
			window.scrollTo({
			top: 179700,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 5993 && top < 6730){
			window.scrollTo({
			top: 201800,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 6730 && top < 8194){
			window.scrollTo({
			top: 245700,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 8194 && top < 8836){
			window.scrollTo({
			top: 265000,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 8236){
			window.scrollTo({
			top: 329200,
			left: 0,
			behavior: 'smooth'
			});
		}

});







});
