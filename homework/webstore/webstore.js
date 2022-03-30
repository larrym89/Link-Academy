
let products = [
    {
        name : "Buchet cu trandafiri",
        description : "Buchet cu trandafiri rosii si albi",
        price : 250,
        photo : "./img/buchetprimavara.jpg"
    }
]

document.querySelector("#buchet1 h3").innerText = products[0].name
document.querySelector("#buchet1 p").innerText = products[0].description
document.querySelector("#buchet1 span").innerText = products[0].price