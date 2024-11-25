// input
let numeroTotaleGatti = 44;
let num1 = 2;
let num2 = 6;
let num3 = 7;


// divisione
let numeroFile = Math.floor(numeroTotaleGatti / num2);

// avanzo
let gattiMancanti = num2 - (numeroTotaleGatti % num2);

// moltiplicazione
let gattiMulti = num2 * num3;

// Stampiamo il risultato in console
console.log(`${numeroTotaleGatti} gatti,in fila per ${num2} col resto di ${numeroTotaleGatti % num2},si unirono compatti,in fila per ${num2}, coi baffi allineati,in fila per ${num2} col resto di ${numeroTotaleGatti % num2},le code attorcigliate,in fila per ${num2} col resto di ${numeroTotaleGatti % num2}.${num2} per ${num3} ${gattiMulti},più ${num1} ${numeroTotaleGatti}!`);



