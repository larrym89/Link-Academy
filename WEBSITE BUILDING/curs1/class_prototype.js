
// function Person(first, last, age, eyecolor) { //"clasa" cu rol de constructor
//     this.firstName = first
//     this.lastName = last
//     this.age = age
//     this.eyeColor = eyecolor
// }

// Person.prototype.nationality = "romana"
// Person.prototype.name = function() {
//     return this.firstName + " " + this.lastName + " este " + this.nationality
// }

// var persoana = new Person('Laurentiu', 'Costin', '31', 'verzi')
// persoana.nationality = "grec"
// console.log(persoana)
// console.log(persoana.name())

// ********************************************************************

// Adaugati clasei Array posibilitatea de a elimina toate numerele pare prin
// metoda removeEven, folosind proprietatea prototype

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr)
// Array.prototype.removeEven = function() {
//     for (i = 0; i < this.length; i++) {
//         if (this[i] % 2 === 0) {
//             this.splice(i, 1)
//         }
//     }
// }


// arr.removeEven()
// console.log(arr)

// *****************************************************************