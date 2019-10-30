// alert("hello world!!!")
// 여기는 주석입니다.

document.write('<h1>hello world</h1>')

//  h1 태그 가져오기
// document.querySelector('h1')

//  가져온 태그의 내부 text를 바꿈 
// document.querySelector('h1').innerText = "bye"

// var name = "seonwoong"

// console.log(name)

// var b = 30

// for (var b = 0; b < 10; b++) {
//     console.log(b)
// }
// console.log('!!!!!!!!!')
// console.log(b)

let name = 'seonwoong'
// const location = 'GJ'

document.write(name)

name = "nam"
document.write(name)

// // const는 재할당불가
// const loca = 'GJ'
// document.write(loca)

// loca = 'seoul'
// document.write(loca)

const first_name = 'seonwoong'
const last_name = "name"

const full_name = last_name + first_name

document.write('<h1>' + full_name + '</h1>')
document.write(`<h1>${full_name}</h1>`)
console.log(`<h1>${full_name}</h1>`)

const userName = prompt("hello who are you???")
let message = ``
document.write(message)

if (userName === 'change') {
	message = `<h1>admin page</h1>`
} else if (userName === 'happy') {
	message = `<h1>happy coding</h1>`
}
else {
	message = `<h1>hello! ${userName}</h1>`
}
document.write(message)

const num1 = 0
const num2 = "0"

console.log(num1 == num2)
console.log(num1 === num2)