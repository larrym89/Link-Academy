
function Student(id, nume, varsta, nota1, nota2) {

    this.id = id
    this.nume = nume
    this.varsta = varsta


    // this.salut = function () {
    //     console.log(`Numele meu este ${this.nume}`)
    // }

    // this.examen = function () {
    //     this.nota1 = parseInt(nota1)
    //     this.nota2 = parseInt(nota2)
    //     console.log(`Am fost la examene`)
    // }

    // this.calMedia = function () {
    //     let media = (this.nota1 + this.nota2) / 2
    //     console.log(`Media este ${media}`)
    // }
}
Student.prototype.salut = function(Student) {
    console.log(`Numele meu este ${Student.name}`)
}