const me = {
    name: 'seonwoong',
    'phone number': '1234123123',
    product: {
        phone: 'iphone',
        notebook: 'mac',
    }
}

// console.log(me.name)
// console.log(me.product)
// console.log(me['phone number'])
// console.log(me.product.notebook)'

// let books = ['javascript', 'python']
// let comicbook = {
//     DC: ['superman', 'aquaman'],
//     Marble: ['IRON MAN']
// }

console.log(me)
const jsonData = JSON.stringify(me)
console.log(jsonData)