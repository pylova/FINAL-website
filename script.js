let translated = false
let handleClick

document.addEventListener("DOMContentLoaded", function () {
    handleClick = () => {
        const textElement = document.getElementById("par")
        const buttonElement = document.getElementById("translate-button")
        if (!translated) {
            textElement.innerHTML = "Love Ukraine, like you love the sun, the wind, the grasses, and the waters...In the hour of good fortune and the moment of joy, love her in the moment of discord."
            buttonElement.innerText = "Переклад"
            translated = true
        } else {
            textElement.innerHTML = "Любіть Україну, як сонце любіть, як вітер, і трави, і води... В годину щасливу і в радості мить, любіть у годину негоди."
            buttonElement.innerText = "Translate"
            translated = false
        }

    }
})

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });

    // Load cart items from local storage
    loadCart();

    function addToCart(event) {
        const ticket = event.target.parentElement;
        const ticketId = ticket.getAttribute("data-id");
        const ticketName = ticket.querySelector("h2").textContent;
        const ticketPrice = parseFloat(ticket.querySelector("p").textContent.slice(8));

        // Create a new cart item
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `${ticketName} - $${ticketPrice}`;
        cartItems.appendChild(cartItem);

        // Update the cart total
        const currentTotal = parseFloat(cartTotal.textContent);
        cartTotal.textContent = (currentTotal + ticketPrice).toFixed(2);

        // Save the cart to local storage
        saveCart(ticketId);
    }
  

    function saveCart(itemId) {
        let cart = JSON.parse(localStorage.getItem("cart")) || {};
        cart[itemId] = (cart[itemId] || 0) + 1;
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            for (let itemId in cart) {
                const ticket = document.querySelector(`[data-id="${itemId}"]`);
                const ticketName = ticket.querySelector("h2").textContent;
                const ticketPrice = parseFloat(ticket.querySelector("p").textContent.slice(8));
                const quantity = cart[itemId];

                // Create a new cart item
                const cartItem = document.createElement("li");
                cartItem.innerHTML = `${ticketName} - $${ticketPrice} x ${quantity}`;
                cartItems.appendChild(cartItem);

                // Update the cart total
                const currentTotal = parseFloat(cartTotal.textContent);
                cartTotal.textContent = (currentTotal + ticketPrice * quantity).toFixed(2);
            }
        }
    }
});