var login = (function() {
	$(document).ready(function() {
		$("#facebookLoginButton").click(function() {
						alert(FB.getAccessToken());
			window.location = "location.html";
		});
	});

	$(document).on("facebook:connected", function() {
		window.location = "location.html";
	})

	$(document).on("facebook:not_connected", function() {
		FB.login();
	})

}());