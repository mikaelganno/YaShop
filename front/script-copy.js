let listProductHTML = document.querySelector('.column');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.iscart span');
let iconCartSpans = document.querySelector('.numero');
let iconCartTotal = document.querySelector('.cart-total');

let listProducts = [];
let carts = [];

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('products','one');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <div class="flexwrap">
                    <div class="row">
                        <div class="item is_sticky">
                            <div class="price">
                                <span class="discount">${parseInt(100 - product.price/product.prix*100)}%<br>OFF</span>
                            </div>
                            <div class="big-image">
                                <div class="big-image-wrapper swiper-wrapper">
                                    <div class="image-show swiper-slide">
                                        <!----><a data-fslightbox href=assets/products/${product.image}><img src="assets/products/${product.image}" alt="shoe1"></a>
                                    </div>
                                    <div class="image-show swiper-slide">
                                        <!----><a data-fslightbox href="assets/products/${product.image}"><img src="assets/products/${product.image}" alt="shoe1-1"></a>
                                    </div>
                                    <div class="image-show swiper-slide">
                                        <!----><a data-fslightbox href="assets/products/${product.image}"><img src="assets/products/${product.image}" alt="shoe1-2"></a>
                                    </div>
                                    <div class="image-show swiper-slide">
                                        <!----><a data-fslightbox href="assets/products/${product.image}"><img src="assets/products/${product.image}" alt="shoe1-3"></a>
                                    </div>
                                </div>
                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>
                            </div>
                            <div thumbSlider="" class="small-image">
                                <ul class="small-image-wrapper flexitem swiper-wrapper">
                                    <li class="thumbnail-show swiper-slide">
                                        <img src="assets/products/${product.image}" alt="shoe1">
                                    </li>
                                    <li class="thumbnail-show swiper-slide">
                                        <img src="assets/products/${product.image}" alt="shoe1-1">
                                    </li>
                                    <li class="thumbnail-show swiper-slide">
                                        <img src="assets/products/${product.image}" alt="shoe1-2">
                                    </li>
                                    <li class="thumbnail-show swiper-slide">
                                        <img src="assets/products/${product.image}" alt="shoe1-3">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="item">
                            <h1>${product.name}</h1>
                            <div class="content">
                                <div class="rating">
                                    <div class="stars"></div>
                                    <a href="#" class="mini-text">2,251 reviews</a>
                                    <a href="#" class="add-review mini-text">Add Your Review</a>
                                </div>
                                <div class="stock-sku">
                                    <span class="available">In Stock</span>
                                    <span class="sku mini-text">SKU-${product.id}</span>
                                </div>
                                <div class="price">
                                    <span class="current">XAF${product.price}</span>
                                    <span class="normal">XAF${product.prix}</span>
                                </div>
                                <div class="colors">
                                    <p>Color</p>
                                    <div class="variant">
                                        <form action="">
                                            <p>
                                                <input type="radio" name="color" id="${product.colors1}">
                                                <label for="${product.colors1}" class="circle"></label>
                                            </p>
                                            <p>
                                                <input type="radio" name="color" id="${product.colors2}">
                                                <label for="${product.colors2}" class="circle"></label>
                                            </p>
                                            <p>
                                                <input type="radio" name="color" id="${product.colors3}">
                                                <label for="${product.colors3}" class="circle"></label>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                                <div class="sizes">
                                    <p>Size</p>
                                    <div class="variant">
                                        <form action="">
                                            <p>
                                                <input type="radio" name="size" id="size-40">
                                                <label for="size-40" class="circle"><span>${product.size1}</span></label>
                                            </p>
                                            <p>
                                                <input type="radio" name="size" id="size-41">
                                                <label for="size-41" class="circle"><span>${product.size2}</span></label>
                                            </p>
                                            <p>
                                                <input type="radio" name="size" id="size-42">
                                                <label for="size-42" class="circle"><span>${product.size3}</span></label>
                                            </p>
                                            <p>
                                                <input type="radio" name="size" id="size-43">
                                                <label for="size-43" class="circle"><span>${product.size4}</span></label>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                                <div class="actions">
                                    <div class="qty-control flexitem">
                                        <button class="minus circle" onclick="down()">-</button>
                                        <input type="text" id="nbre" class="val" value="1" min="1">
                                        <button class="plus circle" onclick="up()">+</button>
                                    </div>
                                    <div class="button-cart">
                                        <button class="primary-button addCart" id="addToCart">Add To Cart</button>
                                    </div>
                                    <div class="wish-share">
                                        <ul class="flexitem second-links">
                                            <li><a href="#">
                                                <span class="icon-large"><i class="ri-heart-line"></i></span>
                                                <span>Wishlist</span>
                                            </a></li>
                                            <li><a href="#">
                                                <span class="icon-large"><i class="ri-share-line"></i></span>
                                                <span>Share</span>
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="description collapse">
                                    <ul>
                                        <li class="has-child expand">
                                            <a href="#0" class="icon-small">Information</a>
                                            <ul class="content">
                                                <li><span>Brands</span> <span>Nike</span></li>
                                                <li><span>Activity</span> <span>Running</span></li>
                                                <li><span>Material</span> <span>Fleece</span></li>
                                                <li><span>Gender</span> <span>Men</span></li>
                                            </ul>
                                        </li>
                                        <li class="has-child">
                                            <a href="#0" class="icon-small">Details</a>
                                            <div class="content">
                                                <p>${product.description}</p>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laborum nisi ipsum possimus modi dolores voluptatibus asperiores! Culpa, maiores facere, praesentium eum quaerat repellat magni, eos suscipit autem animi eius!</p>
                                            </div>

                                        </li>
                                        <li class="has-child">
                                            <a href="#0" class="icon-small">Custom</a>
                                            <div class="content">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Size</th>
                                                            <th>Bust <span class="mini-text">(cm)</span></th>
                                                            <th>Waist<span class="mini-text">(cm)</span></th>
                                                            <th>Hip <span class="mini-text">(cm)</span></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>XS</td>
                                                            <td>82.5</td>
                                                            <td>62</td>
                                                            <td>87.5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>S</td>
                                                            <td>85</td>
                                                            <td>63.5</td>
                                                            <td>89</td>
                                                        </tr>
                                                        <tr>
                                                            <td>M</td>
                                                            <td>87,5</td>
                                                            <td>67.5</td>
                                                            <td>93</td>
                                                        </tr>
                                                        <tr>
                                                            <td>L</td>
                                                            <td>90</td>
                                                            <td>72.5</td>
                                                            <td>98</td>
                                                        </tr>
                                                        <tr>
                                                            <td>XL</td>
                                                            <td>93</td>
                                                            <td>77.5</td>
                                                            <td>103</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </li>
                                        <li class="has-child expand">
                                            <a href="#" class="icon-small">Reviews<span class="mini-text">2.2k</span></a>
                                            <div class="content">
                                                <div class="reviews">
                                                    <h4>Customers Reviews</h4>
                                                    <div class="review-block">
                                                        <div class="review-block-head">
                                                            <div class="flexitem">
                                                                <span class="rate-sum">4.9</span>
                                                                <span>2,251 Reviews</span>
                                                            </div>
                                                            <a href="#review-form" class="secondary-button">write review</a>
                                                        </div>
                                                        <div class="review-block-body">
                                                            <ul>
                                                                <li class="item">
                                                                    <div class="review-form">
                                                                        <p class="person">Review by Sarah</p>
                                                                        <p class="mini-text">On 7/3/24</p>
                                                                    </div>
                                                                    <div class="review-rating rating">
                                                                        <div class="stars"></div>
                                                                    </div>
                                                                    <div class="review-title">
                                                                        <p>Awesome product!</p>
                                                                    </div>
                                                                    <div class="review-text">
                                                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventore.</p>
                                                                    </div>
                                                                </li>
                                                                <li class="item">
                                                                    <div class="review-form">
                                                                        <p class="person">Review by Faizal</p>
                                                                        <p class="mini-text">On 1/3/24</p>
                                                                    </div>
                                                                    <div class="review-rating rating">
                                                                        <div class="stars"></div>
                                                                    </div>
                                                                    <div class="review-title">
                                                                        <p>Awesome product!</p>
                                                                    </div>
                                                                    <div class="review-text">
                                                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventore.</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <div class="second-links">
                                                                <a href="#" class="view-all">View all reviews <i class="ri-arrow-right-line"></i></a>
                                                            </div>
                                                        </div>
                                                        <div id="review-form" class="review-form">
                                                            <h4>write a review</h4>
                                                            <div class="rating">
                                                                <p>Are you satisfied enough?</p>
                                                                <div class="rate-this">
                                                                    <input type="radio" name="rating" id="star5">
                                                                    <label for="star5"><i class="ri-star-fill"></i></label>

                                                                    <input type="radio" name="rating" id="star4">
                                                                    <label for="star4"><i class="ri-star-fill"></i></label>

                                                                    <input type="radio" name="rating" id="star3">
                                                                    <label for="star3"><i class="ri-star-fill"></i></label>

                                                                    <input type="radio" name="rating" id="star2">
                                                                    <label for="star2"><i class="ri-star-fill"></i></label>

                                                                    <input type="radio" name="rating" id="star1">
                                                                    <label for="star1"><i class="ri-star-fill"></i></label>
                                                                </div>
                                                            </div>
                                                            <form action="">
                                                                <p>
                                                                    <label>Name</label>
                                                                    <input type="text">
                                                                </p>
                                                                <p>
                                                                    <label>Summary</label>
                                                                    <input type="text">
                                                                </p>
                                                                <p>
                                                                    <label>Review</label>
                                                                    <textarea cols="30" rows="10"></textarea>
                                                                </p>
                                                                <p><a href="#" class="primary-button">Submit Review</a></p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            listProductHTML.appendChild(newProduct);
        })
    }
}

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.id;
        addToCart(product_id);
    }
})
const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if(carts.length <= 0){
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    }else if(positionThisProductInCart < 0){
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    let totaux = 0;
    if(carts.length > 0){
        carts.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id = cart.product_id;
            let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
            let info = listProducts[positionProduct];
            
            totaux = totaux + info.price*cart.quantity;
            newCart.innerHTML = `
            <div class="image">
                    <img src="assets/products/${info.image}">
                </div>
                <div class="name">${info.name}</div>
                <div class="totalPrice">XAF${info.price * cart.quantity}</div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span class="total">${cart.quantity}</span>
                    <span class="plus">+</span>
                </div>
            `;
            listCartHTML.appendChild(newCart);
        })
    }
    iconCartSpan.innerText = totalQuantity;
    iconCartSpans.innerText = totalQuantity;
    iconCartTotal.innerText = totaux.toLocaleString();
}
listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantity(product_id, type);
    }
})
const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        switch (type) {
            case 'plus':
                carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
                break;
        
            default:
                let valueChange = carts[positionItemInCart].quantity - 1;
                if(valueChange > 0){
                    carts[positionItemInCart].quantity = valueChange;
                }else{
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToMemory();
    addCartToHTML();
}
function up(){
    n = document.getElementById('nbre');
    n.value = parseInt(n.value)+1;
}
function down(){
    n = document.getElementById('nbre');
    n.value = parseInt(n.value)-1;
}

const initApp = () => {
    // get data from json
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addDataToHTML();

        // get cart from memory
        if(localStorage.getItem('cart')){
            carts = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}
initApp();