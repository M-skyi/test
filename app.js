// window.addEventListener("DOMContentLoaded",function () {
//     let test = document.querySelectorAll(".block")
// let test1 = document.querySelector(".block")
// console.log(test)
// console.log(test1)

// let div = document.createElement("div")
// div.setAttribute("class","black")
// document.body.prepend(div)
// document.body.append(div)
// test1.before(div)
// test1.after(div)
// div.remove()

// console.log(div)
// })
// let test = document.querySelectorAll(".block")
// let test1 = document.querySelector(".block")
// console.log(test)
// console.log(test1)
// let div = document.createElement("div")
// div.setAttribute("class","black")
// document.body.prepend(div)
// document.body.append(div)
// console.log(div)
// test.forEach((item,i) => item.setAttribute("id",`red-${i + 1}`))
// for (let i = 0; i < test.length; i++) {
//     test[i].setAttribute("id",`red-${i + 1}`)
// }
// test.setAttribute("id","red")
// console.log(test)
/// стрілкова функція 
// let sum = (a,b) => a + b  
// let sum = (a,b) => {
//     let c = a + b 
//     return c
// }
// console.log(sum(2,5))

///делегування подій 

// let parentBlock = document.querySelector(".container")
// let childElement = document.querySelectorAll(".block")

// parentBlock.addEventListener("click",function (e){
//     let target = e.target

//     if (target.classList.contains("block") ) {
//         let div = document.createElement("div")
//         div.classList.add("block")
//         parentBlock.append(div)
//     }

//     if (target.classList.contains("container")) {
//         target.classList.add("change-color-container")
//     }

// })



let article = document.querySelectorAll(".article")
let btnClose = document.querySelectorAll(".remove")
let wrapper = document.querySelector(".wrapper")
let btnReadMore = document.querySelectorAll(".btn-read-more")
let nextArticle = document.querySelectorAll(".next-article")
console.log(btnReadMore)
console.log(nextArticle)

wrapper.addEventListener("click", function (e) {

    let target = e.target
    if (target.classList.contains("remove")) {
        target.parentElement.remove()
    }
    if (target.classList.contains("btn-read-more")) {
        target.nextElementSibling.classList.toggle("hidden-block-show")
    }
})

