$("a[href^='#']").click(function(e) {
	e.preventDefault();

	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} );
});


$(document).ready(function() {
  $('#tagline').addClass('animate fadeInUp two');
  $('#overview-intro p, #overview-intro #more').addClass('animate fadeInUp three');
});
