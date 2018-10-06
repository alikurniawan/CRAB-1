//REQ
// import { cards } from "./cards";

// INPUTERS
var iptUsername = document.querySelector("input#inputUsername");
var loginPage = document.querySelector("#loginPage");
var midArea = document.querySelector("#midArea");

//BUTTONS
var btnLogin = document.getElementById("btnLogin");
var btnCancel = document.getElementById("btnCancel");
var btnLogout = document.getElementById("btnLogout");

//ACTIONS

btnLogin.addEventListener("click", function() {
  const dbaseAPI = ["asdmin", "admin123"];
  // var card = new cards();

  if (iptUsername.value.length <= 0) {
    alert("Jangan Kosong");
    window.location.reload(true);
    sessionStorage.clear();
  } else if (iptUsername.value == dbaseAPI[0]) {
    sessionStorage.setItem("aloha", "sexy");
    midArea.innerHTML = `<button id="btnLogout" type="button" class="btn btn-success">Logout</button>`;
  } else {
    alert("Username and Password Salah");
    sessionStorage.clear();
    window.location.reload(true);
  }
});

btnCancel.addEventListener("click", function() {
  sessionStorage.clear();
  window.location.reload(true);
});

btnLogout.addEventListener("click", function() {
  sessionStorage.clear();
  window.location.reload(true);
});
