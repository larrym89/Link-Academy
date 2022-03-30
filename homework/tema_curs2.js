// **************************************************************
// Exercitiul cu varstele si generatiile

// Solutia 1
// Declaram variabila age - de asemenea putem introduce de la tastatura
// printru-un alert prompt

var age = 88
// var age = prompt('Please enter your age:')

// Verificam conditiile de varsta si afisam mesajul corespunzator
if (age <= 6) {
  console.log('You are from the Alpha generation')
} else if (age > 6 && age <= 20) {
  console.log('You are from the Generation Z period')
} else if (age > 20 && age <= 35) {
  console.log('You are from the Generation Y period')
} else if (age > 35 && age <= 50) {
  console.log('You are from the Generation X period')
} else if (age > 50 && age <= 69) {
  console.log('You are from the Babyboomers generation')
} else {
  console.log('You are from the Builders generation')
}

// **************************************************************

// Solutia2
// Calculam varsta in functie de anul nasterii
var date = new Date();
var currentYear = date.getFullYear();
var birthYear = 1989
// var birthYear = prompt('Please enter your birth year:')
var age = currentYear - birthYear


// Verificam conditiile de varsta si afisam mesajul corespunzator
if (age <= 6) {
  console.log('You are from the Alpha generation')
} else if (age > 6 && age <= 20) {
  console.log('You are from the Generation Z period')
} else if (age > 20 && age <= 35) {
  console.log('You are from the Generation Y period')
} else if (age > 35 && age <= 50) {
  console.log('You are from the Generation X period')
} else if (age > 50 && age <= 69) {
  console.log('You are from the Babyboomers generation')
} else {
  console.log('You are from the Builders generation')
}
// **************************************************************
// Exercitiul ASCII
// In ASCII 65 = A , 66 = B .... 90 = Z

// Declaram variabila 'i' incepand de la numarul 65 (A)
var i = 65

// Parcurgem numerele de la 65 la 90
while(i <= 90) {}  
// in variabila 'k' intra numerele de la 65 la 90 ce ulterior 
//le transformam in caractere cu functia obiectului String
  var k = String.fromCharCode(i)
  console.log(i + ' ' + k)
  i++
}

// **************************************************************
// Exercitiul cu Tabla inmultirii
//Solutia 1
//Declaram variabilele
var n = 5
var i = 1

// Parcurgem numerele de la 1 la 9 si le inmultim cu 'n'
while (i < 9) {
  console.log(n + ' x ' + i + ' = ' + n * i)
  i++
}

// Solutia 2 
while (var i = 1; i <= 9; i++) {
  console.log(n + ' x ' + i + ' = ' + n * i)
}
// **************************************************************