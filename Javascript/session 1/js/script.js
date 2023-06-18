// console.log("Js File")
// console.log(20)

var firstName = "Nouran"
var age = 29
var isGraduated = true
var fullName
// console.log(fullName)
var address = null
var middleName = "Ahmed"
var lastName = "Fayez"

fullName = "first name = " + firstName +" " +"middle name = " + middleName + " last name = " +lastName


// template string
fullName = `first name ${firstName}
last name = ${lastName}`





// console.log(firstName)
// console.log(age)
// console.log(address)
// console.log(fullName)



///////////////////////////// Mathematical operators 
var a = 10
var b = "javascript"
var s = a + b

var h = 10
var g = "javascript"


// console.log(h/g)

// console.log(10%5)


var g = 20
// console.log(++g)
// // console.log(g++)
// console.log(g)

var r = 30
// console.log(--r)
// console.log(r--)

// console.log(r)


/////////////////////////// Assignment Operators

var t = 30
// t = t + 3

t+=3

// console.log(t)
//////////// unary operator
// console.log(typeof t)
// console.log(typeof(firstName))

///// -- comparison operator ==> (> , < , >= , <= , == , === , != , !==)

var a = 30
var b = 30
var c = "30"

// console.log(a == b) // value
// console.log(a == c)
// console.log(a === c) // value - data type

// console.log(a > b)
// console.log(a >= b)

// console.log(a != b)
// console.log(a != c)// false -- value
// console.log(a !== c)// true -- value - data type



var k = 30

var h = typeof k

// console.log(h)


///// logical operator (&& || !)
var a = 30

// console.log(!a == 30)

// console.log(a == 30) // true
// console.log(typeof a == 'number') // true
// console.log(a > 20) // true

// console.log(a == 30 && typeof a == 'number' && a > 20)
        //&&    =   true - true - true ==> true
        //&&    =   true - false - true ==> false

// console.log(a == 40 || !typeof a == 'number' || a > 60) 
            // || =  false  - true - false = true
            // || =  false  - false - false = false

//////////////////// -- ternary Operator ==> (condition) ? true condition : false condition   

var t = 30 ; 
var result // undefined

console.log(result);
(t == 40) ? result = 'correct' : result = 'wrong'

console.log(result)



// var promptValue = prompt("enter your name")

// console.log(promptValue)

// var k = "" ; 
// (promptValue == "" || promptValue == null ) ? result = "empty string" : result = "valid name"   

// console.log(result)


//  -- if/else statement 

// if() true condition 
// else false condition


// var p = prompt('enter your address')
// var res

// // (p == 'october') ? res = 'october' : res = "invalid address"

// if(p == 'october') res = "october" 
// // else res = " invalid address"

// console.log(res)


// var f = 40

// var job = prompt('enter your Job')

// if(job == 'doctor' ) {
//     var l = 4 + 5
//     console.log(l)
//     console.log('doctor')

// }
// else if (job == 'engineer') console.log('engineer')
// else if (job == 'developer' || f == 30) console.log('developer 30')
// else if (job == 'instructor') console.log('instructor')
// else console.log('invalid job')



var degree = prompt('enter your degree')
var result 
//  > 90  ==> result = A
//  > 80 < 90 ==> result = B
//  > 70 < 80 ==> result = c
//  <70 result = F


// if(degree == ""){
//     console.log('enter a degree')
// }
// else {
//     if(degree > 90) console.log('A')
//     else if(degree > 80 ) console.log('B')
//     else if(degree > 70 ) console.log('C')

// }

if(degree == "" || degree == null) 
console.log('enter a degree')
else if(degree > 90) console.log('A')
else if(degree > 80 ) console.log('B')
else if(degree > 70 ) console.log('C')
else console.log('invalid degree')









