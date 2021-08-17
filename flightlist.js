function flight_data(){
    event.preventDefault();

    var from = document.querySelector(".from").value;
    var to = document.querySelector(".to").value;


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
    
    let content = "";
    for (task of results) {

        content = content + `<tr><td>${task.name}</td><td>${task.source+"-"+task.startTime}</td><td>${task.destination+"-"+task.endTime}</td><td>${task.price}</td></tr>`;}
    console.log(content);
    document.querySelector("#task_table").innerHTML = content; 
     
    })
    
}
function all_flights(){
    let url ="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/add_flight/_all_docs?include_docs=true";
    const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
    const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
    const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);
       
    axios.get(url, { headers: {'Authorization': basicAuth}}).then(res => {
    let data = res.data.rows;
    const users = data.map(obj=>obj.doc);
    console.log(users);
    let content = "";
    for (task of users) {

        content = content + `<tr><td>${task.name}</td><td>${task.source+"-"+task.startTime}</td><td>${task.destination+"-"+task.endTime}</td><td>${task.price}</td><td><button type='submit' onclick = "bookNow('${task.name}','${task.source}','${task.startTime}','${task.destination}','${task.endTime}','${task.price}')"> Delete </button></td></tr>`;
    }
    console.log(content);
    document.querySelector("#task_table").innerHTML = content; 
     
    })
}