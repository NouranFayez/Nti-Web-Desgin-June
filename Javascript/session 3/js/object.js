var arr = [ "Nouran" , "Ahmed"  , 29 , "Nasr city" ] 

console.log(arr[1])
console.log(arr)

var userInfo ={
    firstName : "Nouran" , 
    lastName : "Ahmed" ,
    age : 29,
    address : "Nasr city" 
}
var userInfo2 ={
    firstName : "Tamer" , 
    lastName : "Ahmed" ,
    age : 29,
    address : "Nasr city" 
}
var userInfo2 ={
    firstName : "Zain" , 
    lastName : "Ahmed" ,
    age : 29,
    address : "Nasr city" 
}

var users = [
    {
        firstName : "Nouran" , 
        lastName : "Ahmed" ,
        age : 29,
        address : "Nasr city" 
    } ,
    {
        firstName : "Tamer" , 
        lastName : "Ahmed" ,
        age : 29,
        address : "Nasr city" 
    } ,
    {
        firstName : "Zain" , 
        lastName : "Ahmed" ,
        age : 29,
        address : "Nasr city" 
    }
]

console.log(userInfo.address) // get property
userInfo.job = "developer"
userInfo.address = "October"
console.log(userInfo)

console.log(users)
console.log(users[2].firstName)

// users.forEach((item)=>{
//     console.log(item)
// })



var index = users.findIndex(item=> item.firstName == "Tamer")
console.log(index)


// ---- prompt() ==> number of users

// function addUser() ==> Name , balance , id 

// function EditUserBalanceById() id , newBalance 

// function deleteUserById() id