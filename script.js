$(document).ready(function () {
    let text = "";
  
    $("#btn").click(function () {
      $("#text").select();
      document.execCommand("copy");
      text = $("#text").val();
    });
  
    $("#btn2").click(function () {
      $("#paste").val(text);
    });
  });