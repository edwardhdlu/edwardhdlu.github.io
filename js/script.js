$(document).ready(function() {

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

    $("#header nav li a[id$='-link']").click(function() {
    	var name = $(this).attr("id").split("-")[0];
    	state = name;

    	$("#header nav li a").removeClass("active");
	   	$(this).addClass("active");

    	if (name == "all") {
    		$("div[class^='block']").animate({"opacity": 1}, 250)
    	}

    	else {
	    	$("div[class^='block']").not(".block-" + name).animate({"opacity": 0.2}, 250)
	    	$(".block-" + name).animate({"opacity": 1}, 250)
	    }
	});

    // mobile menu functionality
    if ($(window).width() <= 800) {
		$("#header nav").height(0);
	}

    $(window).resize(function() {
    	if ($(window).width() <= 800) {
    		$("#header nav").height(0);
    	}
    });

    $(".hamburger").click(function(e) {
    	if ($("#header nav").height() <= 0) {
    		$("#header nav").animate({"height": "256px"}, 250);
    	}
    	else {
    		$("#header nav").animate({"height": 0}, 250);
    	}
    });

    // content functionality
    $(".block").click(function(e) {
    	e.preventDefault();
    	if ($("#container").hasClass("sidebar")) {
    		$("#container").removeClass("sidebar");
    	}
    	else {
    		$("#container").addClass("sidebar");
    	}
    });


    /*
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
		$("#contact-link").animate({ marginTop: "-47px" }, 100);
		$("#project-link").animate({ marginTop: "-47px" }, 10ß0);
		$("#design-link").animate({ marginTop: "-47px" }, 100);
		$("#about-link").animate({ marginTop: "-47px" }, 100);

		$("#container").delay(100).animate({ marginTop: "76px" }, 100);
		$("#header").animate({ marginTop: "-76px" }, 500);
		$("#container").animate({ marginTop: "0px" }, 500);
		$("#header-alt").show(1000);

		$(".block-about").hide(250);
 		$(".block-design").hide(250);
 		$(".block-project").hide(250);
 		$(".block-contact").hide(250);

 		$(".back-button").attr("class", "back-button");
 		var blockType = $(this).find($(".block"))[0].className.split(" ").slice(-1)[0].split("-")[1];
 		$(".back-button").addClass(blockType + "-color");

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
		var curPos = $("#about-link").css("margin-top");

		if (curPos[0] == "-") {
			$("#container").animate({ marginTop: "128px" }, 250);

			$("#about-link").animate({ marginTop: "81px" }, 250);
			$("#design-link").animate({ marginTop: "81px" }, 250);
			$("#project-link").animate({ marginTop: "81px" }, 250);
			$("#contact-link").animate({ marginTop: "81px" }, 250);
		}
		else {
			$("#container").animate({ marginTop: "76px" }, 250);

			$("#contact-link").animate({ marginTop: "-47px" }, 250);
			$("#project-link").animate({ marginTop: "-47px" }, 250);
			$("#design-link").animate({ marginTop: "-47px" }, 250);
			$("#about-link").animate({ marginTop: "-47px" }, 250);	
		}
	});

	var transitionHeader = $(".splash").height();
  	$(window).scroll(function() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    	if (scroll >= transitionHeader) {
        	$(".back-button").addClass("scrolled");
    	}
        else {
        	$(".back-button").removeClass("scrolled");
        }
  	});
	*/

});