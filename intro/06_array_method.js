// let colors = ['red', 'green', 'blue']

// for (let color of colors) {
//     console.log(color)
// }

// colors.forEach(function (color) {
//     console.log(color)
// })

// colors.forEach(function (color, idx, array) {
//     console.log(color, idx, array)
// })

// function(){} ==>> ()=>{}
// colors.forEach((color) => {
//     console.log(color)
// })

// colors.forEach(color => {
//     console.log(color)
// })

// colors.forEach(color => console.log(color))

// function handlePosts() {
//     const posts = [{
//             id: 50,
//             title: "javascript"
//         },
//         {
//             id: 100,
//             title: "python"
//         },
//         {
//             id: 123,
//             title: "css"
//         }
//     ]
//     for (let i = 0; i < posts.length; i++) {
//         console.log(posts[i])
//         console.log(posts[i].id)
//         console.log(posts[i].title)
//     }
// }

// handlePosts()

// function footPosts() {
//     const posts = [{
//             id: 50,
//             title: "javascript"
//         },
//         {
//             id: 100,
//             title: "python"
//         },
//         {
//             id: 123,
//             title: "css"
//         }
//     ]
//     for (let i = 0; i < posts.length; i++) {
//         console.log(posts[i])
//         console.log(posts[i].id)
//         console.log(posts[i].title)
//     }

//     posts.forEach(post => {
//         console.log(post)
//         console.log(post.id)
//         console.log(post.title)
//     })
// }


// footPosts()

// const images = [
//     {height:10,width:20},
//     {height:14,width:25},
//     {height:50,width:15}
// ]
// const areas= []

// images.forEach (len =>{
//     areas.push(len.height*len.width)
// })


// console.log(areas)

// const numbers = [1,2,3,4,5]
// const doubleNumbers = []

// numbers.forEach(function(number)
// {
//     doubleNumbers.push(number*2)
// })

// console.log(doubleNumbers)

// const double = numbers.map((number) =>number*2)

// console.log(double)

// const images = [
//     {height:10,width:20},
//     {height:14,width:25},
//     {height:50,width:15}
// ]

// const b = images.map(function(image){
//     return image.height * image.width
// })
// console.log(b)

// const areas = images.map(image=>image.height*image.width)
// console.log(areas)

// const numbers = [1,2,3,4,5]

// const evenNumbers = numbers.filter(function(number){
//     return number % 2 ===0
// })
// console.log(evenNumbers)

// const products = [
//     {name: 'cucumber', type: 'vegetable'},
//     {name: 'banana', type: 'fruit'},
//     {name: 'carrot', type: 'vegetable'},
//     {name: 'apple', type: 'fruit'},
// ]

// const fruits = products.filter(function(f){
//     return f.type ==='fruit'
// })
// console.log(fruits)

//reduce
// const scores = [100,80,88,92,95,70]
// const total = scores.reduce((total,score)=>{
//     return total += score
// },0)

// console.log(total)

// find 사용
// filter와 달리 검색할 값이 여러개라도 
// 가장 먼저 만나는 값만 출력
const users = [
    {name:"change", location:"gj"},
    {name:"justin", location:"gm"},
    {name:"tak", location:"dj"},
    {name:"junho", location:"dj"},
    {name:"neo", location:"so"},
]

const user = users.find(function(user){
    return user.location ==='dj'
})
console.log(user)