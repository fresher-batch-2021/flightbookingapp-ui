function login_validation(){
    event.preventDefault();    
    var username = document.getElementById("Uname").value;
    var password = document.getElementById("Pass").value;

    if(username == "Rajesh9107" && password == 12345678){
        alert("sucessfully Login");        
        window.location.href = "index.html"
    }
    else{
        alert("Login faild");
    }
}   