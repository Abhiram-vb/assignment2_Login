let usernameEl = document.getElementById('username');
let passwordEl = document.getElementById('password');
let rememberMeEl = document.getElementById("rememberMe");
let buttEl = document.getElementById("butt");
let formEl = document.getElementById("form");
let usernameReqEl = document.getElementById("usernameReq");
let passwordReqEl = document.getElementById("passwordReq");
console.log("hai")
usernameEl.addEventListener("blur", function(event) {
    console.log(event.target.value)
    if (usernameEl.value.length < 5) {
        usernameReqEl.textContent = "*Username must contain more than 4 characters"
    } else if (usernameEl.value.length > 10) {
        usernameReqEl.textContent = "*Username should contain less than 11 characters"
    } else {
        usernameReqEl.textContent = ""
    }
});
passwordEl.addEventListener("blur", function(event) {
    if (passwordEl.value.length < 10) {
        passwordReqEl.textContent = "*Password must contain more than 9 characters"
    } else if (passwordEl.value.length > 15) {
        passwordReqEl.textContent = "*Password should contain less than 16 characters"
    } else {
        passwordReqEl.textContent = ""
    }
});
formEl.addEventListener("submit", function(event) {
    event.preventDefault();
});