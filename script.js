const optionsLevel = document.getElementsByClassName("options__level");
const button = document.getElementById("button");
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

// Нажатие кнопки
let ourPole = function () {
    const pole = document.getElementById("pole");
    let gamePole = "<div class='grid__card-game_pole'><div class='grid__card-front'></div><div class='grid__card-back'></div></div>";

    for (let i = 0; i < cards.length; i++) {
        let poleByCards = document.createElement("div");
        pole.appendChild(gamePole);
        poleByCards.innerHTML = gamePole;
        poleByCards.classList = "grid__card";
    }


    switch (pole) {
        case 3:
            pole.classList.toggle(".grid-easy");
            break;

    }
};

for (let i = 0; i < optionsLevel.length; i++) {
    optionsLevel[i].addEventListener('click', onClick, false);
}

button.addEventListener('click', ourPole);





