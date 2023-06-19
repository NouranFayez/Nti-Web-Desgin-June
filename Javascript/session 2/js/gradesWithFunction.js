
// var numOfSubjects = +prompt('enter number of subjects')
// var fullMark = +prompt('enter Full Mark')
// var totalOfSubjects = numOfSubjects * fullMark


// function getStudentDegree(){
//     var sum = 0
//     for(var i = 1 ; i <= numOfSubjects ; i++){
//         var singleDegree = +prompt('enter degree of subject '+i)
//         sum += singleDegree
//         console.log(sum)
//     }
//     return sum
// }

// var sum = getStudentDegree()

// function calcGrade(){
//     var grade = sum / totalOfSubjects * 100
//     var result
//     if(grade >= 90)  result = "A"
//     else if (grade >= 80)  result = "B"
//     else if(grade >= 70)  result = "C"
//     else if(grade >= 60)  result = "D"
//     return result
// }

// var result = calcGrade()

// console.log(result)








var numOfSubjects = +prompt('enter number of subjects')
var fullMark = +prompt('enter Full Mark')
var totalOfSubjects = numOfSubjects * fullMark


function getStudentDegree(){
    var sum = 0
    for(var i = 1 ; i <= numOfSubjects ; i++){
        var singleDegree = +prompt('enter degree of subject '+i)
        sum += singleDegree
        console.log(sum)
    }
    calcGrade(sum)
    // return sum
}

var sum = getStudentDegree()
var result
function calcGrade(sumOfSubjectsDegree){
    var grade = sumOfSubjectsDegree / totalOfSubjects * 100
    if(grade >= 90)  result = "A"
    else if (grade >= 80)  result = "B"
    else if(grade >= 70)  result = "C"
    else if(grade >= 60)  result = "D"

}

// var result = calcGrade()

console.log(result)


