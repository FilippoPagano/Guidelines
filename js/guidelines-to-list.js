$(document).ready(function () {
	$.ajaxSetup({
		type : "POST",
		data : {},
		dataType : 'json',
		xhrFields : {
			withCredentials : true
		},
		crossDomain : true
	});
	//TODO: add lists to select form
	$("#addToList").click(function () {
		list = ($('#chkOld')[0].checked) ? $("#chooseList option:selected").text() : $("#customList").val();
		// Send the data using post
		var posting = $.post('../../php/addElementsToList.php', {
				selectedItems : selectedItems,
				list : list
			});

		// Put the results in a div
		posting.done(function (data, textStatus, XMLHttpRequest) {
			if (data[0] === "ok") {}
			else {};
		});
		posting.fail(function (xhr, status, error) {
			if (xhr.readyState == 0) {}
		})
	});
	$('select').on('contentChanged', function () {
		// re-initialize (update)
		$(this).material_select();
	});
	$.get("../../php/getListsName.php", function (data) {
		//alert( "Load was performed." );

		var index = data.indexOf("Favourite");
		if (index >= 0) {
			data.splice(index, 1);
		}
		
		data.forEach(function (element) {
			$("#chooseList").append('<option>' + element + '</option>').trigger('contentChanged'); ;
		
		});
	
	});

});
