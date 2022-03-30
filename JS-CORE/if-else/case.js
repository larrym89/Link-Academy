
var date = new Date
var dayOfWeek = date.getDay()

console.log(dayOfWeek)

switch (dayOfWeek) {
    case 1:
        console.log('Luni')
        break;
    case 2:
        console.log('Marti')
        break;
    case 3:
        console.log('Marti')
        break;
    case 4:
        console.log('Joi')
        break;
    case 5:
        console.log('Vineri')
        break;
    case 6:
        console.log('Sambata')
        break;
    case 7:
        console.log('Duminica')
        break;
    default:
        console.log('Necunoscut')
        break;
}