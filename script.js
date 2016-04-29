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
	var state = "all";

    $("#about-link").click(function() {
    	$(".block-about").show(250);
 		$(".block-design").hide(250);
 		$(".block-project").hide(250);
 		$(".block-contact").hide(250);
 		$(".display").hide(250);

 		state = "about";
	});

	$("#design-link").click(function() {
    	$(".block-design").show(250);
 		$(".block-about").hide(250);
 		$(".block-project").hide(250);
 		$(".block-contact").hide(250);
 		$(".display").hide(250);

 		state = "design";
	});

	$("#title-link").click(function() {
    	$(".block-about").show(250);
 		$(".block-design").show(250);
 		$(".block-project").show(250);
 		$(".block-contact").show(250);
 		$(".display").hide(250);

 		state = "all";
	});

	$("#project-link").click(function() {
    	$(".block-project").show(250);
 		$(".block-about").hide(250);
 		$(".block-design").hide(250);
 		$(".block-contact").hide(250);
 		$(".display").hide(250);

 		state = "project";
	});

	$("#contact-link").click(function() {
    	$(".block-contact").show(250);
 		$(".block-about").hide(250);
 		$(".block-design").hide(250);
 		$(".block-project").hide(250);
 		$(".display").hide(250);

 		state = "contact";
	});

	// back button
	$("#back-button").click(function () {
		switch (state) {
			case "about":
				$(".block-about").show(250);
				$(".display").hide(250);
				break;
			case "design":
				$(".block-design").show(250);
				$(".display").hide(250);
				break;
			case "all":
				$(".block-about").show(250);
				$(".block-design").show(250);
				$(".block-project").show(250);
				$(".block-contact").show(250);
				$(".display").hide(250);
				break;
			case "project":
				$(".block-project").show(250);
				$(".display").hide(250);
				break;
			case "contact":
				$(".block-contact").show(250);
				$(".display").hide(250);
				break;
			default:
				$(".block-about").show(250);
				$(".display").hide(250);
				break;
		}
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