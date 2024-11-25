// trova maggiore
function trovaMaggiore(numbers) {
    return Math.max(...numbers);
}

// trova minore
function trovaMinore(numbers) {
    return Math.min(...numbers);
}

// valori da esaminare
let numbers = [10, 12, 78, -4, -20, 11];

console.log("Il maggiore numero è:", trovaMaggiore(numbers)); // 78
console.log("Il minore numero è:", trovaMinore(numbers));   // -20
