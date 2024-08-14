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
let selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
let productImage = document.querySelector(".product-img");
let productTitle = document.querySelector(".product-title");
let productPrice = document.querySelector(".product-price");
let productDescription = document.querySelector(".product-description");
let productCategory = document.querySelector(".product-category");
//A cross-site variable to determine if the user is logged in or not stored in local storage
let loggedIn = localStorage.getItem("loggedIn") || "false";
function addToCart () {
    if (loggedIn === "false") {
        window.location.href = "../login.html";
    } else {
        if (localStorage.getItem("cart") === null) {
            let cart = [];
            cart.push(selectedProduct);
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            let cart = JSON.parse(localStorage.getItem("cart"));
            cart.push(selectedProduct);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        alert("Sản phẩm đã được thêm vào giỏ hàng.")
    }

}

function render () {
    document.title = selectedProduct.name;
    productCategory.innerText = selectedProduct.category;
    productImage.src = selectedProduct.img;
    productTitle.innerText = selectedProduct.name;
    productPrice.innerText = selectedProduct.price;
    productDescription.innerHTML = `
    <h4 style="color: var(--bs-info)" > Thông số kĩ thuật: </h4>
    <ul>
    <li style="color: var(--bs-light)" id="cpu">${selectedProduct.cpu}</li>
    <li style="color: var(--bs-light)" id="ram">${selectedProduct.ram}</li>
    <li style="color: var(--bs-light)" id="storage">${selectedProduct.storage}</li>
    </ul>`
    ;
}
render();
