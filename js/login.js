var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var loginBtn = document.getElementById("loginBtn");
var wrongMsg = document.getElementById("wrongMsg");

if(localStorage.getItem("users") !=null){
    var userinfo = JSON.parse(localStorage.getItem("users"));
 }else{
 var userinfo =[];
 }

function login() { 
    if(loginEmail.value == "" || loginPassword.value == ""){
        var fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none" , "d-block");
        return false;
    }else{
        for(var i=0; i< userinfo.length; i++){
            if(userinfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() && 
            userinfo[i].password.toLowerCase() == loginPassword.value.toLowerCase()){

                localStorage.setItem("userName" , userinfo[i].name);
                loginBtn.setAttribute("href" , "welcome.html");
            }else{
                wrongMsg.classList.remove("d-none")
                wrongMsg.classList.add("d-block")
            }
        };
    };
};


var username = localStorage.getItem("userName"); 

var welcome = document.getElementById("username");
(function dispalyWelcomeUser() {
    welcome.innerHTML = "welcome " + username;
})()

function logout(){
    localStorage.removeItem("userName");
    loginBtn.setAttribute("href" , "index.html");
}