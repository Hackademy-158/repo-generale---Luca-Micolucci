

// input
let v = 22; 

if (v < 18) {
    console.log("Insufficiente");
} else if (v >= 18 && v < 21) {
    console.log("Sufficiente");
} else if (v >= 21 && v < 24) {
    console.log("Buono");
} else if (v >= 24 && v < 27) {
    console.log("Distinto");
} else if (v >= 27 && v <= 29) {
    console.log("Ottimo");
} else if (v === 30) {
    console.log("Eccellente");
} else {
    console.log("Valore non valido");
}
