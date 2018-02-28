$(document).ready(function()
{
  //Show and Hide Buttons
  $("#toTop").hide();
  $("#showNow").click
	(
		function()
		{
      if($("#showNow").text() == "[+]") {
        $("#showNow").text("[-]");
      }
      else {
        $("#showNow").text("[+]");
      }
			$("#now").slideToggle();
		}
	);
	$("#showPast").click
	(
		function()
		{
      if($("#showPast").text() == "[+]") {
        $("#showPast").text("[-]");
      }
      else {
        $("#showPast").text("[+]");
      }
			$("#past").slideToggle();
		}
	);
	$("#showFuture").click
	(
		function()
		{
      if($("#showFuture").text() == "[+]") {
        $("#showFuture").text("[-]");
      }
      else {
        $("#showFuture").text("[+]");
      }
			$("#future").slideToggle();
		}
	);

  //Scroll top button
  $(window).scroll(function() {
      if($(this).scrollTop() > 300){
        $("#toTop").fadeIn();
      }
      else {
        $("#toTop").fadeOut();
      }
  }
  );
});
