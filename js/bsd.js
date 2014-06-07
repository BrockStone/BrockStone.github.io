
$(document).ready(function() {
	console.log("JQuery Ready");
	//Initial Hide of Name 
	$("#btmlogo").hide();
	$("#logo").hide();
	$(".arrow").hide();
	$(".arrow2").hide();
	// $(".hideme").hide();
    // Logo and Name Fade in
    $("#logo").fadeIn(1500, function() {
    	$("#btmlogo").fadeIn(1000, function() {
    			$(".navtoggle").hover();
				$(".arrow").slideDown(500);
				$(".arrow2").slideDown(500);
    		 	fadeloop('.arrow2',1800,500,true);
    		 	fadeloop('.arrow',1500,800,true);
    		
  		});
  	});

    // Fade loop
   	function fadeloop(el,timeout,timein,loop){
    	var $el = $(el),intId,fn = function(){
         	$el.fadeOut(timeout).fadeIn(timein);
    	};
    	fn();
	    if(loop){
	        intId = setInterval(fn,timeout+timein+100);
	        return intId;
	    }
    return false;
	}


});
		
	

// $(".si-icon").on('click', function(){
// 	$('.navtoggle').click();
// });
//  