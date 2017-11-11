
/* Слайдер (банеры)*/

$(function(){
	$('#owl-demo').owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		transitionStyle:'fadeUp',
		singleItem:true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});
});

// Слайлер (items)
$(function(){
	$(document).ready(function() {
		var owl_items = $('#owl-items');
		var next = $('.customNavigation').find('.next');
		var prev = $('.customNavigation').find('.prev');

			owl_items.owlCarousel({
			items : 4, 
			itemsDesktop : [1200,2], 
			itemsDesktopSmall : [900,2], 
			itemsTablet: [600,1], 
			itemsMobile : false 
		});
		next.click(function(){
			owl_items.trigger('owl.next');
		})
		prev.click(function(){
			owl_items.trigger('owl.prev');
		})
	});
});

// Мобильное меню
$(function(){

	var openLink = $('.menu_toggle');
	var closeLink = $('.close_menu');
	var menu = $('ul.header_nav');
	var overlay = $('.overlay');

	openLink.click(function(){
		menu.addClass('open');
		overlay.fadeIn(300);

	});
	closeLink.click(function(){
		menu.removeClass('open');
		overlay.fadeOut(300);
	})
	overlay.click(function(){
		menu.removeClass('open');
		$(this).fadeOut(300);
	})
});


/* Каталог */

$(function(){
	if($(document).width() < 992) {
		var openLink = $('.catalog').find('.aside_header');
		var ul = $('.cat_list');

		openLink.click(function(){
			ul.slideToggle();
		});
	}
});

/* Анимация списка в футере */

$(function(){
	if($(document).width() < 992) {
		var btn = $('.footer_btn');
		var ul = $('.slide_ul');

		btn.click(function(){
			ul.slideToggle();
		});
	}
});