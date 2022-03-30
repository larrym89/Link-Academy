// for (let i = 0; i < 5; i++) {
//     console.log(i);    
// }


var max = 10;

for (i = 1; i <= max; i++){
    for (j = 1; j <= max; j++){
        var message = `${j} x ${i} = ${j*i} <br>`;
        document.write(message);   
    }
    document.write('<br>');
}
