window.onscroll = function() {stickyMenu()};

var navbar = document.getElementById("stickyEl");
var sticky = navbar.offsetTop;

function stickyMenu() {
  if (window.pageYOffset >= (sticky + 400)) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//BUGER ACTION
$('.burgerMenu').click(function(){
    $('.menuprin, .menufi').toggleClass('fixedMenu');
});

// TWITTER FEED

var widgetCSS = "" +
    ".timeline-TweetList{display: flex; flex-wrap: wrap;}" +
    ".timeline-TweetList-tweet{width: 50% !important;}" +
    ".timeline-Tweet-text{font-size: 16px !important; line-height: 20px !important;}" +
    ".timeline-Tweet-actions{display:none;}" +
    "@media only screen and (min-width: 320px) and (max-width: 900px){.timeline-TweetList-tweet{width: 100% !important;}}";

function paint(){
  var w = document.getElementById("twitter-widget-0").contentDocument;
  
  var s = document.createElement("style");
  s.innerHTML = widgetCSS;
  s.type = "text/css";
  w.head.appendChild(s);
}