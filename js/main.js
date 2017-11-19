
/* Слайдер (банеры)*/

$(function(){
	$('#owl-demo').owlCarousel({
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		transitionStyle:'fadeUp',
		singleItem:true
	});
});

// Слайлер (items)
$(function(){
	$(document).ready(function() {
		var owl_items = $('#owl-items');
		var next = $('.customNavigation').find('.next');
		var prev = $('.customNavigation').find('.prev');

			owl_items.owlCarousel({
			items : 5,
			itemsDesktop : [1500,4], 
			itemsDesktopSmall : [1200,4], 
			itemsTablet: [990,2], 
			itemsMobile : [500,1] 
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


/*   Галлерея  */
$(function() {
	var largeImg = $('.large_photo').find('img');
	var smallImg = $('.previews .preview img');
	var largePrev = $('.previews_block').find('.prev');
	var largeNext = $('.previews_block').find('.next');
	var images = [];
	var i = 0
	smallImg.each(function(){
		images.push($(this));
	})
	
	largeNext.click(function(){
		images[i].parent().removeClass('changed');
		i++;
		if(i > images.length- 1) {
			i=0;
		}
		images[i].parent().addClass('changed');
		var src = images[i].attr('src');
		largeImg.fadeOut(100, function(){
			largeImg.attr('src', src)
		});
		largeImg.fadeIn(100);
	})
	largePrev.click(function(){
		images[i].parent().removeClass('changed');
		i--;
		if(i < 0) {
			i = images.length- 1;
		}
		images[i].parent().addClass('changed');
		var src = images[i].attr('src');
		largeImg.fadeOut(100, function(){
			largeImg.attr('src', src)
		});
		largeImg.fadeIn(100);

	})
	
	smallImg.click(function() {
		smallImg.parent().removeClass('changed');
		$(this).parent().addClass('changed');
		var src = $(this).attr('src');
		i = $(this).attr('data-num');
		largeImg.fadeOut(100, function(){
			largeImg.attr('src', src)
		});
		largeImg.fadeIn(100);
		

	});
});




/*   табы  */

$(function(){
	var ul = $('.tabs_block').find('.tabs_ul');
	var li = ul.find('li');
	var link = li.find('a');
	var index;
	var tabContent = $('.tabs_content');
	var tab = tabContent.find('.tab');


	link.click(function(){
		li.not($(this).parent()).removeClass('active');
		$(this).parent('li').addClass('active');

		index = $(this).parent('li').index();
		tab.removeClass('showed');
		tabContent.find('.tab:eq(' + index + ')').addClass('showed');
		return false;

	})
});


/*   Модальное окно  */

$(function(){
	var linkCall = $('a.callback');
	var linkConf = $('a.conf');
	var modalCall = $('.modal.callback');
	var modalConf = $('.modal.conf');
	var overlay = $('.overlay');
	var close = $('.modal_close');

	linkCall.click(function(){
		overlay.fadeIn();
		modalCall.fadeIn();
		return false;
	})

	linkConf.click(function(){
		overlay.fadeIn();
		modalConf.fadeIn();
		return false;
	})



	overlay.click(function(){
		$('.modal').fadeOut();
	})
	close.click(function(){
		overlay.fadeOut();
		$('.modal').fadeOut();
	})

});


/*  Инициализация маски */
jQuery(function($){
$("#phone").mask("+7(999) 999-9999");
});

/*  Инициализация скролла */
jQuery(document).ready(function(){
    jQuery('.scrollbar-rail').scrollbar();
});


/* Валидация формы*/

$(function(){
	var orderBtn = $('.order_btn');
	var form = orderBtn.parent().parent();
	var name = $('#name');
	var phone = $('#phone');
	var re = /\+7\(\d\d\d\) \d\d\d-\d\d\d\d/;
	var boll = true;

	orderBtn.click(function(){

		if (name.val().length < 3) {
			boll = false;
			name.addClass('error');
		}
		else {
			name.removeClass('error');
			boll = true;
		}
		
		if ( !re.test(phone.val()) ) {
			boll = false;
			phone.addClass('error');
		}
		else {
			phone.removeClass('error');
			boll = true;
		}
		if (boll == true) {
			form.submit();
		}
		else {
			return false;
		}
	})


});