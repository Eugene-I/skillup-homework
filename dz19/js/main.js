/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

var container = null,
	prevIndicator = null;

function createStyles(container) {
	let baseStyleTag = document.createElement('style'),
		// iconsStyleTag = document.createElement('style'),
		carouselStyleTag = document.createElement('style');

	baseStyleTag.innerHTML = 
		`.slides {
			position: relative
		}
		.controls {
			position: relative;
		}
		.indicators {
			display: flex;
		}`;
	// iconsStyleTag.innerHTML = ``;
	carouselStyleTag.innerHTML = `
		.slides{
			height: 200px;
			list-style: none;
			margin: 0;
			padding: 0;
		}
		.slides__item{
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
			z-index: 1;
		}
		.slides__item:nth-child(1) {
			background: #f00;
		}
		.slides__item:nth-child(2) {
			background: #0f0;
		}
		.slides__item:nth-child(3) {
			background: #00f;
		}
		.slides__item:nth-child(4) {
			background: #f0f;
		}
		.slides__item.active{
			z-index: 10;
		}
		.indicators{
			display: flex;
		}
		.indicators__item{
			cursor:pointer;
			border-radius: 100%;
			border: 1px solid #f00;
			display: block;
			height: 10px;
			margin: 10px;
			width: 10px;
		}
		.indicators__item.active{
			background: #f00;
		}`;
	container.append(baseStyleTag);
	// container.append(iconsStyleTag);
	container.append(carouselStyleTag);
}

function createSlides(number) {
	var slidesContainer = document.createElement('ul');
	
	slidesContainer.setAttribute('class', 'slides');

	for (let i = 0; i < number; i++) {
		let slideItem = document.createElement('li'),
			slideLink = document.createElement('a');
		
		slideItem.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');
		slideLink.setAttribute('href', '#');

		slideItem.append(slideLink);
		slidesContainer.append(slideItem);
	}

	container.append(slidesContainer)
}

function createIndicators(number) {
	let indicatorsContainer = document.createElement('div');

	indicatorsContainer.setAttribute('class', 'indicators');

	for (let i = 0; i < number; i++) {
		let indicator = document.createElement('span');

		indicator.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
		indicator.setAttribute('data-slide-to', i);

		indicatorsContainer.append(indicator)
	}

	container.append(indicatorsContainer);
	// prevIndicator = document.querySelector('.indicators__item.active')
}


function createControls() {
	let controlsContainer = document.createElement('div');

	controlsContainer.setAttribute('class', 'controls');

	for (let i = 0; i < 3; i++) {
		let controlButton = document.createElement('div'),
			controlIcon = document.createElement('i'),
			itemClass = 'controls__item controls__',
			iconClass = 'fas fa-';

		switch(i) {
			case 0:
					controlButton.setAttribute('class', `${itemClass}prev`);
					controlIcon.setAttribute('class', `${iconClass}chevron-left`);
					controlIcon.innerHTML = 'Previous';
					break;
			case 1:
					controlButton.setAttribute('class', `${itemClass}next`);
					controlIcon.setAttribute('class', `${iconClass}chevron-right`);
					controlIcon.innerHTML = 'Next';
					break;
			case 2:
					controlButton.setAttribute('class', `${itemClass}pause`);
					controlIcon.setAttribute('class', `${iconClass}play`);
					controlIcon.innerHTML = 'Pause';
					break;
		}

		controlButton.append(controlIcon);
		controlsContainer.append(controlButton);
	}

	container.append(controlsContainer);
}

function indicatorsHandler(e) {
  let target = e.target;

  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';

    if (prevIndicator !== null) prevIndicator.removeAttribute('style');

    prevIndicator = target;
  }
}

function setListener() {
  let indicatorsContainer = document.querySelector('div.indicators');

  indicatorsContainer.addEventListener('click', indicatorsHandler);
}

function createCarousel(slidesCount = 5) {
	container = document.querySelector('#carousel');

	createStyles(container);
	createSlides(slidesCount);
	createIndicators(slidesCount);
	createControls();
	setListener();
}

createCarousel(4);