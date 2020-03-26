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
