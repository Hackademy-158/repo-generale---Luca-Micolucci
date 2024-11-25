




// Array iniziale dei contatti
let contacts = [
    { 'id': 1, 'name': 'Nicola' },
    { 'id': 2, 'name': 'Fabio' },
    { 'id': 3, 'name': 'Luca' },
    { 'id': 4, 'name': 'Giulia' }
];

contacts.sort(function(a,b){
    return a - b;
})

console.log(contacts);
