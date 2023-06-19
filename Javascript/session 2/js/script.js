

// var degree = prompt('enter your degree')

// if(degree >= 90) console.log('A')
// else if(degree >= 80) console.log('B')
// else if(degree >= 70) console.log('C')
// else console.log('invalid Degree')


// var job = prompt("enter your job")

// if(job == 'developer') console.log(job)
// else if(job == 'doctor') console.log(job)
// else if(job == 'engineer') console.log(job)
// else console.log('invalid job')


////////////////// Switch Case Statement  ==> strict equality (===)
// switch (job) {
//     case 'doctor':
//     case 'nurse' :     
//         console.log("doctor / nurse")
//         break
//     case 'engineer':
//         console.log(job)
//         break
//     case 'developer':
//         console.log(job)
//         break
//     case 20:
//         console.log("20")
//         break
//     default:
//         console.log('invalid job')
// }


// prompt('enter your name 1')
// prompt('enter your name 2')
// prompt('enter your name 3')
// prompt('enter your name 4')
// prompt('enter your name 5')

///////////////// for looping


// for(var i = 1 ; i <= 10 ; i++){
//     // console.log(i)

//     if(i == 4) continue
//     else if (i == 8) break
//     console.log(i) 

// }

// var sum = 0
// var countOfSuccess = 0

// var numOfSubjects = +prompt('enter number of subjects')
// for(var i = 1 ; i <=numOfSubjects ; i++){
//     degreeOfSubject = +prompt(`enter degree of subject ${i}`)
//     sum += degreeOfSubject
//     if(degreeOfSubject > 50) countOfSuccess++
// }

// console.log(sum)
// console.log(countOfSuccess)


// var num = +prompt('enter degree')
// var num = parseInt(prompt('enter degree'))
// var num = "40.50"
// var num = "40.50Num"
// var num = "num40.50"

// console.log(parseInt(num))
// console.log(parseFloat(num))



// var num1 = +prompt('enter number 1')
// var num2 = +prompt('enter number 2')

// var sum = num1 + num2


// console.log(sum)



// var num1 = +prompt('enter number 1')
// var num2 = +prompt('enter number 2')

// var sum = num1 + num2


// console.log(sum)

var sum = 0


// function sumNumbers() {
//     var num1 = +prompt('enter number 1')
//     var num2 = +prompt('enter number 2')
//     //  sum = num1 + num2
//     var total = num1 + num2
//     // console.log(total)

//     // console.log(sum)
//     return total
// }


// var total1 = sumNumbers()
// var total2 = sumNumbers()

// console.log(total1)
// console.log(total2)

// console.log(sumNumbers())

// sumNumbers()

// console.log(sum)




var firstName = prompt('enter your first name' , "Nouran")
var lastName = prompt('enter your last name')


var age = 50

// nationality = "Egyptian"
function getFullName(userFirstName , userLastName , userFamilyName = "Fayez"){
    // console.log(userFamilyName)
    if(userFamilyName == undefined){
        console.log('please enter the family name')
    }

    var age = 30
    return `${userFirstName} ${userLastName} ${userFamilyName}`

    // return "javascript"
}


console.log(getFullName('nouran' , 'ahmed'))
console.log(getFullName(firstName , lastName))
console.log(age)



function looping (startNum , endNum , breakNum , ContNum)