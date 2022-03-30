var scores = [50, 65, 79, 23, 10, 3, 91, 33, 13, 22]

document.write('Primul scor este: ' + scores[0] + '<br>')
document.write('Ultimul scor este: ' + scores[9] + "<br>")

// Determinare maxim dintr-un array
var max = 0
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
        max = scores[i]
    }    
}

document.write('Maximul este: ' + max + '<br>')


// Ordonare array
scores.sort()
document.write(scores + '<br>')

var fruits = ['orange', 'apple', 'banana', 'mango', 'grapes']

fruits[0] = 'lemon'

// push adauga la sfarsitul arrayului
fruits.push('kiwi')

// adauga la inceputul arrayului 
fruits.unshift('pear')

fruits.sort()
document.write(fruits + '<br>')

// Splice sterge un element string.splice(pozitie, nrElements)
// sterge si adauga string.splice(pozitie, nrElements, 'newWlement')
fruits.splice(1, 1)
document.write(fruits + '<br>')


var words = ['hello', 'JavaScript', 'Visual Studio', 'if', 'object', 'while']

var upperWords = []

for (let word of words) {
    //  O alta varianta - word[0].toUpperCase() == word[0]
    // word[0] este prima litera, verificam daca se afla intre A-Z 
    if (word[0] >= 'A' && word[0] <= 'Z') {
        upperWords.push(word)
    }
}
upperWords.sort()
document.write(upperWords + '<br>')