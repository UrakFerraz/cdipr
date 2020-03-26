let y = 0;

function findTop() {
	y = window.scrollY || document.documentElement.scrollTop;

	if(y >= 50) {
		document.querySelector('.headerScroll').style.transform = 'translateY(0%)';
	} else {
		document.querySelector('.headerScroll').style.transform = 'translateY(-200%)';
	};
};

window.addEventListener('scroll', function() {
	return findTop();
});

















let sideMenu = document.querySelector('.sideMenu');

let headerHamburguerBtn = document.querySelector('.headerHamburguerBtn');
let headerScrollHamburguerBtn = document.querySelector('.headerScrollHamburguerBtn');
let sideMenuCloseBtnWrapper = document.querySelector('.sideMenuCloseBtnWrapper');

function showSideMenu() {
	sideMenu.style.right = '0%';
};

function hideSideMenu() {
	sideMenu.style.right = '-150%';
};

headerHamburguerBtn.addEventListener('click', showSideMenu);

headerScrollHamburguerBtn.addEventListener('click', showSideMenu);

sideMenuCloseBtnWrapper.addEventListener('click', hideSideMenu);











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














let assuntoBtn = document.querySelector('.selectAssunto');
let assuntoList = document.querySelector('.assuntosList');
let svgAssuntoDown = document.querySelector('.svgAssuntoDown');
let svgAssuntoUp = document.querySelector('.svgAssuntoUp');
let assuntoTitle = document.querySelector('#assuntoTitle');

assuntoBtn.addEventListener('click', showAssuntoList);

function showAssuntoList() {
	if(assuntoList.classList.contains('assuntosListShow')) {
		assuntoList.classList.remove('assuntosListShow');
		svgAssuntoDown.classList.remove('svgAssuntoHidden');
		svgAssuntoUp.classList.add('svgAssuntoHidden');
	} else {
		assuntoList.classList.add('assuntosListShow');
		svgAssuntoDown.classList.add('svgAssuntoHidden');
		svgAssuntoUp.classList.remove('svgAssuntoHidden');
	};
};

assuntoList.addEventListener('click', function(el) {
	if(el.target.classList.contains('assuntoUnit')) {
		assuntoTitle.innerHTML = el.target.innerHTML;
		assuntoList.classList.remove('assuntosListShow');
		svgAssuntoDown.classList.remove('svgAssuntoHidden');
		svgAssuntoUp.classList.add('svgAssuntoHidden');
	};
});
