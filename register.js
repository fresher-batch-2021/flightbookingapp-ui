function register(){ 
    event.preventDefault();   
    var name = document.getElementById("name").value;
    var mobile_number = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var user_name = document.getElementById("username").value;
    var role = document.getElementById("role").value
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
            alert("Successffully Register");
            window.location.href = "login.html"
        }).catch(err=>{
            console.error(err.response.data);
            alert("Unable to register");
        });
    }
}
function back(){
    window.location.href = "index.html"
}