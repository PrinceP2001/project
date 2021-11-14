<<<<<<< HEAD


var e=document.getElementById("email");
var p=document.getElementById("pwd");
function validate(){
    if(e.value=="" || p.value==""){
    alert("fields cannot be empty");
     return false;
    }
    else{
     var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
    if(regexp.test(e.value))
     {
        // error.innerHTML="valid";
        // error.style.color="green";
    //  alert("login successfully");
     return true;
     }
     else{
        // error.innerHTML="invalid";
        // error.style.color="red";
        alert("invalid email address");
        return false;  
    }
    }
}
 



=======


var e=document.getElementById("email");
var p=document.getElementById("pwd");
function validate(){
    if(e.value=="" || p.value==""){
    alert("fields cannot be empty");
     return false;
    }
    else{
     var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
    if(regexp.test(e.value))
     {
        // error.innerHTML="valid";
        // error.style.color="green";
    //  alert("login successfully");
     return true;
     }
     else{
        // error.innerHTML="invalid";
        // error.style.color="red";
        alert("invalid email address");
        return false;  
    }
    }
}
 



>>>>>>> 54f884a9c86f4d4f9a9a28ee8f03d6e0cd18eb54
 