function flight_data(){
        

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
        
            i++;
            value = value + `<tr><td>${i}</td><td>${user.username}</td><td>${user.flight_name}</td><td>${user.date}</td><td>${user.from}</td><td>${user.to}</td><td>${user.no_of_passengers}</td><td>${user.ticket_fare}</td><td>${user.total_fare}</td><td>${"Booked"}</td><td><button type='button'  onclick = "cancel_booking('${user._id}','${user._rev}')"> Cancel </button></td></tr>` ;
            
        
        document.querySelector("#task_table").innerHTML = value;
    }
    
    
})
}
function cancel_booking(id,rev){
    let cfm = confirm("Do you want to delete this data?");
    if(cfm){
    console.log(id);
    console.log(rev);
    let url ="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/passenger_details/";
        const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
        const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
    const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);

    axios.delete(url+id+"?rev="+rev, { headers: {'Authorization': basicAuth}}).then(res => {
    alert("Deleted succesfully");
    window.location.reload()

    }).catch(err =>{
        alert("error in deleting");

    })
    
}
    
}

flight_data()

