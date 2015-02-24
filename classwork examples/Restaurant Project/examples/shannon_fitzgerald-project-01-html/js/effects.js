	
//BASIC TAB FUNCTIONALITY
		
$(function() {
	$('#tabs').tabs();
});

//SELECT FROM TEXT LINK INSTEAD OF TAB
/*		
var $tabs = $('#brunch').tabs();			// first tab selected

$('#brunchlink').click(function() {			// bind click event to link
	$tabs.tabs('select', 2);				// switch to third tab
	return false;
});*/