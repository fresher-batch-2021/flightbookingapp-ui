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
    for (let task of users) {

        content = content + `<tr><td>${task.name}</td><td>${task.source+"-"+task.startTime}</td><td>${task.destination+"-"+task.endTime}</td><td>${task.price}</td><td><button type='button'  onclick = "cancel_flight('${task._id}','${task._rev}')"> Cancel </button></td></tr>`;
    }
    console.log(content);
    document.querySelector("#task_table").innerHTML = content; 
     
    })
}

function cancel_flight(id,rev){
    // let cfm = confirm("Do you want to delete this data?");
    // if(cfm){
        Swal.fire({
            title: "Are you sure" ,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {                
              Swal.fire("Deleted!", "Your file has been deleted.", "success").then(result1=>{
                window.location.reload();
              });
              
              
    console.log(id);
    console.log(rev);
    let url ="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/add_flight/";
        const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
        const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
    const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);

    axios.delete(url+id+"?rev="+rev, { headers: {'Authorization': basicAuth}}).then(res => {
        
        
    }).catch(err =>{
        alert("error in deleting");

    })
}

})
 
}
all_flights()