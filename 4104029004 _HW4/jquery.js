$(document).ready(function(){
  $("#title").click(function(){
	  $("#tt").show();
	  }); 
}); 

$(document).ready(function(){
  $("#aa").click(function(){
	  $("#About").hide();
	  }); 
}); 

$(document).ready(function(){
  $("#About").click(function(){
	  $("#aa").toggle();
	  }); 
}); 

$(document).ready(function(){
  $("#tt").click(function(){
	  $("#tt").fadeTo("slow",0.15);
	  }); 
}); 

$(document).ready(function() { 
	var a = $('div.more1'); 
	a.hide(); 

	$('#Story').click(function() { 
		a.toggle('slow'); 
	}); 

});

$(document).ready(function() { 
	var b = $('div.more2'); 
	b.hide(); 

	$('#Writer').click(function() { 
		b.slideToggle('slow'); 
	}); 

});


$(document).ready(function() { 
	var c = $('div.more3'); 
	c.hide(); 

	$('#Chapter').click(function() { 
		c.slideToggle('slow'); 
	}); 

});

$(document).ready(function(){
  $("#m1").click(function(){
    $("#m11").slideDown("slow");
	$("#m22").slideUp("slow");
	$("#m33").slideUp("slow");
	$("#m44").slideUp("slow");
	$("#m55").slideUp("slow");
  });
});

$(document).ready(function(){
  $("#m2").click(function(){
    $("#m11").slideUp("slow");
	$("#m22").slideDown("slow");
	$("#m33").slideUp("slow");
	$("#m44").slideUp("slow");
	$("#m55").slideUp("slow");
  });
});

$(document).ready(function(){
  $("#m3").click(function(){
    $("#m11").slideUp("slow");
	$("#m22").slideUp("slow");
	$("#m33").slideDown("slow");
	$("#m44").slideUp("slow");
	$("#m55").slideUp("slow");
  });
});

$(document).ready(function(){
  $("#m4").click(function(){
    $("#m11").slideUp("slow");
	$("#m22").slideUp("slow");
	$("#m33").slideUp("slow");
	$("#m44").slideDown("slow");
	$("#m55").slideUp("slow");
  });
  });
  
  $(document).ready(function(){
  $("#m5").click(function(){
    $("#m11").slideUp("slow");
	$("#m22").slideUp("slow");
	$("#m33").slideUp("slow");
	$("#m44").slideUp("slow");
	$("#m55").slideDown("slow");
  });
});

$(document).ready(function(){
  $("#Character").click(function(){
    $("#div1").fadeToggle(1000);
    $("#div2").fadeToggle(1200);
    $("#div3").fadeToggle(1400);
    $("#div4").fadeToggle(1600);
    $("#div5").fadeToggle(1800);
	$("#div6").fadeToggle(2000);
	$("#div7").fadeToggle(2200);
	$("#div8").fadeToggle(2400);
	$("#div9").fadeToggle(2600);
  });
});

$(document).ready(function(){
  $("#Favorite").click(function(){
    $("#f1").fadeIn();
    $("#f2").fadeIn();
    $("#f3").fadeIn();
  });
});
$(document).ready(function(){
  $("#Favorite").click(function(){
    $("#fff").toggle();
  });
});
$(document).ready(function(){
  $("#ff1").click(function(){
    $("#f1").fadeOut();
  });
});
$(document).ready(function(){
  $("#ff2").click(function(){
    $("#f2").fadeOut();
  });
});
$(document).ready(function(){
  $("#ff3").click(function(){
    $("#f3").fadeOut();
  });
});