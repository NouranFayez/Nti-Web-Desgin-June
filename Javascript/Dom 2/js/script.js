let h2 = document.querySelector('#text_style')


function handleChangeStyle(){
    h2.style.color = "red"
    h2.style.fontSize = "50px"
    h2.style.backgroundColor = "lightgray"
}


// function handleMouseEnter(){
//     h2.classList.add('card')
// }

// function handleMouseLeave(){
//     h2.classList.remove('card')
// }

function handleChangeH2(flag , element){
    console.log(element);
    (flag == 'mouseenter') ?  element.classList.add('card') : element.classList.remove('card')

}


let lis = document.getElementsByClassName('li_style')
function handleClick(element){
    for(var i = 0 ; i < lis.length ; i++){
        lis[i].style.color = "black"
    }   
    element.style.color = "red"
}
// input.addEventListener('input' , handleInputEvent)

// function handleInputEvent(){
//     console.log('typing.........')
// }

let input = document.getElementById('input_id')
input.addEventListener("input" , function(){
    // console.log('typing......')
    // console.log(input.value)
})

input.addEventListener('change' , function(){
    // console.log('changing.........')
    // console.log(input.value)
    // console.log(input.value.length)
})

let select = document.querySelector('#select_id')
select.addEventListener('change' , function(){
    console.log("change select")
})


let button = document.getElementById('button_id')
let form = document.getElementById('form_id')
form.addEventListener('submit' , function(e){
    e.preventDefault()
    console.log(e)
    console.log('form is submit........')

    console.log(e.target.elements.userName.value)
    console.log(e.target[0].value)
})

let div = document.querySelector('.div_style')
div.addEventListener('scroll' , function(e){
    console.log(e.target.scrollTop)
    console.log('scroll........')
    if(e.target.scrollTop > 100){
        e.target.classList.add('bg-light')
        e.target.classList.remove('bg-black')

    }
    else {
        e.target.classList.add('bg-black')
        e.target.classList.remove('bg-light')

    }
})



window.addEventListener('scroll' , function(){
    // console.log(this.document.body.scrollTop)
    if(document.body.scrollTop > 200 || this.document.documentElement.scrollTop > 200){
        console.log('scroll')

    }
    
    // console.log(this.document.documentElement.scrollTop)
})


let element = document.querySelector('.add_Element')

let p = document.createElement("p")
// p.innerText = "Web Design"
p.innerHTML = "<span>Web Design </span>"


console.log(p)

element.append(p)



// let tasks = [
//     {taskName : "task name 1" , taskType : 'Frontend'},
//     {taskName : "task name 2" , taskType : 'graphic'},
//     {taskName : "task name 3" , taskType : 'backend'},
//     {taskName : "task name 4" , taskType : 'network'},
// ]
let taskContainer = document.querySelector('.task-container')

function showtasks(){
    taskContainer.textContent = ""
    tasks.forEach((item , i)=>{
        let taskDiv = document.createElement('div')
        let taskName = document.createElement('h2')
        let taskType = document.createElement('h3')
        let button = document.createElement('button')
    
        button.innerText= "Remove task"
        taskName.innerText = item.taskName
        taskType.innerText = item.taskType
        
        taskDiv.append(taskName)
        taskDiv.append(taskType)
        taskDiv.append(button)
    
        taskDiv.classList.add('bg-light')
    
        console.log(taskDiv)
        taskContainer.append(taskDiv)
    
        button.addEventListener('click' , function(){
            taskDiv.remove()
        })
    })
}


let formTask = document.getElementById('formTask')
let tasks = []
formTask.addEventListener('submit' , function(e){
    e.preventDefault()
    e.target.elements.taskName.value
    e.target.elements.taskName.value
    let task = {
        taskName : e.target.elements.taskName.value ,
        taskType :  e.target.elements.taskType.value
    }
    tasks.push(task)
    console.log(tasks)


    showtasks()
})




// localStorage.setItem("firstName" , "Nouran")
// localStorage.setItem("lastName" , "Ahmed")
// localStorage.setItem("address" , "Nasr city")

// let firstName = localStorage.getItem("firstName")

// console.log(firstName)

// localStorage.removeItem('address')


// sessionStorage.setItem('firstName' , "Nouran")


let tasksLocalStorage = [
    {taskName  : 'task name 1' , taskType : 'task type 1'} ,
    {taskName  : 'task name 2' , taskType : 'task type 2'} ,
]

// [{taskName : 'task name 1' , tasktype : 'task type 1}]


// JSON ==> javascript object notation 


console.log(JSON.stringify(tasksLocalStorage))



localStorage.setItem('tasks' , JSON.stringify(tasksLocalStorage))


let arr = JSON.parse(localStorage.getItem('tasks'))

arr.push({
    taskName : 'task name 3' , taskType : 'task type 3' 
})
console.log(arr)


console.log(localStorage.getItem('nationality'))



let x = true
let result;

// truthy value ==>  string , number > 0  , true 
// falsy value ==> null , 0  , -0 , undefined , "" , false

(x) ? result = "correct" : result = 'wrong'

console.log(result)

if(localStorage.getItem('firstName')){
    console.log('striiiing')
}
else console.log('nuuuuuuulllllllll')