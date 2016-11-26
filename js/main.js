$(document).ready(function(){
	new WOW().init();

    var scroll_start = 0;
    var startchange = $('#start');
    var offset = startchange.offset();
    if (startchange.length){
       $(document).scroll(function() { 
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
              $(".navbar-default").css('background-color', '#231F20');
           } else {
              $('.navbar-default').css('background-color', 'transparent');
           }
       });
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



