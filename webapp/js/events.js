var login = (function() {

	$(document).ready(function() {
		window.fbAsyncInit = function() {
			FB.init({
			  	appId      : '436860186416914',
			  	channelUrl : "channel.html",
				status     : true, 
				cookie     : true,
				xfbml      : true,
				oauth      : true,
			});

			FB.api('/me/events/attending?since=now',
			{
				accessToken: FB.getAuthResponse().accessToken
			},
			function(response) {
		  		console.log(response);
			});
	    }

		$("#eventsSubmit").click(function() {
			window.location = "/RideR/webapp/rides.html"
		});
	})
}());