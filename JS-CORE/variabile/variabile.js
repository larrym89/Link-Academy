// ---Declaram variabilele---

// punem data curenta in variabila date
var date = new Date();

// luam orele si minutele din variabila(date)-data curenta-
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

// am adaugat la un sir variabilele 'hour' 'minutes' 'seconds'- (concatenare)
var message = "Hello! Este ora " + hour + ":" + minutes + ":" + seconds;

// o variabila fara valoare
var city;

// o variabila de tip boolean
var isRaining = true;

console.log(message);  // Afiseaza mesajul in consola

document.write('<h1>' + message + '</h1>');  //Afiseaza mesajul in HTML
