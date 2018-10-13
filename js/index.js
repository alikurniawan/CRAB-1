//INPUTERS
let inputUsername = document.querySelector('#inputUsername');
let inputPassword = document.querySelector('#inputPassword');
let btnLogin = document.querySelector('#btnLogin');
let btnGoogle = document.querySelector('#btnGoogle');
let bodyOne = document.getElementById('bodyOne');
let tableBelow = document.getElementById('tableBelow');

// JQUERY ACT

var Person = {
    objUser: 'admin',
    objPass: 'admin123',
    url1: 'http://localhost/login-page-session/pages/inputPage.html',
    Security: "PASSED"
}

$(document).ready(function () {


    $("#btnLogin").click(function () {

        
            if (inputUsername.value.length <= 0 || inputPassword.value.length <= 0) {
                alert('Fill Blank can`t be processed');

            } else if (inputUsername.value == Person.objUser && inputPassword.value == Person.objPass) {
                set1MadeSession();

                $("#bodyOne").slideUp();
                bodyOne.innerHTML = ``
                $("#bodyOne").slideDown();
                setTimeout(() => {
                    bodyOne.innerHTML = `Please Wait...`
                }, 1000);

                setTimeout(() => {
                    bodyOne.innerHTML = SlideAction.Slide1;
                }, 3000);

                setTimeout(() => {
                    bodyOne.innerHTML = `We're almost there !!`
                }, 7000);

                setTimeout(() => {
                    $("#bodyOne").slideUp();
                }, 10000);

                setTimeout(() => {
                    window.location = Person.url1;
                }, 11000);

                $("#btnLogout").click(function () {
                    $("#bodyOne").slideUp(5000);
                    sessionStorage.clear();
                    window.location.reload(true);
                })

            } else {
                alert('Username or Password doesn`t exist in Our DataBase !!')
                window.location.reload(true);
            }
       


    })

    $("#btnGoogle").click(function () {
        $("#btnGoogle").slideUp();

        $("#btnGoogle").css("background-color", "green");

        $("#btnGoogle").slideDown();
    })


})