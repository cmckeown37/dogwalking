$(document).ready(function(){
	
	$('a').css ('display', 'none');
	 $('a').fadeTo(50, 0, function(){});

	$("#leftSide").hover(function () { 
			   $('#leftSide').animate({'width': '30%'}, { duration: 600, queue: false });
			   $('#rightSide').animate({'width': '69%'}, { duration: 600, queue: false,

			   	complete: function(){
			   		$('a').css ('display', 'inline');
			   		$("img").fadeTo(1000, 1.0, function(){})
			   		$('a').fadeTo(400, 1.0, function(){});
			   		$('a').animate({'font-size': '40px'}, { duration: 300});
			   		$('a').animate({'padding-left': '20px'}, { duration: 300});
			   		$("img").rotate({duration: 1000, animateTo: 0 })
			   	}
			   	});	   


            }, function () {
               $('#leftSide').animate({'width': '64px'}, 1000);
			   $('#rightSide').animate({'width': '92%'}, 1000);
			   $('a').css ('display', 'none');
			   $("img").fadeTo(1000, 0, function(){});
			   $('a').fadeTo(600, 0, function(){});
			   $('a').animate({'font-size': '20px'}, { duration: 300});
			   $('a').animate({'padding-left': '10px'}, { duration: 300});
			   $("img").rotate({
     				 duration: 1000,
      				 animateTo: -45 });
			   
            });



});

var headerText = "Dog Pampering Extraordinares";
var poem = new Array("'Erin was so helpful when we left our dog home for a week. We came back and Teddy seemed so happy and cared for!'");
var wordCounter = -1;
var numberOfPictures = 2;
var myVar;

function setPicture(){

	var rndNum = Math.floor(Math.random()*numberOfPictures);
	var picName = "images/pic" + rndNum + ".jpg"

	$('.pictureContainer').css("background-image", ("url(" + picName +")") );

	if(wordCounter >= 0){
		if(wordCounter == 12){
			$('.pictureContainer').css("font-size", "20px" );
		} else {
			$('.pictureContainer').css("font-size", "20px" );
		}
		$('.pictureContainer').html(poem[wordCounter]);
	} else {
		$('.pictureContainer').html("");
	}
	wordCounter += 1;
	if(wordCounter >= numberOfPictures){
		wordCounter = -1;
	
	}


}

$(document).ready(function(){
	$('h1').html(headerText);

	$('.pictureContainer').css({
   
     backgroundPosition : 'center top',
     backgroundRepeat   : 'no-repeat',
     backgroundSize     : 'contain' 
     
	});  

	myVar = setInterval(setPicture, 1500);


});