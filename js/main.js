$(document).ready(function(){
	new WOW().init();

  var scroll_start = 0;
  var startchange = $('#start');
  var offset = startchange.offset();

  if($("body").offset().top > offset){
    opaqueNav();
  }else{
    clearNav();
  }

  $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            opaqueNav();
         } else {
            clearNav();
         }
  });


  function opaqueNav() {
    $(".navbar-default").css('background-color', '#231F20');
  }

  function clearNav(){
    $('.navbar-default').css('background-color', 'transparent');
  }
  

	$(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

   

});



