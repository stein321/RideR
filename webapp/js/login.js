var login = (function() {

	$(document).on("facebook:init", function() {
		alert("INIT");
	})

	$(document).ready(function() {
		$("#facebookLoginButton").click(function() {
			window.location = "location.html";
		});

	});

}());