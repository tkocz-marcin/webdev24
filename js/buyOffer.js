const items = [
	{
		id : 0,
		imageURL : 'images/shop_item/shop-0.png',
		title : 'NATHAN STEWART JACKET',
		collection : 'Summer/Autumn Collection',
		post : 'Classic Nathan Stewart Jacket from his latest collection. This item is loved by many just because of it’s simle style. Simple lines,lovely texture,it suits almost everybody. It comes in six different colors,and all sizes.',
		tips : 'With this jacket,Nathan Stewart sunglasses go hand in hand!'
	},
	{
		id : 1,
		imageURL : 'images/shop_item/shop-1.png',
		title : 'ANNE STEWART’S SUNGLASSES',
		collection : 'Winter/Autumn Collection',
		post : 'Just amazing! That is how i can describe this person. So creative,so inspiring. I was watching her create in her small studio in London and i was amazed at how every little detail gets included in her creaions. From frames,to glass thickness she blew me away...',
		tips : "repellat quibusdam atque nulla totam quod voluptas, tenetur deleniti quaerat."
	},
	{
		id : 2,
		imageURL : 'images/shop_item/shop-2.png',
		title : 'OTHER TITLE',
		collection : 'By Tom Beard | Trending',
		post : 'Just amazing! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ipsam rerum ducimus, minus a, doloribus esse, soluta voluptate error saepe, repellat porro distinctio nesciunt? Amet in consequatur, incidunt similique porro?',
		tips : "Quis iusto, sapiente consequuntur illo corrupti corporis, debitis pariatur ratione."
	},
	{
		id : 3,
		imageURL : 'images/shop_item/shop-3.png',
		title : 'OTHER TITLE',
		collection : 'By Tom Beard | Trending',
		post : 'Just amazing! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ipsam rerum ducimus, minus a, doloribus esse, soluta voluptate error saepe, repellat porro distinctio nesciunt? Amet in consequatur, incidunt similique porro?',
		tips : "Quis iusto, sapiente consequuntur illo corrupti corporis, debitis pariatur ratione."
	}

]

const buyOffer = {
	naviBtns : document.querySelectorAll('.trendingItems .circle'),
	sizeBtns : document.querySelectorAll('.trendingItems .btn_square'),

	setActiveSize (btn) {
		this.sizeBtns.forEach((allBtn) => allBtn.classList.remove('btn_active'));
		btn.target.classList.toggle('btn_active');
	},
	changeItem(btn) {
		const itemId = btn.target.getAttribute('data-id'),
			imageBox = document.querySelector('.trendingItems .trendingItems__container_image'),
			contentBox = document.querySelector('.trendingItems .trendingItems__container_description'),
			image = document.querySelector('.trendingItems img'),
			itemName = document.querySelector('.trendingItems .trendingItems__container_description_title'),
			group = document.querySelector('.trendingItems .trendingItems__container_description_subtitle'),
			text = document.querySelector('.trendingItems .trendingItems__container_description_text'),
			note = document.querySelector('.trendingItems .tip');


		 	imageBox.style.opacity = '0';
			setTimeout( () => {
		 		image.src = items[itemId].imageURL;
			 }, 300);
			setTimeout( () => {imageBox.style.opacity = '1'}, 300);
			
			contentBox.style.opacity = '0';
			setTimeout( () => {
		 		itemName.innerText = items[itemId].title;
				group.innerText = items[itemId].collection;
				text.innerText = items[itemId].post;
				note.innerHTML = 'FASHION TIP: <br /> '+ items[itemId].tips;
			 }, 300);
			setTimeout( () => {contentBox.style.opacity = '1'}, 400);


			
		this.naviBtns.forEach((allBtn) => allBtn.classList.remove('circle_gray_active'));
		btn.target.setAttribute('class', 'circle circle_gray circle_gray_active');
		
	},
	
	init () {
		let i = 0;
		this.sizeBtns.forEach((btn) => { btn.addEventListener('click', this.setActiveSize.bind(this)) });
		this.naviBtns.forEach((btn) => { 

			btn.setAttribute('data-id', i++);
			btn.addEventListener('click', this.changeItem.bind(this)) ;
		});
	}
}

buyOffer.init();

// <h2 class="trendingItems__container_description_title">
// 					NATHAN STEWART JACKET
// 				</h2>
// 				<p class="trendingItems__container_description_subtitle">
// 					Summer/Autumn Collection
// 				</p>
// 				<p class="trendingItems__container_description_text">
// 					Classic Nathan Stewart Jacket from his latest collection.<br />
// 					This item is loved by many just because of it’s simle style.<br />
// 					Simple lines,lovely texture,it suits almost everybody. <br />
// 					It comes in six different colors,and all sizes.<br />
// 					<p>
// 						FASHION TIP:
// 						<br />
// 						With this jacket,Nathan Stewart sunglasses go hand in hand!
// 					</p>
// 				</p>