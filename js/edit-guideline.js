$(document).ready(function () {
    $('#post-editGuidelineBtn').click(function(){
	$('#edit-message-form').submit();

	});
	
	findGetParameter("id")?$('#guidelineID').val(findGetParameter("id")):0;
	findGetParameter("name")?$('#guideline_name').val(findGetParameter("name")):0;
	findGetParameter("msg")?$('#textarea1').val(findGetParameter("msg")):0;
	findGetParameter("id")?$('#goToGuideline').click(function(){openInNewTab("guideline.html?id="+findGetParameter("id"))}):0;
});