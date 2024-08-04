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

  //Actual account credentials storing
  let accountList = JSON.parse(localStorage.getItem("accountList")) || [];
  function signup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    if (email === "" || password === "" || confirmPassword === "") {
      alert("All fields are required");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else if (accountList.some((account) => account.email === email)) { //some: check if there is an account with the same email
      alert("Email already exists");
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long");
    }
      else if (!/\S+@\S+\.\S+/.test(email)) { //Check if the email field is an email (regular expression)
      alert("Invalid email address");
    }
      else {
      let account = {
        email: email,
        password: password,
      };
      accountList.push(account);
      localStorage.setItem("accountList", JSON.stringify(accountList));
      alert("Account created successfully");
      window.location.href = "login.html";
    }
  }
