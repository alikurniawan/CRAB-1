let nameSession = "PASSED";
let vSession = "Great Passing";

function set1MadeSession() {
    sessionStorage.setItem(nameSession, vSession);
}

function set2GetSession(params) {
    sessionStorage.getItem(nameSession);
}
