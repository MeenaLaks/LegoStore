let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const list = document.getElementById("cart-items");
    list.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} – $${item.price}`;
        list.appendChild(li);
        total += item.price;
    });

    document.getElementById("cart-total").textContent =
        `Total: $${total.toFixed(2)}`;
}

// Email checkout
document.querySelector(".checkout-button").addEventListener("click", () => {
    let orderText = cart.map(i => `${i.name} - $${i.price}`).join("\n");
    let mailto = `mailto:support@yourdomain.com?subject=New LEGO Order&body=${encodeURIComponent(orderText)}`;
    window.location.href = mailto;
});
