var listfriends = (function() {

	var constructRiderList = function(data) {
		var div = $('<div/>', {
			'class':'divRow'
		});
	}

	$.ajax({
    	url: "http://54.201.249.47/RideRServer/",
     	type: "GET",
     	context: document.body,
     	success: constructRiderList
    });

	$(document).ready(function() {
		$("#nextButton").click(function() {
			window.location = "rides.html";
		});

		$(".divRow").click(function() {
			$(this).toggleClass("selected");
		});
	})
}());