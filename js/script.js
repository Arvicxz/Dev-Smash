const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("finish-btn")
const closeBtn = document.getElementById("close")
const cartCounter = document.getElementById("cart-count")
const alertInput = document.getElementById("address")
const alertWarn = document.getElementById("address-warn")

let cart = [];

// abrir modal
cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex"
})

// fechar modal clicando fora
cartModal.addEventListener("click", function(event) {
    if(event.target === cartModal) {
        cartModal.style.display = "none"
    }
})

// btn-close
closeBtn.addEventListener("click", function () {
    cartModal.style.display = "none"
})

// adicionar no carrinho
menu.addEventListener("click", function(event) {
    let parentButton = event.target.closest(".cart-btn")
    if(parentButton) {
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
    }
})

// finção add cart
function addToCart(name, price) {
    cart.push({name, price, quantity: 1,})
}