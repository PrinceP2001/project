var u=document.getElementById("usr");
 var p=document.getElementById("phone");
 var email=document.getElementById("email");
 var repassword=document.getElementById("re-pwd");
 var mis=document.getElementById("mismatch");
 var password = document.getElementById('pwd');
  function validate(){
      if(u.value==""||p.value==""||email.value==""||password.value==""||repassword.value==""){
          alert("Fields cannot be empty");
          return false;
      }
      else{
        var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
        if(regexp.test(email.value))
         {
        //  alert("Successfully Registered");
         return true;
         }
         else{
            alert("invalid email address");
            return false;  
        }
        }

    }
 function validatePassword(){
     if((password.value==repassword.value)&&password.value.length<8)
     {
         mis.innerHTML="Password Matched";
         mis.style.color="green";
         return true;
     }
     else{
           mis.innerHTML="Password Mismatch";
           mis.style.color="red";
           return false;
     }
 }

 // timeout before a callback is called

 let timeout;

 // traversing the DOM and getting the input and span using their IDs

//  let password = document.getElementById('PassEntry')
 let strengthBadge = document.getElementById('StrengthDisp')

 // The strong and weak password Regex pattern checker

 let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
 let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
 
   function StrengthChecker(password){
     // We then change the badge's color and text based on the password strength

     if(strongPassword.test(password)) {
         strengthBadge.style.backgroundColor = "green"
         strengthBadge.textContent = 'Strong Password'
     } else if(mediumPassword.test(password)){
         strengthBadge.style.backgroundColor = 'blue'
         strengthBadge.textContent = 'Medium Password'
     } else{
         strengthBadge.style.backgroundColor = 'red'
         strengthBadge.textContent = 'Weak Password'
     }
  }

 // Adding an input event listener when a user types to the  password input 

 password.addEventListener("input", () => {

     //The badge is hidden by default, so we show it

     strengthBadge.style.display= 'block'
     clearTimeout(timeout);

     //We then call the StrengChecker function as a callback then pass the typed password to it

     timeout = setTimeout(() => StrengthChecker(password.value), 500);

     //Incase a user clears the text, the badge is hidden again

     if(password.value.length !== 0){
         strengthBadge.style.display != 'block'
     } else{
         strengthBadge.style.display = 'none'
     }
 });

 function phonenumber()
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phoneno.test(p.value))
     {
	   return true;      
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
}
 
 