// Class Product
class Product {
    constructor (id, name, description, price, prix, images, alt, inwishlist, colors, quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = +price;
        this.prix = +prix;
        this.images = images;
        this.alt = alt;
        this.inwishlist = inwishlist;
        this.colors = colors;
        this.quantity = +quantity;
    }
}

// Constante nécessaire à la récupération de la chaine de requête et paramètre de l'url
const searchParams = new URLSearchParams(location.search);

// récupère l'id du produit
const newId = searchParams.get('_id');

// Url du produit
const newUrl = `http://localhost:3000/api/products/${newId}`;

// fetch pour récupérer le produit
fetch(newUrl)
    .then((response) => response.json())
    .then((data) => {
        const product = data;
        addCard(product);

        function addCard(product){
            const productReduction = document.getElementById('reduction');
            productReduction.innerHTML = `<span class="discount">${parseInt(100 - product.price/product.prix*100)}%<br>OFF</span>`;

            const productName = document.getElementById('name');
            productName.innerHTML = `${product.name}`;

            const productPrice = document.getElementById('totalPrice');
            productPrice.innerHTML = `<span class="current">XAF${product.price}</span>
                                       <span class="normal">XAF${product.prix}</span>
                                      `;

            const productDescription = document.getElementById('description');
            productDescription.innerHTML = `<p>${product.description}</p>`;

            const productCustom = document.getElementById('custom');
            productCustom.innerHTML = `
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
                                        `;

            
            const actions = document.getElementById("actions");
            actions.innerHTML += `
                                    <button class="minus circle" onclick="down()">-</button>
                                    <input type="text" id="quantityProd" name="itemQuantity" class="val" value="1" min="1" max="99999">
                                    <button class="plus circle" onclick="up()">+</button>`;

            addListProduct(product);
        }

        function addListProduct(product) {
            const productColors = document.getElementById('colors-button');
            for (let colors in product.colors) {
                productColors.innerHTML += ` <div data-color-id=${colors} class="color">
                                                <p>
                                                    <input type="radio" name="colors">
                                                    <label id="product-colors" style="background-color: ${product.colors[colors]}" class="circle"></label>
                                                </p>
                                             </div>
                                        `;
            }
            const productInfos = document.getElementById('infos');
            for (let infos in product.infos) {
                productInfos.innerHTML += `<li><span>${infos}</span> <span>${product.infos[infos]}</span></li>
                                        `;
            }

            const productBigImage = document.querySelector('.big-image-wrapper');
            for (images of product.images) {
                productBigImage.innerHTML += `
                                            <div class="image-show swiper-slide">
                                                <a data-fslightbox href="${images}"><img src="${images}" alt="${product.alt}"></a>
                                            </div>
                                            `;
            }
            
            const productSmallImage = document.querySelector('.small-image-wrapper');
            for (images of product.images) {
                productSmallImage.innerHTML +=  `
                                                <li class="thumbnail-show swiper-slide">
                                                    <img src="${images}" alt="${product.alt}">
                                                </li>
                                            `;
            }

            const productReviews = document.getElementById("reviews");
                for (i = 0; i < product.reviewtext.length; i++ ) {
                productReviews.innerHTML += `
                                <li class="item">
                                    <div class="review-form">
                                        <p class="person">Review by ${product.reviewname[i]}</p>
                                        <p class="mini-text">On ${product.reviewdate[i]}</p>
                                    </div>
                                    <div class="review-rating rating">
                                        <div class="stars"></div>
                                    </div>
                                    <div class="review-title">
                                        <p>${product.reviewtitle[i]}!</p>
                                    </div>
                                    <div class="review-text">
                                        <p>${product.reviewtext[i]}</p>
                                    </div>
                                </li>` ;   
            }    
        }

        let btnAddToCart = document.getElementById('addToCart');
        let colorButtonList = document.querySelectorAll('.colors .color');
        colorButtonList.forEach(colorButton => {
            colorButton.addEventListener("click", (e) => {
                alert(e.target.style.backgroundColor);
                colors = e.target.style;
                /*if(product.inwishlist === false) {
                    wishList.classList.add('heart');
                } elif (product.inwishlist === true) {
                    wishList.classList.remove('heart');
                }*/              
                let colorId = colorButton.getAttribute("data-color-id");
                if (colors.backgroundColor === product.colors[colorId]) {
                colorButton.classList.toggle("checked");
                document.documentElement.style.setProperty('--checked-color', colors.backgroundColor);
                //colorButton.style.backgroundColor = colors.backgroundColor;
                }
            })  
        })
        
        btnAddToCart.addEventListener("click", () => {
            let quantity = document.getElementById("quantityProd");

            let objectProduct = new Product (
                newId,
                product.name,
                product.description,
                product.price,
                product.prix,
                product.images,
                product.alt,
                colors.backgroundColor,
                quantity.value
            );
            alert(colors.backgroundColor);
            if (colors.backgroundColor === "") {
                alert("Vous devez selectionner une couleur ❌! 😅");
            } else if (quantity.value === 0) {
                alert("Vous devez indiquer une quantité ❌! 😅");
            } else {
                let isInCart = false;
                
                let indexModification;
                for (prod of cart) {
                    if (prod.id === objectProduct.id) {                                                 
                        if (prod.colors === objectProduct.colors) {
                            isInCart = true;
                            indexModification = cart.indexOf(prod);
                        }
                    }
                }
                if (isInCart) {
                    cart[indexModification].quantity = +cart[indexModification].quantity + +objectProduct.quantity;
                    localStorage.setItem("products", JSON.stringify(cart));
                } else {
                    cart.push(objectProduct);
                    localStorage.setItem("products", JSON.stringify(cart));
                }
                alert("Votre produit a bien été ajouté au panier ! 👍✔");
                location.reload();
            }
        })
        
        // Wishlist 
        const wishList = document.querySelector('.wishlist');

        wishList.addEventListener("click", () => {
            if (!wishList.classList.contains('heart')) {
                let quantity = document.getElementById("quantityProd");

                let objectProduct = new Product (
                    newId,
                    product.name,
                    product.description,
                    product.price,
                    product.prix,
                    product.images,
                    product.alt,
                    product.inwishlist,
                    colors.backgroundColor,
                    quantity.value,
                );

                if (colors.backgroundColor === "") {
                    alert("Vous devez selectionner une couleur ❌! 😅");
                } else if (quantity.value === 0) {
                    alert("Vous devez indiquer une quantité ❌! 😅");
                } else {
                    let isInCart = false;

                    let indexModification;
                    for (prod of wishCart) {
                        if (prod.id === objectProduct.id) {                                                 
                            if (prod.colors === objectProduct.colors) {
                                isInCart = true;
                                indexModification = wishCart.indexOf(prod);
                            }
                        }
                    }
                    if (isInCart) {
                        wishCart[indexModification].quantity = +wishCart[indexModification].quantity + +objectProduct.quantity;
                        localStorage.setItem("wishproducts", JSON.stringify(wishCart));
                    } else {
                        objectProduct.inwishlist = true;
                        wishCart.push(objectProduct);
                        localStorage.setItem("wishproducts", JSON.stringify(wishCart));
                    }
                    alert("Votre produit a bien été ajouté au panier des souhaits ! 👍✔");
                    wishList.classList.add('heart');
                    //location.reload();
                }             
            } else {
                product.inwishlist = false;
                wishList.classList.remove('heart');
            }
        })

    // Modifier la qauntité des produits
    function down() {
        n = document.getElementById('quantityProd');
        n.value = parseInt(n.value) - 1;
        if (n.value <= 1) {
            n.value = 1;
        }
    }
    function up() {
        n = document.getElementById('quantityProd');
        n.value = parseInt(n.value) + 1;
    }

    // product image slider
    var productThumb = new Swiper('.small-image', {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            481: {
                spaceBetween: 32,
            }
        }
    });
    var productBig = new Swiper ('.big-image', {
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: productThumb,
        }
    })
    })
    .catch((error) => {
        alert(
            "attention votre serveur Node n'est pas lancé ! 🙆‍♂️"
        )
    });

// Url de l'API pour recuperer tous les produits
const url = 'http://localhost:3000/api/products/';

fetch(url)
    .then(response => response.json())
    .then((data) => {
        
        addToCard(data);
    })
    .catch((error) => {
        alert("Votre serveur Node n'est pas lancé ! 🙆‍♂️")
    });


    function addToCard(data) {
        for (prod of data) {
            const featItem = document.getElementById('item');            
             
            featItem.innerHTML += `
                            
                                <div class="item">
                                    <div class="media">
                                        <div class="thumbnail object-cover">
                                        <a href="./page-single-copie.html?_id=${prod._id}">
                                                <img src="${prod.images[0]}" alt="${prod.alt}">
                                        </a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="./page-single-copie.html?_id=${prod._id}"><i class="ri-heart-line"></i></a></li>
                                                <li><a href="${prod.images[0]}"><i class="ri-eye-line"></i></a></li>
                                                <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>${parseInt(100 - prod.price/prod.prix*100)}%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                        </div>
                                        <h3><a href="#">${prod.name}</a></h3>
                                        <div class="price">
                                            <span class="current">XAF${prod.price}</span>
                                            <span class="normal mini-text">XAF${prod.prix}</span>
                                        </div>
                                        
                                        <div class="footer">
                                            <ul class="mini-text">
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                `;
                                addInfos();

        // SearchBar Events 
    const searchBarList = document.querySelectorAll('#search');
    searchBarList.forEach(searchBar => {
        searchBar.addEventListener("keyup", (e) => {
            const searchedLetters = e.target.value;
            const searchButtonList = document.querySelectorAll("#searchButton");
            const cardfeat = document.querySelectorAll("#item .item");
            console.log(cardfeat);
            filterElements(searchedLetters, cardfeat);
            searchBar.addEventListener("click", () => {
                location.reload();
            });
            searchButtonList.forEach(searchButton => {
                searchButton.addEventListener("click", filterElements(searchedLetters, cardfeat));
            })
        });
    })

        }
        
        function addInfos() {
            const addinfos = document.querySelectorAll('.footer .mini-text');
            addinfos.forEach(addinfo => {
                for (let infos in prod.infos) {
                    addinfo.innerHTML += `<li>${infos + ": " + prod.infos[infos]}</li>
                                            `;
                }         
            })
            
        }

        function filterElements(letters, elements) {
            if (letters.length > 0) {
                for (let i = 0; i < elements.length; i++) {
                    if (elements[i].textContent.toLowerCase().includes(letters)) {
                        elements[i].style.display = "grid";
                    } else {
                        elements[i].style.display = "none";
                    }
                }
            }
        }

        
    
    }


    

    

    
    

