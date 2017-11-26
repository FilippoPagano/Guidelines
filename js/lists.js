$(document).ready(function () {
	$.get("../../php/getLists.php", function (data) {
	data=JSON.parse(data);
		for (var propertyName in data) {
			// propertyName is what you want
			// you can get the value like this: myObject[propertyName]
			console.log(data[propertyName]);
			$("#content > .container:last").append("     <div class='divider'></div>          <div class='row'>\
                <div class='col s12'>\
                 <h4 class='header'>" + propertyName + "</h4>\
                </div>\
                <div class='col s12 m8 l9'>\
                  <p>This configuration allows you to add a handler at the left so you only allowed to move it from the handler</p>   <div class='dd' id=''>\
                    <ol class='dd-list'>\
                    </ol>\
                  </div> </div>       </div>");
			$(".dd:last").nestable();
			
			for (var guideline in data[propertyName]){
				console.log(data[propertyName][guideline]);
							$('.dd:last > ol').append('<li class="dd-item dd3-item" data-id="'+data[propertyName][guideline]['id']+'"><div class="dd-handle dd3-handle">Drag</div><div class="dd3-content" name="'+data[propertyName][guideline]['TITLE']+'">'+data[propertyName][guideline]['TITLE']+'</div></li>');

				}
			var nestablecount = $('#nestable3 > ol > li').length;
			$('#nestable3 > ol').append('<li class="dd-item dd3-item" data-id="'+data[propertyName][guideline]['id']+'"><div class="dd-handle dd3-handle">Drag</div><div class="dd3-content" name="'+data[propertyName][guideline]['TITLE']+'">'+data[propertyName][guideline]['TITLE']+'</div></li>');
		nestablecount++;
		}
		//$("#chooseList").append('<option>' + element + '</option>').trigger('contentChanged'); ;

	});
});