// setInterval(myTimer, 1000);

// function myTimer() {

var letter = document.querySelector(".letter_box")
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
letter.innerText = randomCharacter

// }




// letter.addEventListener('click', move)
// function move() {
//     var docWidth = screen.width - 200;
//     var docHeight = screen.height - 200;
//     var divWidth = letter.offsetWidth
//     var divHeight = letter.offsetHeight
//     var heightMax = docHeight - divHeight
//     var widthMax = docWidth - divWidth


//     letter.style.left = 'Math.floor(Math.random() * widthMax)'
//     letter.style.top = 'Math.floor(Math.random() * heightMax)'
// }