/*
 * Nested - Extra Components
 */

$(function() {

  var updateOutput = function(e) {
    var list = e.length ? e : $(e.target),
      output = list.data('output');
    if (window.JSON) {
      output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
    } else {
      output.val('JSON browser support required for this demo.');
    }
  };

  // activate Nestable for list 1


  // activate Nestable for list 2


  // output initial serialised data
  

  $('#nestable-menu').on('click', function(e) {
    var target = $(e.target),
      action = target.data('action');
    if (action === 'expand-all') {
      $('.dd').nestable('expandAll');
    }
    if (action === 'collapse-all') {
      $('.dd').nestable('collapseAll');
    }
  });

  $('#nestable3').nestable();

});