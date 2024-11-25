// variabili per sapere l'età
let annoCorrente = new Date().getFullYear();
let annoNascita = 1995;

// calcolo età
let eta = annoCorrente - annoNascita;

// calcolo per i 100 anni
let anniPer100 = 100 - eta;


console.log(`Hai ${eta} anni e ti mancano ${anniPer100} anni per compierne 100.`);