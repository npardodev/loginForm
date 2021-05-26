/* Toggle Change Menu */
function toggleForm() {
    section = document.querySelector('section');
    container = document.querySelector('.container');
    container.classList.toggle('active');
    section.classList.toggle('active');
}

/* Validations */

let formLogin = document.getElementById("formLogin");
let formRegister = document.getElementById("formRegister");

let username = formLogin.username;
let password = formLogin.password;

let newUser = formRegister.newUser;
let newPass = formRegister.newPass;
let newPassConfirm = formRegister.newPassConfirm;
let newEmail = formRegister.newEmail;