const optionsLevel = document.querySelectorAll("options__level");
const buttonStart = document.querySelector("button_start");
const pole = document.getElementById("pole");
let countClick = 0;

// Выбор уровня
let onClick = function (event) {
    event.preventDefault();

    for (let i = 0; i < optionsLevel.length; i++) {
        optionsLevel[i].classList.remove("options__level__active");
    }
}

