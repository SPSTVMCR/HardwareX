window.onload = function () {
  if (localStorage.getItem("loggedIn") === "true") {
    window.location.href = "home.html";
  }
}

function expand() {
    if (topnav.className === "navbar") {
      topnav.className += " responsive";
    } else {
      topnav.className = "navbar";
    }
  };
  
  let currentScrollPos = window.scrollY;
  window.addEventListener('scroll', function () {
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

//Actual login function
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let accountList = JSON.parse(localStorage.getItem("accountList")) || [];

  for (let i = 0; i < accountList.length; i++) {
    if (email === accountList[i].email && password === accountList[i].password) {
      alert("Login successful");
      //Reset the loggedInUser
      localStorage.setItem("loggedInUser", "");
      //Set the loggedInUser
      localStorage.setItem("loggedInUser", JSON.stringify(accountList[i]));
      //Set the cross-site variable of logged in to true
      localStorage.setItem("loggedIn", "true");
      window.location.href = "home.html";
      break; //Exit the loop if login is successful
    } else if (i === accountList.length - 1) { //Check if it's the last iteration
      alert("Invalid email or password");

    } else {
      continue; //Return to the beginning of the loop
    }
  }
}