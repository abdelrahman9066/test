var loginForm = document.getElementById("loginForm");
var signEmail = document.getElementById("signEmail");
var signPassword = document.getElementById("signPassword");
var loginAlert = document.getElementById("loginAlert");
var allUsers = [];

if (localStorage.getItem('allUsers') != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
}


loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    login();
})



function login() {
    var userData = {
        email: signEmail.value,
        password: signPassword.value,
    }
    if (loginValid(userData) == true) {
        loginAlert.classList.add("d-none")
        window.location.href = "../home/home.html"
        console.log("you can login")
    } else {
        loginAlert.classList.remove("d-none")
        console.log("you can not login")
    }
}

function loginValid(userData) {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() == userData.email.toLowerCase() && allUsers[i].password == userData.password) {
            localStorage.setItem('userName', allUsers[i].name)
            return true;
        }
    }
}


localStorage.setItem('userName', allUsers[i].name)