
$(document).ready(function() {
	console.log("JQuery Ready");
	//Initial Hide of Name 
	// $("#btmlogo").hide();
	$("#logo").hide();
	// $(".arrow").hide();
	// $(".arrow2").hide();
	// $(".hideme").hide();
    // Logo and Name Fade in
    $("#logo").fadeIn(1500, function() {
    // 	$(".about").fadeIn(1000, function() {
    // 			$(".navtoggle").hover();
				// $(".arrow").slideDown(500);
				// $(".arrow2").slideDown(500);
    // 		 	fadeloop('.arrow2',1800,500,true);
    // 		 	fadeloop('.arrow',1500,800,true);
    		
  		// });
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

	// Modal	
(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();

});
		
