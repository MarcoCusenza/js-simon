// PROGRAMMA
let lvl = 3;
let timesLeft = lvl;
const cpuNumbers = [];
let userGuessed = [];
cpuInput(lvl);

setTimeout(playGame, 3000);

document.getElementById("conferma").addEventListener("click", userInput);
document.getElementById("replay").addEventListener("click", playGame);
// END PROGRAMMA



// FUNZIONI
function playGame() {
    clearBoard();
    document.getElementById('inputLabel').innerHTML = `Inserisci un numero (ancora ${lvl})`;
}

function cpuInput(lvl) {
    document.getElementById('data-title').innerHTML = "Numeri da ricordare: <br>"
    for (let i = 0; i < lvl; i++) {
        cpuNumbers.push(randNumb(0, 100));
        if (i == lvl - 1) {
            document.getElementById('data-content').innerHTML += `${cpuNumbers[i]}`;
        } else {
            document.getElementById('data-content').innerHTML += `${cpuNumbers[i]} - `;
        }
    }
}

function userInput() {
    let input = document.getElementById("input");
    if (isNaN(parseInt(input.value))) {
        alert("ATTENZIONE: devi inserire un numero");
    } else if (parseInt(input.value) < 0 || parseInt(input.value) > 100) {
        alert("ATTENZIONE: devi inserire un numero compreso tra 1 e 100");
    } else {
        console.log("cpuNumbers:", cpuNumbers);
        timesLeft--;
        console.log(timesLeft);
        document.getElementById('inputLabel').innerHTML = `Inserisci un numero, ne mancano ${timesLeft}`;
        document.getElementById('resultLabel').innerHTML = `Hai già inserito ${(lvl - timesLeft)} numeri, ne mancano ${timesLeft}`;

        for (let i = 0; i < cpuNumbers.length; i++) {
            if (input.value == cpuNumbers[i]) {
                userGuessed.push(input.value);
                cpuNumbers[i] = "";
            }
        }
        console.log("userGuessed:", userGuessed);
    }
    input.value = "";

    //fine gioco
    if (timesLeft == 0) {
        endGame()
    }
}

function endGame() {
    document.getElementById("inputForm").classList.add("hidden");
    document.getElementById('data-title').innerHTML = `Hai indovinato ${userGuessed.length} numeri!`;
    const dataContent = document.getElementById('data-content');
    dataContent.innerHTML = '';
    for (let i = 0; i < userGuessed.length; i++) {
        if (i == userGuessed.length - 1) {
            dataContent.innerHTML += `${userGuessed[i]}`;
        } else {
            dataContent.innerHTML += `${userGuessed[i]} - `;
        }
    }
    document.querySelector('.data').classList.remove("hidden");
    document.getElementById('replay').classList.remove("hidden");
}

function clearBoard() {
    userGuessed = [];
    timesLeft = lvl;
    document.querySelector(".data").classList.add("hidden");
    document.getElementById('replay').classList.add("hidden");
    document.getElementById("inputForm").classList.remove("hidden");
    input.value = "";
}

function randNumb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
// END FUNZIONI