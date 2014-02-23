var login = (function() {

	$(document).ready(function() {
		$("#eventsSubmit").click(function() {
			window.location = "/RideR/webapp/rides.html"
		});

		FB.api('/me/events/attending?since=now', function(response) {
		  console.log(response);
		});
	})
}());