var iptUsername = document.getElementById('inputUsername').value

var btnLogin = document.getElementById('btnLogin');

var user = 'admin'
let pass = 'adminpass'

btnLogin.addEventListener('click', function () {
    if(iptUsername.length <= 0){
        console.log('Jangan Kosong dong')
    }
    else if(iptUsername !== user ){
        console.log('bad')
    }
    else{
        console.log('SAME')
    }

    
})