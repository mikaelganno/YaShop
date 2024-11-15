// Url de l'API pour recuperer tous les produits
const url = 'http://localhost:3000/api/products/';

fetch(url)
    .then(response => response.json())
    .then((data) => {
        
        addCards(data);
    })
    .catch((error) => {
        alert("Votre serveur Node n'est pas lancé ! 🙆‍♂️")
    });

    // fonction pour afficher des produits en page d'accueill
    function addCards(data) {
        for (product of data){
            const trendItem = document.getElementById('items');
            const featItem = document.getElementById('item');            

            trendItem.innerHTML += `
                    <div class="item">
                        <div class="media">
                            <div class="thumbnail object-cover">
                            <a href="./page-single-copie.html?_id=${product._id}">
                                    <img src="${product.images[0]}" alt="${product.alt}">
                            </a>   
                            </div>
                            <div class="hoverable">
                                <ul>
                                    <li class="active"><a href="./page-single-copie.html?_id=${product._id}"><i class="ri-heart-line"></i></a></li>
                                    <li><a href="${product.images[0]}"><i class="ri-eye-line"></i></a></li>
                                    <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                                </ul>
                            </div>
                            <div class="discount circle flexcenter"><span>${parseInt(100 - product.price/product.prix*100)}%</span></div>
                        </div>
                        <div class="content">
                            <h3 class="main-links"><a>${product.name}</a></h3>

                            <div class="rating">
                                <div class="stars"></div>
                            </div>
                            <div class="price">
                                <span class="current">XAF${product.price}</span>
                                <span class="normal mini-text">XAF${product.prix}</span>
                            </div>
                        </div>
                    </div>
                    
                                `;               
            featItem.innerHTML += `
                            
                                <div class="item">
                                    <div class="media">
                                        <div class="thumbnail object-cover">
                                        <a href="./page-single-copie.html?_id=${product._id}">
                                                <img src="${product.images[0]}" alt="${product.alt}">
                                        </a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="./page-single-copie.html?_id=${product._id}"><i class="ri-heart-line"></i></a></li>
                                                <li><a href="${product.images[0]}"><i class="ri-eye-line"></i></a></li>
                                                <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>${parseInt(100 - product.price/product.prix*100)}%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                        </div>
                                        <h3><a href="#">${product.name}</a></h3>
                                        <div class="price">
                                            <span class="current">XAF${product.price}</span>
                                            <span class="normal mini-text">XAF${product.prix}</span>
                                        </div>
                                        
                                        <div class="footer">
                                            <ul class="mini-text">
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                `;
                                
        
            
                                addInfos();
        }
        
    }
    function addInfos() {
        const addinfos = document.querySelectorAll('.footer .mini-text');
        addinfos.forEach(addinfo => {
            for (let infos in product.infos) {
                addinfo.innerHTML += `<li>${infos + ": " + product.infos[infos]}</li>
                                        `;
            }         
        })
        
    }
    


// SearchBar Events 
const searchBarList = document.querySelectorAll('#search');
searchBarList.forEach(searchBar => {
    searchBar.addEventListener("keyup", (e) => {
        const searchedLetters = e.target.value;
        const searchButtonList = document.querySelectorAll("#searchButton");
        const cardfeat = document.querySelectorAll("#item .item, #items .item");
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


// slider
const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },
  
});