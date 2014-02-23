var address = (function() {

	$(document).ready(function() {
		$("#locationForm").on("submit", function(event) {
			window.location = "events.html"
			return false;
		});
	})
}());