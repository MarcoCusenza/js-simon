// PROGRAMMA
let lvl = 5;
let timesLeft = lvl;
let cpuNumbers = [];
let userGuessed = [];

document.getElementById("conferma").addEventListener("click", userInput);
document.getElementById("play").addEventListener("click", function () {
    playPreGame();
    setTimeout(playGame, 20000);
});
// END PROGRAMMA



// FUNZIONI
function playPreGame() { //Prepara il gioco e mostra i numeri da ricordare
    clearBoard();
    document.getElementById("play").classList.add("hidden");
    cpuInput(lvl);
}

function playGame() { //Mostra il form di input
    document.querySelector(".data").classList.add("hidden");
    document.getElementById("inputForm").classList.remove("hidden");
    document.getElementById('inputLabel').innerHTML = `Inserisci un numero (ancora ${lvl})`;
    document.getElementById("input").focus();
}

function cpuInput(lvl) {//Calcola e scrive i numeri random da ricordare
    document.querySelector(".data").classList.remove("hidden");
    document.getElementById('data-title').innerHTML = "Numeri da ricordare: <br>"
    document.getElementById('data-content').innerHTML = "";
    for (let i = 0; i < lvl; i++) {
        cpuNumbers.push(randNumb(0, 100));
        if (i == lvl - 1) {
            document.getElementById('data-content').innerHTML += `${cpuNumbers[i]}`;
        } else {
            document.getElementById('data-content').innerHTML += `${cpuNumbers[i]} - `;
        }
    }
}

function userInput() {//Aggiorna il gioco dopo l'inserimento di un numero, controlla se il numero è tra quelli giusti
    document.getElementById('inputLabel').innerHTML = `Inserisci un numero (ancora ${lvl})`;
    let input = document.getElementById("input");
    document.getElementById("input").focus();
    if (isNaN(parseInt(input.value))) {
        alert("ATTENZIONE: devi inserire un numero");
    } else if (parseInt(input.value) < 0 || parseInt(input.value) > 100) {
        alert("ATTENZIONE: devi inserire un numero compreso tra 1 e 100");
    } else {
        timesLeft--;
        document.getElementById('inputLabel').innerHTML = `Inserisci un numero`;
        document.getElementById('resultLabel').innerHTML = `Hai già inserito ${lvl - timesLeft} numeri, ne mancano ${timesLeft}`;

        for (let i = 0; i < cpuNumbers.length; i++) {
            if (input.value == cpuNumbers[i]) {
                userGuessed.push(input.value);
                cpuNumbers[i] = "";
            }
        }
    }
    input.value = "";

    //fine gioco
    if (timesLeft == 0) {
        endGame()
    }
}

function endGame() {//conclude il gioco e mostra il risultato
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
    document.getElementById('play').innerHTML = "Play Again";
    document.getElementById('play').classList.remove("hidden");
}

function clearBoard() {//prepara una nuova partita
    userGuessed = [];
    cpuNumbers = [];
    timesLeft = lvl;
    document.querySelector(".data").classList.remove("hidden");
    document.getElementById('play').classList.remove("hidden");
    document.getElementById("inputForm").classList.add("hidden");
    input.value = "";
    document.getElementById('resultLabel').innerHTML = "";
}

function randNumb(min, max) {//calcola numeri random in un intervallo min-max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//NEXT STEP
// function timer(){
//     const interval = setInterval();
// }

// END FUNZIONI