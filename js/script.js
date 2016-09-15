$(document).ready(function() {

	// preload pages and images
	$("a[id^=block-link-]").each(function(i, val) {
		var page = val.href.split("/")[8];
		var insert = "<object id='loaded' type='text/html' data='pages/" + page + "'></object>";
 		$("#load-content").html(insert);
	});
	$("#load-content").html("");

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
    $("#header nav li a[id$='-link']").click(function(e) {
    	e.preventDefault();

    	var name = $(this).attr("id").split("-")[0];

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

    // content functionality
    $("#load-content").hide();
    $(".close-container").css({"opacity": 0});
    $(".close-container").hide();

	$("a[id^=block-link-]").click(function(e) {
		e.preventDefault();

		$(".block").removeClass("active");
		var block = $(this).find($(".block"))[0];
		$(block).addClass("active");

    	$("#container").addClass("sidebar");
    	$("#load-content").show(0);

    	$("#load-content").animate({"opacity": 0}, 250);

 		var parsed = this.id.split("-")[2];
 		var insert = "<object id='loaded' type='text/html' data='pages/" + parsed + ".html'></object>";
 		$("#load-content").queue(function() { $(this).html(insert).dequeue(); });
		$("#load-content").delay(50).animate({"opacity": 1}, 250);

		$(".close-container").show(0);
		$(".close-container").delay(250).animate({"opacity": 1}, 250);
	});

	$(".home-link").click(function(e) {
		$(".block").removeClass("active");
		$("#load-content").animate({"opacity": 0}, 250).hide(0);
		$("#container").delay(500).queue(function() { $(this).removeClass("sidebar").dequeue(); });

		$(".close-container").animate({"opacity": 0}, 250);
		$(".close-container").delay(250).hide(0);
	});

});