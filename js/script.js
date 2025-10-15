const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const finishBtn = document.getElementById("finish-btn");
const alertInput = document.getElementById("address");
const alertWarn = document.getElementById("address-warn");

let cart = [];

cartBtn.addEventListener("click", function () {
  updateCartModal();
  cartModal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  cartModal.style.display = "none";
});

menu.addEventListener("click", function (event) {
  let parentButton = event.target.closest(".addCart-btn");
  if (parentButton) {
    const name = parentButton.getAttribute("data-name");
    const price = parentButton.getAttribute("data-price");
    addToCart(name, price);
  }
});

function addToCart(name, price) {
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartModal();
}

function updateCartModal() {
  cartItemsContainer.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const cartItemsElement = document.createElement("div");
    cartItemsElement.style.display = "flex";
    cartItemsElement.style.justifyContent = "space-between";
    cartItemsElement.style.flexDirection = "column";
    
    cartItemsElement.innerHTML = `
        <div style = "display: flex; align-items: center; justify-content: space-between;">
            <div>
                <p style = "font-size: bold;">${item.name}</p>
                <p style = "font-size: medium;">Qtd: ${item.quantity}</p>
                <p style = "margin-top: 16px;">R$ ${item.price}</p>
            </div>

            <div>
                <button style = "border: none; background: #ffffff; cursor: pointer;">
                Remover
                </button>
            </div>
        </div>
        `;

    cartItemsContainer.appendChild(cartItemsElement);
  });
}
