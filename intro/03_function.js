// // 함수 선언식
// function add(num1, num2) {
//     return num1 + num2
// }
// console.log(add(2, 10))

// // 함수 표현식
// const sub = function (num1, num2) {
//     return num1 - num2
// }
// console.log(sub(10, 2))

//  화살표 함수 arrow function
// const ssafy1 = function (name) {
//     console.log(`hello ${name}`)
// }
// ssafy1('seonwoong')

// const ssafy2 = (name) => {
//     console.log(`hello ${name}`)
// }
// ssafy2('nam')

// //  화살표 함수 중괄호 생략, 표현식 하나일떄
// const ssafy3 = name => `hello ${name}`

// console.log(ssafy3('seonwoong'))

// let square = function (num) {
//     return num ** 2
// }

// square = (num) => {
//     return num ** 2
// }

// square = num => {
//     return num ** 2
// }

// square = num => num ** 2

// let noArgs = _ => 'no args'
// noArgs = () => 'no args'
// console.log(noArgs())

// const a = {}
// console.log(typeof a)

// let returnObject = () => {
//     key: 'value'()
// }

// const hello = (name = "noName") => `hello  ${name}`
// console.log(hello())

(function (name) {
    console.log(name)
})("seonwoong")