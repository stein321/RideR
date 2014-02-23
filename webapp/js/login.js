var login = (function() {

	$(document).on("facebook:init", function() {
		alert(FB.getAccessToken());
	})

	$(document).ready(function() {
		$("#facebookLoginButton").click(function() {
			window.location = "location.html";
		});

	});

}());