let topnav = document.getElementById("topnav");

function expand() {
    if (topnav.className === "navbar") {
        topnav.className += " responsive";
    } else {
        topnav.className = "navbar";
    }
};

let currentScrollPos = window.scrollY;
window.addEventListener('scroll', function() {
  if (currentScrollPos < 50) {
    topnav.style.top = "0";
  } else {
    topnav.style.top = "-50px";
  }
  currentScrollPos = window.scrollY;
});
