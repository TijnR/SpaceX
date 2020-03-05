const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	var w = window.innerWidth;
	console.log(w);

	if (w < 768) {
		nav.style.display = "none";
	} else {
	
	}

	burger.addEventListener('click', () => {
		nav.style.display = "flex";
		//toggle nav
		nav.classList.toggle('nav-active');

		//animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
				nav.style.display = "none";
				console.log('na');

			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;


			}


		});
		//burger animatie
		burger.classList.toggle('toggle')
	});
}

navSlide();
