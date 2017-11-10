
/* Слайдер (банеры)*/

$(function(){
	$("#owl-demo").owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		transitionStyle:"fadeUp",
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
		var owl_items = $("#owl-items");
		var next = $(".customNavigation").find('.next');
		var prev = $(".customNavigation").find('.prev');

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
