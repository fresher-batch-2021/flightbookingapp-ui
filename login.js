function login_validation(){
    event.preventDefault(); 
    let url ="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/flightbooking_user/_find";
    const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
    const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
    const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value
    let formData = {    
        selector:{      
        username: username,          
        password: password
        },
        fields: ["role","_id","username"]   
    };
    axios.post(url, formData, {headers: { Authorization: basicAuth}}).then(res=>{            
        let data = res.data.docs[0];
        console.log(data);
        if(data.length == 0){
            alert("Invaild login credentials")
        }else{
        let constant = "";

        localStorage.setItem("logged_in_users",JSON.stringify(data));
        // for(let role of data){
            alert("i")
            constant = constant +  data.role;            
            // console.log(role.role);
            let domain = data.role;
            console.log(data.role)
            if(domain == "user"){
                
                alert("Successfully Login");
                passing_username();
                window.location.href = "homepage.html"
            }else if(domain == "admin"){
                alert("Successfully Login");
                passing_username();
                window.location.href = "flightlist.html"
            }
                        
            
        // }
        }    
               
 
    });
    
}   

function passing_username(){    
    var userName = document.querySelector("#username").value;    
    let username_data = {
        "username": userName,        
    };
    console.log(username_data);        
    localStorage.setItem('user',JSON.stringify(username_data));    
}