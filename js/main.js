const btnPlay = document.querySelector(".play-btn");
const rowEl = document.querySelector(".row");
const scoreEl = document.querySelector(".message")


let timer;
let end;
let score;

function randomNumGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function listNumberGenerator(randomNumGen) {
    const randomNumebrList = [];
    while (randomNumebrList.length < 5) {
        const randomNum = randomNumGen(1, 100)

        if (!randomNumebrList.includes(randomNum)) {
            randomNumebrList.push(randomNum)
        }
    }

    return randomNumebrList;
}


function cardGenerator(randomNumebrList) {
    for (let i = 0; i < 5; i++) {
        const card = document.createElement("div")
        card.classList.add("bg-warning", "text-black", "col", "square");
        card.textContent = `${randomNumebrList[i]}`
        rowEl.append(card);
    }
}



btnPlay.addEventListener("click", () => {
    timer = 0;
    score = 0;
    rowEl.innerHTML = "";
    scoreEl.innerHTML = "";
    rowEl.classList.add("d-flex");
    const numberListPc = listNumberGenerator(randomNumGen);
    cardGenerator(numberListPc);
    console.log(numberListPc);
    userNumbers = [];


    end = setInterval(function () {
        timer++;
        console.log(timer);
        if (timer === 5) {
            clearInterval(end)
            rowEl.classList.add("d-none")
        }
    }, 1000);

    setTimeout(function () {
        for (let j = 0; j < 5; j++) {
            const userNumber = parseInt(prompt("Inserisci il numero(Da 1 a 100)"));
            if (isNaN(userNumber)) {
                userNumber = 0;
            } else if (!userNumbers.includes(userNumber)) {
                userNumbers.push(userNumber);
            }
            if (numberListPc.includes(userNumbers[j])) {
                score++;
            }
        }
        scoreEl.innerHTML = `Your Score is ${score}`;
        rowEl.classList.remove("d-none");
    }, 6000);


});

