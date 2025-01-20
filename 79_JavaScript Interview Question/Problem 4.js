// The Password Validator. You are building a password validation feature. Create a function that checks if a given passowrd meets the following criteria: at latest 8 character long, contains both uppercase and lowercase letters, and includes at least one digit.

function passwordValidator(password){
    if(password.length < 8){
        return false;
    }
    
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    
    return  hasUpperCase && hasLowerCase && hasDigit;
}

const password1 = "Bimal666";
const password2 = "bimal666";
const password3 = "6666845849";

console.log(`Password1 ${password1} is ${passwordValidator(password1)}`);
console.log(`Password2 ${password2} is ${passwordValidator(password2)}`);
console.log(`Password3 ${password3} is ${passwordValidator(password3)}`);

