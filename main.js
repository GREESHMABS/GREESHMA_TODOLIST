let email=document.getElementById("username");
let pwd=document.getElementById("pwd");
function validate(){

    pwd.style.border="none";
    username.style.border="none";
    checkbody.innerHTML="";
    
    if(username.value=="" && pwd.value==""){
        alert("fields cannot be empty");
        pwd.style.border="2px solid red";
        username.style.border="2px solid red";
        return false;
    }
    else if(username.value==""){
        alert("Username cannot be empty!");
        username.style.border="2px solid red";
        return false;
    }
    else if(username.value!="admin"){
        username.style.border="2px solid red";
        checkbody.innerHTML="Username invalid";
        checkbody.style.color="red";
        return false;
    }
    else if(pwd.value==""){
        alert("Password cannot be empty!");
        pwd.style.border="2px solid red";
        return false;
    }
    else if(pwd.value!="12345"){
        pwd.style.border="2px solid red";
        checkbody.innerHTML="Password incorrect";
        checkbody.style.color="red";
        return false;
    }
    else if(username.value=="admin"&& pwd.value=="12345"){
        loginSuccess();
        return true;
    }
    else{
        checkbody.innerHTML="Login invalid";
        checkbody.style.color="red";
    }
}

function loginSuccess(){

    alert("Login Successfully!!")
    document.getElementById("loginform").action = "main.html";
}

