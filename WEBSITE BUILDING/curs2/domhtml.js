// ! Selectare element
// function addElement() {
//     // 1.Create a new element
//     const myp = document.createElement('p')
//     // 2. Set text
//     const mytext = document.createTextNode('Al doilea paragraf')
//     // 3. Add text
//     myp.appendChild(mytext)
//     // 4. Set attribute
//     myp.setAttribute('title', 'titlul paragraf')
//     // 5. Set parent element
//     const mybody = document.getElementsByTagName('body')[0]
//     // 6. Add child element
//     mybody.appendChild(myp)
// }
// *****************************************


// ! Functie pura
// function changeText(myTarget, myMessage) {
//     var target = document.getElementById(myTarget)
//     target.innerHTML = myMessage
// }

// changeText('target1', "Coocooo")
// changeText('target2', 'Kaaankiii')
// *****************************************


// ! Selectare mai multe elemente
// let myp = document.getElementsByTagName('p')
// for (let i = 0; i <= myp.length; i++) {
//     if (i == 0 || i == 2 || i == 4) {
//         myp[i].style.color = "orangered"
//     }    
// }
// *****************************************

// ! Adaugare atribute si clase
// let myp = document.getElementsByTagName('p')
// for (let i = 0; i <= myp.length; i++) {
//     if (i == 0 || i == 2 || i == 4) {
//         myp[i].classList.add('classy')
//         myp[i].setAttribute('name', 'attry')
//     }    
// }

// document.querySelectorAll('p').forEach(elem => elem.style.border = "1px solid black")
