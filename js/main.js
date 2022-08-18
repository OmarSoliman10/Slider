

var usernameInput = document.getElementById("usernameInput");
var userEmailInput = document.getElementById("userEmailInput");
var userPasswordInput = document.getElementById("userPasswordInput");
var userinfo ;


if(localStorage.getItem("users") !=null){
   var userinfo = JSON.parse(localStorage.getItem("users"));
}else{
var userinfo =[];
}

function signUp() {


    if(isExist() == false )
    {
        var user ={
            name:usernameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value
        }
        userinfo.push(user);
        localStorage.setItem("users" ,JSON.stringify(userinfo));
        var confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none" , " d-block"); 
        var signin = document.getElementById("signin");
        signin.classList.replace("d-none" , " d-block");
    }else{
        var tryAgainMsg = document.getElementById("tryAgainMsg");
        tryAgainMsg.classList.remove("d-none");
        tryAgainMsg.classList.add("d-block");
    }


};


usernameInput.onkeyup = function () {
    var usernameAlert = document.getElementById("usernameAlert");

    var regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
    if(regex.test(usernameInput.value) == true &&  usernameInput.value !=""){
        usernameInput.classList.add("is-valid");
        usernameInput.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block","d-none");
        return true;
    }else{
        usernameInput.classList.add("is-invalid");
        usernameInput.classList.remove("is-valid");
        usernameAlert.classList.remove("d-none");
        usernameAlert.classList.add("d-block");
        return false;
    }
};


userEmailInput.onkeyup = function () {
    var userEmailAlert = document.getElementById("userEmailAlert");
    regex = /@[A-Za-z]{5,15}(\.com)$/ ;
    if(regex.test(userEmailInput.value) == true && userEmailInput.value !="")
    {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invaild");
        userEmailAlert.classList.replace("d-block" , "d-none");
        return true;

    }else{
        userEmailInput.classList.add("is-invaild");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.remove("d-none");
        userEmailAlert.classList.add("d-block");
        return false;
    }
};


// يعنى اكتب اى حرف . 
userPasswordInput.onkeyup = function () {
    var userPasswordAlert = document.getElementById("userPasswordAlert");
    regex = /^.{5,18}$/ ;
    if(regex.test(userPasswordInput.value) == true && userPasswordInput.value !="")
    {
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invaild");
        userPasswordAlert.classList.replace("d-block" , "d-none");
        return true;

    }else{
        userPasswordInput.classList.add("is-invaild");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.remove("d-none");
        userPasswordAlert.classList.add("d-block");
        return false;
    }
};




function isExist() {
    var accountExistMsg =document.getElementById("accountExistMsg");
    if(userinfo.length == 0){
        return false;
    }else{
        for(let i=0; i< userinfo.length; i++){
            if(userinfo[i].name.toLowerCase() == usernameInput.value.toLowerCase() ||
            userinfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase() )
            {
                usernameInput.classList.remove("is-valid");
                userEmailInput.classList.remove("is-valid"); 
                accountExistMsg.classList.replace("d-none" , "d-block");
                return true;
            }else{
                return false; 
            }
        }
    };
};

