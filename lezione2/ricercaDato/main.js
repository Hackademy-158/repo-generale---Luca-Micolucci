



function contaCifre(numero) {
    let numeroStringa = numero.toString();
    
    if (numeroStringa.length === 1) {
        return "1 cifra";
    } else {
        return `${numeroStringa.length} cifre`;
    }
}

// Esempi di utilizzo:
console.log(contaCifre(9));   // "input: 9"
console.log(contaCifre(99));  // "input: 99 "
console.log(contaCifre(7)); // "1 cifre"
console.log(contaCifre(458437)); // "6 cifre"