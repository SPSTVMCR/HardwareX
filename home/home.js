let topnav = document.getElementById("topnav");

let hotProductList = [
  {
    name: "Laptop Asus TUF Gaming A15 FA506NF-HN005W (AMD Ryzen 5-7535HS)",
    price: "20.000.000đ",
    img: "https://lh3.googleusercontent.com/H_IYdCggl7PzlnWqNw2m6xlhYoN_Xps-t5UTXML5zRqaB5Z7peaAajgntlaolhNoPHhj2BBXmnFbN8ejVhfJ8ssFl2uLbvuw=w1000-rw",
    cpu: "AMD Ryzen 5-7535HS",
    ram: "8GB",
    screen: "15.6 FHD (1920 x 1080) IPS 144Hz",
    card: "NVIDIA GeForce RTX 3050",
    storage: "512GB SSD",
    category: "Laptop",
    subcategory: "Gaming"
  },
  {
    name: "Laptop Acer Nitro 5 Tiger AN515-58-52SP (Intel Core i5-12500H)",
    price: "20.000.000đ",
    img: "https://lh3.googleusercontent.com/uiLQNTEqazg6MB8Uv8stnPE0WP-GV86TD8JgOlFUaqMcsBr89rOZwsX3KklJ9nDWXLYutoCM-5xeRw7l-U_1jbVsGWl5aPvLgg=w1000-rw",
    cpu: "Intel Core i5-12500H",
    ram: "8GB",
    screen: "15.6 FHD (1920 x 1080) IPS 144Hz",
    card: "NVIDIA GeForce RTX 3050",
    storage: "512GB SSD",
    category: "Laptop",
    subcategory: "Gaming"
  },
  {
    name: "Màn hình LCD ACER 23.8 K243Y E (UM.QX3SV.E01)",
    price: "2.590.000đ",
    img: "https://lh3.googleusercontent.com/2n6AmF7YzgI1yRunu8acH4ZWKR-S-cINiL8IT3zSBBOzJ96nbqaOV1gJcC4vVVW6rboqnQSMgR-M2VWy6vQU4QW3jmd7dchE=w1000-rw",
    cpu: "Không",
    ram: "Không",
    screen: "23.8 FHD (1920 x 1080) IPS 60Hz",
    card: "Không",
    storage: "Không",
    category: "PC",
    subcategory: "Màn hình",
  },
  {
    name: "Laptop HP Pavilion 14-dv2071TU (7C0W0PA) (i7-1255U)",
    price: "25.000.000đ",
    img: "https://lh3.googleusercontent.com/KY8QnPjJjfTQoQ_9OrvU7jXd47WuSwXxKFCEeUq_47_4RjfvSQoIfZuS8f2tvvhfcGvPqMJFpf7CGGjY5GPjaOxCZaIidCwj=w1000-rw",
    cpu: "Intel Core i7-1255U",
    ram: "8GB",
    screen: "14 FHD (1920 x 1080) IPS 144Hz",
    card: "NVIDIA GeForce MX330",
    storage: "512GB SSD",
    category: "Laptop",
    subcategory: "Văn phòng",
  },
  {
    name: "USB SanDisk 64GB (SDCZ600-G35)",
    price: "139.000đ",
    img: "https://lh3.googleusercontent.com/9VET2A7-U8C8sGQyAFR4a0rfaNqeDDdZ1moM1fZLi1fK7CkdfCLiiACMs0btLhD1D61Xp16mXKH5bR03lPT4bunk5D4yw-lM=w1000-rw",
    cpu: "Không",
    ram: "Không",
    screen: "Không",
    card: "Không",
    storage: "64GB",
    category: "Phụ kiện",
    subcategory: "USB",
  },
  {
    name: "Laptop Lenovo LOQ 15IAX9 - 83GS001SVN (Intel Core i5-12450HX)",
    price: "20.000.000đ",
    img: "https://lh3.googleusercontent.com/5JUDQweseDyNaAswp-9DUoprkuf-otENcJAJsj_i9d5mbBvWOWPhquDgoUHqaASNfeTRZftP1pY1Yj4JdW2uTvkcxPmqs3VU=w1000-rw",
    cpu: "Intel Core i5-12450HX",
    ram: "12GB",
    screen: "15.6 FHD (1920 x 1080) IPS 144Hz",
    card: "NVIDIA GeForce RTX 2050",
    storage: "512GB SSD",
    category: "Laptop",
    subcategory: "Gaming",
  },
  {
    name: "Laptop Asus TUF Gaming A15 FA506NF-HN005W (AMD Ryzen 5-7535HS)",
    price: "20.000.000đ",
    img: "https://lh3.googleusercontent.com/H_IYdCggl7PzlnWqNw2m6xlhYoN_Xps-t5UTXML5zRqaB5Z7peaAajgntlaolhNoPHhj2BBXmnFbN8ejVhfJ8ssFl2uLbvuw=w1000-rw",
    cpu: "AMD Ryzen 5-7535HS",
    ram: "8GB",
    screen: "15.6 FHD (1920 x 1080) IPS 144Hz",
    card: "NVIDIA GeForce RTX 3050",
    storage: "512GB SSD",
    category: "Laptop",
    subcategory: "Gaming"
  },
  {
    name: "Laptop Asus TUF Gaming A15 FA506NF-HN005W (AMD Ryzen 5-7535HS)",
    price: "20.000.000đ",
    img: "https://lh3.googleusercontent.com/H_IYdCggl7PzlnWqNw2m6xlhYoN_Xps-t5UTXML5zRqaB5Z7peaAajgntlaolhNoPHhj2BBXmnFbN8ejVhfJ8ssFl2uLbvuw=w1000-rw",
    cpu: "AMD Ryzen 5-7535HS",
    ram: "8GB",
    screen: "15.6 FHD (1920 x 1080) IPS 144Hz",
    card: "NVIDIA GeForce RTX 3050",
    storage: "512GB SSD",
    category: "Laptop",
    subcategory: "Gaming"
  },

]
localStorage.setItem("hotProductList", JSON.stringify(hotProductList));



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

//Render hot products

function renderHotProducts() {
  let hotProductList = JSON.parse(localStorage.getItem("hotProductList"));
  let products = document.querySelector(".products");
  for (let i = 0; i < hotProductList.length; i++) {
    products.innerHTML += `
      <div class="product">
        <div class="product-category">${hotProductList[i].category}</div>
        <div class="product-img">
          <img src="${hotProductList[i].img}">
        </div>
        <div class="product-info">
          
          <div class="product-name">
          <h4>${hotProductList[i].name}</h4>
          </div>
          <div class="product-price">
          <h5>${hotProductList[i].price}</h5></div>
          <div class="product-subcategory">${hotProductList[i].category+": "+hotProductList[i].subcategory}</div>
          <div class="product-ram">${"RAM"+": "+hotProductList[i].ram}</div>
          <div class="product-storage">${"ROM"+": "+hotProductList[i].storage}</div>
          <div class="product-cpu">${"CPU"+": "+hotProductList[i].cpu}</div>
        </div>
        <button class="product-btn">Thêm vào giỏ hàng</button>
      </div>
    `;
  }
}
renderHotProducts();
