$(document).ready(function() {
	var pagination = $('.next-page');

	function check_scroll(el) {
	    if (pagination.length) {
			var bottom = $(window).scrollTop() + $(window).height();
		    var distance_from_bottom = bottom - el.offset().top;
			if(distance_from_bottom > -1) {
				$.get(el.data('next'), function(next_page) {
				    // next_page contains whatever that request returned
					$('.posts').append($(next_page).find('.posts'));
					pagination= $(next_page).find('.next-page');
					el.remove();
				});
			}
		};
	}

	check_scroll(pagination);
	$(window).scroll(function() {
		check_scroll(pagination);
	});
});

