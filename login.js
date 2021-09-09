function login_validation(){
    event.preventDefault(); 
    var role_name = $("#role").val();
    // let url ="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/flightbooking_user/_find";
    // const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
    // const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
    // const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);
    var username = $("#username").val();
    var password = $("#password").val();    
    let formData = {    
        selector:{      
        username: username,          
        password: password
        },
        fields: ["role","_id","username"]   
    };
    // axios.post(url, formData, {headers: { Authorization: basicAuth}})
    user_service.login(formData).then(res=>{            
        let data = res.data.docs;
        console.log(data);
        if(data.length == 0){
            toastr.error(ErrorMessage.login);
            
        }else{       

            let user = data[0];
        localStorage.setItem("logged_in_users",JSON.stringify(user));          
                    
            
            let domain = user.role;
            console.log(user.role)

        if(role_name == domain){
            if(domain == "user"){
                toastr.success("login succesful");
                    console.log("toastr completed");
                    setTimeout(function () {
                        window.location.href = "index.html"
                    }, 1000);
               
            }else if(domain == "admin"){
                toastr.success("login succesful");
                console.log("toastr completed");
                setTimeout(function () {
                    window.location.href = "flightlist.html"
                }, 3000);
                
            }
                        
        }else{
            toastr.error(ErrorMessage.role);
                    
                    setTimeout(function () {
                        console.log("toastr completed");
                    }, 3000);
            return false;
            
        }    
        // }
        }    
               
 
    });
    
}   

function passing_username(){    
    var userName = $("#username").val();    
    let username_data = {
        "username": userName,        
    };
    console.log(username_data);        
    localStorage.setItem('user',JSON.stringify(username_data));    
}