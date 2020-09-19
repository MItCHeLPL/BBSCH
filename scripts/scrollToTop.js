//on load scroll to top and remove location id from url for smooth scrolling
$(document).ready(function(){
    $(this).scrollTop(0);

    if(window.location.hash != "")
    {
        window.location.hash = "";
    }
});