
let singular = ['Tomato', 'Mango', 'Potato']
console.log('Singular = ' + singular)

let plural = singular.filter(el => el.length == 5).map(el => el + 's')
console.log('Plural = ' + plural)

let sixLetterWords = singular.filter(el => el.length == 6)
console.log('Six Letter Words = ' + sixLetterWords)

let pluralSixLetterWords = sixLetterWords.map(el => el + 'es').sort()
console.log('Plural Six Letter Words = ' + pluralSixLetterWords)


// *******************************************************************

function caesar(word, shift) {
    shift = shift % 26 // Obtinem intotdeauna un nr cuprins intre 0-25
    var lowercase = word.toLowerCase() // Transformam in litere mici
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('') // Transformam stringul in array
    var newWord = ''


    for (var i = 0; i < lowercase.length; i++) { // Parcurgem fiecare litera din cuvant
        var currentLetter = lowercase[i] // Extragem fiecare litera in variabila
        var currentIndex = alphabet.indexOf(currentLetter) // Obtinem indexul literei
        var newIndex = currentIndex + shift // Incrementam indexul literei cu valoarea dorita

        // Conditionam ca valorile sa ramana intre 0 - 26
        if (newIndex > 25) { 
            newIndex = newIndex - 26 
        } else if (newIndex < 0) {
            newIndex = 26 + newIndex
        }

        newWord += alphabet[newIndex] // Cream un now string cu noile litere
    }

    console.log(newWord)  // Afisam rezultatul
}


caesar('example', 1)

