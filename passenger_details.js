function passenger_validation(){
    event.preventDefault();
    var passenger_name = document.getElementById("name").value;
    var passenger_age = document.getElementById("age").value;
    var passenger_gender = document.getElementById("gender").value;
    

    if(passenger_name=="" || passenger_name== null || passenger_name.trim==""){
        alert("invaild name");
        return false;
    }
    if(passenger_age=="" || passenger_age== null || passenger_age.trim==""){
        alert("invaild age")
        return false;
    }
    if(passenger_gender=="select"){
        alert("invaild gender")
        return false;
    }
    else{
        passenger_details()
    }
}

function displayPassengerDetails(){
    
    let usersStr = localStorage.getItem("PASSENGERS");
    console.log(usersStr);
    // if users data available in localStorage, then do parse else assign an empty array

    let passengers = usersStr != null ? JSON.parse(usersStr): []; 

    
   
    var content = "";
    for(let passengerObj of passengers){
        content += "<tr><td>" + passengerObj.name + "</td><td>" + passengerObj.age + "</td><td>" + passengerObj.gender + "</td></tr>";
    }
    document.querySelector("#passenger_tablebody").innerHTML =  content;
    
}

function passenger_details(){


    //set passengers details
    var passengerName = document.getElementById("name").value;
    var passengerAge = document.getElementById("age").value;
    var passengerGender = document.getElementById("gender").value;
    var passengerObj = { "name" : passengerName , "age": passengerAge, "gender":passengerGender}    
    
    let usersStr = localStorage.getItem("PASSENGERS");
    console.log(usersStr);
    // if users data available in localStorage, then do parse else assign an empty array

    let passengers = usersStr != null ? JSON.parse(usersStr): []; 
    console.log(passengers);
    passengers.push(passengerObj)
    console.log(passengers);
    
    if ( passengers.length >4){
        alert("Maximum only 4 passengers")
        return false;
    }else{
        localStorage.setItem("PASSENGERS", JSON.stringify(passengers));     
        displayPassengerDetails();
        
    }    
    
}
displayPassengerDetails();
function registration_successful(){
    alert("Successfully Booked");
}

function logout(){
    localStorage.clear();
    alert("succesfilly logout")
    window.location.href = "index.html"
}