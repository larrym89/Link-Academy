// Afisam un prompt pentru introducerea variabilelor
var w = parseInt(prompt('Width: '))
var h = parseInt(prompt('Height: '))

// Afisam prima linie de '#'
for (i = 0; i < w+2; i++) {
    document.write('#')
}
document.write('<br>')

// Afisam '0' insotite de '#' la inceputul si sfarsitul sirului
// Atat pe orizontala cat si pe verticala
for (i = 0; i < h; i++) {
    document.write('#')
    for (j = 0; j < w; j++) {
        document.write(0)
    }
    document.write('#')
    document.write('<br>')
}

// Afisam si ultima linie cu '#'
for (i = 0; i < w + 2; i++) {
    document.write('#')
}