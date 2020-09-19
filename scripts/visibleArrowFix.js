//Dynamic
//Add margin to section if section is overlapping with scroll arrow
$(window).on('load resize', function(){
    $("section").each(function(){

        let div = $(this).outerHeight();
        let win = $(window).height();

        if((div/win) > 0.6)
        {
            //normalized = newMin + (val - minVal) * (newMax - newMin) / (maxVal - minVal);
            let margin = 0 + ((div/win) - 0) * (7.5 - 0) / (1 - 0);
    
            if ($(this).hasClass("disable-arrowFix") == false) 
            {
                $(this).css('margin-bottom', margin+"em");
            }
        } 
    });
});

//Forced class
//Add margin to section if section is overlapping with scroll arrow
/*$(window).on('load resize', function(){
    $("section").each(function(){
        var div = $(this).outerHeight();
        var win = $(window).height()*0.75;
    
        if (div > win && $(this).hasClass("disable-arrowFix") == false) 
        {
            $(this).addClass('arrowFix');
        }
        else if(div <= win && $(this).hasClass("arrowFix"))
        {
            $(this).removeClass('arrowFix');
        }
    });
});*/