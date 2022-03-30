var car = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    batteryCapacity: 100,
    averageConsumption: 8,
    batteryCharge: 100,
    drive: function (distance) {
        this.batteryCharge -= this.averageConsumption * distance / 100
        // document.write('Driving Car')
    },
    fullCharge: function () {
        this.batteryCharge = this.batteryCapacity
    },
    paint: function (color) {
        this.color = color
    }
}

document.write('The color of my car is ' + car.color)
document.write('<br>')
car.paint('black')
document.write('The color of my car is ' + car.color)
document.write('<br>')
car.drive(300)
document.write('Battery Charge: ' + car.batteryCharge + '%')
document.write('<br>')
car.fullCharge()
document.write('Battery Life: ' + car.batteryCharge)
