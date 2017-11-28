$(document).ready(function () {
	$(".material-icons:contains('mode_edit')").click(function(){
		window.open("edit-guideline.html?id=".concat((findGetParameter("id"))?findGetParameter("id"):1) + "&name=" + findGetParameter("name"));
		});
	$.ajaxSetup({
        type: "POST",
        data: {},
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true
    });
	$(".material-icons:contains('comment')").click(function(){
		//	$('#exampleInputEmail1')[0].value= "Add a comment";
	$('#exampleInputEmail1').select();
		});

	// Handler for .ready() called.
	var guideline = findGetParameter("id")?findGetParameter("id"):1;
	if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "guideline.html" && guideline) {

		var jqxhr = $.get("../../php/guideline.php", {
				guideline : guideline,
				time : "4:20"
			}, function (data) {
				/*var */
				datum = (typeof data !== "object")?JSON.parse(data):data;
				$(".guideline-title").text(datum.TITLE);
				$(".guideline-desc").text(datum.DESCRIPTION);
				$(".upvotesCounter").text(datum.Upvotes);
				$(".downvotesCounter").text(datum.Downvotes);
				$(".commentsCounter").text(datum.Comments);
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
	
	$('.commentBtn').click(function(){
		        event.preventDefault();

        // Get some values from elements on the page:
        var $form = $(this);
        var comment = $('.commentText').val();
		var guideline = findGetParameter("id");
      
        // Send the data using post
        var posting = $.post('../../php/comment.php', {
            comment: comment,
			guideline: guideline
          
        });

        // Put the results in a div
        posting.done(function (data, textStatus, XMLHttpRequest) {
            if (data === "ok") {
            			Materialize.toast("Comment received", 1000);
            } else { //erorr to handle


            };
        });
		});

});
