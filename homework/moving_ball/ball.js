// Selectam div-ul cu id-ul #ball si ii adaugam eveniment pe click
var ball = document.querySelector('#ball')
ball.addEventListener('click', moveBall)

// Definim functia moveBall()
async function moveBall() {
    for(let i = 10; i < 240; i++) {
        await new Promise(r => setTimeout(r, 10))
        ball.style.top = i + 'px'
        ball.style.left = i + 'px'

    }
}