// input
let v = 19;  


switch (true) {
    case (v < 18):
        console.log("Insufficiente");
        break;
    case (v >= 18 && v < 21):
        console.log("Sufficiente");
        break;
    case (v >= 21 && v < 24):
        console.log("Buono");
        break;
    case (v >= 24 && v < 27):
        console.log("Distinto");
        break;
    case (v >= 27 && v <= 29):
        console.log("Ottimo");
        break;
    case (v === 30):
        console.log("Eccellente");
        break;
    default:
        console.log("Valore non valido");
}
