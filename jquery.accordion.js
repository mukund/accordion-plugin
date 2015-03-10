(function($){
		// Here we gave function name
	$.fn.accordion = function(options) {
		// Here we set some defaults
		var defaults = {
			aTlt: 'accordionTitle',
			aCnt: 'wc15content',
			active: 'opened'
		};
		
		// Merging the content using extend method
		var settings = $.extend({}, defaults, options);

		$(document).ready(function() {
			// hide all the content panels
			$('.'+settings.aCnt).hide();
				
			$('.'+settings.aTlt).each(function() {
				if($(this).hasClass(settings.active))
				{
					$(this).siblings('.'+settings.aCnt)
						   .addClass(settings.active)
						   .slideDown();
				}						  						  
			});
	   });
		
		// Here we check for clicks
		$('.'+settings.aTlt).click(function() {
			// object for the button that has been clicked
			var obj = $(this);			
			//console.log(obj);
			// Here we are checking if we have clicked the currently active tab
		
			var slide = true;		
			if(obj.hasClass('opened'))
			{
				slide = false;
			}
			
			// Here we are closing all the current elements
			$('.'+settings.aCnt).slideUp().removeClass(settings.active);
			$('.'+settings.aTlt).removeClass(settings.active);
			
			// checking if we should still slide
			if(slide)
			{		
				// Here we make the clicked button active and opened
				obj.addClass(settings.active);
				obj.siblings('.'+settings.aCnt).addClass(settings.active).slideDown();
			}
			   
			return false;					   
	   });
	};
})(jQuery);