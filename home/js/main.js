
var userName = localStorage.getItem('userName');
userNameLS.innerHTML = userName;
var logBtn = document.getElementById("logBtn");


logBtn.addEventListener('click' , function(){
    localStorage.removeItem('userName')
})
    l
