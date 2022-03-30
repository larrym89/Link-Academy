
var produse = [
    {
        name: 'Java Script Fundamentals',
        language: 'js',
        price: 10
    },
    {
        name: 'Python Fundamentals',
        language: 'python',
        price: 12
    },
    {
        name: 'Intro to React',
        language: 'js',
        price: 15
    }

]

produse.filter(product => product.price <= 12)
// inlantuirea metodelor (method chaining)
var total = produse
    .filter(product => product.language == 'js')
    .reduce((sum, product) => product.price + sum, 0)
document.write(total)
document.write('<br>')


var fruits = ['apple', 'orange', 'lemon', 'strawberry', 'melon', 'peach']

// numarul de caractere pentru fiecare fruct
document.write(fruits.map(fruit => fruit.length))
document.write('<br>')
// fructele cu litere mari
document.write(fruits.map(fruit => fruit.toUpperCase()))
document.write('<br>')

// fructele care au cel mult 5 caractere
document.write(fruits.filter(fruit => fruit.length <= 5))
document.write('<br>')
// fructele care contin litera 'a'
document.write(fruits.filter(fruit => fruit.search('a') != -1))
document.write('<br>')



var prices = [3, 5, 10, 15, 5, 11]

// suma totala
document.write(prices.reduce((price, sum) => price + sum))
document.write('<br>')

let text = 'Tomato Mango Potato'
let newText = text
    .split(' ')
    .map(el => el.toLowerCase())
    .join(',')

    document.write(newText)

// ordonam alfabetic ascendent
document.write('<br>')
document.write(fruits.sort())

// ordonam alfabetic descendent
document.write('<br>')
document.write(fruits.reverse())

// functia de comparare returneaza:
// 0 daca elementele sunt egale
// >0 daca primul e mai mare decat al doilea
// <0 daca primul e mai mic decat al doilea
// ordonam dupa lungimea cuvantului
document.write('<br>')
document.write(fruits.sort((fruit1, fruit2) => fruit1.length - fruit2.length))

 
// ordonam dupa lungimea cuvantului si alfabetic
document.write('<br>')
document.write(fruits.sort((fruit1, fruit2) => {
    if (fruit1.length != fruit2.length) {
        fruit1.length - fruit2.length
    } else {
        return fruit1 > fruit2 ? 1 : -1
    }
}))

// Amestecare aleatorie a unui array
document.write('<br>')
var shuffledFruits = fruits.sort(() => Math.random() - 0.5)
document.write(shuffledFruits)