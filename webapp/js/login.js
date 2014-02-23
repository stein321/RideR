var login = (function() {

	$(document).ready(function() {
		$("#loginButton").click(function() {
			window.location = "/RideR/webapp/location.html"
		});

		window.fbAsyncInit = function() {
			FB.init({
			  	appId      : '436860186416914',
				status     : true, 
				cookie     : true,
				xfbml      : true,
				oauth      : true,
			});
		};

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/all.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	})
}());