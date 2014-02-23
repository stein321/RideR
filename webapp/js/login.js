var login = (function() {

	$(document).ready(function() {
		$("#facebookLoginButton").click(function() {
			window.location = "location.html";
		});

		$("fb-root").on("facebook:init", function() {
			alert("INIT");
		})
	});

}());