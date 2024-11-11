// Copy menu for mobile
function copyMenu() {
    // copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    // copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    // copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML; 
}
copyMenu();

// show mobile menu
const menuButton = document.querySelector('.trigger'),
        closeButton = document.querySelector('.t-close'),
        addclass = document.querySelector('.site');
menuButton.addEventListener('click', function() {
    addclass.classList.toggle('showmenu')
}) 
closeButton.addEventListener('click', function() {
    addclass.classList.remove('showmenu')
})


// show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

// show cart on click --headNav
const charriot = document.querySelector(".iscart");
const mini = document.querySelector(".cart-trigger");
const navlinks = document.querySelector(".mini-cart");

charriot.addEventListener('click', () => {
    navlinks.classList.toggle('char');
})
mini.addEventListener('click', () => {
    navlinks.classList.toggle('char');
})


// Panier
const cart = JSON.parse(localStorage.getItem('products')) || [];

// Panier des souhaits
const wishCart = JSON.parse(localStorage.getItem('wishproducts')) || [];

// Mini Carte 
const miniCartItem = document.getElementById("mini-cart-item");
if (cart.length > 0) {
    for (product of cart) {
        displayMiniCart(product);
    }

}

function displayMiniCart(product) {
    const indexProduct = cart.indexOf(product);
    const cartNumberList = document.querySelectorAll('.item-number.numero');
    const cartTotal = document.querySelector('.cart-total');
    let subtotalPrice = 0;

    miniCartItem.innerHTML += `
                                <tr data-id="${product.id}">
                            <td>
                                <div class="product-img">
                                    <div class="img-prdct">
                                        <img src="${product.bigImage[0]}" alt="${product.alt}">
                                    </div>
                                </div>
                            </td>
                            <td class="nom">
                                <div>
                                    <p>${product.name}</p>
                                    <p>${product.colors}</p>
                                </div>
                            </td>
                            <td>
                                <div class="button-container">
                                    <button class="cart-qty-plus" type="button" onclick="changeQuantity(${indexProduct}, ${product.quantity + 1})" value="+">+</button>
                                    <input type="text" name="qty" id="quantity" min="1" class="qty form-control" value=${product.quantity} data-index=${indexProduct}>
                                    <button class="cart-qty-minus" type="button" onclick="changeQuantity(${indexProduct}, ${product.quantity - 1})" value="-">-</button>
                                </div>
                            </td>
                            <td>
                                <span>$${product.price}</span>
                            </td>
                        </tr>  `;
    
    // Cart totalPrice
    for (product of cart) {
        subtotalPrice += product.quantity * product.price
    }
    cartTotal.textContent = `$` + subtotalPrice;
    inputCartQuantity();  

    // Cart Quantity of products
    cartNumberList.forEach(cartNumber => {
        cartNumber.textContent = indexProduct + 1;
    })
}

// Gestion des quantités de produits dans la mini carte et le panier

// A- Gestion des inputs
function inputCartQuantity() {
    const inputList = document.querySelectorAll(".qty");
    for (input of inputList) {
        let ind = input.getAttribute("data-index");
        input.addEventListener("keyup", (e) => {
            const newValue = e.target.value;
            for (products of cart) {
                let index = cart.indexOf(products);
                if (index == ind && newValue > 0) {
                    cart[index].quantity = Number(newValue);
                    localStorage.setItem("products", JSON.stringify(cart));
                    location.reload();
                }
            }
        })
    }
}

// B- Gestion des boutons d'incrémentation et de décrementation
function changeQuantity(key, quantity) { 
    for (product of cart) {
        if (quantity > 0) {
            cart[key].quantity = quantity;
            localStorage.setItem("products", JSON.stringify(cart));
            location.reload();
        }
    }
}

// WishCart quantity of products

if (wishCart.length > 0) {
    for (product of wishCart) {
        displayWishCart(product);
    }

}

function displayWishCart(product) {
    const indexProduct = wishCart.indexOf(product);
    const wishListNumber = document.querySelector('.item-number.number');
    wishListNumber.textContent = indexProduct + 1;
}

// show search
const searchButton = document.querySelector('.t-search'),
     tClose = document.querySelector('.search-close'),
     showClass = document.querySelector('.search-bottom');
searchButton.addEventListener("click", function() {
    showClass.classList.toggle('showsearch');
})
tClose.addEventListener("click", function() {
    showClass.classList.remove('showsearch');
})

// show dpt menu
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function() {
    dptClass.classList.toggle('showdpt');
})


/*
// show cart on click --footNav
const divtoShow ='.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if(!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
        }
    }, 250)
})

// close by click outside
document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divtoShow);
    if(!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show');
    }
})
*/



