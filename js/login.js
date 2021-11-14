

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
 



 