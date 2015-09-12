
jQuery(document).ready(function() {
  jQuery(".concept-content").hide();
  //toggle the componenet with class msg_body
  jQuery(".concept-title").click(function()
  {
    jQuery(this).next(".concept-content").slideToggle(10);
  });
});
