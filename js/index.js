//INPUTERS
let inputUsername = document.querySelector('#inputUsername');
let inputPassword = document.querySelector('#inputPassword');
let btnLogin = document.querySelector('#btnLogin');
let btnGoogle = document.querySelector('#btnGoogle');
let bodyOne = document.getElementById('bodyOne');
let tableBelow = document.getElementById('tableBelow');

// JQUERY ACT

var Person = {
    objUser: 'administrator',
    objPass: 'admin12345'
}

var SlideAction = {
    slide1: `
        <div class="ui icon message">
            <i class="notched circle loading icon"></i>
            <div class="content">
            <div class="header">
                Just one second
            </div>
            <p>We're fetching that content for you.</p>
            </div>
        </div>`
}


$(document).ready(function () {

    $("#btnLogin").click(function () {
        $("#bodyOne").slideUp();

        bodyOne.innerHTML = SlideAction.slide1;

        $("#bodyOne").slideDown().slideUp(setTimeout = 5000);
        // bodyOne.innerHTML = `REDY`;
        // $("#bodyOne").slideDown();    


        $("#tableBelow").hide()
        show(setTimeout = 5000)
        tableBelow.innerHTML = `
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
        `;

        $("#tableIsi").slideDown()





    })

    $("#btnGoogle").click(function () {
        $("#btnGoogle").slideUp();

        $("#btnGoogle").css("background-color", "green");
        // $("#btnGoogle Google").remove();

        $("#btnGoogle").slideDown();
    })
})