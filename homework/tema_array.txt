// ************************************************************
// Ordonati un array in ordine ascendenta -fara .sort()-
// ************************************************************

// Definimn array'ul si il afisam
var array = [5, 9, 2, 3, 7, 1, 4, 6, 8, 0]
console.log(array)

// Cream o bucla sa parcurgem elementele din array
for (i = 0; i < array.length; i++) {
    for (j = 0; j < i; j++) {
        // Verificam daca elementul[i] este mai mic decat elementul[j]
        if (array[i] < array[j]) {
            // Ne folosim de o variabila pentru a face schimb de valori intre i si j
            let x = array[i]
            array[i] = array[j]
            array[j] = x
        }
    }
}

console.log(array)

// ************************************************************
// Aflati cate litere distincte are un cuvant
// ************************************************************

// Definim variabila word si counter si le asociem valori
var word = 'osdfioi'
var counter = 0;

// Parcurgem literele din cuvant si verificam care sunt egale intre ele
for (i = 0; i < word.length; i++) {
    for (j = 0; j < i; j++) {
        if (word[j] == word[i]) {
            counter++ // Incrementam contorul cu fiecare litera care este la fel
        }
    }
}

// Afisam rezultatele
var distinctLetters = word.length - counter - 2
console.log('Numarul literelor ce se repeta: ' + counter)
console.log('Numarul literelor unice: ' + distinctLetters)

// ************************************************************
// Caesar's Cipher
// ************************************************************

// Introducem cuvantul in variabila string si il transformam in litere mici
var string = 'example'
string.toLowerCase()

// Variabila shift tine numarul "rotatii"
var shift = 2

var newString = []
var finalString = []

// Daca "shift nu este cuprins in intervalul 0-26 afisam un mesaj"
if (shift <= 26 && shift >= 0) {
    for (let i = 0; i < string.length; i++) { // Parcurgem literele din sir
        let chCode = string.charCodeAt(i) + shift //Extragem codul ASCII pentru caracterul respectiv si il convertim cu valoarea lui "shift"
        newString.push(String.fromCharCode(chCode)) // Cream noul sir cu literele convertite din codul ASCII
        finalString = newString.join("")// Unim literele din sir intr-un string
    }
} else {
    console.log('Introduceti un nr intre 1 si 26')
}
console.log(finalString.toLowerCase()) // Afisam rezultatul

// ************************************************************
