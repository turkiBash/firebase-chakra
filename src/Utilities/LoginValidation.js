export const EmailValidation = (email) => {

    let isValid = false;
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        isValid = true
    }

    return isValid;
}


    export const PasswordValidation = (password) => {

    let isValid = false;
    if(password.length > 4 && password.include("$") ){
        isValid = true
    }
    return isValid
}