window.onload = function () {
    if (localStorage.getItem("loggedIn") === "false") {
      window.location.href = "login.html";
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
  
///Actual cart functions
let cart = JSON.parse(localStorage.getItem("cart"));
let cartItems = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total")
let checkoutButton = document.getElementById("checkout-button");
let studentButton = document.getElementById("is-student-discount-toggle-checkbox");
let clearButton = document.getElementById("clear-cart-button");
//Convert duplicates in the cart to quantity, displaying only one item
for (let i = 0; i < cart.length; i++) {
    for (let j = i + 1; j < cart.length; j++) {
        if (cart[i].name === cart[j].name) {
            cart[i].quantity = (cart[i].quantity || 0) + (cart[j].quantity || 0);
            cart[i].quantity += cart[j].quantity;
            cart.splice(j, 1);
            j--;
        }
    }
}
//Removing an item from the cart
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}
//Removing all items from the cart
function clearCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Bạn đã xóa tất cả sản phẩm có trong giỏ hàng. Đang chuyển hướng về trang chủ...");
    window.location.href = "home.html";
}
//Rendering cart items function
function renderCart() {
    cartItems.innerHTML = "";

    //Render cart items
    for (let i = 0; i < cart.length; i++) {
        cartItems.innerHTML += `
        <div class="cart-item">
            <img src="${cart[i].img}" alt="${cart[i].name}">
            <div class="cart-item-info">
                <h3>${cart[i].name}</h3>
                <p>Giá: ${cart[i].price}</p>
                <div class ="remove-button" onclick="removeItem(${i})">Xoá</div>
            </div>
            
        </div>
        `;

    }
    //Add the total price of the cart
    let total = 0;
    //Calculate the total price of the cart
    for (let i = 0; i < cart.length; i++) {
        total += parseInt(cart[i].price);
    }
    cartTotal.innerHTML = `TỔNG CỘNG: ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ`;
    //Check if the student button is checked
    studentButton.addEventListener("change", function () {
        if (studentButton.checked) {
            studentTotal = total * 0.9;
            cartTotal.innerHTML = `TỔNG CỘNG: ${studentTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ`;
        } else if (!studentButton.checked) {
            cartTotal.innerHTML = `TỔNG CỘNG: ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ`;
        }
    })


}
renderCart();
checkoutButton.addEventListener("click", function () {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    // Init the email params
    let emailParams = {
        to_name: loggedInUser.email,
        // Init the message with an empty string
        message: ''
    };

    // Set the message to items in the cart
    for (let i = 0; i < cart.length; i++) {
        emailParams.message += `
        <strong>${cart[i].name}</strong>
        <p>${cart[i].price}</p>
        <p>------</p>
        `;
    }
    emailParams.message += `<strong>${cartTotal.innerHTML}</strong>`;

    // Send email
    emailjs.send('service_yokz7hh', 'template_zb2mp32', emailParams).then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        localStorage.removeItem("cart");
        cart = [];
        renderCart();
    }, function (error) {
        console.log('FAILED...', error);
    });

});

