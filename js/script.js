//borrowed from http://designgala.com/how-to-expand-collapse-toggle-div-layer-using-jquery/
// jQuery(document).ready(function() {
//   jQuery(".wrapper").hide();
//   jQuery(".lesson-header").click(function()
//   {
//     jQuery(this).next(".wrapper").slideToggle(10);
//   });
// });

//borrowed from http://www.mikedoesweb.com/2011/100-height-div-with-2-lines-of-code/
$(document).ready(function(){
    $(".sidebar").height( $(".stage").height() );
});
