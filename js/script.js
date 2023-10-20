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
const numbers = document.getElementById('numbers');
while (numeriGenerati.length < numeriDaGenerare) {
    if(!numeriGenerati.includes(getRndInteger(1, 100))){
        numeriGenerati.push(getRndInteger(1,100));
    }
    numbers.innerHTML = numeriGenerati;
}





//UTILITY
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
