const optionsLevel = document.getElementsByClassName("options__level");
const header = document.getElementById("wrap");
const section = document.getElementById("list");
const button = document.getElementById("button");
const gridContainer = document.body.children[2];
let openCard = null;

let cards = 3;
// let countClick = 0;

// Выбор уровня
let onClick = function (event) {
    event.preventDefault();

    for (let i = 0; i < optionsLevel.length; i++) {
        optionsLevel[i].classList.remove("options__level__active");
    }

    event.currentTarget.classList.add('options__level__active');

    let selectLevel = document.querySelector(".options__level__active");
    switch (selectLevel.id) {
        case "easy":
            cards = 3;
            break;

        case "medium":
            cards = 6;
            break;

        case "hard":
            cards = 10;
            break;
    }

};

// Скрываем меню
const invisible = function () {
    header.classList.toggle('invisible');
    section.classList.toggle("invisible");
    header.classList.remove('header');
    section.classList.remove("section");
};

random = (value) => (Math.floor(Math.random() * value));
// document.body.onclick = () => console.log(random(cards));

// Создание карточного поля
let ourPole = function () {
    let gamePole = "<div class='grid__card-game_pole'><div class='grid__card-front'></div><div class='grid__card-back'></div></div>";
    let randomValue = random(cards);

    for (let i = 0; i < cards; i++) {
        let poleByCards = document.createElement("div");
        poleByCards.classList = "grid__card";
        gridContainer.appendChild(poleByCards);
        poleByCards.innerHTML = gamePole;
        let back = document.querySelectorAll('.grid__card-back');
        if (i === randomValue) {
            back[i].classList.toggle('grid__card-back-bug');
            back[i].classList.remove('grid__card-back');
        }
    }

    openCard = document.querySelectorAll(".grid__card");

    switch (cards) {
        case 3:
           gridContainer.classList.toggle("grid-easy");
           break;
        case 6:
            gridContainer.classList.toggle("grid-medium");
            break;
       case 10:
            gridContainer.classList.toggle("grid-hard");
           break;
    }

};

// Поворот карты
let rotateCards = function (event) {
    event.target.parentElement.classList.add("rotate")
};

// Обновление страницы после открытия карты
function returnBack() {
    const cards = document.querySelectorAll('.grid__card-game_pole');
    document.querySelector('.container').classList.remove('invisible');
    document.querySelector('poleByCards').classList.remove('game-field__wrapper');
    document.querySelector('poleByCards').innerHTML = '';
}



//Выполнение всех функций:
for (let i = 0; i < optionsLevel.length; i++) {
    optionsLevel[i].addEventListener('click', onClick, false);
}

button.addEventListener("click", invisible);
button.addEventListener('click', ourPole);
gridContainer.addEventListener("click", rotateCards);


