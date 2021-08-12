function passing_data() {
    event.preventDefault();

    var from = document.querySelector(".from").value;
    var to = document.querySelector(".to").value;
    var depature_date = document.querySelector(".depature_date").value;
    
    console.log(depature_date)
    console.log("from", from);
    console.log("to", to);
    localStorage.setItem('depature_date', JSON.stringify(depature_date));

    let url = "https://product-mock-api.herokuapp.com/flightapp/api/v1/flights";
    axios.get(url).then(res => {
        const users = res.data;
        console.log(users);        
        var results = users.filter(obj => obj.source.toLowerCase() == from.toLowerCase() && obj.destination.toLowerCase() == to.toLowerCase());

        console.log(results);        
        localStorage.setItem('flight_details', JSON.stringify(results));
        
        
        
        window.location.href = "booking.html"

    })

}

function logout(){
    localStorage.clear();
    alert("succesfilly logout")
    window.location.href = "index.html"
}
