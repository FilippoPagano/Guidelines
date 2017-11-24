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
            if (data[0] === "ok") {
            
            } else { //erorr to handle


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
            if (data[0] === "ok") {
            
            } else { //erorr to handle


            };
        });
	
}