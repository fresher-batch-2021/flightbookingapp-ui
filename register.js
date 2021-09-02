function register(){ 
    event.preventDefault();   
    var name = document.getElementById("name").value;
    var mobile_number = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var user_name = document.getElementById("username").value;
    var role = "user";
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm").value;
    let user_details = {
        "Name": name,
        "Mobile_no": mobile_number,
        "Email": email,
        "user name": user_name,   
        "role": role,     
    }

    if(name=="" || name == null || name.trim ==""){
        toastr.error("Invalid Name");
            console.log("toastr completed");
            setTimeout(function () {                
            }, 3000);
        
        return false;
              
    }
    if(mobile_number == ""){
        toastr.error("Invalid Number");
            console.log("toastr completed");
            setTimeout(function () {                
            }, 3000);
        
        return false;
    }
    if(email == ""){
        toastr.error("Invalid Email Id");
            console.log("toastr completed");
            setTimeout(function () {                
            }, 3000);
        
        return false;
    }
    if(user_name == ""){
        toastr.error("Invalid User name");
            console.log("toastr completed");
            setTimeout(function () {                
            }, 3000);
        
        return false;
    }
    if(password == ""){
        toastr.error("Invalid Password");
            console.log("toastr completed");
            setTimeout(function () {                
            }, 3000);
        
        return false;
    }
    if(confirm_password == ""){
        toastr.error("Invalid Confirm Password");
            console.log("toastr completed");
            setTimeout(function () {                
            }, 3000);
        
        return false;
    }
    if(password != confirm_password){
        toastr.error("Password does't match");
            console.log("toastr completed");
            setTimeout(function () {                
            }, 3000);
        
        return false;
    }
    else{
        console.log(user_details);             
        let url ="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/flightbooking_user";
        const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
        const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
        const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);
        let formData ={
            name: name,
            mobilenumber:mobile_number,
            email:email,
            username:user_name,
            role:role,
            password:password,
            confirm_password: confirm_password
        };
        axios.post(url, formData, { headers: {'Authorization': basicAuth}}).then(res=>{            
            let data = res.data;
            console.log(data);
            toastr.success("Successfully Register");
            console.log("toastr completed");
            setTimeout(function () {
                window.location.href = "login.html"                
            }, 3000);
            
            
        }).catch(err=>{
            console.error(err.response.data);
            toastr.success("Unable to register");
            console.log("toastr completed");
            setTimeout(function () {                
            }, 3000);
            
        });
    }
}
function back(){
    window.location.href = "index.html"
}