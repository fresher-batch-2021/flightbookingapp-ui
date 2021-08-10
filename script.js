function passing_data() {    
    var depature_from = document.querySelector(".from").value;
    var depature_to = document.querySelector(".to").value;
    var depature_date = document.querySelector(".depature_date").value;

    let data = {
        "from": depature_from,
        "to": depature_to,
        "depature_date":depature_date,
    };
    console.log(data);    
    localStorage.setItem('flight_details',JSON.stringify(data));    

}