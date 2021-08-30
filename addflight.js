function add_flight(){
    event.preventDefault();   
    
    var flight_name = document.getElementById("name").value;
    var destination = document.getElementById("destination").value;
    var source = document.getElementById("source").value;
    var startTime = document.getElementById("startTime").value;
    var endTime = document.getElementById("endTime").value;
    var price = document.getElementById("price").value;
    

let flight_details = {
    "Name": flight_name,
    "destination": destination,
    "source": source,
    "startTime": startTime,   
    "endTime": endTime, 
    "price":price,    
}
if(flight_name=="" || flight_name == null || flight_name.trim ==""){
    alert("Invalid Flight Name");
    return false;
          
}
if(destination == ""){
    alert("invalid destination details");
    return false;    
}
if(source == ""){
    alert("invalid source details");
    return false;    
}
if(startTime == ""){
    alert("Invaild startTime");
    return false;   
}
if(endTime == ""){
    alert("Invaild endTime");
    return false;    
}
if(price == ""){
    alert("Invaild price valiue");
    return false;    
}else{
    console.log(flight_details);
    let url ="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/add_flight/";
        const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
        const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
        const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);
        let formData ={
            name: flight_name,
            destination:destination,
            source:source,
            startTime:startTime,
            endTime:endTime,
            price:price            
        };
        axios.post(url, formData, { headers: {'Authorization': basicAuth}}).then(res=>{            
            let data = res.data;
            console.log(data);
            alert("Flight added successfully");
            window.location.href = "flightlist.html"
            
        });

}
}
function back(){
    window.location.href = "flightlist.html"
}

