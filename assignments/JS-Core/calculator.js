

let a = parseInt(prompt('Introduceti primul numar: '))
let calc = prompt('Alegeti operatia: "+" , "-" , "*" , "/" :')
let b = parseInt(prompt('Introduceti al doilea numar: '))
let result

switch (calc) {
    case '+':
        result = a + b
        console.log(`${a} + ${b} = `, result.toFixed(2))
        break;

    case "-":
        result = a - b
        console.log(`${a} - ${b} = `, result.toFixed(2))
        break;

    case "*":
        result = a * b
        console.log(`${a} * ${b} = `, result.toFixed(2))
        break; 

    case "/":
        result = a / b
        console.log(`${a} / ${b} = `, result.toFixed(2))
        break;    
    
    default:
        console.log("Valorile nu au fost introduse corect. Reincarcati pagina")
        break;
}