const posts = [
	{
		id : 0,
		imageURL : 'images/blog-0.png',
		title : 'GERMAN FASHION WIZARDS',
		author : 'By James Steed   |   Fashion',
		post : 'This week we had the chance of interviewing two creative artists from Germany. These guys are simply amazing at what they do with the European fashion scene and this year at Paris Fashion Week they introduced their new collection.'
	},
	{
		id : 1,
		imageURL : 'images/blog-1.png',
		title : 'ANNE STEWART’S SUNGLASSES',
		author : 'By Marry Beard | Trending',
		post : 'Just amazing! That is how i can describe this person. So creative,so inspiring. I was watching her create in her small studio in London and i was amazed at how every little detail gets included in her creaions. From frames,to glass thickness she blew me away...'
	},
	{
		id : 2,
		imageURL : 'images/blog-2.png',
		title : 'OTHER TITLE',
		author : 'By Tom Beard | Trending',
		post : 'Just amazing! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ipsam rerum ducimus, minus a, doloribus esse, soluta voluptate error saepe, repellat porro distinctio nesciunt? Amet in consequatur, incidunt similique porro?'
	}
]

const sliderBlog = {
	naviBtns : document.querySelectorAll('.blog .nav_fa'),
	firstPost : 0,
	postsLength : posts.length,
	fillBlog(startValue = 0) {
		const images = document.querySelectorAll('.blog__container_description img'),
			tittles = document.querySelectorAll('.blog__container_description .blog__container_description_title'),
			authors = document.querySelectorAll('.blog__container_description .blog__container_description_subtitle'),
			postsText = document.querySelectorAll('.blog__container_description .blog__container_description_text');

			for(let i = 0; i < 2; i++) {
				images[i].src = posts[startValue].imageURL;
				tittles[i].innerText = posts[startValue].title;
				authors[i].innerText = posts[startValue].author;
				postsText[i].innerText = posts[startValue].post;
				startValue++;
			}

	},
	leftSlide() {
		if ( this.firstPost + 2 - this.postsLength) {
		this.fillBlog(this.firstPost+1);
		return (this.firstPost = this.firstPost + 1);
		} else {
			return this.firstPost;
		}
	},
	rightSlide() {
		console.log(this.firstPost);
		if(this.firstPost) {
			this.fillBlog(this.firstPost-1);
			console.log('if');
			return (this.firstPost = this.firstPost - 1);
		} else {
			console.log('else');
			return this.firstPost;
		}
	},
	getNaviBtns () {
	const leftArrow = this.naviBtns[0],
		rightArrow = this.naviBtns[1];

		leftArrow.addEventListener('click', this.leftSlide.bind(this));
		rightArrow.addEventListener('click', this.rightSlide.bind(this));
	},
	init() {
		this.getNaviBtns();
	}
}



