// var winHeight = 500;
// var prHeight = (($(".pr1").outerHeight(true)) + ($(".pr2").outerHeight(true)) + ($(".pr3").outerHeight(true)) + ($(".pr4").outerHeight(true)) + ($(".pr5").outerHeight(true)) + ($(".pr6").outerHeight(true)));
var prH = 0;
$('.panelR').each(function(){ prH+=$(this).outerHeight(true) });
console.log(prH);

$(document).ready(function () {
    $("body").height(prH);
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