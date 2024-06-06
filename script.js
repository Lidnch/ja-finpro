document.addEventListener('scroll',() =>{
    const navbar = document.querySelector('navbar');
    if(window.scrollY){
        
    }
})

function validateData() {
    var firstName = document.getElementById("firstName");
    var surname = document.getElementById("surname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var password = document.getElementById("password");
    var confpass = document.getElementById("confirmPassword");
    if(firstName.value.length < 3){
        alert("First Name must be at least 3 characters.");
    } else if (surname.value.length < 3){
        alert("Surname must be at least 3 charaters.");
    } else if (!email.value.endswith("@gmail.com")) {
        alert("E-mail must ended with @gmail.com");
    } else if(!phone.length > 13){
        alert("Must be a serial of less than 13 numbers");
    } else if(!checkAlphaNum(password.value)){
        alert("Password must contain alphanumeric characters.");
    } else if(confpass.value != password.value){
        alert("Password missmatch, please try again.");
    } else {
        alert("Submit Data Succesful");
    }
}

function checkAlphaNum(password){
    var isAlpha = false;
    var isNum = false;
    for(let i = 0; i < password.length; i++){
        if(isNaN(password[i])){
            isAlpha = true;
        } else {
            isNum = true;
        }

        if(isAlpha&&isNum){
            return true;
        }
    }
    return false;
}