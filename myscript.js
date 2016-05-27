
var headerText = "Dog Pampering Extraordinares";
var theQuote = new Array("'Erin was so helpful when we left our dog home for a week. We came back and Teddy seemed so happy and cared for!'", 
	"'Angelina gave Bear the best bath and made him look his best!'", 
	"'Joan is so friendly and everytime she comes over to walk our dog she is so excited to see Joan!'");

var picName = new Array('images/p1.jpg','images/p2.jpg','images/p3.jpg');
var wordCounter = -1;
var numberOfPictures = 4;
var myVar;
var rndNum;
var thePic;
var whichPic = 0;
var picArrayLength;


function setDeceleratingTimeout( callback, factor, times )
{
  var internalCallback = function( t, counter )
  {
    return function()
    {
      if ( --t > 0 )
      {
        window.setTimeout( internalCallback, ++counter * factor );
        callback();
      }
    }
  }( times, 0 );

  window.setTimeout( internalCallback, factor );
};


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


function setPicture(){

	//= Math.floor(Math.random()*numberOfPictures);

	thePic = picName[whichPic];


	$('.pictureContainer').css("background-image", ("url(" + thePic +")") );
	$('#quoteContainer').html(theQuote[whichPic]);

	whichPic++;

	if(whichPic > picArrayLength -1){
		whichPic = 0;
	}


/*
	if(wordCounter >= 0){
		if(wordCounter == 4){
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
*/

}


$(document).ready(function(){
	$('h1').html(headerText);

	$('.pictureContainer').css({
   
     backgroundPosition : 'center top',
     backgroundRepeat   : 'no-repeat',
     backgroundSize     : 'contain' 
     
	});  

	
 
  	picArrayLength = picName.length;

	//myVar = setInterval(setPicture, 1500);

   
    setPicture();
    setDeceleratingTimeout( function(){ console.log( 'hi' );}, 10000, 10 );

   myVar = setInterval(setPicture, 1500);

});
