// Panier des souhaits
wishCart = JSON.parse(localStorage.getItem('wishproducts')) || [];
const checkShip = JSON.parse(sessionStorage.getItem('checkship')) || [];
const checkDisc =  JSON.parse(sessionStorage.getItem('checkdisc')) || [];

if (wishCart.length > 0) {
    for (product of wishCart) {
        displayWishCart(product);
    }
    displayTotalCart();
    ClearButton();
    
}

// Affichage des produits présents dans le panier des souhaits
function displayWishCart(product) {
    const indexProduct = wishCart.indexOf(product);
    const productList = document.getElementById("cart__items");

    productList.innerHTML += `
                                <tr data-id="${product.id}">
                                    <td>
                                        <div class="product-img">
                                            <div class="img-prdct">
                                                <img src="${product.images[0]}" alt="${product.alt}">
                                            </div>
                                        </div>
                                    </td>
                                    <td class="nom">
                                        <p>${product.name}</p>
                                        <p>color: ${product.colors}</p>
                                    </td>
                                    <td>
                                        <div class="button-container">
                                            <button class="cart-qty-plus" id="plus" type="button" value="+" onclick="changeQuantities(${indexProduct}, ${product.quantity + 1})">+</button>
                                            <input name="qty" id="quantity" class="qty form-control" value="${product.quantity}" data-index=${indexProduct}>
                                            <button class="cart-qty-minus" id="minus" type="button" value="-" onclick="changeQuantities(${indexProduct}, ${product.quantity - 1})">-</button>
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
    const indexProduct = wishCart.indexOf(product);
    const productClear = document.getElementById("vider");
    productClear.innerHTML += `<button class="vider" onclick="removeAll(${indexProduct})">Clear</button>
                    `;
}

// Calcul du montant total du panier 
function updateTotalCost() {
    let totalCart = 0;
    wishCart.forEach((product) => {
        totalCart = totalCart + (product.quantity * product.price);
    });
    return totalCart;
}

// Affichage du montant total du panier
function displayTotalCart() {
    var discount = 0;
    var shipping = 0;
    const flat = document.getElementById('flat');
    const noFlat = document.getElementById('best');
    var totaux = updateTotalCost();

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

        noFlat.addEventListener("click", () => {
            shipping = 0;
            flatNoFlat();
        });
    
        flat.addEventListener("click", () => {
            shipping = 1000;
            flatNoFlat();
        });
        shippingFlatTextContent();

        function shippingFlatTextContent() {
            productShipping.textContent = `$` + shipping;
            productGrandTotal.textContent = `$` + (totaux * (1 - discount) + shipping);
        }

        function flatNoFlat() {
            shippingFlatTextContent();
            checkShip.splice(0, 100, shipping);
            sessionStorage.setItem("checkship", JSON.stringify(checkShip));
        }

    }

    shippingFlat(discount);

    // Coupons de reduction
    const coupon = document.getElementById('coupon');
    const applyCoupon = document.getElementById('applyCoupon');
    const couponError = document.querySelector('.couponError');
    const couponSuccess = document.querySelector('.couponSuccess')


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
            var discount = 0.05;
            goodCoupon();
        } else if (verifyCoupon === "mike") {
            var discount = 0.03;
            goodCoupon();
        } else {
            var discount = 0;
            couponError.textContent = `Invalid coupon ‼`;
            couponSuccess.textContent = ``;
            shippingFlat(discount);
            checkDisc.splice(0, 100, discount);
            sessionStorage.setItem("checkdisc", JSON.stringify(checkDisc));
        }

        function goodCoupon() {
            couponSuccess.textContent = `You get ${discount * 100}% off 🎁`;
            couponError.textContent = ``;
            shippingFlat(discount);
            productDiscount.textContent = `$` + (discount * totaux);
            productGrandTotal.textContent = `$` + (totaux * (1 - discount) + shipping);
            checkDisc.splice(0, 100, discount);
            sessionStorage.setItem("checkdisc", JSON.stringify(checkDisc)); 
        }
    }
    inputWishCartQuantity();
}


//Gestion des quantités de produits dans le panier

// A- Gestion des inputs
function inputWishCartQuantity() {
    inputList = document.querySelectorAll(".qty");
    for (input of inputList) {
        let ind = input.getAttribute("data-index");
        input.addEventListener("keyup", (e) => {
            const newValue = e.target.value;
            for (products of wishCart) {
                let index = wishCart.indexOf(products);
                if (index == ind && newValue > 0) {
                    wishCart[index].quantity = Number(newValue);
                    localStorage.setItem("wishproducts", JSON.stringify(wishCart));
                    location.reload();
                }
            }
        })
    }
}

// B- Gestion des boutons d'incrémentation et de décrementation du panier des souhaits
function changeQuantities(key, quantity) { 
    for (product of wishCart) {
        if (quantity > 0) {
            wishCart[key].quantity = quantity;
            localStorage.setItem("wishproducts", JSON.stringify(wishCart));
            location.reload();
        }
    }
}


// Fonction pour supprimer un produit
function remove(index) {
    wishCart.splice(index, 1);
    localStorage.setItem("wishproducts", JSON.stringify(wishCart));
    location.reload();
    displayCart();
}

// Fonction pour vider le panier
function removeAll() {
    wishCart.splice(0, 1000);
    localStorage.setItem("wishproducts", JSON.stringify(wishCart));
    location.reload();
    ClearButton();
    displayCart();
}