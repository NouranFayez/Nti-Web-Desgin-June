// console.log(document.getElementById("h1_element"))
// console.log(document.getElementsByTagName('h1'))

// let h1 = document.getElementById('h1_element')

// let h1_array = document.getElementsByTagName('h1')

// h1.innerText = "Web Desgin"

// h1_array[1].innerText = "NTI"

// let h2_array = document.getElementsByTagName('h2')

// for(let i = 0 ; i< h2_array.length ; i++){
//     h2_array[i].innerText = "Javascript"
// }
///////////////////////////////////////////////////////////////////

// let elements = document.getElementsByClassName("text_style")

// let classElement = document.querySelector(".text_style")
// let classElements = document.querySelectorAll(".text_style")
// console.log(elements)
// console.log(classElement)
// console.log(classElements)

////////////////////////////////////////////////////////////

// console.log(document.images)
// console.log(document.images[0].src) // get property

// document.images[0].src = "images/2.jfif"
// document.images[0].width = "500"


// let input = document.querySelector("input[type=password]")

// console.log(input)

// let form = document.getElementsByTagName('form')

// let forms = document.forms

// // console.log(form)
// console.log(forms)

// console.log(document.scripts)
// console.log(document.links)
// console.log(document.title)
// document.title = "Dom 1 Javascript"


/////////////////////////////////////////////////////////////////

// let card = document.querySelector('.card')

// // card.className = "bg-light"
// card.classList.add("bg-light")
// card.classList.remove("container")
// card.classList.toggle("disabled")
// console.log(card.className)



//////////////////////////////////////////////////////

function changeImage(){
    let img = document.getElementById('img')
    img.src = "images/2.jfif"
}