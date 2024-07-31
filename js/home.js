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
    name: "ASUS V241E V241EAT-BA030W",
    price: "20.000.000đ",
    img: "https://lh3.googleusercontent.com/2bf_cTuJuVqjWBDXSs_ZsvLupLML2BYdSd0HGTpU-Icjc7cITXVV2moyanz2_PgXcbNNgKr3QaONwR0Wxi6oozfmK7DR3_54=w1000-rw",
    cpu: "Intel Core i3-1115G4",
    ram: "8GB",
    screen: "23.8' FHD (1920 x 1080) IPS 60Hz, cảm ứng",
    card: "NVIDIA GeForce MX250",
    storage: "256GB SSD",
    category: "PC",
    subcategory: "Văn phòng",
  },

  {
    name: "Dell Vostro 3020T",
    price: "15.000.000đ",
    img: "https://lh3.googleusercontent.com/K5JIz9Aep3E0qDD6WdQkXKPywCc0iCxYnmO7rV5heU9dBhoyJ8tpfdDltCYq6Fo1e0i8QI7EbbqET7_PmJ6iCOutwE89EbQZ=w1000-rw",
    cpu: "Intel Core i5-13400",
    ram: "8GB",
    screen: "Không",
    card: "Intel UHD Graphics 730",
    storage: "256GB SSD + 1TB HDD",
    category: "PC",
    subcategory: "Văn phòng",
  },

  {
    name: "Chuột gaming không dây Logitech G903 Hero",
    price: "2.590.000đ",
    img: "https://lh3.googleusercontent.com/GWRUOlDFdoRsVTGJ8SCSKc_iT4HxTipbhL_1FyWFTSQijdpOLIDWwcm-aEtYIf0F1zJoEoaMiGkabuyej6sl61ne-iWvNN0=w1000-rw",
    cpu: "Không",
    ram: "Không",
    screen: "Không",
    card: "Không",
    storage: "Không",
    category: "Phụ kiện",
    subcategory: "Chuột",
  },
];
let macbookList = [
  {
    name: "Macbook Air M3 2024",
    price: "35.000.000đ",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034",
    cpu: "M3",
    ram: "8GB",
    screen: "13.6 FHD (2560 x 1600) IPS 144Hz",
    card: "M1",
    storage: "512GB SSD",
    category: "Laptop",
    subcategory: "Văn phòng",
  },
  {
    name: "Macbook Pro M3 2023",
    price: "50.000.000đ",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-m3-max-pro-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830118",
    cpu: "M3",
    ram: "16GB",
    screen: "13.6 FHD (2560 x 1600) IPS 144Hz",
    card: "M1",
    storage: "512GB SSD",
    category: "Laptop",
    subcategory: "Văn phòng",
  },

  {
    name: "Macbook Pro M1 2023",
    price: "40.000.000đ",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830118",
    cpu: "M1",
    ram: "16GB",
    screen: "13.6 FHD (2560 x 1600) IPS 144Hz",
    card: "M1",
    storage: "512GB SSD",
    category: "Laptop",
    subcategory: "Văn phòng",
  },

  {
    name: "Macbook Air M1 2023",
    price: "27.000.000đ",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-spacegray-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034",
    cpu: "M1",
    ram: "8GB",
    screen: "13.6 FHD (2560 x 1600) IPS 144Hz",
    card: "M1",
    storage: "512GB SSD",
    category: "Laptop",
    subcategory: "Văn phòng",
  },

  {
    name: "iMac 24 M3 4.5k Retina (8C CPU/8C GPU/16GB/256GB SSD)",
    price: "50.000.000đ",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-blue-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1701459101618", 
    cpu: "M3",
    ram: "16GB",
    screen: "24' Retina  (4480 x 2520)",
    card: "M1",
    storage: "512GB SSD",
    category: "PC",
    subcategory: "Gaming",
  },

  {
    name: "Mac mini M2 (8 Core CPU / 10 Core GPU/16GB/512GB)",
    price: "30.000.000đ",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-mini-pro-hero-202301_FMT_WHH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671504063793",
    cpu: "M2",
    ram: "16GB",
    screen: "Không",
    card: "M2",
    storage: "512GB SSD",
    category: "PC",
    subcategory: "Gaming",
  },



];

localStorage.setItem("macbookList", JSON.stringify(macbookList));
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
};
function renderMacProducts() {
  let macbookList = JSON.parse(localStorage.getItem("macbookList"));
  let products = document.querySelector(".mac-products");
  for (let i = 0; i < macbookList.length; i++) {
    products.innerHTML += `
      <div class="product">
        <div class="product-category">${macbookList[i].category}</div>
        <div class="product-img">
          <img src="${macbookList[i].img}">
        </div>
        <div class="product-info">
          <div class="product-name">
          <h4>${macbookList[i].name}</h4>
          </div>
          <div class="product-price">
          <h5>${macbookList[i].price}</h5></div>
          <div class="product-subcategory">${macbookList[i].category+": "+macbookList[i].subcategory}</div>
          <div class="product-ram">${"RAM"+": "+macbookList[i].ram}</div>
          <div class="product-storage">${"ROM"+": "+macbookList[i].storage}</div>
          <div class="product-cpu">${"CPU"+": "+macbookList[i].cpu}</div>
        </div>
        <button class="product-btn">Thêm vào giỏ hàng</button>
      </div>
    `;
  };
};
//Animations for footer on scroll

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation-enabled-footer");
      return;
    }

    entry.target.classList.remove("animation-enabled-footer");
  });
});
let footer = document.querySelector(".footer");
observer.observe(footer);

//Animations for product on scroll
const h1Observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated-h1");
      return;
    }

    entry.target.classList.remove("animated-h1");
  });
});
let h1 = document.querySelectorAll(".sec-header");
h1.forEach((element) => h1Observer.observe(element));

renderMacProducts();
renderHotProducts();

