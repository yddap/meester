// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function download()
{
  javascript:document.location='/download/' + $.client.os
}

$(function() {
	$('.format').each( 
	  function(i){
	    var $dialog = $(".dialog", this).dialog({
	      resizable: false,
	      height: 630,
	      width: 650,
	      autoOpen: false,
	      closeOnEscape: true,
	      position:'center',
        hide: 'blind'
      });
      
      $(this).click(function() {$dialog.dialog("open");});
    }
  );
  
  $('.hover').hover(
    function(){$(this).find("span").stop(false, true).fadeIn();},
    function(){$(this).find("span").stop(false, true).fadeOut();}
  );
  
  $('.menu_item').hover(
    function(){$(this).find('.submenu').stop(false, true).fadeIn();},
    function(){$(this).find('.submenu').stop(false, true).fadeOut('fast');}
  );
  
  
  if(!$.browser.msie){
    var opacity = jQuery.support.opacity ? {"opacity":"0.5"} : {"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"', "filter":"alpha(opacity=50)"};
    $('.icon_fade').find("span").css(opacity);
    $('.icon_fade').find("img").css(opacity);

    $('.icon_fade').hover(
      function(){$(this).find("span").stop(false, true).fadeTo('fast', 1);},
      function(){$(this).find("span").stop(false, true).fadeTo('fast', 0.5);}
    );

    $('.icon_fade').hover(
      function(){$(this).find("img").stop(false, true).fadeTo('fast', 1);},
      function(){$(this).find("img").stop(false, true).fadeTo('fast', 0.5);}
    );
  };
  
  
  if(!$.browser.msie){
    var number = 0.7;
    var opacity = jQuery.support.opacity ? {"opacity":number} : {"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"', "filter":"alpha(opacity=60)"};
    $('.fade').find("span").css(opacity);
    $('.fade').find("img").css(opacity);
    $('.fade').css(opacity);

    $('.fade').hover(
      function(){$(this).find("span").stop(false, true).fadeTo('fast', 1);},
      function(){$(this).find("span").stop(false, true).fadeTo('fast', number);}
    );

    $('.fade').hover(
      function(){$(this).find("img").stop(false, true).fadeTo('fast', 1);},
      function(){$(this).find("img").stop(false, true).fadeTo('fast', number);}
    );
    
    $('.fade').hover(
      function(){$(this).stop(false, true).fadeTo('fast', 1);},
      function(){$(this).stop(false, true).fadeTo('fast', number);}
    );
  };
  
});



$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */

	var totWidth=0;
	var positions = new Array();

	$('#slides .slide').each(function(i){
		/* Loop through all the slides and store their accumulative widths in totWidth */
		positions[i]= totWidth;
		totWidth += $(this).width();

		/* The positions array contains each slide's commulutative offset from the left part of the container */

		if(!$(this).width())
		{
			alert("Please, fill in width & height for all your images!");
			return false;
		}
	});

	$('#slides').width(totWidth);

	/* Change the cotnainer div's width to the exact width of all the slides combined */

	$('#gallery_menu ul li a').click(function(e){

		/* On a thumbnail click */
		$('li.menuItem').removeClass('act').addClass('inact');
		$(this).parent().addClass('act');

		var pos = $(this).parent().prevAll('.menuItem').length;

		$('#slides').stop().animate({marginLeft:-positions[pos]+'px'},450);
		/* Start the sliding animation */

		e.preventDefault();
		/* Prevent the default action of the link */
	});

	$('#gallery_menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');
	/* On page load, mark the first thumbnail as active */
});


// google analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-18787397-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();