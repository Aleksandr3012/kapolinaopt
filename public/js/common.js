"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

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
	closeMenu: function closeMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");
		});

		_this.menuMobile.classList.remove("active");

		_this.body.classList.remove("fixed");
	},
	// кастомный селлект
	select2: function select2() {
		$(".custom-select-wrap").each(function () {
			var th = $(this);
			th.find('.custom-select-js').select2({
				dropdownParent: th,
				tags: true,
				minimumResultsForSearch: -1,
				// width: 'auto',
				// width: th.find(".select2-results__options"),
				allowClear: false // dropdownAutoWidth: true

			});
		});
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		_this.toggleMenu();

		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);

				_this.closeMenu();
			});
		});

		document.addEventListener('mouseup', function (event) {
			var container = event.target.closest(".menu-mobile--js.active"); // (1)

			if (!container) {
				_this.closeMenu();
			}
		});
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

};

function eventHandler() {
	var _Swiper;

	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask();
	JSCCommon.select2(); // JSCCommon.CustomInputFile();
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
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();
		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		}); // конец добавил

		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();
	});
	heightses();
	$(".accardion-js").click(function () {
		$(".filter-js").slideToggle();
	}); // листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	$('.s-gal__slider\
	,.slider-for2 ').on('lazyLoaded', function (event, slick, image, imageSource) {
		image.parent().css('background-image', 'url(' + image.attr('src') + ')');
	}); // slider

	var swiper4 = new Swiper('.color-slider', (_Swiper = {
		// slidesPerView: 5,
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 0,
		freeMode: true
	}, _defineProperty(_Swiper, "watchOverflow", true), _defineProperty(_Swiper, "slidesPerGroup", 3), _defineProperty(_Swiper, "loop", true), _defineProperty(_Swiper, "loopFillGroupWithBlank", true), _defineProperty(_Swiper, "touchRatio", 0.2), _defineProperty(_Swiper, "slideToClickedSlide", true), _defineProperty(_Swiper, "freeModeMomentum", true), _defineProperty(_Swiper, "navigation", {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}), _Swiper)); // modal window
	// header slider

	var swiper5 = new Swiper('.headerBlock__slider--js', {
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
			prevEl: '.swiper-button-prev'
		}
	}); //slider

	var swiper6 = new Swiper('.slider--js', {
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
			loadPrevNext: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});
	var swiper7 = new Swiper('.slider--js-2', {
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
			loadPrevNext: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	}); //Prod slider

	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 2,
		slidesPerView: 3,
		freeMode: true,
		loop: true,
		breakpoints: {
			768: {
				direction: 'vertical',
				spaceBetween: 90
			},
			1200: {
				spaceBetween: 7.4,
				direction: 'vertical'
			}
		},
		// direction: 'vertical',
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		lazy: {
			loadPrevNext: true
		}
	}); //Прилипающая шапка

	var navOffset = $('.top-nav').offset().top;
	$(window).scroll(function () {
		var scrolled = $(this).scrollTop();

		if (scrolled > navOffset) {
			$('.top-nav').addClass('nav-fixed');
		} else if (scrolled < navOffset) {
			$('.top-nav').removeClass('nav-fixed');
		}
	}); // zoom img js-image-zoom

	var imgZoomImages = document.querySelectorAll('.zoom-img-js');

	var _iterator = _createForOfIteratorHelper(imgZoomImages),
			_step;

	try {
		for (_iterator.s(); !(_step = _iterator.n()).done;) {
			var imgItem = _step.value;
			$(imgItem).mlens({
				imgSrc: $(imgItem).attr("data-big"),
				// path of the hi-res version of the image
				imgSrc2x: $(imgItem).attr("data-big2x"),
				// path of the hi-res @2x version of the image
				//for retina displays (optional)
				lensShape: "square",
				// shape of the lens (circle/square)
				lensSize: ["200%", "200%"],
				// lens dimensions (in px or in % with respect to image dimensions)
				// can be different for X and Y dimension
				borderSize: 1,
				// size of the lens border (in px)
				borderColor: "transparent",
				// color of the lens border (#hex)
				borderRadius: 0,
				// border radius (optional, only if the shape is square)
				//imgOverlay: $("#gear").attr("data-overlay"), // path of the overlay image (optional)
				overlayAdapt: true,
				// true if the overlay image has to adapt to the lens size (boolean)
				zoomLevel: 3,
				// zoom level multiplicator (number)
				responsive: true // true if mlens has to be responsive (boolean)

			});
		}
	} catch (err) {
		_iterator.e(err);
	} finally {
		_iterator.f();
	}

	var galleryTop = new Swiper('.gallery-top', {
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
			loadPrevNext: true
		}
	});
	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if (isIE11) {
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	}
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}