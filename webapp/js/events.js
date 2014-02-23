var login = (function() {

	$(document).ready(function() {
			FB.api('/me/events/attending?since=now',
			{
				accessToken: FB.getAuthResponse().accessToken
			},
			function(response) {
		  		console.log(response);
			});

		$("#eventsSubmit").click(function() {
			window.location = "/RideR/webapp/rides.html"
		});
	})
}());