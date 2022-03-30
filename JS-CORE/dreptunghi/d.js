var dr = document.querySelector('#dreptunghi')
var cerc = document.querySelector("#cerc")

dr.addEventListener('click', minimize)
cerc.addEventListener('click', move)

// 'async' in fata functiei pentru a putea adauga delay
async function minimize() {
    for (let i = 10; i >= 0; i--) {
        // setam delay in milisecunde
        await new Promise(r => setTimeout(r, 30))
        dr.style.height = i + 'em'
        dr.style.width = i + 'em'
    }
    
}

async function move() {
    for (let i = 10; i < 200; i++) {
        // setam delay in milisecunde
        await new Promise(r => setTimeout(r, 10))
        cerc.style.top = cerc.style.left = i + 'px'
        
    }
    cerc.removeEventListener('click', move)
}