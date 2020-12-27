const optionsLevel = document.getElementsByClassName("options__level");
const header = document.getElementById("wrap");
const section = document.getElementById("list");
const button = document.getElementById("button");
const gridContainer = document.body.children[2];

let cards = 3;
let countClick = 0;

// Выбор уровня
let onClick = function (event) {
    event.preventDefault();

    for (let i = 0; i < optionsLevel.length; i++) {
        optionsLevel[i].classList.remove("options__level__active");
    }

    event.currentTarget.classList.add('options__level__active');

    let selectLevel = document.querySelector("options__level__active").getAttribute("id");
    switch (selectLevel) {
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

//Поворот карты:
let rotateCards = function (event) {
    event.preventDefault();
    countClick++;
    if (countClick < 2) {
        event.currentTarget.children[0].classList.toggle("rotate");
    } else {
        location.reload();
    }
};

// Создание карточного поля
let ourPole = function () {
    let gamePole = "<div class='grid__card-game_pole'><div class='grid__card-front'></div><div class='grid__card-back'></div></div>";

    for (let i = 0; i < cards; i++) {
        let poleByCards = document.createElement("div");
        poleByCards.classList = "grid__card";
        gridContainer.appendChild(poleByCards);
        poleByCards.innerHTML = gamePole;
        poleByCards.addEventListener("click", rotateCards)
    }

    switch (pole) {
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




for (let i = 0; i < optionsLevel.length; i++) {
    optionsLevel[i].addEventListener('click', onClick, false);
}

button.addEventListener("click", invisible);
button.addEventListener('click', ourPole);

// console.log(ourPole);

