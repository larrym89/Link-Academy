
// conversie de la obiect la JSON
var hero = {
    name: 'Superman',
    power: 1000,
    life: 100
}



let json = JSON.stringify(hero)

document.write(json)

// conversie de la JSON la obiect
json = '{"name":"Superman","power":1000,"life":100}'

hero = JSON.parse(json)

console.log(hero)
