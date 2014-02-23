var login = (function() {

	$(document).ready(function() {
		$("#fb-root").on("facebook:user:connected", function() {
			window.location = "/RideR/webapp/location.html";
		}
	});
}());