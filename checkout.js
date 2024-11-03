// Panier
cart = JSON.parse(localStorage.getItem('products')) || [];

if (cart.length > 0) {
    for (product of cart) {
        displayCart(product);
    }
    displayTotalCart();

}

// Affichage des produits présents dans le panier
function displayCart(product) {
    const productList = document.getElementById("checkout__items");
    const summaryTotals = document.getElementById("summary-totals");

    productList.innerHTML += `
                                <li class="items data-id="${product.id}">
                                    <div class="thumbnail object-cover">
                                        <img src="${product.image}" alt="${product.alt}">
                                    </div>
                                    <div class="item-content">
                                        <p>${product.name}</p>  
                                        <p>${product.colors}</p>   
                                    </div>
                                    <span class="quantity">
                                        <span>${product.quantity}</span>
                                    </span>
                                    <span class="price">
                                        <span>$${product.price}</span>
                                    </span>
                                </li>
                    `;

    summaryTotals.innerHTML = `
                                <ul>
                                    <li>
                                        <span>Subtotal</span>
                                        <span id="subtotal">$</span>
                                    </li>
                                    <li>
                                        <span>Discount</span>
                                        <span id="discount">$</span>
                                    </li>
                                    <li>
                                        <span>Shipping: Flat</span>
                                        <span id="shipping">$</span>
                                    </li>
                                    <li>
                                        <span>Total</span>
                                        <span id="total">$</span>
                                    </li>
                                </ul>
                            `;

}
/*
// Calcul du montant total du panier 
function updateTotalCost() {
    let totalCart = 0;
    cart.forEach((product) => {
        totalCart = totalCart + (product.quantity * product.price);
    });
    return totalCart;
}

function displayTotalCart() {
    var discount = 0;
    var shipping = 0;
    totaux = updateTotalCost();

    const subtotal = document.getElementById("subtotal");
    subtotal.textContent += totaux;
    const discount = document.getElementById("discount");
    discount.textContent += discount * totaux;
    const shipping = document.getElementById("shipping"); 
    shipping.textContent += shipping;
    const total = document.getElementById("total");
    total.textContent += totaux * (1 - discount) + shipping;
}*/