
//Borrowed from http://www.mikedoesweb.com/2011/100-height-div-with-2-lines-of-code/
//Code inside $(document).ready only runs when the DOM is ready for JS to execute
//In this case, when the content of both divs has fully loaded
$(document).ready(function(){
//set sidebar height to 100% of stage height
	$(".sidebar").height( $(".stage").height() );
});

//Accordion widget for the sidebar
	$(function() {
		$( "#accordion" ).accordion({
		heightStyle: "content",
		collapsible: true,
		active: false
		});
	});
