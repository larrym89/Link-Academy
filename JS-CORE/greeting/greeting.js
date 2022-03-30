// Declaram variabilele
var date = new Date()
var hour = date.getHours()

// daca e dimineata scriu 'Buna Dimineata!'
// dimineata = ora pana in 12
// altfel daca este pranz scriu 'Pofta Buna!'
// daca este amizaza scriu 'Buna ziua!'
// daca este seara scriu 'Buna seeara!'
// daca este noapte scriu 'Noapte Buna!'
// ************************************

// Solutia 1
if (hour < 4) {
    document.write('Noapte Buna!')
}
else if (hour < 12) {
    document.write('Buna Dimineata!')    
} else if (hour === 12) {
    document.write('Pofta Buna!')
} else if (hour < 17) {
    document.write('Buna Ziua!')
} else if (hour < 22) {
    document.write('Buna Seara!')
} else {
    document.write('Noapte Buna!')
}
// ************************************

// Solutia 2
var startOffNight = 22
var startOfMorning = 4
var startOfAfternoon = 12
var startOfEvening = 17

if (hour >= startOffNight) {
    document.write('Noapte Buna!')
}
// ************************************


// Solutia3
var isNight = hour > 22 && hour < 4

if (isNight) {
    document.write('Noapte buna!')
}
// ************************************