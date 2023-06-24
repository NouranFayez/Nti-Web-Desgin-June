// Email ==> username@domain.domainType
// nouran_ahmed269@hotmail.com

// password ==>  uppercase letter , lowercase letter , number , special character (!@#$%^&*_-)

// Name ==> minimum 3 character

let form = document.querySelector('#my_form')

// isNaN() , + , parseint() , parsefloat()
function nameValidation(input){
    console.log(input)
    let inputValue = input.value.trim()
    // let inputType = +input.value.trim()
    // console.log(typeof inputType)
    if(inputValue.length > 2){
        // input.nextElementSibling.innerText = ""
        handleError(input)
    }
    else {
        
        handleError(input ,  "minimum 3 character")
    }
}


function emailValidation(input){
//   let reg =  new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(reg.test(input.value)){
    handleError(input)
  }
  else {
    handleError(input , "invalid email")
  }
}

/// password regular expression ==> https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
function passwordValidation(input){
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    console.log(strongRegex.test(input.value))
    if(strongRegex.test(input.value)){
        handleError(input)
    }
    else  handleError(input, "must enter at least 1 lowercase letter , 1 uppercase letter , 1 number , 1 special character ......")
}


function handleError(element , msg = ""){
    element.nextElementSibling.innerText = msg
}
form.addEventListener('input', function (e) {
    // console.log('typing.........')
    // console.log(e.target.name)

    switch (e.target.name) {
        case "userName":
            nameValidation(e.target)
            break;
        case 'userEmail':
            emailValidation(e.target)
            break;
        case 'userPassword':
           passwordValidation(e.target)
            break;
    }
})

form.addEventListener('submit' , function(e){
    e.preventDefault()
    // this filed is required
})

