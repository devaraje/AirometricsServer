//event listeners
/*$('#page-body').on('scroll', onPageScroll);

function onPageScroll(evt){  //event handler for page scroll
  
  evt.preventDefault();
  
  hideLogo();
    
  }

function hideLogo(){
  
  $('#nav-logo').hide();
  
}*/

/*function init_carousel() {
            H = +($(window).height() 
            $('.carousel-inner').css('height', H + 'px');
        }
  
window.onload = init_carousel;
init_carousel();*/


$(window).load(function() {
  
  if ($(window).width() <= 800){
        
        $('.nav-font').css('font-size', '1.5em');
        $('#nav-logo').hide();
		/*$('#nav-logo-small').show();*/
        /*$('#carousel-cap').hide();*/
        /*$('#carousel-cap-small').show();*/
        /*$('.carousel-indicators').hide();
        $('#lm').hide();*/
  }
  else {
    
    $('#nav-logo-small').hide();
   /* $('#nav-logo').show();
    $('#carousel-cap').show();*/
    /*$('#carousel-cap-small').hide();*/
  }
  
});



/*$( window ).scroll(function() {
  
  if ($(window).width() <= 800){
        
        $('.nav-font').css('font-size', '2em');
        $('#nav-logo').hide();
		$('#nav-logo-small').show();
    
  }
  else {
    
    $('#nav-logo-small').hide();
    $('#nav-logo').show();
  }
  
});*/

/*$('#signup').click(function() {
    $( "#dialog" ).dialog();
  });*/