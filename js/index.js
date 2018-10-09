//REQ
// import { cards } from "./cards";

//Username Info

// INPUTERS
var iptUsername = document.querySelector("input#inputUsername");
var loginPage = document.querySelector("#loginPage");
var midAreaOne = document.querySelector("#midAreaOne");
var inputOne = document.querySelector("#inputOne");
var inputTwo = document.querySelector("#inputTwo");
var ip1 = document.querySelector("#ip1");
var ip2 = document.querySelector("#ip2");
var ip3 = document.querySelector("#ip3");

//BUTTONS
var btnLogin = document.getElementById("btnLogin");
var btnCancel = document.getElementById("btnCancel");
// var btnLogx = document.getElementById("btnLogx");

//ACTIONS

$(document).ready(function() {
  $("#btnLogin").click(function() {
    if (iptUsername.value.length <= 0) {
      alert("kosong");
    } else if (iptUsername.value == "de") {
      $("#inputOne")
        .slideUp(600)
        .slideDown(600, function() {
          inputOne.innerHTML = `<div class="alert alert-success" role="alert">
          Selamat, Usrnama dan Password anda Benar !!
        </div>`;
        });
      $("#inputTwo").show(600, function() {
        inputTwo.innerHTML = `
        <div class="alert alert-success" role="alert">
        Page Next
        </div>
        `;
      });
    } else {
      window.location.reload(true);
      window.sessionStorage.clear();
      alert("salah");
    }
  });
});

// sessionStorage.clear();
// window.location.reload(true)

// btnCancel.addEventListener("click", function () {
//   sessionStorage.clear();
//   window.location.reload(true);
// });

// if (iptUsername.value.length <= 0) {
//   alert("Jangan Kosong");
//   window.location.reload(true);
//   sessionStorage.clear();
// }else if (iptUsername.value == dbaseAPI[0]){
//   inputOne.slideUp();

//   sessionStorage.setItem("aloha", "sexy");

//   inputTwo.innerHTML = `
//   <button id="btnLogx" type="button"
//   class="btn btn-success">Logout</button>
//   `;

//   $("#btnLogx").click(function () {
//     $("inputTwo").slideUp(), setTimeout(function(){
//       window.location.reload(true)
//     }, 2000)
//   }
// }

const dbaseAPI = ["asdmin", "admin123"];
