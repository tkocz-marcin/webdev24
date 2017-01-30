const slider = {
	navBtns : document.querySelectorAll('.slider__nav .circle'),
	slidesPicture : ['images/topslide-0.png', 'images/topslide-1.png', 'images/topslide-2.png', 'images/topslide-3.png'],
	addFuncBtns() {
		let i = 0;
		this.navBtns.forEach( btn => {
				btn.setAttribute('data-id', i++);
				btn.addEventListener('click', this.activeCircle.bind(slider))
				}
			);
		},
	changeSlide(objectCircle) {
		const slidePlace = document.querySelector('.slider__background'),
			  sliderBottom = document.querySelector('.slider'),
			  background = this.slidesPicture[objectCircle.target.getAttribute('data-id')];

		slidePlace.style.opacity = '0';
		setTimeout( () => {
			slidePlace.style.background = 'url('+background+')';
		}, 100);
		setTimeout( () => {slidePlace.style.opacity = '1'}, 200);
	},
	activeCircle(objectCircle) {
		this.navBtns.forEach( circle => circle.setAttribute('class', 'circle circle_white'));
		objectCircle.target.classList.add('circle_white_active');

		this.changeSlide(objectCircle);
	},
	init() {
		this.addFuncBtns();
	}
}