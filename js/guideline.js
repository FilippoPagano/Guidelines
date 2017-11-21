$(document).ready(function () {
	// Handler for .ready() called.
	if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "guideline.html") {
		var guideline = findGetParameter("id");
		var jqxhr = $.get("../../php/guideline.php", {
				guideline : guideline,
				time : "4:20"
			}, function (data) {
				/*var */
				datum = JSON.parse(data);
				$(".guideline-title").text(datum.TITLE);
				$(".guideline-desc").text(datum.DESCRIPTION);
				(datum.HRI) ? $(".guideline-feas").append("HRI, ") : 0;
				(datum["MOTION-BASED"]) ? $(".guideline-feas").append("MOTION-BASED, ") : 0;
				(datum.MSE) ? $(".guideline-feas").append("MSE, ") : 0;
				(datum.WIVR) ? $(".guideline-feas").append("WIVR, ") : 0;
				(datum.TANGIBLES) ? $(".guideline-feas").append("TANGIBLES, ") : 0;
				(datum.TOUCH) ? $(".guideline-feas").append("TOUCH, ") : 0;
				$(".guideline-feas").text($(".guideline-feas").text().slice(0, -2));
				datum.REFERENCE.split(",").forEach(function (item, index) {
					$(".guideline-refs").append("- " + item + "<br />")
				});
				datum.comments.forEach(function (item, index) {
					$(".guideline-comments").append("<a href='#!' class='collection-item avatar border-none'>\
						                <img src='../../images/avatar/avatar-1.png' alt='' class='circle cyan'>\
						                <span class='line-height-0'>"+ item.uname +"</span>\
						                <span class='medium-small right blue-grey-text text-lighten-3'>"+ item.date +"</span>\
						                <p class='medium-small blue-grey-text text-lighten-3'>"+ item.text +"</p></a>");
				});

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
