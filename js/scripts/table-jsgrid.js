/*
* JSGrid  - Table JS Grid page
*/

$(function() {

  // Basic Data
  $("#jsGrid-basic").jsGrid({
    height: "70%",
    width: "100%",
    filtering: true,
    editing: false,
    sorting: true,
    paging: true,
    autoload: true,
    pageSize: 15,
    pageButtonCount: 5,
    deleteConfirm: "Do you really want to delete the guideline?",
    controller: db,
    fields: [{
        name: "Name",
        type: "text",
        width: 150
      },
      {
        name: "Description",
        type: "text",
        width: 150
      },
      {
        name: "References",
        type: "text",
        width: 150
      },
      {
        name: "Category",
        type: "select",
        items: db.categories,
        valueField: "Id",
        textField: "Name"
      },
      {
        name: "SubCategory",
        type: "select",
        items: db.subcategories,
        valueField: "Id",
        textField: "Name"
      },
      {
        name: "HRI",
        type: "checkbox",
        title: "HRI",
        width: 30
      },	
      {
        name: "WIVR",
        type: "checkbox",
        title: "WIVR",
        width: 30
      },	
      {
        name: "MB",
        type: "checkbox",
        title: "MOTION-BASED",
        width: 30
      },	
      {
        name: "MSE",
        type: "checkbox",
        title: "MSE",
        width: 30
      },	
      {
        name: "TANGIBLES",
        type: "checkbox",
        title: "TANGIBLES",
        width: 30
      },	
      {
        name: "TOUCH",
        type: "checkbox",
        title: "TOUCH",
        width: 30
      },
	  {
        name: "Upvotes",
        type: "number",
        title: "Upvotes",
        width: 30
      },		  
{
        name: "Downvotes",
        type: "number",
        title: "Downvotes",
        width: 30
      },		  
	  {
        name: "Comments",
        type: "number",
        title: "Comments",
        width: 30
      },		
      {
        type: "control"
      }
    ]
  });
 

  // Sorting
  $("#jsGrid-sorting").jsGrid({
    height: "80%",
    width: "100%",

    autoload: true,
    selecting: false,

    controller: db,

    fields: [{
        name: "Name",
        type: "text",
        width: 150
      },
      {
        name: "Age",
        type: "number",
        width: 50
      },
      {
        name: "Address",
        type: "text",
        width: 200
      },
      {
        name: "Country",
        type: "select",
        items: db.countries,
        valueField: "Id",
        textField: "Name"
      },
      {
        name: "Married",
        type: "checkbox",
        title: "Is Married"
      }
    ]
  });


  $("#sortingField").change(function() {
    var field = $(this).val();
    $("#jsGrid-sorting").jsGrid("sort", field);
	//$('.jsgrid-grid-body').find('.jsgrid-cell > input[type=checkbox]').each(function(i, el){$(el).attr('id','chk' + i +'th'); $(el).after("<label for='"+ 'chk' + i +'th' + "'></label>")});
  });

  $("#jsGrid-page").jsGrid({
    height: "70%",
    width: "100%",
    autoload: true,
    paging: true,
    pageLoading: true,
    pageSize: 15,
    pageIndex: 2,
    controller: {
      loadData: function(filter) {
        var startIndex = (filter.pageIndex - 1) * filter.pageSize;
        return {
          data: db.clients.slice(startIndex, startIndex + filter.pageSize),
          itemsCount: db.clients.length
        };
      }
    },
    fields: [{
        name: "Name",
        type: "text",
        width: 150
      },
      {
        name: "Age",
        type: "number",
        width: 50
      },
      {
        name: "Address",
        type: "text",
        width: 200
      },
      {
        name: "Country",
        type: "select",
        items: db.countries,
        valueField: "Id",
        textField: "Name"
      },
      {
        name: "Married",
        type: "checkbox",
        title: "Is Married"
      }
    ]
  });

  $("#pager").on("change", function() {
    var page = parseInt($(this).val(), 10);
    $("#jsGrid-page").jsGrid("openPage", page);
  });
  // Custom View
  $("#jsGrid-custom").jsGrid({
    height: "70%",
    width: "100%",
    filtering: true,
    editing: true,
    sorting: true,
    paging: true,
    autoload: true,
    pageSize: 15,
    pageButtonCount: 5,
    controller: db,
    fields: [{
        name: "Name",
        type: "text",
        width: 150
      },
      {
        name: "Age",
        type: "number",
        width: 50
      },
      {
        name: "Address",
        type: "text",
        width: 200
      },
      {
        name: "Country",
        type: "select",
        items: db.countries,
        valueField: "Id",
        textField: "Name"
      },
      {
        name: "Married",
        type: "checkbox",
        title: "Is Married",
        sorting: false
      },
      {
        type: "control",
        modeSwitchButton: false,
        editButton: false
      }
    ]
  });

  $(".config-panel input[type=checkbox]").on("click", function() {
    var $cb = $(this);
    $("#jsGrid-custom").jsGrid("option", $cb.attr("id"), $cb.is(":checked"));
	//$('.jsgrid-grid-body').find('.jsgrid-cell > input[type=checkbox]').each(function(i, el){$(el).prop('id','chk' + i +'th'); $(el).after("<label for='"+ 'chk' + i +'th' + "'></label>")});
  });

  // Custom Row Renderer

  $("#jsGrid-custom-row").jsGrid({
    height: "90%",
    width: "100%",

    autoload: true,
    paging: true,

    controller: {
      loadData: function() {
        var deferred = $.Deferred();

        $.ajax({
          url: 'http://api.randomuser.me/?results=40',
          dataType: 'json',
          success: function(data) {
            deferred.resolve(data.results);
          }
        });

        return deferred.promise();
      }
    },

    rowRenderer: function(item) {
      var user = item.user;
      var $photo = $("<div>").addClass("client-photo").append($("<img>").attr("src", user.picture.medium));
      var $info = $("<div>").addClass("client-info")
        .append($("<p>").append($("<strong>").text(user.name.first.capitalize() + " " + user.name.last.capitalize())))
        .append($("<p>").text("Location: " + user.location.city.capitalize() + ", " + user.location.street))
        .append($("<p>").text("Email: " + user.email))
        .append($("<p>").text("Phone: " + user.phone))
        .append($("<p>").text("Cell: " + user.cell));

      return $("<tr>").append($("<td>").append($photo).append($info));
    },

    fields: [{
      title: "Guidelines"
    }]
  });


  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
  
  $('.jsgrid-filter-row').find('.jsgrid-cell > input[type=checkbox]').each(function(i, el){$(el).attr('id','chk' + i +'th'); $(el).after("<label for='"+ 'chk' + i +'th' + "'></label>")});
});