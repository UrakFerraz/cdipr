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
