let y = 0;

function findTop() {
	y = window.scrollY || document.documentElement.scrollTop;

	if(y >= 50) {
		document.querySelector('.headerScroll').style.transform = 'translate(-50%,0%)';
	} else {
		document.querySelector('.headerScroll').style.transform = 'translate(-50%,-200%)';
	};
};

window.addEventListener('scroll', function() {
	return findTop();
});