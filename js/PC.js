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
let hotProductList = JSON.parse(localStorage.getItem("hotProductList"));
let macbookList = JSON.parse(localStorage.getItem("macbookList"));
//Filter the PC category from both hotProductList and macbookList, adding it to a new list
let pcList = [];
for (let i = 0; i < hotProductList.length; i++) {
    if (hotProductList[i].category === "PC") {
        pcList.push(hotProductList[i]);
    }
}
for (let i = 0; i < macbookList.length; i++) {
    if (macbookList[i].category === "PC") {
        pcList.push(macbookList[i]);
    }
}

let productContainer = document.querySelector(".item-grid");
//Add product to cart function
function addProductToCart(element) {
    let productInfo = element.parentElement;
      let product = {
        name: productInfo.querySelector(".product-name h4").innerHTML,
        price: productInfo.querySelector(".product-price h5").innerHTML,
        img: productInfo.querySelector(".product-img img").getAttribute("src"),
        category: productInfo.querySelector(".product-category").innerHTML,
        subcategory: productInfo.querySelector(".product-subcategory").innerHTML,
        ram: productInfo.querySelector(".product-ram").innerHTML,
        storage: productInfo.querySelector(".product-storage").innerHTML,
        cpu: productInfo.querySelector(".product-cpu").innerHTML
      };
      if (localStorage.getItem("cart") == null) {
        let cart = [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      alert("Sản phẩm đã được thêm vào giỏ hàng.");
  }
  //Redirect to detail page
  function redirectToDetail(element) {
    let selectedProductInfo = element.parentElement;
    let selectedProduct = {
      name: selectedProductInfo.querySelector(".product-name h4").innerHTML,
      price: selectedProductInfo.querySelector(".product-price h5").innerHTML,
      img: selectedProductInfo.querySelector(".product-img img").getAttribute("src"),
      category: selectedProductInfo.querySelector(".product-category").innerHTML,
      subcategory: selectedProductInfo.querySelector(".product-subcategory").innerHTML,
      ram: selectedProductInfo.querySelector(".product-ram").innerHTML,
      storage: selectedProductInfo.querySelector(".product-storage").innerHTML,
      cpu: selectedProductInfo.querySelector(".product-cpu").innerHTML
  }
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    window.location.href = "../../pages/products/productdetail.html";
  }
//Render PC products
function render() {
    productContainer.innerHTML = "";
    for (let i = 0; i < pcList.length; i++) {
        let product = document.createElement("div");
        product.classList.add("product");
        product.innerHTML = `
        <div class="product-category">${pcList[i].category}</div>
        <div class="product-img" onclick="redirectToDetail(this)">
          <img src="${pcList[i].img}">
        <div class="product-info">
        </div>
          <div class="product-name" >
          <h4>${pcList[i].name}</h4>
          </div>
          <div class="product-price">
          <h5>${pcList[i].price}</h5></div>
          <div class="product-subcategory">${pcList[i].category+": "+pcList[i].subcategory}</div>
          <div class="product-ram">${"RAM"+": "+pcList[i].ram}</div>
          <div class="product-storage">${"ROM"+": "+pcList[i].storage}</div>
          <div class="product-cpu">${"CPU"+": "+pcList[i].cpu}</div>
        </div>
        <button class="product-btn" onclick="addProductToCart(this)">Thêm vào giỏ hàng</button>
    `;
        productContainer.appendChild(product);
    }
}
render();