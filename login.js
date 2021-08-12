function login_validation(){
    event.preventDefault(); 
    let url ="https://product-mock-api.herokuapp.com/flightapp/api/v1/auth/login";   
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    let formData = {          
        username: username,          
        password: password
    }
    axios.post(url, formData).then(res=>{            
        let data = res.data;
        console.log(data);
        alert("Successfully Login");
        passing_username();
        window.location.href = "homepage.html"
    }).catch(err=>{
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        alert("Error-" + errorMessage);
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