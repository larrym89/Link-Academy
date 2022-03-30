var i = 2;
var j = 1;
var max = 10;

while (j <= max) {
    //String cu concatenare:
    var message = j + ' x ' + i +' = ' + j*i + '<br>';
    // String cu interpolare:
    message = `${j} x ${i} = ${j*i} <br>`
    document.write(message);
    j++;
}
