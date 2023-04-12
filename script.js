jQuery.expr[':'].Contains = function(a, i, m) { 
  return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0; 
};

$(function() {
  //alert("aaaaaa");
  $("span:Contains('OVP')").addClass("ovp");
  $("span:Contains('SPO')").addClass("spo");
  $("span:Contains('FPO')").addClass("fpo");
  $("span:Contains('Grune')").addClass("grune");
  $("span:Contains('NEOS')").addClass("neos");
});

$("#search").keyup(function(){
  $(".monster").hide();
  var search = $("#search").val();
  $("p:Contains('"+search+"')").parent().show();
  
  if(search==""){
    $(".monster").show();
  }
});

$("button").click(function(){
  $(".monster").hide();
  var clicked = $(this).val();

  var bossbutton = "";
  
  $("span:Contains('"+clicked+"')").parent().parent().show();
  
  if(clicked=="showbosses"){
    $(".monster").hide();
    $(".boss").show();
  }
  
  if(clicked=="showminions"){
    $(".monster").show();
    $(".boss").hide();
  }
  
  if(clicked=="showall"){
    $(".monster").show();
  }
});