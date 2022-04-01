var paine = { //obiect
    nume: "Franzela",
    pret: 2
}

var apa = { //obiect
    nume: "Dorna",
    pret: 2.25
}

var cos = [] //array de iobiecte
var valoareInitiala = 0
cos.push(paine)
cos.push(paine)
cos.push(apa)
cos.push(apa)
cos.push(apa)

var total = cos.map(produs => produs.pret).reduce((previousValue, currentValue) => previousValue + currentValue, valoareInitiala)

document.getElementById('total').innerHTML = total
console.log(total)