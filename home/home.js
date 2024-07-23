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


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleDropdown() {
  document.getElementById("productDropdown").classList.toggle("dropdown-content");
  document.getElementById("productDropdown").classList.toggle("show");
}

//Icon dropdown transform 
function iconDropdown() {
  let rotated = document.getElementById("icon-dropdown").style.transform;
  if (rotated === "rotate(-90deg)") {
    document.getElementById("icon-dropdown").style.transform = "rotate(0deg)";
  } else {
    document.getElementById("icon-dropdown").style.transform = "rotate(-90deg)";
  }
  document.getElementById("icon-dropdown").style.transition = "transform 0.3s";
}
function toggleDropdownAccount() {
  document.getElementById("accountDropdown").classList.toggle("dropdown-content");
  document.getElementById("accountDropdown").classList.toggle("show");
}
function iconDropdownAccount() {
  let scaled = document.getElementById("icon-dropdown-account").style.transform;
  if (scaled === "scale(0.8)") {
    document.getElementById("icon-dropdown-account").style.transform = "scale(1)";
  } else {
    document.getElementById("icon-dropdown-account").style.transform = "scale(0.8)";
  }
  document.getElementById("icon-dropdown-account").style.transition = "transform 0.3s";
}
