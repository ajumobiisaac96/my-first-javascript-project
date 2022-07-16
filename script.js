let userDetailsDatabase = {}


function getUserDetails (){

    //input user name
    let userName = prompt ("Enter User Name")

    if (userName == null){
        return
    }

    function validateUserName(userName){
        if (userName.length < 10 && userName.length > 0){
            return true
        }else {
            return false
        }
    }
    while (validateUserName(userName) == false){
        userName = prompt ("user Name must be less than 10 characters and more than 0")
    }

    userDetailsDatabase["userName"] = userName 







    //input user email adderss
    let email = prompt ("Enter your e-mail adderss")

    if (email == null){
        return
    }

    // this function checks if the email is valid
    function validateUserEmail(email){
    // sets email check criteria
    const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    // checks if its an email
    emailCheckResult = emailCheck.test(email);
    
    // if the email contains @, it is valid
    if (emailCheckResult == true){
        return true
    }else{
        return false
        }
    }
    
    while (validateUserEmail(email) == false){
        email = prompt ("please enter a valid email address")
    }

    userDetailsDatabase ["email"] = email






    //input phone number
    let phoneNumber = prompt ("Enter your phone Number")

    if (phoneNumber == null){
        return
    }

    function validatePhoneNumber(phoneNumber){
        if (phoneNumber.length == 11){
            return true
        }else {
            return false
        }
    }

    while (validatePhoneNumber(phoneNumber) == false){
        phoneNumber = prompt ("phone Number must be 11 digits, Try again!")
    }

    userDetailsDatabase ["PhoneNumber"] = phoneNumber








    //input user password
    let password = prompt("enter your password")

    if (password == null){
        return
    }

    function validatePassword(password){
        if (password > 6){
            return true
        }else{
            return false
        }
    }
    while (validatePassword(password) == false){
        password = prompt("password must not be more than 6 characters")
    }

    userDetailsDatabase ["password"] = password








    //confirm user password
    let confirmPassword = prompt ("confirm password")

    if (confirmPassword == null){
        return
    }

    function validateConfirmPassword (confirmPassword){
        if (confirmPassword == password){
            return true
        } else {
            return false
        }   
    }
    
    while (validateConfirmPassword (confirmPassword) == false){
        password = prompt("password does not match")
    }

}



 
function displayUserDetails (){
    alert(`Your Details\n\nuserName: ${userDetailsDatabase.userName}\n
Phone Number: ${userDetailsDatabase.PhoneNumber}\n
email: ${userDetailsDatabase.email}`)
}



