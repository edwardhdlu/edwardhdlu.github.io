$(document).ready(function() {
	// load menu animation
	$("#header").css("margin-top", "-152px");
	$("#header").animate({ marginTop: "-76px" }, 500);

	// load blocks animation
	$(".block").hide();
	$(".block").each(function(i, e) {
    	$(this).delay(500 + 1000 * Math.random()).fadeTo(750, 1);
    });

	// menu functionality
    $("#about-link").click(function() {
    	$(".block-about").show(250);
 		$(".block-design").hide(250);
 		$(".block-project").hide(250);
 		$(".block-contact").hide(250);
 		$(".display").hide(250);
	});

	$("#design-link").click(function() {
    	$(".block-design").show(250);
 		$(".block-about").hide(250);
 		$(".block-project").hide(250);
 		$(".block-contact").hide(250);
 		$(".display").hide(250);
	});

	$("#title-link").click(function() {
    	$(".block-about").show(250);
 		$(".block-design").show(250);
 		$(".block-project").show(250);
 		$(".block-contact").show(250);
 		$(".display").hide(250);
	});

	$("#project-link").click(function() {
    	$(".block-project").show(250);
 		$(".block-about").hide(250);
 		$(".block-design").hide(250);
 		$(".block-contact").hide(250);
 		$(".display").hide(250);
	});

	$("#contact-link").click(function() {
    	$(".block-contact").show(250);
 		$(".block-about").hide(250);
 		$(".block-design").hide(250);
 		$(".block-project").hide(250);
 		$(".display").hide(250);
	});

	// content functionality
	$(".display").hide(250);

	$("a[id^=link-]").click(function() {
		$(".block-about").hide(250);
 		$(".block-design").hide(250);
 		$(".block-project").hide(250);
 		$(".block-contact").hide(250);

 		var insert = "<object id='loaded' type='text/html' data='content/" + this.id + ".html'></object>";
 		document.getElementById("load-content").innerHTML = insert;
		$(".display").show(250);
	});

});