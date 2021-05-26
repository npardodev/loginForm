/* Toggle Change Menu */
function toggleForm() {
    section = document.querySelector('section');
    container = document.querySelector('.container');
    container.classList.toggle('active');
    section.classList.toggle('active');
}

//Error Mssges
const ERROR_MSG_PASSWORD_DO_NOT_MATCH = "Password do not match.";
const ERROR_MSG_INVALID_EMAIL = "Email not valid.";
const ERROR_MSG_FIELD_REQUIRED = " field is required";

/* Validations */

function ShowError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function ShowSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//Check email
function CheckEmail(input) {
    const char = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (char.test(input.value.trim())) {
        ShowSuccess(input);
    } else {
        ShowError(input, ERROR_MSG_INVALID_EMAIL);
    }
}

function CheckRequired(inputErr) {
    inputErr.forEach(function(input) {
        if (input.value.trim() === "") {
            ShowError(input, `${getFieldName(input)} ` + ERROR_MSG_FIELD_REQUIRED);
        } else {
            ShowSuccess(input);
        }
    });
}

function CheckLenght(input, min, max) {
    if (input.value.length < min) {
        ShowError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        ShowError(input, `${getFieldName(input)} must be less then ${max} characters`);
    } else {
        ShowSuccess(input);
    }
}

function CheckPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        ShowError(input2, ERROR_MSG_PASSWORD_DO_NOT_MATCH);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

formRegister.addEventListener('submit', function(e) {

    e.preventDefault();

    let formRegister = document.getElementById("formRegister");
    let newUser = formRegister.newUser;
    let newPass = formRegister.newPass;
    let newPassConfirm = formRegister.newPassConfirm;
    let newEmail = formRegister.newEmail;

    CheckRequired([newUser, newEmail, newPass, newPassConfirm]);
    CheckLenght(newUser, 3, 15);
    CheckLenght(newPass, 8, 25);
    CheckEmail(newEmail);
    CheckPasswordsMatch(newPass, newPassConfirm);
});


formLogin.addEventListener('submit', function(e) {

    e.preventDefault();

    let formLogin = document.getElementById("formLogin");
    let username = formLogin.username;
    let password = formLogin.password;

    CheckRequired([username, username]);
    CheckLenght(password, 3, 15);
    CheckLenght(username, 8, 25);

});