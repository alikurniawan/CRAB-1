// set1MadeSession()
let ses1 = sessionStorage.getItem('PASSED')


if (ses1 == null) {
    window.location = 'http://localhost/login-page-session/'
} else if (ses1 !== 'Great Passed') {

    window.location = 'http://localhost/login-page-session/'
} else {
    alert('Nice');
    $(document).ready(function () {
        $("#btnLogout").click(function () {
            localStorage.clear();
            sessionStorage.clear();
            // window.location = 'http://localhost/login-page-session/'
            window.location = 'https://alikurniawan.github.io/CRAB-1/'
        })
    })
}