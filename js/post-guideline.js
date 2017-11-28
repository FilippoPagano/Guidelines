function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}
function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

$(document).ready(function () {
    $('#post-guidelineBtn').click(function(){
	$('#rendered-form').submit( function(eventObj) {
	if(findGetParameter("id")){
      $('<input />').attr('type', 'hidden')
          .attr('name', "id")
          .attr('value', findGetParameter("id"))
          .appendTo('#rendered-form');
      return true;
	}
  });

	});
	
	 cat="";
	 sim=0;
	
	$("select[name='cat'] option").not('[disabled="disabled"]').each(function(){
	cat= (sim < similarity($(this).val(), findGetParameter("cat")))?$(this).val():cat;
	sim =(sim < similarity($(this).val(), findGetParameter("cat")))?similarity($(this).val(), findGetParameter("cat")):sim;});
	
	console.log(cat);
	
	 subcat="";
	 sim=0;
	
	$("select[name='subcat'] option").not('[disabled="disabled"]').each(function(){
	subcat= (sim < similarity($(this).val(), findGetParameter("subcat")))?$(this).val():subcat;
	sim =(sim < similarity($(this).val(), findGetParameter("subcat")))?similarity($(this).val(), findGetParameter("subcat")):sim;});
	
	findGetParameter("id")?1:0
	findGetParameter("name")?$('#guideline_name').val(findGetParameter("name")):0;
	findGetParameter("desc")?$('#guideline_desc').val(findGetParameter("desc")):0;
	findGetParameter("cat")?$("select[name='cat']").find("option[value='"+cat+"']").prop('selected', true):0;
	findGetParameter("subcat")?$("select[name='subcat']").find("option[value='"+subcat+"']").prop('selected', true):0;
	findGetParameter("ref")?$('#textarea1').val(findGetParameter("ref")):0;
	findGetParameter("public")?$('#publicchk').prop('checked', (findGetParameter("public")==1 || findGetParameter("public")=='true')):0;
	findGetParameter("HRI")?$('#HRIchk').prop('checked', (findGetParameter("HRI")==1 || findGetParameter("HRI")=='true')):0;
	findGetParameter("MSE")?$('#MSEchk').prop('checked', (findGetParameter("MSE")==1 || findGetParameter("MSE")=='true')):0;
	findGetParameter("WIVR")?$('#WIVRchk').prop('checked', (findGetParameter("WIVR")==1 || findGetParameter("WIVR")=='true')):0;
	findGetParameter("T")?$('#Tangibleschk').prop('checked', (findGetParameter("T")==1 || findGetParameter("T")=='true')):0;
	findGetParameter("TB")?$('#Touchchk').prop('checked', (findGetParameter("TB")==1 || findGetParameter("TB")=='true')):0;
	findGetParameter("MB")?$('#MBchk').prop('checked', (findGetParameter("MB")==1 || findGetParameter("MB")=='true')):0;

$("select[name='cat']").material_select();
$("select[name='subcat']").material_select();
});