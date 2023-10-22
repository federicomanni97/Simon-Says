/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

const min = 1;
const max = 100;
const numeriDaGenerare = 5;
const numeriGenerati = [];
const numeriUtente = [];
const correctNumbers = [];
const wrongNumbers = [];
const numbers = document.getElementById('numbers');
const input = document.querySelectorAll('input');
const btn = document.querySelector('button');
const interval = setTimeout(hideNumber, 5000);
const finalResult = document.getElementById('result');
let msg;
let numeriIndovinati = 0;


while (numeriGenerati.length < numeriDaGenerare) {
    if(!numeriGenerati.includes(getRndInteger(min, max))){
        numeriGenerati.push(getRndInteger(min,max));
    }
}
numbers.classList.remove('d-none');
numbers.innerHTML = numeriGenerati;
console.log(numeriGenerati);

btn.addEventListener('click', function(){
    for (let i = 0; i < input.length; i++) {
        if (!isNaN(parseInt(input[i].value))) {
            numeriUtente.push(parseInt(input[i].value));
        }
        /*
        if (numeriGenerati[i] === numeriUtente[i]) {
            correctNumbers.push(numeriUtente[i]);
            numeriIndovinati++;
        } */
    }
    for (let x = 0; x <= 5; x++) {
        if (numeriGenerati.includes(numeriUtente[0])) {
            let rightNumber = numeriUtente.shift()
            correctNumbers.push(rightNumber) 
            numeriIndovinati++
        } else {
            let numeriSbagliati = numeriUtente.shift()
            wrongNumbers.push(numeriSbagliati)
        }

    }
    if (correctNumbers.length === numeriDaGenerare) {
        msg = 'Hai indovinato ' + numeriIndovinati + ' numeri';
    } else {
        msg = 'Hai perso';
    }
    finalResult.innerHTML = msg + correctNumbers;  
})

function hideNumber(){
    numbers.classList.add('d-none');
}

//UTILITY
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
