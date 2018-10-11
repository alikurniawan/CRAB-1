
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
    objPass: 'admin123'
}

$(document).ready(function () {

    $("#btnLogin").click(function () {

        if (inputUsername.value.length <= 0 || inputPassword.value.length <= 0) {
            alert('Fill Blank can`t be processed');
            console.log(cards.test);
        } else if (inputUsername.value == Person.objUser && inputPassword.value == Person.objPass) {
            $("#bodyOne").slideUp();
            bodyOne.innerHTML = SlideAction.Slide1;
            $("#bodyOne").slideDown();
            sessionStorage.setItem("PASSED", "GREAT PASSING");
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