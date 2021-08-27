function flight_data(){
    event.preventDefault(); 
    
    let flight_name = document.querySelector(".flight_name").value;
    let booking_date = document.querySelector(".depature_date").value;
    console.log(booking_date);

    console.log(flight_name);

    let url ="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/passenger_details/_all_docs?include_docs=true";
    const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
    const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
    const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);
       
    axios.get(url, { headers: {'Authorization': basicAuth}}).then(res => {
    let data = res.data.rows;
    const users = data.map(obj=>obj.doc);
    console.log(users);
    let value = "";
    let i = 0;
    for(let user of users){
        if(user.flight_name == flight_name && user.date == booking_date){
            console.log("res",user);
            i++;
            value = value + `<tr><td>${i}</td><td>${user.username}</td><td>${user.from}</td><td>${user.to}</td><td>${user.no_of_passengers}</td><td>${user.ticket_fare}</td><td>${user.total_fare}</td><td>${"Booked"}</td><td><button type='button' onclick = "passenger_details('${user.username}')">Passenger details</button></td></tr>` ;
            
        }
        document.querySelector("#task_table").innerHTML = value;
    }
    // for(let user of users)
    // {
    //     if(user.flight_name == flight_name && user.date == booking_date)
    //     {
    //         console.log("res",user);
            
    //         for(let passenger of user.passengers){
    //             i++
    //             value = value + `<tr><td>${i}</td><td>${passenger.name}</td><td>${passenger.age}</td><td>${passenger.gender}</td></tr>` ;
                
    //         }
    //         console.log(value);
            
    //     }
        
    //     document.querySelector("#task_table").innerHTML = value;
    // }    
 
    
})
}

function passenger_details(username){
    console.log(username);
    let flight_name = document.querySelector(".flight_name").value;
    let booking_date = document.querySelector(".depature_date").value;
    
    let url ="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/passenger_details/_all_docs?include_docs=true";
    const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
    const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
    const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);
       
    axios.get(url, { headers: {'Authorization': basicAuth}}).then(res => {
    let data = res.data.rows;
    const users = data.map(obj=>obj.doc);
    console.log(users);
    let value = "";
    let i = 0;
    for(let user of users)
    {
        if(user.flight_name == flight_name && user.date == booking_date && user.username ==username)
        {
            console.log("res",user);
            
            for(let passenger of user.passengers){
                i++
                value = value + `<tr><td>${i}</td><td>${passenger.name}</td><td>${passenger.age}</td><td>${passenger.gender}</td></tr>` ;
                
            }
            console.log(value);
            
        }
        
        document.querySelector("#passenger_tablebody").innerHTML = value;
    }    
})
}
function logout(){
    localStorage.clear();
    alert("succesfully logout")
    window.location.href = "index.html"
}
function back(){
    window.location.href = "flightlist.html"
}