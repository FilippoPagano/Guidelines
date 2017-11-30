/*================================================================================
Item Name: Materialize - Material Design Admin Template
Version: 4.0
Author: PIXINVENT
Author URL: https://themeforest.net/user/pixinvent/portfolio
================================================================================

NOTE:
------
PLACE HERE YOUR OWN JS CODES AND IF NEEDED.
WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR CUSTOM SCRIPT IT'S BETTER LIKE THIS. */

function findGetParameter(parameterName) {
	var result = null,
	tmp = [];
	location.search
	.substr(1)
	.split("&")
	.forEach(function (item) {
		tmp = item.split("=");
		if (tmp[0] === parameterName)
			result = decodeURIComponent(tmp[1]);
	});
	return result;
}
function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}
$('document').ready(function () {
	$('.material-icons:contains("radio_button_checked")').click();
	$.get("../../php/getNotifications.php", function (data) {
		data = JSON.parse(data);

		for (el in data) {

			$('.notification-badge').text(parseInt($('.notification-badge').text()) + 1);
			$('.new.badge').each(function () {
				$(this).text(parseInt($(this).text()) + 1)
			});
			if (data[el]['TITLE']) {
				var href = "post-guideline.html?id=" + data[el]['id'] + "&name=" + data[el]['TITLE'] + "&desc=" + data[el]['DESCRIPTION'] + "&cat=" + data[el]['CAT'] + "&subcat=" + data[el]['SUBCAT'] + "&ref=" + data[el]['REFERENCE'] + "&HRI=" + data[el]['HRI'] + "&T=" + data[el]['TANGIBLES'] + "&TB=" + data[el]['TOUCH'] + "&WIVR=" + data[el]['WIVR'] + "&MB=" + data[el]['MOTION-BASED'] + "&MSE=" + data[el]['MSE'];
				$('#notifications-dropdown').append('<li> <a href="' + href + '" class="grey-text text-darken-2"> <span class="material-icons icon-bg-circle red small">stars</span> ' + data[el]['TITLE'] + '</a>        <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>	</li>');
			} else {
				var href = "edit-guideline.html?msgID=" + data[el]['id']  + "&id=" + data[el]['guideline'] + "&name=" + data[el]['guidelineShownName'] + "&msg=" + data[el]['editMessage']
					$('#notifications-dropdown').append('<li> <a href="' + href + '" class="grey-text text-darken-2"> <span class="material-icons icon-bg-circle teal small">message</span> ' + data[el]['guidelineShownName'] + '</a>        <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>	</li>')
			}
		}

		//NB approfittiamo del fatto di sapere che siamo admin/loggati
		//TODO cappella: adesso bisogna mettere la roba per i loggati a parte perchè qui va bene solo per gli admin
		$("#profile-dropdown > li:contains('Login')").hide();
		$("#profile-dropdown > li:contains('Register')").hide();
		$("#profile-dropdown > li:contains('Logout')").click(function(){localStorage.clear();});
		$("#profile-dropdown > li:contains('Logout')").show();
		$("#goToGuideline").show();
		$(".material-icons:contains('mode_edit')").unbind().click(function () {
			window.location.href = "post-guideline.html?id=" + datum['id'] + "&name=" + datum['TITLE'] + "&public=0" + "&desc=" + datum['DESCRIPTION'] + "&cat=" + datum['CAT'] + "&subcat=" + datum['SUBCAT'] + "&ref=" + datum['REFERENCE'] + "&HRI=" + datum['HRI'] + "&T=" + datum['TANGIBLES'] + "&TB=" + datum['TOUCH'] + "&WIVR=" + datum['WIVR'] + "&MB=" + datum['MOTION-BASED'] + "&MSE=" + datum['MSE'];

		});
		$("#guideline_name").parent().removeClass("s12").addClass("s9");
		$("#publicchk").parent().show();
		$("#discard-guidelineBtn")
		.click(function () {
			var theid = findGetParameter("id");
			var url = "../../php/deleteGuideline.php";
	if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "edit-guideline.html"){ url="../../php/deleteMessage.php"; theid =findGetParameter("msgID"); }
			var request = $.ajax({
					url : url,
					method : "POST",
					data : {
						guideline : theid
					},
					dataType : "html"
				});

			request.done(function (msg) {
				Materialize.toast("Guideline moved to discarded", 10000);
			})

			/*$.post("../../php/deleteGuideline.php", {
			guideline : theid
			})
			.done(function (data) {
			Materialize.toast("Guideline moved to discarded", 10000);
			});*/
		})
		.show();

	}).fail(function () {
		$("#profile-dropdown > li:contains('Login')").show();
		$("#profile-dropdown > li:contains('Register')").show();
		$("#profile-dropdown > li:contains('Logout')").hide();
		$("li:contains('NOTIFICATIONS')").hide();
		$("#addToFavaourites").hide();
		$("#profile-dropdown > li:contains('Profile')").hide();
		$(".jsgrid-delete-button").hide();

	});
	if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "guidelines.html"){
	var e = $.Event( "keypress", { which: 13 } );
	setTimeout(function() {
    $($("#jsGrid-basic").data("JSGrid").fields[1].filterControl[0]).trigger(e);
}, 500);
	}
	//$($("#jsGrid-basic").data("JSGrid").fields[1].filterControl[0]).delay( 500 ).trigger(e);
	/* $('.jsgrid-row').add(".jsgrid-alt-row").find("td:nth-child(2)").click(function(){
	window.location.href = "guideline.html?id=" +(args.item.id);
	})*/
});
