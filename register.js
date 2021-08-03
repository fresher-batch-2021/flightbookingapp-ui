function register(){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var mobile_number = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var user_name = document.getElementById("uname").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm").value;

    if(name=="" || name == null || name.trim ==""){
        alert("Invalid Name");
        return false;
              
    }
    if(mobile_number == ""){
        alert("invalid Number");
        return false;
    }
    if(email == ""){
        alert("invalid Email Id");
        return false;
    }
    if(user_name == ""){
        alert("Invaild User name");
        return false;
    }
    if(password == ""){
        alert("Invaild Password");
        return false;
    }
    if(confirm_password == ""){
        alert("Invaild Confirm Password");
        return false;
    }
    if(password != confirm_password){
        alert("Password does't match");
        return false;
    }
    else{
        alert("sucessfull registered")
        window.location.href = "login.html"
    }
}