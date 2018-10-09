//INPUTERS
var inputUsername = document.querySelector('#inputUsername');
var inputPassword = document.querySelector('#inputPassword');
var btnLogin = document.querySelector('#btnLogin');
var btnGoogle = document.querySelector('#btnGoogle');

// JQUERY ACT
$(document).ready(function(){

    btnLogin.addEventListener('click', function(){
        alert('wow');
    })

    $("#btnGoogle").click(function(){
        $("#btnGoogle").slideUp();
        
        $("#btnGoogle").css("background-color", "green");
        $("#btnGoogle").slideDown();
    })
})