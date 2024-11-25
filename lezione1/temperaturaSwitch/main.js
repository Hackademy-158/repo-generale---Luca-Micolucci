
// input
let temperatura = -5;  


switch (true) {
    case (temperatura < -10):
    console.log("speriamo nevichi");
    break;
    case (temperatura < 0):
    console.log("tisanina e kinder fetta a letto");
    break;
    case (temperatura < 20):
    console.log("castagne e vino");
    break;
    case (temperatura >= 30):
    console.log("andare al centro commerciale per risparmiare sul condizionatore, state of mind");
    break;
    case (temperatura < 30):
    console.log("focaccia e peroni");
    break;
    default:
    console.log("Temperatura non valida");
}