$(document).ready(function() {

	$(".icon-scroll").css("opacity", "0");
	$(".icon-scroll").delay(750).animate({ opacity: "1" }, 500);

	// load menu animation
	$("#header").css("margin-top", "-76px");
	$("#header").animate({ marginTop: "0px" }, 500);
	$("#header-alt").hide(0);

	// load blocks animation
	$(".block").hide(0);
	$(".block").each(function(i, e) {
    	$(this).delay(500 + 1000 * Math.random()).fadeTo(750, 1);
    });

	// menu functionality
	var state = "all";
	$(".hint").hide(0);

    $("#about-link").click(function() {
    	$(".block-about").show(250);
 		$(".block-design").hide(250);
 		$(".block-project").hide(250);
 		$(".block-contact").hide(250);
 		$(".display").hide(250);

 		$(".underline span").animate({ width: "0%" }, 250);
 		$(".underline .about").animate({ width: "100%" }, 250);

 		$(".hint").show(250);
 		state = "about";
	});

	$("#design-link").click(function() {
    	$(".block-design").show(250);
 		$(".block-about").hide(250);
 		$(".block-project").hide(250);
 		$(".block-contact").hide(250);
 		$(".display").hide(250);

 		$(".underline span").animate({ width: "0%" }, 250);
 		$(".underline .design").animate({ width: "100%" }, 250);

 		$(".hint").show(250);
 		state = "design";
	});

	$("#title-link").click(function() {
    	$(".block-about").show(250);
 		$(".block-design").show(250);
 		$(".block-project").show(250);
 		$(".block-contact").show(250);
 		$(".display").hide(250);

 		$(".underline span").animate({ width: "0" }, 250);
 		$(".underline span").animate({ width: "25%" }, 250);

 		$(".hint").hide(250);
 		state = "all";
	});

	$("#project-link").click(function() {
    	$(".block-project").show(250);
 		$(".block-about").hide(250);
 		$(".block-design").hide(250);
 		$(".block-contact").hide(250);
 		$(".display").hide(250);

 		$(".underline span").animate({ width: "0%" }, 250);
 		$(".underline .project").animate({ width: "100%" }, 250);

 		$(".hint").show(250);
 		state = "project";
	});

	$("#contact-link").click(function() {
    	$(".block-contact").show(250);
 		$(".block-about").hide(250);
 		$(".block-design").hide(250);
 		$(".block-project").hide(250);
 		$(".display").hide(250);

 		$(".underline span").animate({ width: "0%" }, 250);
 		$(".underline .contact").animate({ width: "100%" }, 250);

 		$(".hint").show(250);
 		state = "contact";
	});

	// back button
	$(".back-button").click(function () {
		$("#container").animate({ marginTop: "76px" }, 500);
		$("#header").animate({ marginTop: "0px" }, 500);
		$("#header-alt").hide(0);

		var winHeight = $(window).height();
		$(".display").animate({ marginTop: winHeight + "px" }, 500);
		$(".display").hide(0);

		switch (state) {
			case "about":
				$(".block-about").delay(350).show(250);
				break;
			case "design":
				$(".block-design").delay(350).show(250);
				break;
			case "all":
				$(".block-about").delay(350).show(250);
				$(".block-design").delay(350).show(250);
				$(".block-project").delay(350).show(250);
				$(".block-contact").delay(350).show(250);
				break;
			case "project":
				$(".block-project").delay(350).show(250);
				break;
			case "contact":
				$(".block-contact").delay(350).show(250);
				break;
		}
	});

	// content functionality
	$(".display").hide(0);

	$("a[id^=link-]").click(function(e) {
		e.preventDefault();
		$("#about-link").animate({ marginLeft: "-100%" }, 100);
		$("#design-link").animate({ marginLeft: "-75%" }, 100);
		$("#project-link").animate({ marginLeft: "-50%" }, 100);
		$("#contact-link").animate({ marginLeft: "-25%" }, 100);

		$("#container").delay(100).animate({ marginTop: "76px" }, 100);
			
		$("#header").animate({ marginTop: "-76px" }, 500);
		$("#container").animate({ marginTop: "0px" }, 500);
		$("#header-alt").show(1000);

		$(".block-about").hide(250);
 		$(".block-design").hide(250);
 		$(".block-project").hide(250);
 		$(".block-contact").hide(250);

 		var parsed = this.id.split("-")[1];
 		var insert = "<object id='loaded' type='text/html' data='pages/" + parsed + ".html'></object>";
 		document.getElementById("load-content").innerHTML = insert;

 		var winHeight = $(window).height();
		$(".display").css("margin-top", winHeight + "px");
		$(".display").show(0);
		$(".display").delay(250).animate({ marginTop: "0px" }, 500);
		
	});

	$(".elevator").click(function(e) {
		e.preventDefault();
		$("body").animate({
		    scrollTop: $(".splash").offset().top
		 }, 750);
	});

	$(".scroll").click(function(e) {
		e.preventDefault();
		$("body").animate({ scrollTop: $(".splash").height() }, 750);
	});

	$(".hamburger-container").click(function() {
		var aboutPos = $("#about-link").css("margin-left");
		var designPos = $("#design-link").css("margin-left");
		var projectPos = $("#project-link").css("margin-left");
		var contactPos = $("#contact-link").css("margin-left");

		if (aboutPos == "0px") {
			$("#about-link").animate({ marginLeft: "-100%" }, 100);
			$("#design-link").animate({ marginLeft: "-75%" }, 100);
			$("#project-link").animate({ marginLeft: "-50%" }, 100);
			$("#contact-link").animate({ marginLeft: "-25%" }, 100);

			$("#container").delay(100).animate({ marginTop: "76px" }, 100);
		}
		else {
			$("#container").animate({ marginTop: "128px" }, 100);

			$("#contact-link").delay(100).animate({ marginLeft: "75%" }, 100);
			$("#project-link").delay(100).animate({ marginLeft: "50%" }, 100);
			$("#design-link").delay(100).animate({ marginLeft: "25%" }, 100);
			$("#about-link").delay(100).animate({ marginLeft: "0%" }, 100);	
		}
	});

});