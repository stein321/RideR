var login = (function() {

	$(document).ready(function() {
		$("#eventsSubmit").click(function() {
			window.location = "/RideR/webapp/rides.html"
		});

		$("#fb-root").on("facebook:init", function() {
			FB.api('/me/events/attending?since=now', function(response) {
		  		console.log(response);
			});
		})
	})
}());