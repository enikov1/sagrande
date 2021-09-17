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


// catalog filter

const catalog_filter_item = document.querySelectorAll('.catalog__filter_item')
const catalog_filter_button = document.querySelector('.catalog__filter__smart')

if(catalog_filter_item) {
	catalog_filter_item.forEach((item, index) => {
		const button = item.querySelector('.catalog__filter_item__button')
		const selected_text = item.querySelector('.catalog__filter_item__button .right .text')
		const drop_menu = item.querySelector('.catalog__filter_item__drop')
		

		button.addEventListener('click', function(event) {
			event.preventDefault()

			const targetClass = this.parentNode.classList.contains('active')
			

			for (let i of item.parentNode.children) {
				if(targetClass === false) i.classList.remove('active')
			}
			item.classList.toggle('active')
			
		})

		if(drop_menu) {
			const drop_menu_button = drop_menu.querySelectorAll('button')
			drop_menu_button.forEach(e => {
				e.addEventListener('click', function(event) {
					event.preventDefault()

					for (let item of this.parentNode.parentNode.children) {
						item.classList.remove('active')
					}

					this.parentNode.classList.add('active')

					item.classList.remove('active')
					selected_text.innerHTML = this.innerHTML
				})
			})
		}
		
	})
}

if(catalog_filter_button) {
	catalog_filter_button.addEventListener('click', function(event) {
		event.preventDefault()

		this.classList.toggle('hide')

		document.querySelector('.catalog__filter').classList.toggle('active')
	})
}

// text block hide

const block_text_hide = document.querySelector('.block_text_hide')

if(block_text_hide) {
	const button = block_text_hide.querySelector('.button_hide')

	button.addEventListener('click', function(event) {
		event.preventDefault()

		block_text_hide.classList.toggle('hide')
	})
}

// counter

const item_control = document.querySelectorAll('.item__control')

item_control.forEach(e => {
	let counterField = e.querySelector('.field')
	let counterMinusElem = e.querySelector('.minus')
	let counterPlusElem = e.querySelector('.plus')

	let count = 0

	updateDisplay();

	counterPlusElem.addEventListener("click",()=>{
		count++
		updateDisplay()
	}) ;

	counterMinusElem.addEventListener("click",()=>{
		// if(counterField.value != 1) count--

		count = parseInt(counterField.value) - 1;

		count = count < 1 ? 1 : count;
		counterField.value = count;
		
		updateDisplay()
	});

	counterField.addEventListener('input', function(event) {

		let testText = this.value

		if(testText*1 + 0 != counterField.value) {
			counterField.value = testText.substring(0, testText.length - 1)
		}
			

		if(parseInt(testText) < 1 || testText == '') counterField.value = 1

		updateDisplay()
	})

	function updateDisplay(){
		counterField.value = count
	}
})


// modals

const modal_local = document.querySelector('#modal_change_locale')
const modal_call = document.querySelector('#modal_call')
const modal_message = document.querySelector('#modal_message')

const modal_close = document.querySelectorAll('.modal_close')

const local_select_button = document.querySelectorAll('.locale_select')
const call_modal_button = document.querySelectorAll('.modal_call_active')


if(local_select_button) {
	local_select_button.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault()

			modal_local.classList.add('active')
		})
	})
}

if(call_modal_button) {
	call_modal_button.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault()

			modal_call.classList.add('active')
		})
	})
}


if(modal_close) {
	modal_close.forEach(e => {
		e.addEventListener('click', function(event) {
			e.closest('.modal_content').classList.remove('active')
		})
	})
}

// footer tabs

const footer_left_button = document.querySelector('.footer__tab_header')
const footer_left_tab_wrap = document.querySelector('.footer__tab')

const footer_right_button = document.querySelectorAll('.footer__right_list_tab')


if(footer_left_button) {
	footer_left_button.addEventListener('click', function(event) {
		event.preventDefault()

		footer_left_tab_wrap.classList.toggle('active')
	})
}

if(footer_right_button) {
	footer_right_button.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault()

			e.closest('.footer__right_list').classList.toggle('active')
		})
	})
}


// smart nav

const burger_menu = document.querySelector('.header__bottom_burger')
const smart_menu = document.querySelector('.smart_menu')
const smart_call_button = document.querySelector('.header__bottom_call')
const smart_menu_close = document.querySelector('.smart_menu .close')
// const smart_menu_locale = document.querySelector('.smart_menu .locale')
const smart_menu_call = document.querySelector('.smart_menu .call')

const smart_menu_wrap = document.querySelector('.smart_menu__wrap.menu_main')
const smart_menu_nav_top = document.querySelectorAll('.smart_menu__nav .top button')
const smart_menu_nav_bottom = document.querySelectorAll('.smart_menu__nav .bottom button')

const smart_menu_sub_tt = document.querySelectorAll('.smart_menu__nav .sub-tt button')

const active_sub_0 = document.querySelectorAll('.active-sub-0')
const active_sub_1 = document.querySelectorAll('.active-sub-1')

burger_menu.addEventListener('click', function(event) {
	event.preventDefault()

	smart_menu.classList.add('active')
})

smart_call_button.addEventListener('click', function(event) {
	event.preventDefault()

	modal_call.classList.add('active')

})

// smart_menu_locale.addEventListener('click', function(event) {
// 	event.preventDefault()


// })

smart_menu_call.addEventListener('click', function(event) {
	event.preventDefault()

	modal_call.classList.add('active')
})

smart_menu_close.addEventListener('click', function(event) {
	event.preventDefault()

	smart_menu.classList.remove('active')
})

if(smart_menu_nav_bottom) {
	smart_menu_nav_bottom.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault()

			let data_submenu = e.getAttribute('data-submenu')

			smart_menu_wrap.classList.add('hide')
			document.querySelector(`.${data_submenu}`).classList.add('active')
		})
	})
}

if(smart_menu_nav_top) {
	smart_menu_nav_top.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault()

			let data_submenu = e.getAttribute('data-submenu')

			smart_menu_wrap.classList.add('hide')
			document.querySelector(`.${data_submenu}`).classList.add('active')
		})
	})
}

if(active_sub_0) {
	active_sub_0.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault()

			smart_menu_wrap.classList.remove('hide')
			document.querySelector('.sub-1').classList.remove('active')
			document.querySelector('.sub-2').classList.remove('active')
			document.querySelector('.sub-3').classList.remove('active')
		})
	})
}

if(active_sub_1) {
	active_sub_1.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault()

			document.querySelector('.sub-3').classList.add('active')

			document.querySelector('.sub-3-1').classList.remove('active')
			document.querySelector('.sub-3-2').classList.remove('active')
		})
	})
}

if(smart_menu_sub_tt) {
	smart_menu_sub_tt.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault()

			let data_submenu = e.getAttribute('data-submenu')
			
			document.querySelector('.sub-3').classList.remove('active')
			// smart_menu_wrap.classList.add('hide')
			document.querySelector(`.${data_submenu}`).classList.add('active')
		})
	})
}

// modal message
const modal_message_button = document.querySelectorAll('.modal_message')

if(modal_message_button) {
	modal_message_button.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault()

			modal_message.classList.add('active')
		})
	})
}

// sliders swiper


const calc_step = document.querySelector('#calc_step')

if(calc_step) {
	const calc_step_init = new Swiper(calc_step, {
		slidesPerView: 1,
		spaceBetween: 0,
		
		onlyExternal: true,
		noSwiping: true,
		allowTouchMove: false,

		pagination: {
			el: "#calc_step_nav",
			// type: 'custom',
			clickable: false,
			renderBullet: function (index, className) {
				return '<span class="' + className + '"></span>'
			}
		},

		navigation: {
			nextEl: '#calc_step_page .right__page_next',
			prevEl: '#calc_step_page .right__page_prev',
		},

		breakpoints: {
			0: {
				autoHeight: true,
			},
			768: {
				autoHeight: false,
			},
		},

		on: {
			init: function() {
				// console.log(this.realIndex + 1)
				document.querySelector('.right__nav_text .current').innerHTML = this.realIndex + 1
				document.querySelector('.right__nav_text .last').innerHTML = this.slides.length
			},

			activeIndexChange: function() {
				document.querySelector('.right__nav_text .current').innerHTML = this.activeIndex + 1
				// console.log(this.activeIndex)

				if(this.realIndex + 1 > 1) {
					document.querySelector('#calc_step_page .right__page_next').classList.add('button_orange')
				} else {
					document.querySelector('#calc_step_page .right__page_next').classList.remove('button_orange')
				}

				if(this.realIndex + 1 == this.slides.length) {
					document.querySelector('#calc_step_page .right__page_prev span').innerHTML = 'назад к выбору материалов'
					document.querySelector('.calc_wrapper__form .right__nav').classList.add('hide')
					document.querySelector('.final_right_bg').classList.add('active')
					document.querySelector('.calc_wrapper__form .left').classList.add('final')

					document.querySelector('.calc_wrapper__form .left__title').innerHTML = 'Ваша кухня рассчитана'
				} else {
					document.querySelector('#calc_step_page .right__page_prev span').innerHTML = 'назад'
					document.querySelector('.calc_wrapper__form .right__nav').classList.remove('hide')
					document.querySelector('.final_right_bg').classList.remove('active')
					document.querySelector('.calc_wrapper__form .left').classList.remove('final')

					document.querySelector('.calc_wrapper__form .left__title').innerHTML = 'Хотите узнать цену будущей кухни?'
				}
			}
			
		}
	})
}


const article_product_related_slider = document.querySelector('#article_product_related_slider')

if(article_product_related_slider) {
	const article_product_related_slider_init = new Swiper(article_product_related_slider, {
		// loop: true,
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 20,
		

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
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 24,
			},
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 24,
			},
			1050: {
				slidesPerView: 3,
				spaceBetween: 24,
				centeredSlides: true,
				centeredSlidesBounds: true,
			}
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
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 24,
				
			},
			1050: {
				slidesPerView: 2,
				spaceBetween: 65
			}
		}
	})
}

const advantages_items = document.querySelector('.advantages__items')

if(advantages_items) {
	const advantages_items_init = new Swiper(advantages_items, {
		// loop: true,
		// slidesPerView: 5,
		// spaceBetween: 60,
		

		navigation: {
			nextEl: '.advantages__items .swiper-next',
			prevEl: '.advantages__items .swiper-prev',
		},
		
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2.7,
				spaceBetween: 20,
				
			},
			1050: {
				slidesPerView: 5,
				spaceBetween: 60,

				onlyExternal: true,
				noSwiping: true,
				allowTouchMove: false,
			}
		}
	})
}

const article_product_carts = document.querySelector('.article_product__carts .swiper')

if(article_product_carts) {
	const advantages_items_init = new Swiper(article_product_carts, {
		// loop: true,
		// slidesPerView: 5,
		// spaceBetween: 60,
		

		navigation: {
			nextEl: '.article_product__carts .swiper-next',
			prevEl: '.article_product__carts .swiper-prev',
		},
		
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				spaceBetween: 24,
			},
			768: {
				slidesPerView: 2.6,
				spaceBetween: 24,
			},
			1050: {
				slidesPerView: 3,
				spaceBetween: 24,
				
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 24,

				onlyExternal: true,
				noSwiping: true,
				allowTouchMove: false,
			}
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
		},
		
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
				
			},
			1050: {
				slidesPerView: 3,
				spaceBetween: 40
			}
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

		breakpoints: {
			0: {
				slidesPerView: 3,
				spaceBetween: 12,
			},
			768: {
				slidesPerView: 5,
				spaceBetween: 12,
				
			}
		}
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

		breakpoints: {
			0: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 5,
				spaceBetween: 12
				
			},
			1050: {
				slidesPerView: 5,
				spaceBetween: 12
			}
		}
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
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 24,
				
			},
			1050: {
				slidesPerView: 3,
				spaceBetween: 40
			}
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