var listfriends = (function() {

	var constructRiderList = function(data) {
		var json = jQuery.parseJSON(data);
		var i;
		for(i = 0; i < json.length; i++) {
			var rider = json[i];
			var div = $('<div/>', {
				'class':'divRow'
			});
			var nameSpan = $('<span/>')
			nameSpan.html(rider.name);

			div.html(nameSpan);
			$("#riderSuggestionContainer").append(div);
		}
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