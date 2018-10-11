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

var SlideAction = {
    Slide1: `
        <div class="ui icon message">
            <i class="notched circle loading icon"></i>
            <div class="content">
            <div class="header">
                Just one second
            </div>
            <p>We're fetching that content for you.</p>
            </div>
        </div>`,
    TableOne: `
        <div id="tableIsi" class="col col-12">
            <table class="ui celled table">
                <thead>
                <tr><th>Name</th>
                <th>Age</th>
                <th>Job</th>
                </tr></thead>
                <tbody>
                <tr>
                    <td data-label="Name">James</td>
                    <td data-label="Age">24</td>
                    <td data-label="Job">Engineer</td>
                </tr>
                <tr>
                    <td data-label="Name">Jill</td>
                    <td data-label="Age">26</td>
                    <td data-label="Job">Engineer</td>
                </tr>
                <tr>
                    <td data-label="Name">Elyse</td>
                    <td data-label="Age">24</td>
                    <td data-label="Job">Designer</td>
                </tr>
                </tbody>
            </table>
        </div>
    `
}


$(document).ready(function () {

    $("#btnLogin").click(function () {

        if (inputUsername.value.length <= 0 || inputPassword.value.length <= 0) {
            alert('Fill Blank can`t be processed')
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