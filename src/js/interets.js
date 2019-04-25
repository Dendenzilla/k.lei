// ON MET LA VARIABLE A 0
var prH = 0;
var plH = 0;
$(document).ready(function () {

// ON LUI AJOUTE KA HAUTEUR DE CHAQUE DIV AYANT LA CLASSE panelR
$('.panelR').each(function(){ prH+=$(this).outerHeight(true) });

$('.panelL').each(function(){ plH+=$(this).outerHeight(true) });

// ON DONNE AU BODY LA HAUTEUR DE LA SOMME DES panelR
    $("body").height(prH);
    console.log($("body").height());
    console.log(prH);
    console.log(plH);
    if ( plH < prH ) {
        var diffH = prH - plH;
        console.log(diffH);
        $(".leftcol").css('padding-bottom', (prH - plH));
    }
});

// ON DEPLACE LA COLONNE DE DROITE AU SCROLL 
// (BOTTOM = DISTANCE DU SCROLL x -1)
$(window).on('scroll',function(){
    $(".rightcol").css('bottom',$(window).scrollTop()*-1);
});
// $(".rightcol").css('bottom',(800 + ($(window).scrollTop()))*-1);
// $(".rightcol").css('bottom',$(window).scrollTop()*-1);
// ('bottom',(-800 + ($(window).scrollTop()*-1));


// var winHeight = 500;
// var prHeight = (($(".pr1").outerHeight(true)) + ($(".pr2").outerHeight(true)) + ($(".pr3").outerHeight(true)) + ($(".pr4").outerHeight(true)) + ($(".pr5").outerHeight(true)) + ($(".pr6").outerHeight(true)));