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
function passenger_details(){
    event.preventDefault();     
    var tableBody = document.querySelector("#passenger_tablebody");
    var row = document.createElement('tr');
    var table_data_name = document.createElement('td');
    var table_data_age = document.createElement('td');
    var table_data_gender = document.createElement('td');
    table_data_name.textContent =  document.getElementById("name").value;
    table_data_age.textContent =  document.getElementById("age").value;
    table_data_gender.textContent =  document.getElementById("gender").value;
    row.appendChild(table_data_name);
    row.appendChild(table_data_age);
    row.appendChild(table_data_gender);
    tableBody.append(row);    
     
    return false;
}

function registration_successful(){
    alert("registration Successful");
}