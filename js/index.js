var iptUsername = document.getElementById('inputUsername').value

var btnLogin = document.getElementById('btnLogin');

var userx = ['aloha', 'manoha']

btnLogin.addEventListener('click', function () {
    var bool = Boolean(iptUsername === userx[0]);
    
    sessionStorage.setItem('loginSession', 'alohaSexy');

    if(bool === true){
        alert('Mantap')
    }else{
        alert('bad')
    }
})