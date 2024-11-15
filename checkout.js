checkShip = JSON.parse(sessionStorage.getItem('checkship')) || [];
checkDisc = JSON.parse(sessionStorage.getItem('checkdisc')) || [];


if (cart.length > 0) {
    for (product of cart) {
        displayCart(product);
    }

}

// Affichage des produits présents dans le panier
function displayCart(product) {
    const productList = document.getElementById("checkout__items");
    const summaryTotals = document.getElementById("summary-totals");

    productList.innerHTML += `
                                <li class="items data-id="${product.id}">
                                    <div class="thumbnail object-cover">
                                        <img src="${product.images[0]}" alt="${product.alt}">
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
                                        <span>Shipping</span>
                                        <span id="shipping">$</span>
                                    </li>
                                    <li>
                                        <span>Total</span>
                                        <span id="total">$</span>
                                    </li>
                                </ul>
                            `;

    

};

// Calcul du montant total du panier

function updateTotalCost() {
    let totalCart = 0;
    cart.forEach((product) => {
        totalCart = totalCart + (product.quantity * product.price);
    });
    return totalCart;
}

var totaux = updateTotalCost();

const checkOutSubTotal = document.getElementById("subtotal");
checkOutSubTotal.textContent += totaux;

const checkOutDiscount = document.getElementById("discount");
checkOutDiscount.textContent += totaux * Number(checkDisc);

const checkOutShipping = document.getElementById("shipping");
checkOutShipping.textContent += Number(checkShip);

const checkOutTotal = document.getElementById("total");
checkOutTotal.textContent += totaux + Number(checkShip) - (Number(checkDisc) * totaux);

const checkSet = document.querySelector(".shipping-methods .checkset");
if (Number(checkShip) > 0) {
    checkSet.innerHTML += `
                            <input type="radio" checked>
                            <label>$${Number(checkShip)} Flate Rate</label>`;
} else {
    checkSet.innerHTML += `
                            <input type="radio" checked disabled>
                            <label>No Flate Rate</label>`;
}

// show modal on load
window.onload = function () {
    document.querySelector('.site').classList.toggle('showmodal')
}
document.querySelector('.modalclose').addEventListener('click', function() {
    document.querySelector('.site').classList.remove('showmodal')
})
