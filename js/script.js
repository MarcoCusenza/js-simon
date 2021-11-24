// PROGRAMMA
let lvl = 3;
let timesLeft = lvl;
let userNumbers = [];
const cpuNumbers = [];
const guessed = [];
let corretti = 0;
cpuInput(lvl);

setTimeout(play, 3000);

document.getElementById("conferma").addEventListener("click", userInput);
// END PROGRAMMA



// FUNZIONI
function play() {
    document.getElementById('data').classList.add("hidden");
    document.getElementById("inputForm").classList.remove("hidden");
    userNumbers = [];
    timesLeft = lvl;
    input.value = "";
    document.getElementById('inputLabel').innerHTML = `Inserisci un numero, ne mancano ${timesLeft}`;
}

function cpuInput(lvl) {
    document.getElementById('data').innerHTML = "Numeri da ricordare: "
    for (let i = 0; i < lvl; i++) {
        cpuNumbers.push(randNumb(0, 100));
        if (i == lvl - 1) {
            document.getElementById('data').innerHTML += `${cpuNumbers[i]}`;
        } else {
            document.getElementById('data').innerHTML += `${cpuNumbers[i]} - `;
        }
    }
}

function userInput() {
    let input = document.getElementById("input");
    userNumbers.push(parseInt(input.value));
    console.log("cpuNumbers:", cpuNumbers);
    console.log("userNumbers:", userNumbers);
    timesLeft--;
    document.getElementById('inputLabel').innerHTML = `Inserisci un numero, ne mancano ${timesLeft}`;
    document.getElementById('resultLabel').innerHTML = `Hai già inserito ${userNumbers.length} numeri, ne mancano ${timesLeft}`;

    for (let i = 0; i < cpuNumbers.length; i++) {
        if (input.value == cpuNumbers[i]) {
            guessed.push(input.value);
            cpuNumbers[i] = "";
        }
    }

    input.value = "";

    //fine gioco
    if (timesLeft == 0) {
        endGame()
    }
}

function endGame() {
    document.getElementById("inputForm").classList.add("hidden");
    const data = document.getElementById('data');
    data.innerHTML = `Hai indovinato ${guessed.length} numeri!<br>Valore dei numeri indovinati:`;
    for (let i = 0; i < guessed.length; i++) {
        if (i == guessed.length - 1) {
            data.innerHTML += ` ${guessed[i]}`;
        } else {
            data.innerHTML += ` ${guessed[i]},`;
        }
    }
    data.classList.remove("hidden");
}

function randNumb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
// END FUNZIONI