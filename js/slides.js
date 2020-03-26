let slides = document.querySelectorAll('.slideUnitWrapper');

slides = Array.from(slides);

let cont = 0;

totalSlides = slides.length;

console.log(slides);



function translateSlide(item) {
	item.style.transform = 'translateX(-' + cont + '00%)';
};



function slideAfter() {
	console.log(cont);
	if(cont == totalSlides -1) {
		cont = 0;
		slides.forEach(translateSlide);
	} else {
		cont++;
		slides.forEach(translateSlide);
	};
};



function slideBefore() {
	console.log(cont);
	if(cont < 1) {
		cont = slides.length -1;
		slides.forEach(translateSlide);
	} else {
		cont--;
		slides.forEach(translateSlide);
	};
};




let leftArrow = document.querySelector('#slideArrowLeft');
let rightArrow = document.querySelector('#slideArrowRight');




leftArrow.addEventListener('click', slideBefore);
rightArrow.addEventListener('click', slideAfter);
