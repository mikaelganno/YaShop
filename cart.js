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
                                            <button class="cart-qty-plus" id="plus" type="button" value="+" onclick="changeQuantity(${indexProduct}, ${product.quantity + 1})">+</button>
                                            <input name="qty" id="quantity" class="qty form-control" value="${product.quantity}" data-index=${indexProduct}>
                                            <button class="cart-qty-minus" id="minus" type="button" value="-" onclick="changeQuantity(${indexProduct}, ${product.quantity - 1})">-</button>
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
    var discount = 0;
    var shipping = 0;
    const flat = document.getElementById('flat');
    const best = document.getElementById('best');
    totaux = updateTotalCost();

    const totalContent = document.getElementById("totalPrice");
    totalContent.textContent += totaux;

    const productShipTax = document.getElementById("subtotal");
    productShipTax.textContent += totaux;

    const productDiscount = document.getElementById("discount");
    productDiscount.textContent += discount * totaux;

    const productShipping = document.getElementById("shipping");
    productShipping.textContent += shipping;

    const productGrandTotal = document.getElementById("grand-total");
    productGrandTotal.textContent += totaux * (1 - discount) + shipping;

    function shippingFlat(discount) {

        best.addEventListener("click", () => {
            shipping = 0;
            shippingFlatTextContent();
        });
    
        flat.addEventListener("click", () => {
            shipping = 1000;
            shippingFlatTextContent();
        });
        shippingFlatTextContent();

        function shippingFlatTextContent() {
            productShipping.textContent = `$` + shipping;
            productGrandTotal.textContent = `$` + (totaux * (1 - discount) + shipping);
        }

    }

    shippingFlat(discount);

    // Coupons de reduction
    const coupon = document.getElementById('coupon');
    const applyCoupon = document.getElementById('applyCoupon');
    const couponError = document.querySelector('.couponError');
    const couponSuccess = document.querySelector(".couponSuccess")


    coupon.addEventListener("keyup", (e) => {
        let verifyCoupon = e.target.value;
        applyCoupon.addEventListener("click", () => {
            apply(verifyCoupon);
        });
        coupon.addEventListener("change", () => {
            apply(verifyCoupon);
        });    
    })

    function apply(verifyCoupon) {
        if (verifyCoupon === "miki") {
            couponSuccess.textContent = `You get 5% off 🎁`;
            couponError.textContent = ``;
            let discount = 0.05;
            shippingFlat(discount);
            shippingFlatTextContent();
        } else {
            couponError.textContent = `Invalid coupon ‼`;
            couponSuccess.textContent = ``;
            shippingFlat(discount);
        }
    }
}





//Gestion des quantités de produits dans le panier

    // Gestion des inputs
    const inputList = document.querySelectorAll(".qty");
    for (input of inputList) {
        let ind = input.getAttribute("data-index");
        input.addEventListener("keyup", (e) => {
            const newValue = e.target.value;
            for (products of cart) {
                let index = cart.indexOf(products);
                if (index == ind && newValue > 0) {
                    cart[index].quantity = newValue;
                    localStorage.setItem("products", JSON.stringify(cart));
                    location.reload();
                }
            }
        })
    }

    // Gestion des boutons d'incrémentation et de décrementation
    function changeQuantity(key, quantity) { 
        for (product of cart) {
            if (quantity > 0) {
                cart[key].quantity = quantity;
                localStorage.setItem("products", JSON.stringify(cart));
                location.reload();
            }
        }
    }


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



