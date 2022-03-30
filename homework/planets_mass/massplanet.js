// Definim variabilele
let currentWeight = document.querySelector("#number").value
let button = document.querySelector("#button")
button.addEventListener('click', foo)
let g =  6.67300E-11;


// Cream planetele
const MERCURY = { mass: 3.303e23, radius: 2.4397e6 }
const VENUS = { mass: 4.869e24, radius: 6.0518e6 }
const EARTH = { mass: 5.976e24, radius: 6.37814e6 }
const MARS = { mass: 6.421e23, radius: 3.3972e6 }
const JUPITER = { mass: 1.9e27, radius: 7.1492e7 }
const SATURN = { mass: 5.688e26, radius: 6.0268e7 }
const URANUS = { mass: 8.686e25, radius: 2.5559e7 }
const NEPTUNE = { mass: 1.024e26, radius: 2.4746e7 }


// Cream functiile
function surfaceGravity(planet) {
    return g * planet.mass / (planet.radius * planet.radius)
}

function surfaceWeight(currentWeight) {
    currentWeight * surfaceGravity(planet)
}

function foo() {
    planet = MERCURY
    document.querySelector("#mercury").innerText = surfaceWeight(currentWeight)
}