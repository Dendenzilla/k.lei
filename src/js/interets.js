var winHeight = 500;
$(document).ready(function () {
    $(".panelR").height(winHeight);
    $("body").height(winHeight*$(".panelR").length);
});

window.addEventListener('resize', function (event) {
    $(".panelR").height($(window).innerHeight());
});
$(window).on('scroll',function(){
    $(".rightcol").css('bottom',$(window).scrollTop()*-1);
});
// $(".rightcol").css('bottom',(800 + ($(window).scrollTop()))*-1);
// $(".rightcol").css('bottom',$(window).scrollTop()*-1);
// ('bottom',(-800 + ($(window).scrollTop()*-1));