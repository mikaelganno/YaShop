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

