//Add margin to section if section is overlapping with scroll arrow
$(window).on('load resize', function(){
    $("section").each(function(){
        var div = $(this).outerHeight();
        var win = $(window).height()*0.9;
    
        if (div > win && $(this).hasClass("disable-arrowFix") == false) 
        {
            $(this).addClass('arrowFix');
        }
        else if(div <= win && $(this).hasClass("arrowFix"))
        {
            $(this).removeClass('arrowFix');
        }
    });
});