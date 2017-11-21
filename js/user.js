$(document).ready(function () {
	// Handler for .ready() called.
	if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "user-profile-page.html") {
		var user = findGetParameter("id");
		var jqxhr = $.get("../../php/user.php", { 
		user: user, 
		time: "4:20" 
		}, function (data ) {
		/*var */ datum= JSON.parse(data);
				$(".user-name").text(datum.name);
				
				
			})
			.done(function () {
				//alert("second success");
			})
			.fail(function () {
				alert("error");
			})
			.always(function () {
			//	alert("finished");
			});
	}

});
