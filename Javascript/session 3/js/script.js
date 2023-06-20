
// /////////////////// function statment
// function sum(num1 , num2 ){
//     var total = num1 + num2
//     return total
// }
// var sumNumbers = sum(10 , 30)
////////////////////// function Expression 
// var sumNumbers = function(){
//     return "javascript"
// }
// console.log(sumNumbers())
//////////////////////// arrow function
// var sumNumbers = (num1)=>{
    
//     return "Javascript"
// }
// var sumNumbers = (num1)=> "Javascript"
// console.log(sumNumbers(10))







var firstName = "nouran"
var lastName = "ahmed"
var age = 29
var nationality = "Egyptian"
var address = "Nasr city"
var isGraduated = true

var userInfo = ["nouran" , "ahmed" , 29 , "Egyptian"  , true , ["nasr city" , "october"]]


userInfo[1] = "Fayez" // update item
console.log(userInfo[5][0]) // get item/element

userInfo[6] = 2000
userInfo[userInfo.length] = "developer"

userInfo[10] = false
// console.log(userInfo)

//////////////////////////////////////// Array Methods 

var numbers = [2,7,3,9,10,40]


numbers.push(true , "javascript")
numbers.unshift("Html" , "css")

var courses = ["php" , "laravel" , "html" , "css" , "js" , "node"]

courses.shift()
courses.shift()

courses.pop()
courses.pop()
console.log(courses)


var nums = [2, 0 , 5, 3]

var words = ['ball' , 'apple']

// console.log(nums.sort())
// console.log(words.sort())

// console.log(nums.reverse())



// var tracks = ['web design' , 'ccna' , 'network']

// console.log(tracks.includes('graphics'))


// if(!tracks.includes('graphics'))
// tracks.push('graphics')



// var arr = ['html' , 3 , true ]

// console.log(arr)

// var text = arr.toString() 

// console.log(text)

// console.log(typeof text)

// console.log(arr.join('-'))



var mixedArray = [2 , "bootstrap" , true , "Html"  , 100 ]

// console.log(mixedArray[0])
// console.log(mixedArray[1])
// console.log(mixedArray[2])
// console.log(mixedArray[3])
// console.log(mixedArray[4])


// for(var i = 0 ; i < mixedArray.length ; i++){
//     console.log(mixedArray[i])
// }


// mixedArray.forEach((ele )=>{
//     console.log(arr)


// })

// ()=>{

// }


var mixedArray = [2 , "bootstrap" , true , "Html"  , 100  , "Html"  , "Html"]
// console.log(mixedArray)

var index = mixedArray.findIndex(item => item == 'Javascript')

// console.log(index)

if(index == -1) mixedArray.push('javascript')

var htmlText = mixedArray.findIndex(element => element == "Html")

// console.log(htmlText)

// var element = mixedArray.find(element => element > 50)


// console.log(element)
// console.log(elementIndex)



// find ==> wrong condition = undefined
// findIndex ==> wrong condition = -1





var mixedArray = [2 , "bootstrap" , true , "Html"  , 100  , "Html"  , "Html"]

var element = mixedArray.find(element => element > 200)
var elementIndex = mixedArray.findIndex(element => element > 50)

var numbersArray = [2, 7, 1 , 5 , 100 , 50 , 30]

var num = numbersArray.find(item => item > 5)

var newArray = numbersArray.filter(item => item > 5)

// console.log(num)
// console.log(newArray)




// splice() ==> add item/items 
//          ==> remove item/s
//          ==> add / remove item/s

// splice(index , deletedCount , item/s)


// var str = ["js" , 'html' , "developer" , "Egyptian" , 500 , true]
// console.log(str)
// str.splice(3 , 2 )
// console.log(str)
// str.splice(1 , 0 , "Bootstrap" , 10000000)
// console.log(str)
// str.splice(4 , 1 , "Angular")

// console.log(str)



// var ages = [3, 10, 18, 20];

// var item  = ages.find(checkAge);

// function checkAge(age) {
//   return age > 18;
// }

// var item = ages.find(item => item > 18)









