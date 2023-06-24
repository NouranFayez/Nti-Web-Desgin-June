// setTimeout(() => {
    
// }, timeout);


// setTimeout(sayWelcome , 5000)


// function sayWelcome(){
//     console.log('Welcome')
// }


setTimeout(()=>{
    // alert('Welcome')
    console.log('Welcome')
} , 3000)

console.log('Javascript')


let h1 = document.querySelector('#h1_counter')

let i = 0


let set = setInterval(()=>{
    if(i == 200) clearInterval(set)
    h1.innerText = i
 //    i++
 i+=10
 } , 300)


//  Elements Relationship
 let ul = document.getElementById('my_ul')
 let uls = document.getElementsByTagName("ul")
 console.log(ul.firstElementChild)
 console.log(ul.lastElementChild)

 ul.nextElementSibling.style.background = "lightgray"
 ul.previousElementSibling.style.color = "red"

 console.log(uls)

 for(let i = 0 ; i < ul.children.length ; i++){
    ul.children[i].innerText = "Web Design"
 }

 let li = document.getElementById('my_li')

 li.parentElement.style.background = "lightblue"