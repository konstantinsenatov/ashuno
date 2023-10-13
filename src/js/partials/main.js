AOS.init();
$('.scrollto').on('click', function() {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 700,
		easing: "linear"
	});

	return false;
});

var screens_swiper = new Swiper(".screens__swiper", {
	slidesPerView: 1,
	navigation: {
		prevEl: ".prev-screen-arrow-inner",
		nextEl: ".next-screen-arrow-inner",
	},
	autoHeight: true,
	effect: 'fade',
	allowTouchMove: false,
	effect: "creative",
	creativeEffect: {
		prev: {
			translate: ["-20%", 0, 0],
		},
		next: {
			translate: ["20%", 0, 0],
		},
	},
	pagination: {
		el: ".screens-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			var num = index + 1
			return '<span class="' + className + '">' + ('0' + num) + "</span>";
		},
	},
	speed: 1500,
	mousewheel: true,
});


$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().prev().prev().prev().addClass('js-prev4');
$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().prev().prev().addClass('js-prev3');
$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().prev().addClass('js-prev2');
$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().addClass('js-prev1');

$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().addClass('js-next1');
$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().next().addClass('js-next2');
$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().next().next().addClass('js-next3');
$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().next().next().next().addClass('js-next4');


screens_swiper.on('slideChange', function () {
	if (screens_swiper.activeIndex == 0 || screens_swiper.activeIndex == 2 || screens_swiper.activeIndex == 4) {
		$('body').addClass('js-light');
		$('body').removeClass('js-dark');
		
		$('body').addClass('js-light');
		$('body').removeClass('js-dark');
	} else if (screens_swiper.activeIndex == 1 || screens_swiper.activeIndex == 3) {
		$('body').addClass('js-dark');
		$('body').removeClass('js-light');
		
		$('body').addClass('js-dark');
		$('body').removeClass('js-light');
	} 
	if (screens_swiper.activeIndex == 2) {
		$('body').addClass('screen-active3');
	} else {
		$('body').removeClass('screen-active3');
	}
	
	
	var slideToLastOne = screen3_swiper.slides.length - 5;
	if (screens_swiper.activeIndex == 3) {
		setTimeout(function () {
			screen3_swiper.slideTo(slideToLastOne);
		}, 700);
	} 
	if (screens_swiper.activeIndex == 1) {
		setTimeout(function () {
			screen3_swiper.slideTo(1);
		}, 700);
	} 


	if (screens_swiper.activeIndex == 4) {
		$('.screens-arrow-inner.prev-screen-arrow-inner').show().addClass('js-active');
		$('.screens-arrow-inner.next-screen-arrow-inner').hide().addClass('js-active');
		setTimeout(function(){
			$('.footer').addClass('js-active');
			$('.footer .footer__row-small-wrapper').slideUp(1500);
			$('.footer .footer__row-big-wrapper').slideDown(1500);
		}, 0);
		
	} else {
		$('.screens-arrow-inner.prev-screen-arrow-inner').hide().removeClass('js-active');
		$('.screens-arrow-inner.next-screen-arrow-inner').show().removeClass('js-active');
		setTimeout(function(){
			$('.footer').removeClass('js-active');
			$('.footer .footer__row-small-wrapper').slideDown(1500);
			$('.footer .footer__row-big-wrapper').slideUp(1500);
		}, 0);
	}
	
	
	$('.swiper-pagination-bullet').removeClass('js-prev4');
	$('.swiper-pagination-bullet').removeClass('js-prev3');
	$('.swiper-pagination-bullet').removeClass('js-prev2');
	$('.swiper-pagination-bullet').removeClass('js-prev1');

	$('.swiper-pagination-bullet').removeClass('js-next1');
	$('.swiper-pagination-bullet').removeClass('js-next2');
	$('.swiper-pagination-bullet').removeClass('js-next3');
	$('.swiper-pagination-bullet').removeClass('js-next4');



	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().prev().prev().prev().addClass('js-prev4');
	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().prev().prev().addClass('js-prev3');
	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().prev().addClass('js-prev2');
	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().addClass('js-prev1');

	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().addClass('js-next1');
	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().next().addClass('js-next2');
	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().next().next().addClass('js-next3');
	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().next().next().next().addClass('js-next4');





	$(document).on('mousewheel', function (event) {
		if (screen3_swiper.isBeginning) {
			if (event.originalEvent.wheelDelta >= 0) {
				if (screens_swiper.activeIndex == 2) {
					screens_swiper.slideTo(1);
				} 
			}
		}
	});


});






var header_screen1_btns = new Swiper(".header-screen1__btns", {
	slidesPerView: 'auto',
	watchSlidesProgress: true,
});
var header_screen1_search_wrapper = new Swiper(".header-screen1__search-wrapper", {
	thumbs: {
		swiper: header_screen1_btns,
	},
	effect: 'fade',
});


var screen3_swiper = new Swiper(".screen3__swiper", {
	slidesPerView: '4',
	navigation: {
		nextEl: ".screen3__swiper-arrow-next",
		prevEl: ".screen3__swiper-arrow-prev",
	},
	mousewheel: true,
	nested: true,
});
screen3_swiper.slideTo(1);







$('.arrow-swiper-next-big').slideUp(0);
$('.arrow-swiper-prev-small').slideUp(0);
screen3_swiper.on('reachBeginning', function () {
	$('.arrow-swiper-prev-small').slideUp(0);
	$('.arrow-swiper-prev-big').slideDown(0);
});
screen3_swiper.on('reachEnd', function () {
	$('.arrow-swiper-next-small').slideUp(0);
	$('.arrow-swiper-next-big').slideDown(0);
	$('.screen3 .screen3__swiper-outerwrapper').addClass('js-active');
});
$('.arrow-swiper-prev-small').on('click', function () {
	$('.arrow-swiper-next-big').slideUp(0);
	$('.arrow-swiper-next-small').slideDown(0);
});
$('.arrow-swiper-next-small').on('click', function () {
	$('.arrow-swiper-prev-big').slideUp(0);
	$('.arrow-swiper-prev-small').slideDown(0);
});
$('.arrow-swiper-prev-big').on('click', function () {
	screens_swiper.slideTo(1);
});
$('.arrow-swiper-next-big').on('click', function () {
	screens_swiper.slideTo(3);
});


if ($(".screen3__swiper-arrow-prev").hasClass("screen3__swiper-big-prev")) {
	$(".screen3__swiper-arrow-prev").on('click', function () {
		screens_swiper.slideTo(1);
	});
}

if ($(".screen3__swiper-arrow-next").hasClass("screen3__swiper-big-next")) {
	$(".screen3__swiper-big-next").on('click', function () {
		screens_swiper.slideTo(3);
	});
}




$(document).on("mousewheel", function (event) {
	if (screens_swiper.activeIndex == 2) {
		screens_swiper.mousewheel.disable();
	} else {
		screens_swiper.mousewheel.enable();
	}
});



$('.screen3__swiper-outerwrapper').mouseenter(function(){
	screens_swiper.mousewheel.disable();
});
$('.screen3__swiper-outerwrapper').mouseleave(function(){
	screens_swiper.mousewheel.enable();
});

screen3_swiper.on('reachBeginning', function () {
	console.log('только докрутили начало');
	$(document).on('mousewheel', function (event) {
		if (screen3_swiper.isBeginning) {
			console.log('начало');
			if (event.originalEvent.wheelDelta >= 0) {
				console.log('скроллим вверх');
				if (screens_swiper.activeIndex == 2) {
					console.log('переключаем на предыдущий');
					screens_swiper.slideTo(1);
				} 
			}
		}
	});
});
screen3_swiper.on('reachEnd', function () {
	console.log('только докрутили конец');
	$(document).on('mousewheel', function (event) {
		if (screen3_swiper.isEnd) {
			console.log('конец');
			if (event.originalEvent.wheelDelta <= 0) {
				console.log('крутим вниз');
				if (screens_swiper.activeIndex == 2) {
					console.log('переключаем на следующий');
					screens_swiper.slideTo(3);
				} 
			}
		}
	});
});




var left_screen4_swiper = new Swiper(".left-screen4__swiper", {
	slidesPerView: '1',
	watchSlidesProgress: true,
	direction: "horizontal",
	navigation: {
		nextEl: ".left-screen4__swiper-wrapper .swiper-arrow.swiper-arrow-next",
		prevEl: ".left-screen4__swiper-wrapper .swiper-arrow.swiper-arrow-prev",
	},
	breakpoints: {
		1025: {
			direction: "vertical",
			slidesPerView: '3',
		}
	}
});


var right_screen4_swiper = new Swiper(".right-screen4__swiper", {
	slidesPerView: '1',
	watchSlidesProgress: true,
	direction: "horizontal",
	navigation: {
		nextEl: ".right-screen4__swiper-wrapper .swiper-arrow.swiper-arrow-next",
		prevEl: ".right-screen4__swiper-wrapper .swiper-arrow.swiper-arrow-prev",
	},
	breakpoints: {
		1025: {
			direction: "vertical",
			slidesPerView: '3',
		}
	}
});


$(document).ready(function () {


	$(".body-screen1__image-name").hover(function () {
		$(this).next().toggleClass('shown');
	});

	
	$(".item-screen2").hover(function () {
		var screen2__icon_enter = $(this)
		screen2__icon_enter.children('.item-screen2__icon').children('img').addClass('js-top1');
		setTimeout(function () {
			screen2__icon_enter.children('.item-screen2__icon').children('img').removeClass('js-top1');
			screen2__icon_enter.children('.item-screen2__icon').children('img').addClass('js-bottom1');
			setTimeout(function () {
				screen2__icon_enter.children('.item-screen2__icon').children('img').removeClass('js-bottom1');
				screen2__icon_enter.children('.item-screen2__icon').children('img').addClass('js-top2');
				setTimeout(function () {
					screen2__icon_enter.children('.item-screen2__icon').children('img').removeClass('js-top2');
					screen2__icon_enter.children('.item-screen2__icon').children('img').toggleClass('js-bottom2');
				}, 100);
			}, 100);
		}, 100);
	});
	/* $(".item-screen2").mouseout(function () {
		var screen2__icon_out = $(this)
		screen2__icon_out.children('.item-screen2__icon').children('div').removeClass('js-bottom2');
	}); */
	$(".item-screen2").hover(function () {
		var screen2__icon_enter = $(this)
		screen2__icon_enter.children('.item-screen2__icon').children('div').addClass('js-top1');
		setTimeout(function () {
			screen2__icon_enter.children('.item-screen2__icon').children('div').removeClass('js-top1');
			screen2__icon_enter.children('.item-screen2__icon').children('div').addClass('js-bottom1');
			setTimeout(function () {
				screen2__icon_enter.children('.item-screen2__icon').children('div').removeClass('js-bottom1');
				screen2__icon_enter.children('.item-screen2__icon').children('div').addClass('js-top2');
				setTimeout(function () {
					screen2__icon_enter.children('.item-screen2__icon').children('div').removeClass('js-top2');
					screen2__icon_enter.children('.item-screen2__icon').children('div').toggleClass('js-bottom2');
				}, 100);
			}, 100);
		}, 100);
	});
	/* $(".item-screen2").mouseout(function () {
		var screen2__icon_out = $(this)
		screen2__icon_out.children('.item-screen2__icon').children('div').removeClass('js-bottom2');
	}); */




	$('.screen5__btn').click(function() {
		$('.popup-screen5').addClass('js-active');
	});
	$('.popup-screen5__close').click(function() {
		$('.popup-screen5').removeClass('js-active');
	});
	$('.header__burder svg').click(function() {
		$(this).toggleClass('js-active');
		$('.header__menu').toggleClass('js-active');
	});



	$('.popup-screen5__input').focus(function() {
		$(this).addClass('js-active');
	});
	$('.popup-screen5__input').blur(function() {
		$(this).removeClass('js-active');
	});




	if ($(window).width() <= 1024) {
		screens_swiper.destroy();
		$('.screens__swiper').removeClass('swiper');
		$('.screens__swiper-wrapper').removeClass('swiper-wrapper');
		$('.screens__slide').removeClass('swiper-slide');

		screen3_swiper.destroy();
		$('.screen3__swiper').removeClass('swiper');
		$('.screen3__swiper-wrapper').removeClass('swiper-wrapper');
		$('.screen3__slide').removeClass('swiper-slide');

		$('.screen3__show-more-btn').on('click', function() {
			$('.screen3__slide:hidden').slice(0, 3).slideDown();
			if ($('.screen3__slide:hidden').length < 1) {
				$('.screen3__show-more-btn').slideUp()
			}
		});




		var cardImage = $('.card-screen4__image-mobile').html();
		$('.screen4__center-inner').html(cardImage);

		$(".right-screen4__swiper .card-screen4").click(function () {
			var cardImage = $(this).children('.card-screen4__image').html();
			$('.screen4__center-inner').html(cardImage);
		});


		$('.popup-screen5__btn').text('Оставить заявку');
	}


	if ($(window).width() > 1024) {
		$(".right-screen4__swiper .card-screen4").click(function () {
			$('.right-screen4__swiper .card-screen4').removeClass('js-active');
			$('.right-screen4__swiper .card-screen4').removeClass('hidden-before');
			$('.right-screen4__swiper .card-screen4').removeClass('hidden-after');
			$(this).addClass('js-active');
			$(this).parent().prev().children('.card-screen4').addClass('hidden-after');
			$(this).parent().next().children('.card-screen4').addClass('hidden-before');
			$('.screen4__center').addClass('js-active');
			var cardImage = $(this).children('.card-screen4__image').html();
			$('.screen4__center-inner').html(cardImage);/* 
			$('.screen4__center-inner').removeClass('js-active'); */
			setTimeout(function () {
				$('.screen4__center-inner').addClass('js-active');
			}, 100);
		});


			$('.popup-screen5.class-desktop .popup-screen5__input').keyup(function() {
				var empty = true;
				$('.popup-screen5.class-desktop .popup-screen5__input').each(function() {
					if ($(this).val() === '') {
						empty = false;
						return false
					}
				});

				if (empty) {
					$('.popup-screen5.class-desktop .popup-screen5__btn').addClass('full').text('Отправить');
				} else {
					$('.popup-screen5.class-desktop .popup-screen5__btn').removeClass('full').text('Данные не заполнены');
				}
			});


	}

	
});







