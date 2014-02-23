var login = (function() {
	$(document).ready(function() {
		$("#facebookLoginButton").click(function() {
						alert(FB.getAccessToken());
			window.location = "location.html";
		});

		alert(FB.getAccessToken());
	});

}());