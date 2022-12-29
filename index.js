
let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");
let homesc = 0;
let guestsc = 0;

function updateScore() {
    homeEl.textContent = homesc;
    guestEl.textContent = guestsc;
}

function home1() {
    homesc += 1;
    updateScore();
}

function home2() {
    homesc += 2;
    updateScore();
}

function home3() {
    homesc += 3;
    updateScore();
}

function guest1() {
    guestsc += 1;
    updateScore();
}

function guest2() {
    guestsc += 2;
    updateScore();
}

function guest3() {
    guestsc += 3;
    updateScore();
}

function reset() {
    homesc = 0;
    guestsc = 0;
    updateScore();
}