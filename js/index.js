//REQ
// import { cards } from "./cards";

//Username Info


// INPUTERS
var iptUsername = document.querySelector("input#inputUsername");
var loginPage = document.querySelector("#loginPage");
var midAreaOne = document.querySelector("#midAreaOne");
var inputOne = document.querySelector('#inputOne');
var inputTwo = document.querySelector("#inputTwo");

//BUTTONS
var btnLogin = document.getElementById("btnLogin");
var btnCancel = document.getElementById("btnCancel");
// var btnLogx = document.getElementById("btnLogx");


//ACTIONS

btnLogin.addEventListener("click", function () {
  const dbaseAPI = ["asdmin", "admin123"];
  // var card = new cards();

  if (iptUsername.value.length <= 0) {
    alert("Jangan Kosong");
    window.location.reload(true);
    sessionStorage.clear();
  } else if (iptUsername.value == dbaseAPI[0]) {

    inputOne.remove()

    sessionStorage.setItem("aloha", "sexy");
    // midArea.innerHTML = `
    // <button id="btnLogout" type="button" 
    // class="btn btn-success">Logout</button>
    // `;
    const btnLogOut = document.createElement('button');
    const btnLabelOut = document.createTextNode('Logout');
    btnLogOut.appendChild(btnLabelOut);
    inputTwo.appendChild(btnLogOut);

    btnLogOut.classList.add('btn', 'btn-success');
    btnLogOut.setAttribute('id', 'btnLogx');

    $(document).ready(function () {
      $("#btnLogx").click(function () {
        sessionStorage.clear();
        $("#inputTwo").slideUp()
        setTimeout(function () {
          window.location.reload(true);
        }, 2000);
      })
    })

  } else {
    alert("Username and Password Salah");
    sessionStorage.clear();
    window.location.reload(true);
  }
});


btnCancel.addEventListener("click", function () {
  sessionStorage.clear();
  window.location.reload(true);
});