const menu = {
	hamburgerBtn : document.querySelector('.hamburger'),
	hamburger() {
		const hamburgerLine = document.querySelector('.hamburger_line'),
			  navigationList = document.querySelector('.navigation__menu');

		hamburgerLine.classList.toggle('hamburger_line_active');
		navigationList.classList.toggle('hideslide');
	},
	changeBackground() {
		const navigation = document.querySelector('.navigation');

		if(window.pageYOffset > 0) {
			navigation.classList.add('navigation__bg');
		} else {
			navigation.classList.remove('navigation__bg');
		}
	},
	init() {
		this.hamburgerBtn.addEventListener('click', this.hamburger.bind(this) );
		window.addEventListener("scroll", this.changeBackground.bind(this));
	}
}