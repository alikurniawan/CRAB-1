// INPUTERS
var iptUsername = document.querySelector("input#inputUsername").value;

//BUTTONS
var btnLogin = document.getElementById("btnLogin");
var btnCancel = document.getElementById("btnCancel");

//ACTIONS
btnLogin.addEventListener("click", function() {
  const dbaseAPI = ["admin", "admin123"];

  if (iptUsername.length <= 0) {
    alert("Jangan Kosong");
    window.location.reload(true);
    sessionStorage.clear();
  } else if (iptUsername == dbaseAPI[0]) {
    sessionStorage.setItem("aloha", "sexy");
    alert("god");
  } else {
    sessionStorage.clear();
    window.location.reload(true);
  }
});

btnCancel.addEventListener("click", function() {
  sessionStorage.clear();
  window.location.reload(true);
});

