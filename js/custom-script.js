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
				$('#notifications-dropdown').append('<li> <a href="#!" class="grey-text text-darken-2"> <span class="material-icons icon-bg-circle red small">stars</span> ' + data[el]['TITLE'] + '</a>        <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>	</li>');
			} else {
				$('#notifications-dropdown').append('<li> <a href="#!" class="grey-text text-darken-2"> <span class="material-icons icon-bg-circle teal small">message</span> ' + data[el]['guidelineShownName'] + '</a>        <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>	</li>')
			}
		}


			$("#profile-dropdown > li:contains('Login')").hide();
			$("#profile-dropdown > li:contains('Register')").hide();
			$("#profile-dropdown > li:contains('Logout')").show();


	}).fail(function (){
					$("#profile-dropdown > li:contains('Login')").show();
			$("#profile-dropdown > li:contains('Register')").show();
			$("#profile-dropdown > li:contains('Logout')").hide();
			$("li:contains('NOTIFICATIONS')").hide();
		});

});
