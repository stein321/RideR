var listfriends = (function() {

	var constructRiderList = function(data) {
		var json = jQuery.parseJSON(data);
		var i;
		for(i = 0; i < json.length; i++) {
			var rider = json[i];
			var div = $('<div/>', {
				'class':'divRow'
			});

			var nameElem = $('<p/>', {
				'class':'riderName'
			})
			nameElem.html(rider.name.toUpperCase());

			var mutualFriendElem = $('<p/>');
			mutualFriendElem.html("Mutual friends: " + rider.mutual_friend_count);

			div.append(nameElem);
			div.append(mutualFriendElem);

			$("#riderSuggestions").append(div);
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

		$("#riderSuggestions").on("click", ".divRow", function() {
			$(this).toggleClass("selected");
		});
	})
}());