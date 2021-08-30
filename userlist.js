function user_list(){
        

    let url ="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/flightbooking_user/_all_docs?include_docs=true";
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
            if(user.role == "user"){
            i++;
            value = value + `<tr><td>${i}</td><td>${user.name}</td><td>${user.mobilenumber}</td><td>${user.email}</td><td>${user.username}</td></tr>` ;
        }
        
        document.querySelector("#task_table").innerHTML = value;
    }
    
 
    
})
}
user_list()