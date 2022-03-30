var p = document.getElementById('greenplanet')
var p2 = document.getElementById('redplanet')

p.innerText = '<b>An alien appeared</b>'
p.innerHTML = '<b>An alien appeared</b>'

// putem seta stilul direct din js
//recomandat este sa folosim css + clase
// p.style.color = '#64a4c5'
// p.style.backgroundColor = 'pink'

// Adauga o clasa elementului
p.classList.add('warning')

// pentru a sterge o clasa folosim .class.remove
// p.classList.remove('warning')

// *******************************************
//Creare element nou
var newElement = document.createElement('p')
newElement.innerText = 'New Element with append child'

// e.appennd(elem) - adauga la sfarsitul elementului e dar inauntrul acestuia
// e.prepend(elem) - adauga la inceputul elementului e dar inauntrul acestuia
// e.before(elem) - adauga inainte de elementul e
// e.after(elem) - adauga dupa elementul e

// Punem elementul inainte de un element selectat
p2.before(newElement)

// Sterge un element complet din HTML
// document.querySelector('#blueplanet').remove()

// ************EVENTS***********

// Executa functia changeMessage cand se da click pe input
document.querySelector('input').addEventListener('click', changeMessage)

function changeMessage() {
    document.querySelector('#redplanet').classList.add('warning')
}