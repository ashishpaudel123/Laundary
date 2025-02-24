
$(window).scroll(function(){
   
    if($(this).scrollTop()>100)
    {
        $('header').addClass('fixed top-0');
    }
    else
    {
        $('header').removeClass('fixed top-0');
    }
})