//borrowed from http://designgala.com/how-to-expand-collapse-toggle-div-layer-using-jquery/
jQuery(document).ready(function() {
  jQuery(".concept-content").hide();
  jQuery(".concept-title").click(function()
  {
    jQuery(this).next(".concept-content").slideToggle(10);
  });
});
