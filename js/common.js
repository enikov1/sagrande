'use strict'

const drop_menu_item = document.querySelectorAll('.drop_menu')

if(drop_menu_item) {
	drop_menu_item.forEach((e, i) => {
		const btn = e.querySelector('.item')

		btn.addEventListener('click', function(event) {
			event.preventDefault()
			const targetClass = this.parentNode.classList.contains('active')

			for (let item of e.parentNode.children) {
				if(targetClass === false) item.classList.remove('active')
			}

			e.classList.toggle('active')
		})
	})
}

// drop menu tabs

const header_nav_drop = document.querySelector('.header__nav_drop')

const drop_menu_tabs_link = document.querySelectorAll('.header__drop_wrapper__button')
const drop_menu_tabs_wrap = document.querySelectorAll('.bottom__tab')

if(drop_menu_tabs_link) {

	header_nav_drop.addEventListener('click', function(event) {
		event.preventDefault()

		this.classList.toggle('active')

		document.querySelector('.header__drop_wrapper').classList.toggle('active')
	})

	drop_menu_tabs_link.forEach((e, i) => {
		e.addEventListener('click', function(event) {
			event.preventDefault()
			
			const link = e.parentNode

			for (let item of link.parentNode.children) {
				item.classList.remove('active')
			}

			link.classList.add('active')


			for (let item of drop_menu_tabs_wrap[i].parentNode.children) {
				item.classList.remove('active')
			}
			drop_menu_tabs_wrap[i].classList.add('active')
		})
	})
}

// article tabs

const article_product_tabs = document.querySelector('.article_product__tabs')

if(article_product_tabs) {
	const article_product_tabs_buttons = article_product_tabs.querySelectorAll('.list_tab')
	const article_product_tabs_boxs = article_product_tabs.querySelectorAll('.box_tab')

	article_product_tabs_buttons.forEach((e, i) => {
		e.addEventListener('click', function(event) {
			event.preventDefault()

			for (let item of this.parentNode.children) {
				item.classList.remove('active')
			}

			this.classList.add('active')

			for (let item of article_product_tabs_boxs[i].parentNode.children) {
				item.classList.remove('active')
			}
			article_product_tabs_boxs[i].classList.add('active')
		})
	})
}

// accordion

const aside_sect = document.querySelectorAll('.aside__sect')

if(aside_sect) {
	aside_sect.forEach(e => {
		const button = e.querySelector('.aside__sect_title')

		button.addEventListener('click', function(event) {
			event.preventDefault()

			e.classList.toggle('active')
		})
	})
}

const accordion_item = document.querySelectorAll('.accordion_item')

if(accordion_item) {
	accordion_item.forEach(e => {
		const button = e.querySelector('.accordion_item__top')

		button.addEventListener('click', function(event) {
			event.preventDefault()

			e.classList.toggle('active')
		})
	})
}


// sliders swiper

const article_product_related_slider = document.querySelector('#article_product_related_slider')

if(article_product_related_slider) {
	const article_product_related_slider_init = new Swiper(article_product_related_slider, {
		// loop: true,
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 20,
		centeredSlides: true,
		centeredSlidesBounds: true,

		pagination: {
			el: "#article_product_related_slider .swiper-page",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},

		navigation: {
			nextEl: '#article_product_related_slider .swiper-next',
			prevEl: '#article_product_related_slider .swiper-prev',
		}
	})
}

const slider_price_wrap = document.querySelector('#slider_price')

if(slider_price_wrap) {
	const slider_price = new Swiper(slider_price_wrap, {
		loop: true,
		spaceBetween: 20,

		pagination: {
		el: "#slider_price .swiper-page",
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
		},

		navigation: {
			nextEl: '#slider_price .swiper-next',
			prevEl: '#slider_price .swiper-prev',
		}
	})
}

const example_work_wrap = document.querySelector('#example_work_slider')

if(example_work_wrap) {
	const slider_example_work = new Swiper(example_work_wrap, {
		loop: true,
		slidesPerView: 2,
		spaceBetween: 65,
		

		navigation: {
			nextEl: '#example_work_navigation .section-navigation__next',
			prevEl: '#example_work_navigation .section-navigation__prev',
		}
	})
}

const slider_review_wrap = document.querySelector('#review_slider')

if(slider_review_wrap) {
	const slider_review = new Swiper(slider_review_wrap, {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 40,

		pagination: {
		el: "#review_slider .swiper-page",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},

		navigation: {
			nextEl: '.reviews__content .reviews__content_nav_next',
			prevEl: '.reviews__content .reviews__content_nav_prev',
		}
	})
}

const slider_product_items = document.querySelectorAll('.product_item__slider')

if(slider_product_items) {

	slider_product_items.forEach(e => {
		const slider_product_item = new Swiper(e, {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,

			navigation: {
				nextEl: e.querySelector('.swiper-nav-next'),
				prevEl: e.querySelector('.swiper-nav-prev'),
			}
		})
	})
}

const article_product_slider_main = document.querySelector('.article_product_slider_main')
const article_product_slider_thumbs = document.querySelector('.article_product_slider_thumbs')

if(article_product_slider_main) {
	const article_product_slider_main_init = new Swiper(article_product_slider_thumbs, {
		spaceBetween: 12,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesProgress: true,
	})

	const article_product_slider_thumbs_init = new Swiper(article_product_slider_main, {
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: article_product_slider_main.querySelector('.swiper-nav-next'),
			prevEl:  article_product_slider_main.querySelector('.swiper-nav-prev'),
		},
		thumbs: {
			swiper: article_product_slider_main_init,
		},
	})
}

const article_full_slider_main = document.querySelector('.article_full__sect_main')
const article_full_slider_thumbs = document.querySelector('.article_full__sect_thumbs')

if(article_full_slider_main) {
	const article_full_slider_main_init = new Swiper(article_full_slider_thumbs, {
		spaceBetween: 12,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesProgress: true,
	})

	const article_full_slider_thumbs_init = new Swiper(article_full_slider_main, {
		spaceBetween: 10,
		slidesPerView: 'auto',
		width: '100%',
		loop: true,
		thumbs: {
			swiper: article_full_slider_main_init,
		},
	})
}

const article_related = document.querySelector('.article_related')

if(article_related) {
	const article_related_init = new Swiper(article_related.querySelector('.swiper'), {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 24,

		navigation: {
			nextEl: article_related.querySelector('.page_next'),
			prevEl: article_related.querySelector('.page_prev'),
		}
	})
}

let timeOut;
const goToScroll = () => {
   const top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goToScroll()',20);
   } else clearTimeout(timeOut);
}

// mask inputs

const phone = document.querySelector('.mask--phone');

if(phone) {
	let phoneMask = IMask(
	phone, {
		mask: '+{7} {9}00 000 00 00',
		placeholderChar: '.',
		lazy: false,
	});
}