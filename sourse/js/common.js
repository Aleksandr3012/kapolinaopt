const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {

				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});
				_this.menuMobile.classList.toggle("active");
				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},

	closeMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");

		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");

	},

	// кастомный селлект
	select2() {
		$(".custom-select-wrap").each(function () {
			var th = $(this)
			th.find('.custom-select-js').select2({
				dropdownParent: th,
				tags: true,
				minimumResultsForSearch: -1,
				// width: 'auto',
				// width: th.find(".select2-results__options"),
				allowClear: false,
				// dropdownAutoWidth: true
			});
		})
	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;

		_this.toggleMenu();
		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);
				_this.closeMenu();

			});
		})
		document.addEventListener('mouseup', function (event) {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			if (!container) {
				_this.closeMenu();

			}
		});
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	JSCCommon.select2();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/catalog.png);"></div>')
	// /добавляет подложку для pixel perfect



	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {

	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {

	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {

	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 

	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();

	$(".accardion-js").click(function(){
		$(".filter-js").slideToggle();
	})

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	$('.s-gal__slider\
	,.slider-for2 ')
		.on('lazyLoaded', function (event, slick, image, imageSource) {
			image.parent().css('background-image', 'url(' + image.attr('src') + ')');
		});
	// slider
	const swiper4 = new Swiper('.color-slider', {
		// slidesPerView: 5,
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 0,
		freeMode: true,
		watchOverflow: true,
		slidesPerGroup: 3,

		// centeredSlides: true,
		loop: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
	// modal window

	// header slider
	const swiper5 = new Swiper('.headerBlock__slider--js', {
		// slidesPerView: 5,
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,
		// pagination: {
		// 	el: '.header-block__pagination',
		// 	type: 'bullets',
		// 	clickable: true,
		// },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//slider
	const swiper6 = new Swiper('.slider--js', {
		// slidesPerView: 5,
		slidesPerView: 2,
		watchOverflow: true,
		spaceBetween: 10,
		loop: true,
		// pagination: {
		// 	el: '.header-block__pagination',
		// 	type: 'bullets',
		// 	clickable: true,
		// },
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 15
			}
		},
		lazy: {
			loadPrevNext: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	const swiper7 = new Swiper('.slider--js-2', {
		// slidesPerView: 5,
		slidesPerView: 2,
		watchOverflow: true,
		spaceBetween: 10,
		loop: true,
		slidesPerGroup: 2,
		// pagination: {
		// 	el: '.header-block__pagination',
		// 	type: 'bullets',
		// 	clickable: true,
		// },
		breakpoints: {
			576: {
				// slidesPerView: 2,
				spaceBetween: 15
			}
		},
		lazy: {
			loadPrevNext: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});


	//Prod slider
	const galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 2,
		slidesPerView: 3,
		freeMode: true,
		loop: true,
		breakpoints: {
			768: {
				direction: 'vertical',
				spaceBetween: 90,
			},

			1200: {
				spaceBetween: 7.4,
				direction: 'vertical',
			}
		},
		// direction: 'vertical',
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		lazy: {
			loadPrevNext: true,
		},
	});

	//Прилипающая шапка
	const navOffset = $('.top-nav').offset().top;
	
	$(window).scroll(function(){
		const scrolled = $(this).scrollTop();
		if (scrolled > navOffset) {
			$('.top-nav').addClass('nav-fixed');
		} else if (scrolled < navOffset) {
			$('.top-nav').removeClass('nav-fixed');
		}
	});

// zoom img js-image-zoom
	let imgZoomImages = document.querySelectorAll('.zoom-img-js');
	for (let imgItem of imgZoomImages){
		$(imgItem).mlens(
			{
				imgSrc: $(imgItem).attr("data-big"),	  // path of the hi-res version of the image
				imgSrc2x: $(imgItem).attr("data-big2x"),  // path of the hi-res @2x version of the image
				//for retina displays (optional)
				lensShape: "square",                // shape of the lens (circle/square)
				lensSize: ["200%","200%"],            // lens dimensions (in px or in % with respect to image dimensions)
																						// can be different for X and Y dimension
				borderSize: 1,                  // size of the lens border (in px)
				borderColor: "transparent",            // color of the lens border (#hex)
				borderRadius: 0,                // border radius (optional, only if the shape is square)
				//imgOverlay: $("#gear").attr("data-overlay"), // path of the overlay image (optional)
				overlayAdapt: true,    // true if the overlay image has to adapt to the lens size (boolean)
				zoomLevel: 3,          // zoom level multiplicator (number)
				responsive: true       // true if mlens has to be responsive (boolean)
			});
	}

	const galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		loop: true,
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },
		thumbs: {
			swiper: galleryThumbs
		},
		lazy: {
			loadPrevNext: true,
		},
	});

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

	}
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
