(function($) {
	$.fn.isInViewport = function() {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$(document).ready(function() {

		$("video").each(function(){
			$(this).attr("played","false");
			$(this)[0].pause();
		});
		var llvData = $(".llv").attr('data-llv');

		setInterval(function(llvData) {
			$("video").each(function(){
				var played = $(this).attr("played");
				if(llvData != "no"){
					if ($(this).isInViewport()) {
						if (played == "false") { 
							$(this)[0].play();
							$(this).attr("played", "true");  
						}
					}
					else {
						if (played == "true") { 
							$(this)[0].pause();
							$(this).attr("played", "false");  
						}
					}
				} else {
					if ($(this).isInViewport()) {
						if (played == "false") { 
							$(this)[0].play();
							$(this).attr("played", "true");  
						}
					}
				}
			});
		}, 1000, llvData);
	});
})(jQuery);