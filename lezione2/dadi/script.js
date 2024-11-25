

function giocaDadi(numberOfShots) {
    
    // generatore di numeri
    function genN() {
        return Math.floor(Math.random() * 6) + 1;
    }
    
    // calcolo punteggio
    function calcola() {
        let punteggio = 0;
        for (let i = 0; i < numberOfShots; i++) {
            punteggio += genN();
        }
        return punteggio;
    }
    
    // Calcola il punteggio per i due giocatori
    let Giocatore1 = calcola();
    let Giocatore2 = calcola();
    
    // Stampa i punteggi
    console.log(`Punteggio Giocatore 1: ${Giocatore1}`);
    console.log(`Punteggio Giocatore 2: ${Giocatore2}`);
    
    // Determina il vincitore
    if (Giocatore1 > Giocatore2) {
        console.log("Il Giocatore 1 ha vinto!");
    } else if (Giocatore2 > Giocatore1) {
        console.log("Il Giocatore 2 ha vinto!");
    } else {
        console.log("È un pareggio!");
    }
}

// 5 tiri per giocatore
giocaDadi(5);