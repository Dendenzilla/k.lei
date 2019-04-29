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