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

//Rendering cart items function
function renderCart() {
    cartItems.innerHTML = "";

//render cart items
    for (let i = 0; i < cart.length; i++) {
        cartItems.innerHTML += `
        <div class="cart-item">
            <img src="${cart[i].img}" alt="${cart[i].name}">
            <div class="cart-item-info">
                <h3>${cart[i].name}</h3>
                <p>Giá: ${cart[i].price}</p>
                <p>Số lượng: ${cart[i].quantity}</p>
            </div>
        </div>
        `;
    }
    //Calculate the total price of the cart
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    cartTotal.innerHTML = `Tổng cộng: ${total}`;
    //Check if the student discount is applied
    if (studentButton.checked) {
        total = total * 0.9;
        cartTotal.innerHTML = `Tổng cộng: ${total}`;
    }
}
renderCart();