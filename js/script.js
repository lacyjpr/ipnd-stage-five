//borrowed from http://designgala.com/how-to-expand-collapse-toggle-div-layer-using-jquery/
// jQuery(document).ready(function() {
//   jQuery(".wrapper").hide();
//   jQuery(".lesson-header").click(function()
//   {
//     jQuery(this).next(".wrapper").slideToggle(10);
//   });
// });

//Borrowed from http://www.mikedoesweb.com/2011/100-height-div-with-2-lines-of-code/
//Code inside $(document).ready only runs when the DOM is ready for JS to execute
//In this case, when the content of both divs has fully loaded
$(document).ready(function(){
//set sidebar height to 100% of stage height
	$(".sidebar").height( $(".stage").height() );
});

$(document).ready(function() {
	$( "#accordion" ).accordion();
	heightStyle: "auto"
});

