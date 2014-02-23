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

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/all.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		$("#eventsSubmit").click(function() {
			window.location = "/RideR/webapp/rides.html"
		});
	})
}());