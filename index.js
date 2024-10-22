// Url de l'API pour recuperer tous les produits
const url = 'http://localhost:3000/api/products/';

fetch(url)
    .then(response => response.json())
    .then((data) => {
        
        addCards(data)
    })
    .catch((error) => {
        alert("Votre serveur Node n'est pas lancé ! 🙆‍♂️")
    });

    // fonction pour afficher des produits en page d'accueill
    function addCards(data){
        for (product of data){
            const card = document.getElementById('items');
            const feat = document.getElementById('item');

            card.innerHTML += `
                    
                        <div class="media">
                            <div class="thumbnail object-cover">
                            <a href="./page-single-copie.html?_id=${product._id}">
                                    <img src="${product.image}" alt="">
                            </a>   
                            </div>
                            <div class="hoverable">
                                <ul>
                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                    <li><a href=""><i class="ri-eye-line"></i></a></li>
                                    <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                                </ul>
                            </div>
                            <div class="discount circle flexcenter"><span>${parseInt(100 - product.price/product.prix*100)}%</span></div>
                        </div>
                        <div class="content">
                            <h3 class="main-links"><a href="#">${product.name}</a></h3>

                            <div class="rating">
                                <div class="stars"></div>
                                <span class="mini-text">(2,548)</span>
                            </div>
                            <div class="price">
                                <span class="current">XAF${product.price}</span>
                                <span class="normal mini-text">XAF${product.prix}</span>
                            </div>
                            <div class="mini-text">
                                <p>2975 sold</p>
                                <p>Free Shipping</p>
                            </div>
                        </div>
                    
                                `;               
            feat.innerHTML += `
                            
                                <div class="item">
                                    <div class="media">
                                        <div class="thumbnail object-cover">
                                        <a href="./page-single-copie.html?_id=${product._id}">
                                                <img src="${product.image}" alt="">
                                        </a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href=""><i class="ri-eye-line"></i></a></li>
                                                <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>${parseInt(100 - product.price/product.prix*100)}%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(994)</span>
                                        </div>
                                        <h3><a href="#">${product.name}</a></h3>
                                        <div class="price">
                                            <span class="current">XAF${product.price}</span>
                                            <span class="normal mini-text">XAF${product.prix}</span>
                                        </div>
                                        
                                        <div class="footer">
                                            <ul class="mini-text">
                                                <li>Polyester, Cotton</li>
                                                <li>Pull on closure</li>
                                                <li>Fashion Personality</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            
                                `;
        }
    }