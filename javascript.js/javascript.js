$(document).ready(function(){
	
	$('span').css ('display', 'none');
	 $("img").fadeTo(100, 0.2, function(){});
	 $("img").rotate(-45);
	 $('span').fadeTo(50, 0, function(){});

	$("#leftSide").hover(function () { 
			   $('#leftSide').animate({'width': '30%'}, { duration: 1000, queue: false });
			   $('#rightSide').animate({'width': '69%'}, { duration: 1000, queue: false,
			   	complete: function(){
			   		$('span').css ('display', 'inline');
			   		$("img").fadeTo(1000, 1.0, function(){});
			   		$('span').fadeTo(1000, 1.0, function(){});
			   		$("img").rotate({duration: 1000, animateTo: 0 });
			   	}
			   	});
    //$('span').animate({"font-color" : "#FAF93C"}, { duration: 1000, queue: false });
					   
// colors : FAF93C 5A79A5

            }, function () {
               $('#leftSide').animate({'width': '64px'}, 1000);
			   $('#rightSide').animate({'width': '92%'}, 1000);
			   $('span').css ('display', 'none');
			   $("img").fadeTo(1000, 0.2, function(){});
			   $('span').fadeTo(1000, 0, function(){});
			   $("img").rotate({
     				 duration: 1000,
      				 animateTo: -45 });

            });



});