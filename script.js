const optionsLevel = document.querySelectorAll("options__level");
const button = document.getElementById("button");
const pole = document.getElementById("pole");
let cards = 3;
let countClick = 0;

// Выбор уровня
let onClick = function (event) {
    // event.preventDefault();

    for (let i = 0; i < optionsLevel.length; i++) {
        optionsLevel[i].classList.remove("options__level__active");
    }

    // event.currentTarget.classList.add('options__level__active');

    // console.log('options__level is clicked');
    // options__level.onClick = event;

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

for (let i = 0; i < optionsLevel.length; i++) {
    optionsLevel[i].addEventListener('click', onClick, false);
}

console.log(onClick);



