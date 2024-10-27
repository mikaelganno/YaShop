// Panier
cart = JSON.parse(localStorage.getItem('products')) || [];

if (cart.length > 0) {
    for (product of cart) {
        displayCart(product);
    }
    displayTotalCart();
    ClearButton();


}

// Affichage des produits présents dans le panier
function displayCart(product) {
    const indexProduct = cart.indexOf(product);
    const productList = document.getElementById("cart__items");

    productList.innerHTML += `
                                <tr data-id="${product.id}">
                                    <td>
                                        <div class="product-img">
                                            <div class="img-prdct">
                                                <img src="${product.image}" alt="${product.alt}">
                                            </div>
                                        </div>
                                    </td>
                                    <td class="nom">
                                        <p>${product.name}</p>
                                        <p>color: ${product.colors}</p>
                                    </td>
                                    <td>
                                        <div class="button-container">
                                            <button class="cart-qty-plus" id="plus" type="button" value="+">+</button>
                                            <input type="number" name="qty" id="quantity" min="1" class="qty form-control" value="${product.quantity}" data-index=${indexProduct} disabled>
                                            <button class="cart-qty-minus" id="minus" type="button" value="-">-</button>
                                        </div>
                                    </td>
                                    <td>
                                        <span>$<div class="prix">${product.price}</div></span>
                                    </td>
                                    <td align="right">
                                        $<span class="amounts" id="amounts">${product.price * product.quantity}</span>
                                    </td>
                                    <td class="deleteItem" onclick="remove(${indexProduct})">
                                    <i class="ri-delete-bin-5-fill"></i>
                                    </td>
                                </tr>
                    `;

}

// Boutton pour vider le panier
function ClearButton(product) {
    const indexProduct = cart.indexOf(product);
    const productClear = document.getElementById("vider");
    productClear.innerHTML += `<button class="vider" onclick="removeAll(${indexProduct})">Clear</button>
                    `;
}

// Calcul du montant total du panier 
function updateTotalCost() {
    let totalCart = 0;
    cart.forEach((product) => {
        totalCart = totalCart + (product.quantity * product.price);
    });
    return totalCart;
}

// Affichage du montant total du panier
function displayTotalCart() {
    let discount = 0;
    let shipping = 1000;
    totaux = updateTotalCost()

    if (totaux > 0 && totaux <= 250000) {
        discount = 0.02
    }
    else if (totaux > 250000) {
        discount = 0.04
    }

    const totalContent = document.getElementById("totalPrice");
    totalContent.innerHTML += totaux;

    const productShipTax = document.getElementById("subtotal");
    productShipTax.innerHTML += totaux;

    const productDiscount = document.getElementById("discount");
    productDiscount.innerHTML += discount * totaux;

    const productShipping = document.getElementById("shipping");
    productShipping.innerHTML += shipping;

    const productGrandTotal = document.getElementById("grand-total");
    productGrandTotal.innerHTML += totaux * (1 - discount) + shipping;
}




//Gestion des quantités de produits
const inputList = document.querySelectorAll(".qty");
/*for (input of inputList) {
    let ind = input.getAttribute("data-index");
    input.addEventListener("click", (e) => {
        const newValue = e.target.value;
        for (products of cart) {
            let index = cart.indexOf(products);
            let qty = cart[index].quantity;
            if (index == ind && newValue > qty) {
                cart[index].quantity++;
                localStorage.setItem("products", JSON.stringify(cart));
                location.reload();
            } else if (index == ind && newValue < qty) {
               cart[index].quantity--;
              localStorage.setItem("products", JSON.stringify(cart));
              location.reload();
            } else {
                newValue == qty;
            }
        }
    })
}*/


// Incrémenter et décrementer les produits du panier
const plusList = document.querySelectorAll('.cart-qty-plus');
const minusList = document.querySelectorAll('.cart-qty-minus');
const quantity = document.getElementById('quantity');



plusList.forEach(plus => {
    for (input of inputList) {
        let ind = input.getAttribute("data-index");
        plus.addEventListener("click", () => {
            const newValue = input.value;
            for (product of cart) {
                let index = cart.indexOf(product);
                let qty = cart[index].quantity;
                if (index == ind && newValue > qty) {
                    cart[index].quantity++;
                    localStorage.setItem("products", JSON.stringify(cart));
                    location.reload();
                } else {
                    newValue == qty;
                    localStorage.setItem("products", JSON.stringify(cart));
                    location.reload();
                }
            }
        })
    }
});


minusList.forEach(minus => {
    minus.addEventListener("click", () => {
        for (input of inputList) {
            let ind = input.getAttribute("data-index");
            const newValue = input.value;
            for (products of cart) {
                let index = cart.indexOf(products);
                let qty = cart[index].quantity;
                if (index == ind && quantity.value > 1 && newValue < qty ) {
                    cart[index].quantity--;
                    localStorage.setItem("products", JSON.stringify(cart));
                    location.reload();
                } else {
                    newValue == qty;
                    localStorage.setItem("products", JSON.stringify(cart));
                    location.reload();
                }
            }
        }
    })
});


// Fonction pour supprimer un produit
function remove(index) {
    cart.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(cart));
    location.reload();
    displayCart();
}

// Fonction pour vider le panier
function removeAll() {
    cart.splice(0, 1000);
    localStorage.setItem("products", JSON.stringify(cart));
    location.reload();
    ClearButton();
    displayCart();
}
