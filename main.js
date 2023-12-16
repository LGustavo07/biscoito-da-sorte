const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const open = document.querySelector("#open");
const again = document.querySelector("#again");
const elementRespost = document.querySelector("#message");

var respostas = [
    "A vida trará coisas boas se tiver paciência.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "Não há que ser forte. Há que ser flexível.",
    "A juventude não é uma época da vida, é um estado de espírito.",
];

// Eventos
open.addEventListener("click", function () {
    toggleScreen1();
    toggleScreen2();
});

again.addEventListener("click", function () {
    toggleScreen();
});

function toggleScreen1() {
    randomNumber = Math.floor(Math.random() * respostas.length);
    handleAnswer();
}

function handleAnswer() {
    elementRespost.innerHTML = respostas[randomNumber];
}

function toggleScreen2() {
    toggleScreen();
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}
