$(document).ready(function () {
	$(".material-icons:contains('thumb_up')").click(function(){
		sendUpvote();
		});
		$(".material-icons:contains('thumb_down')").click(function(){
		sendDownvote();
		});

});
	
function sendUpvote(){
			        event.preventDefault();


		var guideline = findGetParameter("id");
      
        // Send the data using post
        var posting = $.post('../../php/upvote.php', {
			guideline: guideline
          
        });

        // Put the results in a div
        posting.done(function (data, textStatus, XMLHttpRequest) {
            if (data === "ok") {
				//$(".upvotesCounter").text(parseInt($(".upvotesCounter").text())+1);
				Materialize.toast("Vote received", 1000);
            } else { //erorr to handle

Materialize.toast("Error", 10000);
            };
        });
	
}
function sendDownvote(){
			        event.preventDefault();


		var guideline = findGetParameter("id");
      
        // Send the data using post
        var posting = $.post('../../php/downvote.php', {
			guideline: guideline
          
        });

        // Put the results in a div
        posting.done(function (data, textStatus, XMLHttpRequest) {
            if (data === "ok") {
			//	$(".downvotesCounter").text(parseInt($(".downvotesCounter").text())+1);
				Materialize.toast("Vote received", 1000);
            } else { //erorr to handle
Materialize.toast("Error", 10000);


            };
        });
	
}