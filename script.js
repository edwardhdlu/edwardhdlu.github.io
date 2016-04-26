$(document).ready(function() {
	// load animations
	$("#header").css("margin-top", "-152px");
	$("#header").animate({ marginTop: "-76px" }, 500);

	$(".block").hide();

	$('.block').each(function(i, e) {
    	$(this).delay(500 + 1000 * Math.random()).fadeTo(750, 1);
    });
});