
/* Слайдер (банеры)*/

$(function(){
	$('#owl-demo').owlCarousel({
		navigation : false,
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
	if($(document).width() < 364) {
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

/* Категории */
$(function(){
	var ul = $('.cat_block').find('ul');
	var li = ul.find('li');
	var link = li.find('a');
	var btn = $('.mobile_cat').find('button');

	if($(document).width() > 767) {
		link.click(function(){

			li.not($(this).parent()).removeClass('active');
			$(this).parent().addClass('active');
			return false;

		})
	}
	else {
		link.click(function(){

			var txt = $(this).text();

			li.not($(this).parent()).removeClass('active');
			$(this).parent().addClass('active');
			btn.text(txt);
			ul.slideUp();

			return false;

		})
	}

	btn.click(function(){
		ul.slideToggle();
	})

});



/* Фильтр (селекты) */
$(function(){
	var select = $('.filter_block').find('.select');
	var panel = select.find('.panel');
	var ul = select.find('.drop_select');
	var li = ul.find('li');

	panel.click(function(){
		ul.not($(this).siblings('ul')).slideUp(150);
		$(this).siblings('ul').slideToggle(150);
	});

	li.click(function(){
		var txt = $(this).text();
		$(this).parent().siblings('.panel').text(txt);
		$(this).parent().slideUp(150);
	})
});

/* Фильтр (селекты) на мобильных устройствах */

$(function(){
	var link = $('.dop_filters').find('a');
	var select = $('.filter_block').find('.select');

	link.click(function(){
		select.toggleClass('showed');
		return false;
	})

});




/* Диапазон цен (инициализация) */
if( $("div").is(".range") ) {

$(function(){
	var min = 0;
	var max = 10000;

	$( '#slider-range' ).slider({
		range: true,
		min: min,
		max: max,
		values: [ min, max ],

		slide: function( event, ui ) {
			$('#minCost').val(ui.values[ 0 ] + ' р.');
			$('#maxCost').val(ui.values[ 1 ] + ' р.');
		}
		});

	$('#minCost').val($( "#slider-range" ).slider( "values", 0 ) + ' р.');
	$('#maxCost').val($( "#slider-range" ).slider( "values", 1 ) + ' р.');

	$('#minCost').keyup(function(){
		min = $(this).val();
		$( "#slider-range" ).slider({
			values: [ min, max ]
		});
	})
	$('#maxCost').keyup(function(){
		max = $(this).val();
		$( "#slider-range" ).slider({
			values: [ min, max ]
		});
	})

});

}
