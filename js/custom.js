$(function () {
	$(".nav li a[href^='#'], .logo-s a, .logo a").on('click', function (e) {
		e.preventDefault();
		var hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 300, function () {
			window.location.hash = hash;
		});
	});
	var mainbottom = $('#Home').offset().top + $('#Home').height();

	$(window).on('scroll', function () {
		stop = Math.round($(window).scrollTop());
		if (stop > mainbottom) {
			$('.navbar').addClass('past-main');
			$('h2.logo').addClass('past-logo');
		} else {
			$('.navbar').removeClass('past-main');
			$('h2.logo').removeClass('past-logo');
		}
	});
	$('.nav a').on('click', function () {
		$('.navbar-toggle').click()
	});
});

$('.carousel').carousel();
$(function () {
	$(".carousel").swiperight(function () {
		$(this).carousel('prev');
	});
	$(".carousel").swipeleft(function () {
		$(this).carousel('next');
	});
});