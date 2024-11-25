

function distributoreBevande() {
    // input
    let scelta;

    while (true) {
        // pop-up scelta 
        scelta = prompt("Seleziona una bevanda:\n1. Acqua\n2. Coca Cola\n3. Birra");

        if (scelta === "1") {
            console.log("E’ stata selezionata l’acqua");
            break;
        } else if (scelta === "2") {
            console.log("E’ stata selezionata coca cola");
            break;
        } else if (scelta === "3") {
            console.log("E’ stata selezionata birra");
            break;
        } else {
            console.log("Opzione non valida. Riprova.");
        }
    }
}

// loop
distributoreBevande();