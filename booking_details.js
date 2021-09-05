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
        if(user.status != "INACTIVE"){
            i++;
            let orderedDate = new Date(user.date).toJSON(); //.substr(0, 10);
            let date = moment(new Date(orderedDate)).format("DD-MM-YYYY");
            value = value + `<tr><td>${i}</td><td>${user.username}</td><td>${user.flight_name}</td><td>${date}</td><td>${user.from+'-'+user.start_time}</td><td>${user.to+'-'+user.end_time}</td><td>${user.no_of_passengers}</td><td>${'₹'+user.ticket_fare}</td><td>${'₹'+user.total_fare}</td><td>${"Booked"}</td><td><button type='button'  onclick = "cancel_booking('${user._id}','${user._rev}')"> Cancel </button></td></tr>` ;
            
        }
        document.querySelector("#task_table").innerHTML = value;
    }
    
    
})
}
function cancel_booking(id,rev){
    // let cfm = confirm("Do you want to delete this data?");
    // if(cfm){

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancel it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your Ticket has been Canceled.',
                'success'
              )    
    console.log(id);
    console.log(rev);
    let url ="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/passenger_details/"+id;
        const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
        const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
    const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);

    axios.get(url, { headers: {'Authorization': basicAuth}}).then(res1=>{

        let product  = res1.data;
        console.log(product);
        product.status ="INACTIVE";
    
        axios.put(url, product,  { headers: {'Authorization': basicAuth}}).then(res3 => {
    
            
            flight_data();
        }).catch(err =>{
            
            toastr.error("error in deleting");
    
        })
    })

    // axios.delete(url+id+"?rev="+rev, { headers: {'Authorization': basicAuth}}).then(res => {
    
    // window.location.reload();
    // }).catch(err =>{
    //     alert("error in deleting");

    // })
}
    
})
}

flight_data()

