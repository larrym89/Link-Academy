document.getElementById('check').addEventListener('click', findLongestWord)

function findLongestWord() {

    let text = document.getElementById('text').value
    // 0. eliminam toate caracterele speciale,in afara de spatii(semne de ,punctuatie, )
    // 1. gasim cuvintele si le punem intr`un array
    // 2. gasim cel mai lung cuvant din array(sort, reduce)
    // \w - expresie regulatea
    // .replaceAll(/[,.+-]/ig, '') -  expresii regulate(regexp)


    let words = text
                // .replaceAll('\w', '')
                .replaceAll(/[,.+-]/ig, '')
                .split(' ')

   let longest = words.reduce((w1, w2) => w1.length > w2.length ? w1 : w2)

    document.write(longest)
}