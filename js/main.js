$(function() {
    $('.menu_btn').click(function() {
        $(this).toggleClass('active');
        $('#nav').toggleClass('panelactive');
        
    });
    
    $('#nav a').click(function() {
        $('.menu_btn').removeClass(active);
        $('#nav').removeClass('panelactive');
    });




});