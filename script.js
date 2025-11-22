/* =========================================
   PRODUCT DATABASE (20 PRODUCTS per category)
   Images load directly from same folder
   Example: city1.jpg, marvel4.jpg, etc
========================================= */

const data = {
    city: Array.from({ length: 20 }, (_, i) => ({
        name: `LEGO City Set ${i + 1}`,
        price: (29.99 + i).toFixed(2),
        img: `city${i + 1}.jpg`   // no folder path
    })),

    marvel: Array.from({ length: 20 }, (_, i) => ({
        name: `LEGO Marvel Set ${i + 1}`,
        price: (49.99 + i).toFixed(2),
        img: `marvel${i + 1}.jpg`
    })),

    dreams: Array.from({ length: 20 }, (_, i) => ({
        name: `LEGO DREAMZzz Set ${i + 1}`,
        price: (39.99 + i).toFixed(2),
        img: `dreams${i + 1}.jpg`
    })),

    friends: Array.from({ length: 20 }, (_, i) => ({
        name: `LEGO Friends Set ${i + 1}`,
        price: (34.99 + i).toFixed(2),
        img: `friends${i + 1}.jpg`
    })),

    starwars: Array.from({ length: 20 }, (_, i) => ({
        name: `LEGO Star Wars Set ${i + 1}`,
        price: (59.99 + i).toFixed(2),
        img: `starwars${i + 1}.jpg`
    }))
};



/* =========================================
   HOMEPAGE CLICK → GO TO CATEGORY PAGE
========================================= */

function goToTheme(theme) {
    window.location.href = "category.html?theme=" + theme;
}



/* =========================================
   CATEGORY PAGE LOADER
   Loads all 20 products dynamically
========================================= */

if (location.pathname.includes("category.html")) {

    const params = new URLSearchParams(window.location.search);
    const theme = params.get("theme");

    document.getElementById("category-title").textContent =
        "LEGO " + theme.toUpperCase();

    const productGrid = document.getElementById("product-grid");

    data[theme].forEach(product => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.img}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart('${product.name}', ${product.price}, '${product.img}')">
                    Add to Cart
                </button>
            </div>
        `;
    });
}



/* =========================================
   SHOPPING CART SYSTEM (LocalStorage)
========================================= */

let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function addToCart(name, price, img) {
    cart.push({ name, price, img });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}



/* =========================================
   CART PAGE RENDERER
========================================= */

if (location.pathname.includes("cart.html")) {

    const cartBody = document.getElementById("cart-body");
    const cartTotal = document.getElementById("cart-total");

    let total = 0;

    cart.forEach(item => {
        total += parseFloat(item.price);

        cartBody.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" class="cart-img">
                <div class="cart-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price}</p>
                </div>
            </div>
        `;
    });

    cartTotal.textContent = "Total: $" + total.toFixed(2);
}

function checkout() {
    alert("Checkout coming soon! Stripe/PayPal can be added.");
}
