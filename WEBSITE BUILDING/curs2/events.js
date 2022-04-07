// ! Set attribute on <body> element onload="foo()" and onlcick="foo()"
// function sayHello() {
//     alert("Welcome!")
// }

// ! Click counter function
// var counter = 0
// function countClick() {
//     counter = counter + 1
//     document.getElementById("num_of_clicks").innerHTML = counter
// }

// ************************************

// !Alert user when tab is closed
window.addEventListener('beforeunload', (event) => {
    // Cancel the event as stated by the standard.
    event.preventDefault()
    // Chrome requires returnValue to be set.
    event.returnValue = ""
})

// !Function to detect what key is pressed
function keyPress() {
    
}