//compte à rebours

const text = document.getElementById('time');

function getChrono() {
    const now = new Date().getTime();
    const countdownDate = new Date('January 1, 2025').getTime();

    const distanceBase = countdownDate - now;

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceBase % ( 1000 * 60 )) / (1000));


    text.innerHTML = `<li>${days}</li>
                      <li>${hours}</li>
                      <li>${minutes}</li>
                      <li>${seconds}</li>`;
}

const countdownInterval = setInterval(() => {

    getChrono()

}, 1000);

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
                elements[i].style.display = "block";
            } else {
                elements[i].style.display = "none";
            }
        }
    }
}

// stock products bar width percentage
var stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++){
    let stock = stocks[x].dataset.stock,
    available = stocks[x].querySelector('.qty-available').innerHTML,
    sold = stocks[x].querySelector('.qty-sold').innerHTML,
    percent = sold*100/stock;

    stocks[x].querySelector('.available').style.width = percent + '%';
}