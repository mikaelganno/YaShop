// Panier
const cart = JSON.parse(localStorage.getItem('products')) || [];


// Class Product
class Product {
    constructor (id, name, description, price, prix, image, alt, colors, quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = +price;
        this.prix = +prix;
        this.image = image;
        this.alt = alt;
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

            const productBigImage = document.querySelector('.big-image-wrapper');
            productBigImage.innerHTML = `
            <div class="image-show swiper-slide">
                <a data-fslightbox href="${product.image}"><img src="${product.image}" alt=${product.alt}></a>
            </div>
            <div class="image-show swiper-slide">
                <a data-fslightbox href="${product.image}"><img src="${product.image}" alt=${product.alt}></a>
            </div>
            <div class="image-show swiper-slide">
                <a data-fslightbox href="${product.image}"><img src="${product.image}" alt=${product.alt}></a>
            </div>
            <div class="image-show swiper-slide">
                <a data-fslightbox href="${product.image}"><img src="${product.image}" alt=${product.alt}></a>
            </div> 
                                         `;
            const productSmallImage = document.querySelector('.small-image');
            productSmallImage.innerHTML =  `
                                            <ul class="small-image-wrapper flexitem swiper-wrapper">
                                                <li class="thumbnail-show swiper-slide">
                                                    <img src="${product.image}" alt="${product.alt}">
                                                </li>
                                                <li class="thumbnail-show swiper-slide">
                                                    <img src="${product.image}" alt="${product.alt}">
                                                </li>
                                                <li class="thumbnail-show swiper-slide">
                                                    <img src="${product.image}" alt="${product.alt}">
                                                </li>
                                                <li class="thumbnail-show swiper-slide">
                                                    <img src="${product.image}" alt="${product.alt}">
                                                </li>
                                            </ul>
                                            `;
            const productName = document.getElementById('name');
            productName.innerHTML = `${product.name}`;

            const productPrice = document.getElementById('totalPrice');
            productPrice.innerHTML = `<span class="current">XAF${product.price}</span>
                                       <span class="normal">XAF${product.prix}</span>
                                      `;

            //const ProductColors = document.getElementById('colors');
            //ProductColors.innerHTML = ` 
            //                            `;

            const productInfos = document.getElementById('infos');
            productInfos.innerHTML = `<li><span>${product.infosq1}</span> <span>${product.infosr1}</span></li>
                                        <li><span>${product.infosq2}</span> <span>${product.infosr2}</span></li>
                                        <li><span>${product.infosq3}</span> <span>${product.infosr3}</span></li>
                                        <li><span>${product.infosq4}</span> <span>${product.infosr4}</span></li>
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

            const productReviews = document.getElementById("reviews");
            productReviews.innerHTML = `
                                        <ul>
                                            <li class="item">
                                                <div class="review-form">
                                                    <p class="person">Review by ${product.reviewn1}</p>
                                                    <p class="mini-text">On ${product.reviewd1}</p>
                                                </div>
                                                <div class="review-rating rating">
                                                    <div class="stars"></div>
                                                </div>
                                                <div class="review-title">
                                                    <p>Awesome product!</p>
                                                </div>
                                                <div class="review-text">
                                                    <p>${product.reviewt1}</p>
                                                </div>
                                            </li>
                                            <li class="item">
                                                <div class="review-form">
                                                    <p class="person">Review by ${product.reviewn2}</p>
                                                    <p class="mini-text">On ${product.reviewd2}</p>
                                                </div>
                                                <div class="review-rating rating">
                                                    <div class="stars"></div>
                                                </div>
                                                <div class="review-title">
                                                    <p>Awesome product!</p>
                                                </div>
                                                <div class="review-text">
                                                    <p>${product.reviewt2}</p>
                                                </div>
                                            </li>
                                        </ul> 
                                        `;

            addColors(product);
        }

        function addColors(product) {
            let options = document.getElementById('colors');

            for (let colors of product.colors) {
                options.innerHTML += `<option value="${colors}">${colors}</option>`;
            }
        }

        let btnAddToCart = document.getElementById('addToCart');
        
        btnAddToCart.addEventListener("click", () => {
                let colors = document.getElementById("colors");
                let quantity = document.getElementById("quantity");

                let objectProduct = new Product (
                    newId,
                    product.name,
                    product.description,
                    product.price,
                    product.prix,
                    product.image,
                    product.alt,
                    colors.value,
                    quantity.value
                );

                if (colors.value === "") {
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
                }
        })
    })
    .catch((error) => {
        alert(
            "attention votre serveur Node n'est pas lancé ! 🙆‍♂️"
        )
    });
    
    // Modifier la qauntité des produits
    function down() {
        n = document.getElementById('quantity');
        n.value = parseInt(n.value)-1;
        if (n.value <= 1){
            n.value = 1;
        }
    }
    function up() {
        n = document.getElementById('quantity');
        n.value = parseInt(n.value)+1;
    }