// INPUTERS
var iptUsername = document.querySelector("input#inputUsername");
var loginPage = document.querySelector("#loginPage");

//BUTTONS
var btnLogin = document.getElementById("btnLogin");
var btnCancel = document.getElementById("btnCancel");
var btnLogout = document.getElementById('btnLogout');

//ACTIONS

var afterLoginPass = function () {

}



btnLogin.addEventListener("click", function () {
  const dbaseAPI = ["asdmin", "admin123"];

  if (iptUsername.value.length <= 0) {
    alert("Jangan Kosong");
    window.location.reload(true);
    sessionStorage.clear();
  } else if (iptUsername.value == dbaseAPI[0]) {
    sessionStorage.setItem("aloha", "sexy");
    alert("god");

    loginPage.innerHTML = `
          <div class="container">
          <div class="row">
              <div class="col-12 mb-5">
                  <!--dont distrub-->
              </div>
              <div id="loginPage" class="col">
                  <div class="row justify-content-md-center">
                      <div class="card card-header col-6 ">
                          <div class="card card-header">
                              <h4 class="d-flex justify-content-center">Successful Login</h4>
                          </div>

                          <div class="card card-body">
                              <!-- --------INPUTERS------------------- -->
                              <div class="ui huge icon input">
                                  
                              </div>
                              <div class="ui huge icon input mt-3">
                                  
                              </div>
                              <hr>
                              <div class="">
                                  <div class="ui buttons col align-self-end">
                                  <button type="button" id="btnLogout" class="btn btn-success">Logout</button>
                                  </div>
                              </div>
                              <!-- ------------INPUTERS--------------- -->
                          </div>

                      </div>
                  </div>

              </div>
          </div>
      </div>
    `;

  } else {
    alert('Username and Password Salah')
    sessionStorage.clear();
    window.location.reload(true);
  }
});

btnCancel.addEventListener("click", function () {
  sessionStorage.clear();
  window.location.reload(true);
});




btnLogout.addEventListener("click", function () {
  sessionStorage.clear();
  window.location.reload(true);
});