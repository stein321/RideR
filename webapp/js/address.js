var address = (function() {

	$(document).ready(function() {
		$("#locationForm").on("submit", function(event) {
			window.location = "/RideR/webapp/events.html"
			return false;
		});
	})
}());