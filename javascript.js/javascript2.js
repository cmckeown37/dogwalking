alert("hi");
$(document).ready(function(){
	
	$('span').css ('display', 'none');
	 $('span').fadeTo(50, 0, function(){});

	$("#leftSide").hover(function () { 
			   $('#leftSide').animate({'width': '30%'}, { duration: 1000, queue: false });
			   $('#rightSide').animate({'width': '69%'}, { duration: 1000, queue: false,


			   	complete: function(){
			   		$('a').css ('display', 'inline');
			   		$('a').fadeTo(1000, 1.0, function(){});
			   		$('a').animate({'font-size': '50px'}, { duration: 500});
			   		$('a').animate({'padding-left': '20px'}, { duration: 500});
			   	}
			   	});	   


            }, function () {
               $('#leftSide').animate({'width': '64px'}, 1000);
			   $('#rightSide').animate({'width': '92%'}, 1000);
			   $('span').css ('display', 'none');
			   $('span').fadeTo(1000, 0, function(){});
			   
            });



});