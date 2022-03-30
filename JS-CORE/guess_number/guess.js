// Selectam butonul 'Reset' si ii adaugam event dunctia reset()
document.querySelector('#reset').addEventListener('click', reset)

// Selectam butonul 'Check' si ii adaugam event functia checkNumber()
document.querySelector("#check").addEventListener('click', checkNumber)

// Initializam variabila result pentru a afisa un mesaj
var result = document.querySelector('#result>p')

// Generaza un numar aleatoriu intre 0 si 100 - querry
//un query returneaza o valoare folosind 'return'
var chosenNumber = randomNumber(100)

function randomNumber(max) {
    return Math.round(Math.random() * max)
}



// Definim functia checkNumber() - comanda
// comanda nu returneaza nimic
function checkNumber() {

    // .value reprezinta valoarea introdusa in input
    let checkedNumber = document.querySelector('#number').value
    
    // Comparam checkedNumber cu chosenNumber si afisam mesaj
    if (chosenNumber == checkedNumber) {
        result.innerText = 'You Guessed! Congratulations!'
    } else if (chosenNumber > checkedNumber) {
        result.innerText = 'The number choosed is bigger'
    } else {
        result.innerText = 'The number choosed is smaller'
    }
}

// // Definim functia play()
function reset() {
    result.innerText = 'Guess the number'
    chosenNumber = Math.round(Math.random() * 100)
}

//https://chat.whatsapp.com/LwHd9q8fKVi6kn6O0vWleO

// var x = 0;
// var y = 0;
// for (z = 0; z < 5; z++) {
//     if ((++x > 2) || (++y > 2)) {
//         x++
//     }
// }
// console.log(x, y)