
function passing_data() {
    event.preventDefault();

    var from = document.querySelector(".from").value;
    var to = document.querySelector(".to").value;
    var depature_date = document.querySelector(".depature_date").value;
    
    console.log(depature_date)
    console.log("from", from);
    console.log("to", to);
    localStorage.setItem('depature_date', JSON.stringify(depature_date));

    let url ="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/add_flight/_all_docs?include_docs=true";
    const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
    const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
    const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);
       
    axios.get(url, { headers: {'Authorization': basicAuth}}).then(res => {
        let data = res.data.rows;
    const users = data.map(obj=>obj.doc);
    console.log(users);
        
    var results = users.filter(obj => obj.source == from && obj.destination == to);
        
    console.log(results);        
    localStorage.setItem('flight_details', JSON.stringify(results));
        
        
        
    window.location.href = "booking.html"

    })

}


function logout(){
    localStorage.clear();
    alert("succesfilly logout");
    window.location.href = "index.html";
}
function setDate(){
    alert("check");
    let today = new Date().toJSON().substr(0,10);
    document.querySelector("#depature").setAttribute("min", today);

}
setDate();